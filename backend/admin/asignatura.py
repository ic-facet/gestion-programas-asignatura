from django.contrib import admin
from django import forms
from decimal import Decimal


class AsignaturaAdminForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Campos de horas con valor por defecto 0
        campos_horas = [
            'total_teoria_presencial',
            'total_practica_presencial',
            'total_teorico_practico_presencial',
            'total_lab_presencial',
            'total_teoria_remoto',
            'total_practica_remoto',
            'total_teorico_practico_remoto',
            'total_lab_remoto',
            'horas_evaluacion',
        ]

        # Solo establecer el valor inicial si el objeto es nuevo
        if not self.instance.pk:
            for campo in campos_horas:
                if campo in self.fields:
                    self.fields[campo].initial = 0

        # Hacer que carga_rtf sea de solo lectura
        if 'carga_rtf' in self.fields:
            self.fields['carga_rtf'].widget.attrs['readonly'] = True
            self.fields['carga_rtf'].help_text = 'Este campo se calcula automáticamente: horas_totales * (1 + coeficiente_bloque) / 27'

    def save(self, commit=True):
        instance = super().save(commit=False)

        # Calcular horas totales
        campos_horas = [
            'total_teoria_presencial',
            'total_practica_presencial',
            'total_teorico_practico_presencial',
            'total_lab_presencial',
            'total_teoria_remoto',
            'total_practica_remoto',
            'total_teorico_practico_remoto',
            'total_lab_remoto',
        ]

        horas_totales = sum(
            getattr(instance, campo) or 0
            for campo in campos_horas
        )

        # Obtener el coeficiente del bloque curricular
        if instance.bloque_curricular:
            coeficiente = instance.bloque_curricular.coeficiente
            # Fórmula: horas_totales * (1 + coeficiente) / 27
            # Redondear a 2 decimales
            instance.carga_rtf = round((Decimal(horas_totales) * (1 + coeficiente)) / 27, 2)
        else:
            # Si no hay bloque curricular, establecer en 0
            instance.carga_rtf = Decimal('0.00')

        if commit:
            instance.save()

        return instance


class AdminAsignatura(admin.ModelAdmin):
    form = AsignaturaAdminForm
    list_display = ["codigo", "denominacion", "horas_totales_clases", "carga_total", "carga_rtf", "metodologia"]
    list_display_links = ["codigo", "denominacion"]
    search_fields = ["codigo", "denominacion"]
    list_filter = ["metodologia", "bloque_curricular"]
    ordering = ["codigo"]
    list_per_page = 50
    readonly_fields = ['carga_rtf']
