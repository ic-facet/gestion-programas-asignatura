from django.contrib import admin


class AdminBloqueCurricular(admin.ModelAdmin):
    list_display = ["nombre", "coeficiente"]
    list_display_links = ["nombre"]
    search_fields = ["nombre"]
    ordering = ["nombre"]
    list_per_page = 50
