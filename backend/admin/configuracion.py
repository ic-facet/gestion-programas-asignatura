from django.contrib import admin


class AdminConfiguracion(admin.ModelAdmin):
    list_display = ["nombre", "valor"]
    list_display_links = ["nombre"]
    search_fields = ["nombre", "valor"]
    ordering = ["nombre"]
    list_per_page = 50
