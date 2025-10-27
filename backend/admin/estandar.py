from typing import Optional
from django.contrib import admin
from django.http.request import HttpRequest

from backend.models import Rol
from backend.common.choices import Roles


class AdminEstandar(admin.ModelAdmin):
    list_display = ["nombre", "fecha_inicio", "carrera"]
    list_display_links = ["nombre"]
    search_fields = ["nombre", "carrera__nombre"]
    list_filter = ["carrera", "fecha_inicio"]
    filter_horizontal = ["descriptores"]
    ordering = ["-fecha_inicio", "nombre"]
    list_per_page = 50
    autocomplete_fields = ["carrera"]

    def has_permission(self, request):
        user = request.user
        if user.is_superuser:
            return True

        roles = Rol.objects.filter(usuario=user)

        for rol in roles:
            if rol.rol == Roles.SECRETARIO:
                return True

        return False

    def has_add_permission(self, request: HttpRequest) -> bool:
        return self.has_permission(request)

    def has_change_permission(self, request: HttpRequest, obj=...) -> bool:
        return self.has_permission(request)

    def has_delete_permission(self, request: HttpRequest, obj=...) -> bool:
        return self.has_permission(request)
