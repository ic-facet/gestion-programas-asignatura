from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ValidationError

from backend.models import VersionProgramaAsignatura
from backend.services import ServicioSemestre
from backend.common.choices import EstadoAsignatura
from backend.serializers import ProgramasVigentesSerializer


class ListarProgramasVigentesAPI(APIView):
    permission_classes = [
        IsAuthenticated,
    ]

    def get(self, request):
        """
        Lista los programas vigentes
        """

        servicio_semestre = ServicioSemestre()

        try:
            semestre_actual = servicio_semestre.obtener_semestre_actual()
        except ValidationError as e:
            error_message = e.message_dict.get("__all__", ["Error desconocido"])[0] if hasattr(e, 'message_dict') else str(e)
            return Response(
                {"error": error_message},
                status=status.HTTP_400_BAD_REQUEST
            )

        programas_vigentes = VersionProgramaAsignatura.objects.filter(
            semestre=semestre_actual, estado=EstadoAsignatura.APROBADO
        )

        serializer = ProgramasVigentesSerializer()
        data = serializer.to_representation(programas_vigentes)

        return Response(data)
