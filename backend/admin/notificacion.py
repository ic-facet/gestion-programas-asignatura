from django.contrib import admin
from django.utils import timezone


class AdminNotificacion(admin.ModelAdmin):
    list_display = ["usuario", "tipo", "fue_leida", "creada", "leida"]
    list_display_links = ["tipo"]
    search_fields = ["usuario__email", "usuario__first_name", "usuario__last_name", "tipo"]
    list_filter = ["tipo", "creada", "leida"]
    readonly_fields = ["creada", "leida"]
    ordering = ["-creada"]
    list_per_page = 50
    autocomplete_fields = ["usuario"]
    actions = ["marcar_como_leida", "marcar_como_no_leida"]

    @admin.action(description="Marcar notificaciones como leídas")
    def marcar_como_leida(self, request, queryset):
        ahora = timezone.now()
        actualizadas = queryset.filter(leida__isnull=True).update(leida=ahora)
        self.message_user(request, f"{actualizadas} notificaciones marcadas como leídas.")

    @admin.action(description="Marcar notificaciones como no leídas")
    def marcar_como_no_leida(self, request, queryset):
        actualizadas = queryset.update(leida=None)
        self.message_user(request, f"{actualizadas} notificaciones marcadas como no leídas.")
