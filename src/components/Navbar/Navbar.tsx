import {
  NavbarWrapper,
  SidebarContainer,
  BurgerButton,
  ContentOverlay,
  NavbarTitle,
  NavbarUserInfo,
  NavbarUserName,
  NavbarUserRole
} from './NavbarStyled'
import Sidebar from './Sidebar/Sidebar'
import { useRef, useEffect } from 'react'
import useAuth from '../../hooks/useAuth'

interface NavbarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({
  isSidebarOpen,
  setIsSidebarOpen
}: NavbarProps) {
  const { auth } = useAuth()

  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleOpenSidebar = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setIsSidebarOpen((state) => !state)
  }

  const onLinkClick = () => {
    setIsSidebarOpen(false)
  }

  // No renderizar el navbar si el usuario no está autenticado
  if (!auth.isLoggedIn) {
    return null
  }

  return (
    <NavbarWrapper $isOpen={isSidebarOpen}>
      {isSidebarOpen && <ContentOverlay $isOpen={isSidebarOpen} />}
      <BurgerButton
        $isOpen={isSidebarOpen}
        onClick={(event) => handleOpenSidebar(event)}
      >
        <i className="fas fa-bars"></i>
      </BurgerButton>
      <NavbarTitle>Sistema de Gestión de Programas</NavbarTitle>
      <NavbarUserInfo>
        <NavbarUserName>
          <i className="fas fa-user"></i>
          {auth.userFirstName} {auth.userLastName}
        </NavbarUserName>
        <NavbarUserRole>
          {auth.userRoles.es_administrador ? 'Administrador' :
           auth.userRoles.es_director_de_carrera ? 'Director' :
           auth.userRoles.es_secretario_academico ? 'Secretario' :
           auth.userRoles.es_docente ? 'Docente' : 'Usuario'}
        </NavbarUserRole>
      </NavbarUserInfo>
      <SidebarContainer $isOpen={isSidebarOpen} ref={sidebarRef}>
        <Sidebar onLinkClick={onLinkClick} />
      </SidebarContainer>
    </NavbarWrapper>
  )
}
