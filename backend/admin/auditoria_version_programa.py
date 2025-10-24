from typing import Optional
from django.contrib import admin
from django.http.request import HttpRequest


class AdminAuditoriaEstadoVersionPrograma(admin.ModelAdmin):
    list_display = ["version_programa", "estado", "rol", "modificado_en"]
    list_display_links = ["version_programa"]
    search_fields = ["version_programa__asignatura__codigo", "version_programa__asignatura__denominacion", "estado"]
    list_filter = ["estado", "rol", "modificado_en"]
    readonly_fields = ["version_programa", "estado", "modificado_en", "rol"]
    ordering = ["-modificado_en"]
    list_per_page = 50

    def has_add_permission(self, request: HttpRequest) -> bool:
        return False

    def has_delete_permission(self, request: HttpRequest, obj=...) -> bool:
        return False

    def has_change_permission(self, request: HttpRequest, obj=...) -> bool:
        return False
