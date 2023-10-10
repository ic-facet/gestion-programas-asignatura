from django.db import models

from .version_programa_asignatura import VersionProgramaAsignatura
from .bloque_curricular import BloqueCurricular


class CargaBloque(models.Model):
    horas = models.IntegerField()
    version_programa_asignatura = models.ForeignKey(
        VersionProgramaAsignatura, on_delete=models.PROTECT
    )
    bloque_curricular = models.ForeignKey(BloqueCurricular, on_delete=models.PROTECT)

    class Meta:
        verbose_name_plural = "Carga Bloques"
