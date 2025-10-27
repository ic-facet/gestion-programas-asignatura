from typing import Optional
from django.contrib import admin
from django.http.request import HttpRequest


class AdminAuditoriaRevisionDocentes(admin.ModelAdmin):
    list_display = ["version_programa", "accion", "modificado_en"]
    list_display_links = ["version_programa"]
    search_fields = ["version_programa__asignatura__codigo", "version_programa__asignatura__denominacion", "accion"]
    list_filter = ["accion", "modificado_en"]
    readonly_fields = ["version_programa", "accion", "modificado_en"]
    ordering = ["-modificado_en"]
    list_per_page = 50

    def has_add_permission(self, request: HttpRequest) -> bool:
        return False

    def has_delete_permission(self, request: HttpRequest, obj=...) -> bool:
        return False

    def has_change_permission(self, request: HttpRequest, obj=...) -> bool:
        return False
