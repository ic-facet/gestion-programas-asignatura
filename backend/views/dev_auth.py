"""
Vista de autenticación para desarrollo local.
SOLO disponible cuando DEBUG=True
"""
from django.conf import settings
from django.contrib.auth import get_user_model, login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from backend.views.authentication.utils import agregar_cookies_jwt

User = get_user_model()


class CsrfExemptSessionAuthentication(SessionAuthentication):
    """
    Autenticación de sesión que omite la validación CSRF.
    Solo para desarrollo.
    """
    def enforce_csrf(self, request):
        return  # No hacer nada - omitir CSRF


class DevLoginAPI(APIView):
    """
    Endpoint de login para desarrollo local.
    Crea/usa un usuario de desarrollo y crea una sesión real con tokens JWT.
    """
    permission_classes = [AllowAny]
    authentication_classes = [CsrfExemptSessionAuthentication]

    def post(self, request):
        # Solo permitir en modo DEBUG
        if not settings.DEBUG:
            return Response(
                {"error": "Este endpoint solo está disponible en modo desarrollo"},
                status=status.HTTP_403_FORBIDDEN
            )

        # Crear o obtener usuario de desarrollo
        user, created = User.objects.get_or_create(
            email='dev@facet.unt.edu.ar',
            defaults={
                'first_name': 'Usuario',
                'last_name': 'Desarrollo',
                'is_staff': True,
                'is_superuser': True,
            }
        )

        # Asegurar que tiene todos los permisos
        if not created:
            user.is_staff = True
            user.is_superuser = True
            user.save()

        # Crear sesión de Django
        login(request, user, backend='django.contrib.auth.backends.ModelBackend')

        # Generar tokens JWT
        refresh_token = RefreshToken.for_user(user)

        # Crear respuesta con las cookies JWT
        response = Response({
            "success": True,
            "message": "Login de desarrollo exitoso",
            "user": {
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
            }
        })

        # Agregar cookies JWT (igual que el login de Google)
        response = agregar_cookies_jwt(response, refresh_token)

        return response
