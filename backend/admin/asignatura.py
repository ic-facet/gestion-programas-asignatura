from django.contrib import admin
from django import forms


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


class AdminAsignatura(admin.ModelAdmin):
    form = AsignaturaAdminForm
    list_display = ["codigo", "denominacion", "horas_totales_clases", "carga_total", "metodologia"]
    list_display_links = ["codigo", "denominacion"]
    search_fields = ["codigo", "denominacion"]
    list_filter = ["metodologia", "bloque_curricular"]
    ordering = ["codigo"]
    list_per_page = 50
