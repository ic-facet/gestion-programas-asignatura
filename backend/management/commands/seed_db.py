"""
Comando para llenar la base de datos con datos ficticios.
Ejecutar con: python manage.py seed_db
"""
from datetime import date, timedelta
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

from backend.models import (
    AnioAcademico,
    Carrera,
    PlanDeEstudio,
    BloqueCurricular,
    Asignatura,
    Semestre,
    Descriptor,
    Estandar,
    ActividadReservada,
    VersionProgramaAsignatura,
    Rol,
)
from backend.common.choices import (
    Semestres,
    MetodologiaAsignatura,
    TipoDescriptor,
    EstadoAsignatura,
    Roles,
    Dedicaciones,
)

User = get_user_model()


class Command(BaseCommand):
    help = 'Llena la base de datos con datos ficticios para desarrollo'

    def handle(self, *args, **options):
        self.stdout.write('Iniciando seed de la base de datos...')

        # Crear usuario de desarrollo si no existe
        user, created = User.objects.get_or_create(
            email='dev@facet.unt.edu.ar',
            defaults={
                'first_name': 'Usuario',
                'last_name': 'Desarrollo',
                'is_staff': True,
                'is_superuser': True,
            }
        )
        if created:
            self.stdout.write(self.style.SUCCESS(f'Usuario creado: {user.email}'))

        # Crear Bloques Curriculares
        bloques_data = [
            {'nombre': 'Ciencias Básicas', 'coeficiente': 1.0},
            {'nombre': 'Tecnologías Básicas', 'coeficiente': 1.2},
            {'nombre': 'Tecnologías Aplicadas', 'coeficiente': 1.5},
            {'nombre': 'Complementarias', 'coeficiente': 0.8},
        ]
        bloques = {}
        for data in bloques_data:
            bloque, created = BloqueCurricular.objects.get_or_create(
                nombre=data['nombre'],
                defaults={'coeficiente': data['coeficiente']}
            )
            bloques[data['nombre']] = bloque
            if created:
                self.stdout.write(f'Bloque curricular creado: {bloque.nombre}')

        # Crear Carreras
        carreras_data = [
            'Ingeniería en Computación',
            'Ingeniería Civil',
            'Ingeniería Eléctrica',
            'Ingeniería Mecánica',
            'Licenciatura en Física',
        ]
        carreras = {}
        for nombre in carreras_data:
            carrera, created = Carrera.objects.get_or_create(nombre=nombre)
            carreras[nombre] = carrera
            if created:
                self.stdout.write(f'Carrera creada: {carrera.nombre}')

        # Crear Año Académico actual
        hoy = date.today()
        anio_academico, created = AnioAcademico.objects.get_or_create(
            fecha_inicio=date(hoy.year, 3, 1),
            fecha_fin=date(hoy.year, 12, 15),
            defaults={'nombre': str(hoy.year)}
        )
        if created:
            self.stdout.write(f'Año académico creado: {anio_academico}')

        # Crear Semestres
        semestre_1, created = Semestre.objects.get_or_create(
            anio_academico=anio_academico,
            semestre=Semestres.PRIMER,
            defaults={
                'fecha_inicio': date(hoy.year, 3, 1),
                'fecha_fin': date(hoy.year, 7, 15),
            }
        )
        if created:
            self.stdout.write(f'Semestre creado: {semestre_1}')

        semestre_2, created = Semestre.objects.get_or_create(
            anio_academico=anio_academico,
            semestre=Semestres.SEGUNDO,
            defaults={
                'fecha_inicio': date(hoy.year, 8, 1),
                'fecha_fin': date(hoy.year, 12, 15),
            }
        )
        if created:
            self.stdout.write(f'Semestre creado: {semestre_2}')

        # Crear Descriptores
        descriptores_data = [
            {'descripcion': 'Identificar, formular y resolver problemas de ingeniería', 'tipo': TipoDescriptor.DESCRIPTOR},
            {'descripcion': 'Concebir, diseñar y desarrollar proyectos de ingeniería', 'tipo': TipoDescriptor.DESCRIPTOR},
            {'descripcion': 'Gestionar, planificar, ejecutar y controlar proyectos', 'tipo': TipoDescriptor.DESCRIPTOR},
            {'descripcion': 'Utilizar de manera efectiva técnicas y herramientas', 'tipo': TipoDescriptor.DESCRIPTOR},
            {'descripcion': 'Contribuir a la generación de desarrollos tecnológicos', 'tipo': TipoDescriptor.DESCRIPTOR},
            {'descripcion': 'Desarrollo sostenible y cuidado del medio ambiente', 'tipo': TipoDescriptor.EJE_TRANSVERSAL},
            {'descripcion': 'Ética profesional y responsabilidad social', 'tipo': TipoDescriptor.EJE_TRANSVERSAL},
            {'descripcion': 'Comunicación efectiva oral y escrita', 'tipo': TipoDescriptor.EJE_TRANSVERSAL},
            {'descripcion': 'Trabajo en equipo interdisciplinario', 'tipo': TipoDescriptor.EJE_TRANSVERSAL},
            {'descripcion': 'Aprendizaje continuo y autónomo', 'tipo': TipoDescriptor.EJE_TRANSVERSAL},
        ]
        descriptores = []
        for data in descriptores_data:
            descriptor, created = Descriptor.objects.get_or_create(
                descripcion=data['descripcion'],
                defaults={'tipo': data['tipo']}
            )
            descriptores.append(descriptor)
            if created:
                self.stdout.write(f'Descriptor creado: {descriptor.descripcion[:50]}...')

        # Crear Estándares
        for nombre_carrera, carrera in carreras.items():
            estandar, created = Estandar.objects.get_or_create(
                nombre=f'Estándar CONFEDI {nombre_carrera}',
                carrera=carrera,
                defaults={'fecha_inicio': date(2020, 1, 1)}
            )
            if created:
                estandar.descriptores.set(descriptores)
                self.stdout.write(f'Estándar creado: {estandar.nombre}')

                # Crear Actividades Reservadas para el estándar
                actividades_data = [
                    'Diseño, cálculo y proyecto de sistemas, equipos e instalaciones',
                    'Dirección y supervisión de construcción y montaje',
                    'Operación, mantenimiento y control de sistemas',
                    'Estudios de factibilidad técnico-económica',
                    'Arbitrajes, pericias y tasaciones',
                ]
                for desc in actividades_data:
                    actividad, act_created = ActividadReservada.objects.get_or_create(
                        estandar=estandar,
                        descripcion=f'{desc} en {nombre_carrera}'
                    )
                    if act_created:
                        self.stdout.write(f'Actividad reservada creada para {nombre_carrera}')

        # Crear Asignaturas
        asignaturas_data = [
            {'codigo': 'CB0101', 'denominacion': 'Análisis Matemático I', 'bloque': 'Ciencias Básicas', 'semanas': 16, 'teoria': 64, 'practica': 48},
            {'codigo': 'CB0102', 'denominacion': 'Álgebra y Geometría Analítica', 'bloque': 'Ciencias Básicas', 'semanas': 16, 'teoria': 64, 'practica': 48},
            {'codigo': 'CB0201', 'denominacion': 'Física I', 'bloque': 'Ciencias Básicas', 'semanas': 16, 'teoria': 48, 'practica': 32, 'lab': 16},
            {'codigo': 'CB0202', 'denominacion': 'Física II', 'bloque': 'Ciencias Básicas', 'semanas': 16, 'teoria': 48, 'practica': 32, 'lab': 16},
            {'codigo': 'CB0301', 'denominacion': 'Química General', 'bloque': 'Ciencias Básicas', 'semanas': 16, 'teoria': 48, 'practica': 16, 'lab': 32},
            {'codigo': 'TB0101', 'denominacion': 'Algoritmos y Estructuras de Datos', 'bloque': 'Tecnologías Básicas', 'semanas': 16, 'teoria': 48, 'practica': 64},
            {'codigo': 'TB0102', 'denominacion': 'Programación Orientada a Objetos', 'bloque': 'Tecnologías Básicas', 'semanas': 16, 'teoria': 32, 'practica': 64, 'lab': 16},
            {'codigo': 'TB0201', 'denominacion': 'Base de Datos', 'bloque': 'Tecnologías Básicas', 'semanas': 16, 'teoria': 48, 'practica': 48, 'lab': 16},
            {'codigo': 'TB0202', 'denominacion': 'Sistemas Operativos', 'bloque': 'Tecnologías Básicas', 'semanas': 16, 'teoria': 64, 'practica': 32, 'lab': 16},
            {'codigo': 'TA0101', 'denominacion': 'Ingeniería de Software I', 'bloque': 'Tecnologías Aplicadas', 'semanas': 16, 'teoria': 48, 'practica': 48, 'lab': 16},
            {'codigo': 'TA0102', 'denominacion': 'Ingeniería de Software II', 'bloque': 'Tecnologías Aplicadas', 'semanas': 16, 'teoria': 32, 'practica': 64, 'lab': 16},
            {'codigo': 'TA0201', 'denominacion': 'Redes de Computadoras', 'bloque': 'Tecnologías Aplicadas', 'semanas': 16, 'teoria': 48, 'practica': 32, 'lab': 32},
            {'codigo': 'CO0101', 'denominacion': 'Inglés Técnico', 'bloque': 'Complementarias', 'semanas': 16, 'teoria': 32, 'practica': 64},
            {'codigo': 'CO0102', 'denominacion': 'Economía y Organización Industrial', 'bloque': 'Complementarias', 'semanas': 16, 'teoria': 48, 'practica': 32},
            {'codigo': 'CO0201', 'denominacion': 'Legislación y Ética Profesional', 'bloque': 'Complementarias', 'semanas': 16, 'teoria': 48, 'practica': 16},
        ]

        asignaturas = []
        for data in asignaturas_data:
            try:
                asignatura, created = Asignatura.objects.get_or_create(
                    codigo=data['codigo'],
                    defaults={
                        'denominacion': data['denominacion'],
                        'bloque_curricular': bloques[data['bloque']],
                        'metodologia': MetodologiaAsignatura.PRESENCIAL,
                        'semanas_dictado': data['semanas'],
                        'total_teoria_presencial': data.get('teoria', 0),
                        'total_practica_presencial': data.get('practica', 0),
                        'total_teorico_practico_presencial': 0,
                        'total_lab_presencial': data.get('lab', 0),
                        'carga_rtf': data.get('teoria', 0) + data.get('practica', 0) + data.get('lab', 0),
                    }
                )
                asignaturas.append(asignatura)
                if created:
                    self.stdout.write(f'Asignatura creada: {asignatura.denominacion}')
            except Exception as e:
                self.stdout.write(self.style.WARNING(f'Error creando asignatura {data["codigo"]}: {e}'))

        # Crear Planes de Estudio y asociar asignaturas
        carrera_ic = carreras['Ingeniería en Computación']
        plan, created = PlanDeEstudio.objects.get_or_create(
            nombre='Plan 2023 - Ingeniería en Computación',
            carrera=carrera_ic,
            defaults={'fecha_inicio': date(2023, 3, 1)}
        )
        if created or plan.asignaturas.count() == 0:
            plan.asignaturas.set(asignaturas)
            self.stdout.write(f'Plan de estudio creado: {plan.nombre}')

        # Crear Versiones de Programa de Asignatura (programas vigentes)
        resultados_aprendizaje_ejemplo = [
            "Comprender los fundamentos teóricos de la asignatura",
            "Aplicar técnicas y metodologías apropiadas para resolver problemas",
            "Analizar y evaluar soluciones alternativas",
            "Diseñar e implementar soluciones eficientes",
            "Comunicar resultados de manera efectiva",
            "Trabajar de manera colaborativa en equipos"
        ]

        for asignatura in asignaturas[:10]:  # Crear programas para las primeras 10 asignaturas
            try:
                version, created = VersionProgramaAsignatura.objects.get_or_create(
                    asignatura=asignatura,
                    semestre=semestre_1,
                    defaults={
                        'estado': EstadoAsignatura.APROBADO,
                        'contenidos': f'''Unidad 1: Introducción a {asignatura.denominacion}
- Conceptos fundamentales
- Historia y evolución
- Aplicaciones prácticas

Unidad 2: Fundamentos Teóricos
- Principios básicos
- Modelos y representaciones
- Análisis y síntesis

Unidad 3: Metodologías y Técnicas
- Técnicas de resolución de problemas
- Metodologías de trabajo
- Herramientas computacionales

Unidad 4: Aplicaciones Avanzadas
- Casos de estudio
- Proyectos integradores
- Tendencias actuales''',
                        'bibliografia': f'''Bibliografía Básica:
- "Fundamentos de {asignatura.denominacion}" - Autor Principal, Editorial 2023
- "Manual Práctico" - Segundo Autor, Editorial Técnica 2022

Bibliografía Complementaria:
- "Casos de Estudio en {asignatura.denominacion}" - Varios Autores, 2021
- Artículos científicos actualizados
- Documentación técnica oficial''',
                        'recursos': '''- Aula virtual con materiales de estudio
- Laboratorio de computación
- Software especializado con licencia educativa
- Biblioteca digital con acceso a papers
- Equipamiento de laboratorio específico''',
                        'evaluacion': '''Sistema de evaluación:
- 2 Exámenes parciales (30% cada uno)
- Trabajos prácticos (20%)
- Proyecto final integrador (20%)

Condiciones de aprobación:
- Asistencia mínima del 75%
- Aprobar ambos parciales con nota >= 6
- Entregar todos los trabajos prácticos
- Defender el proyecto final''',
                        'investigacion_docentes': '''Los docentes de la cátedra participan en proyectos de investigación relacionados con:
- Desarrollo de nuevas metodologías de enseñanza
- Investigación aplicada en el área de la asignatura
- Publicaciones en congresos nacionales e internacionales''',
                        'investigacion_estudiantes': '''Los estudiantes pueden participar en:
- Proyectos de investigación como auxiliares
- Desarrollo de tesinas y trabajos finales
- Presentación en jornadas estudiantiles de investigación''',
                        'extension_docentes': '''Actividades de extensión:
- Cursos de capacitación para profesionales
- Asesoramiento técnico a empresas e instituciones
- Participación en eventos de divulgación científica''',
                        'extension_estudiantes': '''Los estudiantes pueden participar en:
- Proyectos de voluntariado técnico
- Capacitaciones a la comunidad
- Ferias de ciencias y tecnología''',
                        'cronograma': '''Semana 1-4: Unidad 1 - Introducción
Semana 5-8: Unidad 2 - Fundamentos Teóricos
Semana 9: Primer Parcial
Semana 10-12: Unidad 3 - Metodologías
Semana 13-15: Unidad 4 - Aplicaciones
Semana 16: Segundo Parcial y Defensa de Proyectos''',
                        'metodologia_aplicada': '''Metodología de enseñanza:
- Clases teóricas expositivas con participación activa
- Resolución de problemas en clase
- Trabajos prácticos individuales y grupales
- Aprendizaje basado en proyectos
- Uso de recursos multimedia y simuladores''',
                        'fundamentacion': f'''{asignatura.denominacion} es una asignatura fundamental en la formación del ingeniero,
proporcionando las bases teóricas y prácticas necesarias para el desarrollo profesional.
Esta materia integra conocimientos previos y prepara al estudiante para asignaturas más avanzadas,
desarrollando competencias técnicas y habilidades de resolución de problemas.''',
                        'resultados_de_aprendizaje': resultados_aprendizaje_ejemplo,
                    }
                )
                if created:
                    self.stdout.write(f'Programa creado para: {asignatura.denominacion}')
            except Exception as e:
                self.stdout.write(self.style.WARNING(f'Error creando programa para {asignatura.denominacion}: {e}'))

        # Crear rol de docente para el usuario de desarrollo
        if asignaturas:
            rol, created = Rol.objects.get_or_create(
                usuario=user,
                asignatura=asignaturas[0],
                rol=Roles.TITULAR_CATEDRA,
                defaults={
                    'fecha_inicio': date(hoy.year, 1, 1),
                    'dedicacion': Dedicaciones.EXCLUSIVA,
                    'cargo': 'Profesor Titular',
                }
            )
            if created:
                self.stdout.write(f'Rol creado: {rol}')

            # También dar rol de director de carrera
            rol_director, created = Rol.objects.get_or_create(
                usuario=user,
                carrera=carrera_ic,
                rol=Roles.DIRECTOR_CARRERA,
                defaults={
                    'fecha_inicio': date(hoy.year, 1, 1),
                    'dedicacion': Dedicaciones.EXCLUSIVA,
                    'cargo': 'Director de Carrera',
                }
            )
            if created:
                self.stdout.write(f'Rol Director creado: {rol_director}')

        self.stdout.write(self.style.SUCCESS('Seed completado exitosamente!'))
        self.stdout.write(self.style.SUCCESS(f'Usuario de desarrollo: dev@facet.unt.edu.ar'))
