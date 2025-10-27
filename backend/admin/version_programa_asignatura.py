from django.contrib import admin

from backend.models import (
    ProgramaTieneDescriptor,
    ProgramaTieneActividadReservada,
    Correlativa,
)


class DescriptorInline(admin.TabularInline):
    model = ProgramaTieneDescriptor


class ActividadReservadaInline(admin.TabularInline):
    model = ProgramaTieneActividadReservada


class CorrelativaInline(admin.TabularInline):
    model = Correlativa


class AdminVersionProgramaAsignatura(admin.ModelAdmin):
    list_display = ["asignatura", "semestre", "estado", "creado_en"]
    list_display_links = ["asignatura"]
    search_fields = ["asignatura__codigo", "asignatura__denominacion", "semestre__anio_academico__fecha_inicio"]
    list_filter = ["estado", "semestre", "asignatura"]
    ordering = ["-creado_en"]
    list_per_page = 50
    autocomplete_fields = ["asignatura", "semestre"]
    readonly_fields = ["creado_en"]
    inlines = [
        DescriptorInline,
        ActividadReservadaInline,
        CorrelativaInline,
    ]

    fieldsets = [
        (
            None,
            {"fields": ["asignatura", "semestre", "estado", "creado_en"]},
        ),
        (
            "Informacion del Cursado",
            {
                "fields": [
                    "contenidos",
                    "bibliografia",
                    "recursos",
                    "evaluacion",
                    "cronograma",
                    "resultados_de_aprendizaje",
                    "fundamentacion",
                    "metodologia_aplicada",
                ]
            },
        ),
        (
            "Informacion Extra",
            {
                "fields": [
                    "investigacion_docentes",
                    "investigacion_estudiantes",
                    "extension_docentes",
                    "extension_estudiantes",
                ]
            },
        ),
    ]
