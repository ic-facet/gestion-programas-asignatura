from django.contrib import admin


class AdminPlanDeEstudio(admin.ModelAdmin):
    list_display = ["nombre", "carrera", "fecha_inicio", "esta_activo"]
    list_display_links = ["nombre"]
    search_fields = ["nombre", "carrera__nombre"]
    list_filter = ["carrera", "fecha_inicio"]
    filter_horizontal = ["asignaturas"]
    ordering = ["-fecha_inicio", "nombre"]
    list_per_page = 50
    autocomplete_fields = ["carrera"]
