from django.contrib import admin


class AdminAsignatura(admin.ModelAdmin):
    list_display = ["codigo", "denominacion", "horas_totales_clases", "carga_total", "metodologia"]
    list_display_links = ["codigo", "denominacion"]
    search_fields = ["codigo", "denominacion"]
    list_filter = ["metodologia", "bloque_curricular"]
    ordering = ["codigo"]
    list_per_page = 50
