from django.contrib import admin


class AdminDescriptor(admin.ModelAdmin):
    list_display = ["descripcion", "tipo"]
    list_display_links = ["descripcion"]
    search_fields = ["descripcion"]
    list_filter = ["tipo"]
    ordering = ["tipo", "descripcion"]
    list_per_page = 50
