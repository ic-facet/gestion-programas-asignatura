from django.contrib import admin
from django.http.request import HttpRequest

from backend.models import Rol
from backend.common.choices import Roles
from backend.forms import FormSemestre


class AdminSemestre(admin.ModelAdmin):
    form = FormSemestre
    list_display = ["semestre", "anio_academico", "fecha_inicio", "fecha_fin"]
    list_display_links = ["semestre"]
    search_fields = ["semestre", "anio_academico__fecha_inicio"]
    list_filter = ["semestre", "anio_academico", "fecha_inicio"]
    ordering = ["-fecha_inicio"]
    list_per_page = 50
    autocomplete_fields = ["anio_academico"]

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

    def has_add_permission(self, request: HttpRequest, obj=...) -> bool:
        return self.has_permission(request)
