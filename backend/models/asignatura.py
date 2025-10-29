import re
from typing import Any

from django.db import models
from django.core.validators import MinLengthValidator
from django.core.exceptions import ValidationError

from backend.common.choices import MetodologiaAsignatura, Semestres
from backend.common.regular_expressions import CODIGO_ASIGANTURA_REGEXP
from backend.common.mensajes_de_error import (
    CODIGO_ASIGNATURA_INCORRECTO,
    MENSAJE_HORARIO_REQUERIDO_PARA_METODOLOGIA,
    MENSAJE_HORARIO_BLOQUEADO_PARA_METODOLOGIA,
)
from .bloque_curricular import BloqueCurricular


class ManagerAsignatura(models.Manager):
    def create(self, **kwargs: Any) -> Any:
        asignatura = self.model(**kwargs)
        asignatura.full_clean()
        asignatura.save()
        return asignatura


class Asignatura(models.Model):
    denominacion = models.CharField(max_length=255)
    codigo = models.CharField(
        max_length=6, validators=[MinLengthValidator(6)], unique=True
    )
    metodologia = models.CharField(choices=MetodologiaAsignatura.choices, max_length=1)
    bloque_curricular = models.ForeignKey(BloqueCurricular, on_delete=models.PROTECT)

    # Horarios
    semanas_dictado = models.PositiveIntegerField()
    total_teoria_presencial = models.PositiveIntegerField(blank=True, null=True)
    total_practica_presencial = models.PositiveIntegerField(blank=True, null=True)
    total_teorico_practico_presencial = models.PositiveIntegerField(
        blank=True, null=True
    )
    total_lab_presencial = models.PositiveIntegerField(blank=True, null=True)
    total_teoria_remoto = models.PositiveIntegerField(blank=True, null=True)
    total_practica_remoto = models.PositiveIntegerField(blank=True, null=True)
    total_teorico_practico_remoto = models.PositiveIntegerField(blank=True, null=True)
    total_lab_remoto = models.PositiveIntegerField(blank=True, null=True)
    horas_evaluacion = models.PositiveIntegerField(blank=True, null=True)
    carga_rtf = models.DecimalField(max_digits=6, decimal_places=2)

    # Si es null, la materia se dicta ambos cuatrimestres
    semestre_dictado = models.CharField(
        max_length=2, choices=Semestres.choices, blank=True, null=True
    )

    def get_metodologia(self):
        return self.get_metodologia_display()

    objects = ManagerAsignatura()

    @property
    def horas_totales_clases(self) -> int:
        """
        Horas totales de clases
        """

        campos = [
            "total_teoria_presencial",
            "total_practica_presencial",
            "total_teorico_practico_presencial",
            "total_lab_presencial",
            "total_teoria_remoto",
            "total_practica_remoto",
            "total_teorico_practico_remoto",
            "total_lab_remoto",
        ]

        return sum(
            getattr(self, campo) if getattr(self, campo) is not None else 0
            for campo in campos
        )

    @property
    def carga_total(self) -> int:
        """
        Carga horaria total de clases
        """
        return self.horas_totales_clases

    def __str__(self):
        return f"{self.codigo} - {self.denominacion}"

    def clean(self):
        errores = {}

        if not re.match(CODIGO_ASIGANTURA_REGEXP, self.codigo):
            errores["codigo"] = CODIGO_ASIGNATURA_INCORRECTO

        campos_presencial = [
            "total_teoria_presencial",
            "total_practica_presencial",
            "total_teorico_practico_presencial",
            "total_lab_presencial",
        ]

        campos_remoto = [
            "total_teoria_remoto",
            "total_practica_remoto",
            "total_teorico_practico_remoto",
            "total_lab_remoto",
        ]

        if self.metodologia == MetodologiaAsignatura.PRESENCIAL:
            campos_requeridos = campos_presencial[:]
            campos_bloqueados = campos_remoto[:]
        elif self.metodologia == MetodologiaAsignatura.VIRTUAL:
            campos_requeridos = campos_remoto[:]
            campos_bloqueados = campos_presencial[:]
        else:
            campos_requeridos = campos_presencial[:] + campos_remoto[:]
            campos_bloqueados = []

        for campo in campos_requeridos:
            if getattr(self, campo) is None:
                errores[campo] = MENSAJE_HORARIO_REQUERIDO_PARA_METODOLOGIA

        for campo in campos_bloqueados:
            if getattr(self, campo) is not None and getattr(self, campo) != 0:
                errores[campo] = MENSAJE_HORARIO_BLOQUEADO_PARA_METODOLOGIA

        if len(errores.keys()) > 0:
            raise ValidationError({**errores})
