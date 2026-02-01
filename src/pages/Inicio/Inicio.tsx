import { RUTAS_PAGINAS } from '../../constants/constants'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import {
  Division,
  Funcionalidad,
  Portada,
  SeccionFuncionalidades,
  TituloFuncionalidad,
  IconoFuncionalidad,
  DescripcionFuncionalidad,
  TextoBienvenidaContainer,
  LogoFacet,
  InstitucionalBadge,
  SistemaNombre,
  SistemaDescripcion,
  AccionContainer,
  AccionTexto,
  LoginButton,
  DashboardContainer,
  DashboardContent,
  WelcomeSection,
  WelcomeContent,
  WelcomeInfo,
  WelcomeTitle,
  WelcomeSubtitle,
  UserAvatar,
  RoleBadge,
  QuickAccessSection,
  QuickAccessCard,
  QuickAccessIcon,
  QuickAccessTitle,
  QuickAccessDescription,
  InfoSection,
  InfoCard,
  InfoCardHeader,
  InfoCardTitle,
  SystemInfoItem,
  SystemInfoLabel,
  SystemInfoValue,
  DashboardFooter,
  FooterInfo,
  FooterText,
  FooterContact,
  SectionTitle,
  SectionSubtitle
} from './InicioStyled'
import img from '../../img'

