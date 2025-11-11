from typing import Optional
from django.contrib import admin
from django.http.request import HttpRequest

from backend.models import ActividadReservada


class AdminActividadReservada(admin.ModelAdmin):
    model = ActividadReservada
    list_display = ["descripcion", "estandar"]
    list_display_links = ["descripcion"]
    search_fields = ["descripcion", "estandar__nombre"]
    list_filter = ["estandar", "estandar__carrera"]
    ordering = ["estandar", "descripcion"]
    list_per_page = 50
    autocomplete_fields = ["estandar"]
