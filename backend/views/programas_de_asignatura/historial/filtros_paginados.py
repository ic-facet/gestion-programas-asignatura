from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q
from backend.models import Carrera, Semestre, Asignatura, AnioAcademico


class FilterPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100


class CarrerasSearchAPI(APIView):
    """Endpoint paginado para buscar carreras"""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        search = request.query_params.get('search', '').strip()
        queryset = Carrera.objects.all().order_by('nombre')

        if search:
            queryset = queryset.filter(nombre__icontains=search)

        paginator = FilterPagination()
        page = paginator.paginate_queryset(queryset, request)

        results = [
            {'id': item.id, 'informacion': item.nombre}
            for item in page
        ]

        return paginator.get_paginated_response(results)


class SemestresSearchAPI(APIView):
    """Endpoint paginado para buscar semestres"""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        search = request.query_params.get('search', '').strip()
        queryset = Semestre.objects.all().order_by('-fecha_inicio')

        if search:
            queryset = queryset.filter(
                Q(anio_academico__nombre__icontains=search) |
                Q(semestre__icontains=search)
            )

        paginator = FilterPagination()
        page = paginator.paginate_queryset(queryset, request)

        results = [
            {'id': item.id, 'informacion': str(item)}
            for item in page
        ]

        return paginator.get_paginated_response(results)


class AsignaturasSearchAPI(APIView):
    """Endpoint paginado para buscar asignaturas"""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        search = request.query_params.get('search', '').strip()
        queryset = Asignatura.objects.all().order_by('denominacion')

        if search:
            queryset = queryset.filter(
                Q(denominacion__icontains=search) |
                Q(codigo__icontains=search)
            )

        paginator = FilterPagination()
        page = paginator.paginate_queryset(queryset, request)

        results = [
            {'id': item.id, 'informacion': f'{item.codigo} - {item.denominacion}'}
            for item in page
        ]

        return paginator.get_paginated_response(results)


class AniosLectivosSearchAPI(APIView):
    """Endpoint paginado para buscar años lectivos"""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        search = request.query_params.get('search', '').strip()
        queryset = AnioAcademico.objects.all().order_by('-fecha_inicio')

        if search:
            queryset = queryset.filter(
                Q(nombre__icontains=search) |
                Q(fecha_inicio__year__icontains=search)
            )

        paginator = FilterPagination()
        page = paginator.paginate_queryset(queryset, request)

        results = [
            {'id': item.id, 'informacion': str(item)}
            for item in page
        ]

        return paginator.get_paginated_response(results)