const Inicio: React.FC = () => {
  const { auth } = useAuth()
  const navigate = useNavigate()

  const handleLoginButton = () => {
    navigate(RUTAS_PAGINAS.LOGIN)
  }

  const getRoleInfo = () => {
    const { userRoles } = auth
    if (userRoles.es_administrador) {
      return {
        name: 'Administrador',
        color: 'rgba(239, 68, 68, 0.3)',
        icon: 'fas fa-shield-alt'
      }
    }
    if (userRoles.es_secretario_academico) {
      return {
        name: 'Secretario Académico',
        color: 'rgba(168, 85, 247, 0.3)',
        icon: 'fas fa-user-tie'
      }
    }
    if (userRoles.es_director_de_carrera) {
      return {
        name: 'Director de Carrera',
        color: 'rgba(59, 130, 246, 0.3)',
        icon: 'fas fa-graduation-cap'
      }
    }
    if (userRoles.es_docente) {
      return {
        name: 'Docente',
        color: 'rgba(34, 197, 94, 0.3)',
        icon: 'fas fa-chalkboard-teacher'
      }
    }
    return {
      name: 'Usuario',
      color: 'rgba(255, 255, 255, 0.2)',
      icon: 'fas fa-user'
    }
  }

  const getUserFullName = () => {
    const firstName = auth.userFirstName || ''
    const lastName = auth.userLastName || ''
    return `${firstName} ${lastName}`.trim() || 'Usuario'
  }

  const formatDate = () => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    return now.toLocaleDateString('es-ES', options)
  }

  const quickAccessItems = [
    {
      title: 'Programas Vigentes',
      description: 'Consulte los programas académicos vigentes',
      icon: 'fas fa-check-circle',
      color: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
      path: RUTAS_PAGINAS.PROGRAMAS_VIGENTES,
      roles: null
    },
    {
      title: 'Tareas Pendientes',
      description: 'Revise sus tareas y pendientes del sistema',
      icon: 'fas fa-tasks',
      color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      path: RUTAS_PAGINAS.TAREAS_PENDIENTES,
      roles: ['es_docente', 'es_director_de_carrera']
    },
    {
      title: 'Historial',
      description: 'Acceda al historial de programas anteriores',
      icon: 'fas fa-history',
      color: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      path: RUTAS_PAGINAS.HISTORIAL,
      roles: null
    },
    {
      title: 'Matriz de Tributación',
      description: 'Visualice la matriz de tributación académica',
      icon: 'fas fa-table',
      color: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      path: RUTAS_PAGINAS.MATRIZ,
      roles: ['es_director_de_carrera', 'es_secretario_academico']
    }
  ]

  const isAccessible = (roles: string[] | null) => {
    if (!roles) return true
    return roles.some(
      (role) => auth.userRoles[role as keyof typeof auth.userRoles]
    )
  }

  if (auth.isLoggedIn) {
    const roleInfo = getRoleInfo()
    const userName = getUserFullName()

    return (
      <DashboardContainer>
        <DashboardContent>
          <WelcomeSection>
            <WelcomeContent>
              <WelcomeInfo>
                <WelcomeTitle>¡Bienvenido/a, {userName}!</WelcomeTitle>
                <WelcomeSubtitle>
                  Sistema de Gestión para Programas de Asignatura - FACET/UNT
                </WelcomeSubtitle>
                <RoleBadge $roleColor={roleInfo.color}>
                  <i className={roleInfo.icon} />
                  {roleInfo.name}
                </RoleBadge>
              </WelcomeInfo>
              <UserAvatar>
                <i className="fas fa-user" />
              </UserAvatar>
            </WelcomeContent>
          </WelcomeSection>

          <div>
            <SectionTitle>
              <i className="fas fa-th-large" />
              Accesos Directos
            </SectionTitle>
            <SectionSubtitle>
              Acceda rápidamente a las funcionalidades principales del sistema
            </SectionSubtitle>
            <QuickAccessSection>
              {quickAccessItems
                .filter((item) => isAccessible(item.roles))
                .map((item, index) => (
                  <QuickAccessCard
                    key={index}
                    onClick={() => navigate(item.path)}
                  >
                    <QuickAccessIcon $color={item.color}>
                      <i className={item.icon} />
                    </QuickAccessIcon>
                    <QuickAccessTitle>{item.title}</QuickAccessTitle>
                    <QuickAccessDescription>
                      {item.description}
                    </QuickAccessDescription>
                  </QuickAccessCard>
                ))}
            </QuickAccessSection>
          </div>

          <InfoSection>
            <InfoCard>
              <InfoCardHeader>
                <InfoCardTitle>
                  <i className="fas fa-info-circle" />
                  Información del Sistema
                </InfoCardTitle>
              </InfoCardHeader>
              <SystemInfoItem>
                <SystemInfoLabel>Versión</SystemInfoLabel>
                <SystemInfoValue>v2.0.0</SystemInfoValue>
              </SystemInfoItem>
              <SystemInfoItem>
                <SystemInfoLabel>Fecha</SystemInfoLabel>
                <SystemInfoValue>{formatDate()}</SystemInfoValue>
              </SystemInfoItem>
              <SystemInfoItem>
                <SystemInfoLabel>Institución</SystemInfoLabel>
                <SystemInfoValue>FACET - UNT</SystemInfoValue>
              </SystemInfoItem>
              <SystemInfoItem>
                <SystemInfoLabel>Usuario</SystemInfoLabel>
                <SystemInfoValue>{auth.userEmail}</SystemInfoValue>
              </SystemInfoItem>
            </InfoCard>
          </InfoSection>

          <DashboardFooter>
            <FooterInfo>
              <FooterText>
                <strong>Sistema de Gestión para Programas de Asignatura</strong>
              </FooterText>
              <FooterText>
                Facultad de Ciencias Exactas y Tecnología - Universidad Nacional
                de Tucumán
              </FooterText>
            </FooterInfo>
            <FooterContact>
              <i className="fas fa-envelope" />
              <span>soporte@facet.unt.edu.ar</span>
              <span>|</span>
              <i className="fas fa-phone" />
              <span>+54 381 000-0000</span>
            </FooterContact>
          </DashboardFooter>
        </DashboardContent>
      </DashboardContainer>
    )
  }

  return (
    <>
      <Portada>
        <TextoBienvenidaContainer>
          <LogoFacet src={img.FACETNoBackground} />

          <InstitucionalBadge>
            Universidad Nacional de Tucumán
          </InstitucionalBadge>

          <SistemaNombre>SGPA</SistemaNombre>

          <SistemaDescripcion>
            Sistema de Gestión para Programas de Asignatura
          </SistemaDescripcion>

          <DescripcionFuncionalidad style={{ marginBottom: '24px' }}>
            Plataforma institucional de la Facultad de Ciencias Exactas y
            Tecnología para la gestión, seguimiento y actualización de programas
            académicos.
          </DescripcionFuncionalidad>

          <AccionContainer>
            <AccionTexto>
              Para acceder al sistema y gestionar programas de asignatura,
              inicie sesión con sus credenciales institucionales.
            </AccionTexto>
            <LoginButton onClick={handleLoginButton}>
              Iniciar Sesión
            </LoginButton>
          </AccionContainer>
        </TextoBienvenidaContainer>
      </Portada>

      <Division>
        <span>Funcionalidades del Sistema</span>
      </Division>
      <SeccionFuncionalidades>
        <Funcionalidad>
          <IconoFuncionalidad>
            <i className="fas fa-file-alt" />
          </IconoFuncionalidad>
          <TituloFuncionalidad>Generación de Informes</TituloFuncionalidad>
          <DescripcionFuncionalidad>
            Genere informes completos sobre las asignaturas de cada carrera,
            incluyendo la matriz de tributación y análisis académicos.
          </DescripcionFuncionalidad>
        </Funcionalidad>
        <Funcionalidad>
          <IconoFuncionalidad>
            <i className="fas fa-history" />
          </IconoFuncionalidad>
          <TituloFuncionalidad>Historial de Programas</TituloFuncionalidad>
          <DescripcionFuncionalidad>
            Filtre y busque programas de asignaturas de diferentes períodos
            académicos. Descargue documentos en formato PDF.
          </DescripcionFuncionalidad>
        </Funcionalidad>
        <Funcionalidad>
          <IconoFuncionalidad>
            <i className="fas fa-edit" />
          </IconoFuncionalidad>
          <TituloFuncionalidad>Actualización de Programas</TituloFuncionalidad>
          <DescripcionFuncionalidad>
            Los docentes pueden actualizar programas de asignatura y los
            directores de carrera pueden validar los cambios realizados.
          </DescripcionFuncionalidad>
        </Funcionalidad>
      </SeccionFuncionalidades>
    </>
  )
}

export default Inicio
