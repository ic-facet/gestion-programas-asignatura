from django.contrib import admin


class AdminAsignatura(admin.ModelAdmin):
    list_display = ["codigo", "denominacion", "horas_semanales_clases", "carga_total", "horas_semanales_practicas", "horas_reloj_semanales"]
    list_display_links = ["codigo", "denominacion"]
    search_fields = ["codigo", "denominacion"]
    list_filter = ["horas_semanales_clases", "horas_semanales_practicas"]
    ordering = ["codigo"]
    list_per_page = 50
