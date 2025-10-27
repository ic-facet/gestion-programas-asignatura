from django.contrib import admin


class AdminAsignatura(admin.ModelAdmin):
    list_display = ["codigo", "denominacion", "horas_semanales_clases", "carga_total"]
    list_display_links = ["codigo", "denominacion"]
    search_fields = ["codigo", "denominacion"]
    list_filter = ["metodologia", "bloque_curricular", "semestre_dictado"]
    ordering = ["codigo"]
    list_per_page = 50
