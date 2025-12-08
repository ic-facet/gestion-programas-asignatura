import { useNavigate } from 'react-router-dom'
import SidebarSectionList from './SidebarSectionList'
import useAuth from '../../../hooks/useAuth'
import { RUTAS_PAGINAS } from '../../../constants/constants'

import {
  SidebarListContainer,
  UserInfoSection,
  UserCardContainer,
  ProfilePicture,
  BotonSeccion,
  UserRoleBadge,
  QuickActionsSection,
  QuickActionButton
} from '../NavbarStyled'

interface SidebarProps {
  onLinkClick: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ onLinkClick }) => {
  const { auth, handleLogout } = useAuth()
  const navigate = useNavigate()

  const handleClickLogoutButton = () => {
    onLinkClick()
    handleLogout()
  }

  const handleGoHome = () => {
    navigate(RUTAS_PAGINAS.INICIO)
    onLinkClick()
  }

  const handleGoBack = () => {
    navigate(-1)
    onLinkClick()
  }

  const getUserRole = () => {
    if (auth.userRoles.es_administrador) return { label: 'Administrador', icon: 'fas fa-shield-alt' }
    if (auth.userRoles.es_director_de_carrera) return { label: 'Director', icon: 'fas fa-user-tie' }
    if (auth.userRoles.es_secretario_academico) return { label: 'Secretario', icon: 'fas fa-user-cog' }
    if (auth.userRoles.es_docente) return { label: 'Docente', icon: 'fas fa-chalkboard-teacher' }
    return { label: 'Usuario', icon: 'fas fa-user' }
  }

  const userRole = getUserRole()

  return (
    <SidebarListContainer>
      <UserInfoSection>
        <ProfilePicture
          src={auth.userProfilePicture || ''}
          alt={`Foto de perfil de ${auth.userFirstName}`}
        />
        <UserCardContainer>
          <p>
            {auth.userFirstName} {auth.userLastName}
          </p>
          <UserRoleBadge>
            <i className={userRole.icon} />
            {userRole.label}
          </UserRoleBadge>
        </UserCardContainer>
      </UserInfoSection>

      <QuickActionsSection>
        <QuickActionButton onClick={handleGoHome} aria-label="Ir al inicio">
          <i className="fas fa-home" />
          Inicio
        </QuickActionButton>
        <QuickActionButton onClick={handleGoBack} aria-label="Volver atrás">
          <i className="fas fa-arrow-left" />
          Volver
        </QuickActionButton>
      </QuickActionsSection>

      <SidebarSectionList onLinkClick={onLinkClick} />

      <BotonSeccion
        className="cerrar-sesion"
        onClick={handleClickLogoutButton}
        aria-label="Cerrar sesión"
      >
        <i className="fas fa-sign-out-alt" />
        Cerrar Sesión
      </BotonSeccion>
    </SidebarListContainer>
  )
}

export default Sidebar
