import styled from 'styled-components'

interface NavbarProps {
  $isOpen: boolean
}

export const NavbarWrapper = styled.nav<NavbarProps>`
  background-color: var(--dark-color);
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
`

export const BurgerButton = styled.button<NavbarProps>`
  left: ${(p) => (p.$isOpen ? '370px' : '20px')};
  position: absolute;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: white;
  border: none;
  font-size: 24px;
  background-color: transparent;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  a:visited {
    color: white;
  }
`

export const SidebarContainer = styled.div<NavbarProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100vh;
  z-index: 50;
  background: linear-gradient(180deg, var(--primary-color) 0%, #1a4d6d 100%);
  width: 350px;
  box-shadow: ${(p) => (p.$isOpen ? '0 8px 32px rgba(0, 0, 0, 0.3)' : 'none')};
  left: ${(p) => (p.$isOpen ? '0' : '-350px')};
  opacity: ${(p) => (p.$isOpen ? '1' : '0')};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  overflow-x: hidden;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
`

export const ButtonList = styled.ul`
  position: relative;
  margin: 0 10px 0 auto;
  list-style: none;
`

export const UserInfoSection = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 15px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`

export const ProfilePicture = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.5);
  }
`

export const UserCardContainer = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-left: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  letter-spacing: 0.5px;
`

export const SidebarListContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
`

export const ContentOverlay = styled.div<NavbarProps>`
  background-color: ${(p) => (p.$isOpen ? '#00000022' : 'transparent')};
  height: calc(100vh - 50px);
  width: 100vw;
  z-index: 10;
  transition: 0.5s ease-in-out;
  position: absolute;
  top: 50px;
`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`

export const SectionTitle = styled.div`
  margin: 15px 20px 10px 20px;
  width: calc(100% - 40px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 8px;
`

export const Title = styled.h2`
  font-size: 13px;
  padding: 0;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`

export const SubsectionList = styled.ul`
  list-style: none;
  width: 100%;
`

export const SubsectionItem = styled.li`
  transition: all 0.3s ease;
  border-left: 3px solid transparent;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-left-color: var(--secondary-color);
    transform: translateX(2px);
  }
`

export const BotonSeccion = styled.button`
  border: none;
  font-size: 14px;
  padding: 16px 25px;
  color: rgba(255, 255, 255, 0.95);
  cursor: pointer;
  width: 100%;
  text-align: left;
  font-weight: 400;
  background-color: transparent;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    padding-left: 30px;
  }

  &:active {
    transform: scale(0.98);
  }

  &.cerrar-sesion {
    position: absolute;
    bottom: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(220, 53, 69, 0.1);
    color: #ff6b6b;
    font-weight: 500;

    &:hover {
      background: rgba(220, 53, 69, 0.2);
      color: #ff5252;
      padding-left: 30px;
    }
  }
`

export const NavbarLogo = styled.img`
  height: 45px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`
