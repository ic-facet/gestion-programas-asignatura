import styled, { keyframes, css } from 'styled-components'

interface NavbarProps {
  $isOpen: boolean
}

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

export const NavbarWrapper = styled.nav<NavbarProps>`
  background: linear-gradient(135deg, var(--dark-color) 0%, #1a4d6d 100%);
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 64px;
  z-index: 100;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  }
`

export const BurgerButton = styled.button<NavbarProps>`
  left: ${(p) => (p.$isOpen ? '370px' : '20px')};
  position: fixed;
  top: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: white;
  border: none;
  font-size: 22px;
  background-color: ${(p) => (p.$isOpen ? 'rgba(255, 255, 255, 0.15)' : 'transparent')};
  cursor: pointer;
  padding: 10px 14px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;

  i {
    transition: transform 0.3s ease;
    transform: ${(p) => (p.$isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }

  a:visited {
    color: white;
  }

  @media (max-width: 768px) {
    left: ${(p) => (p.$isOpen ? 'calc(100vw - 60px)' : '15px')};
    padding: 8px 12px;
    font-size: 20px;
  }
`

export const SidebarContainer = styled.div<NavbarProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100vh;
  z-index: 150;
  background: linear-gradient(180deg, var(--primary-color) 0%, #1a4d6d 100%);
  width: 350px;
  box-shadow: ${(p) => (p.$isOpen ? '8px 0 40px rgba(0, 0, 0, 0.3)' : 'none')};
  transform: translateX(${(p) => (p.$isOpen ? '0' : '-100%')});
  opacity: 1;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.4s ease;
  overflow-y: auto;
  overflow-x: hidden;

  ${(p) => p.$isOpen && css`
    animation: ${slideIn} 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  `}

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;

    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  }

  @media (max-width: 768px) {
    width: 100vw;
  }
`

export const ButtonList = styled.ul`
  position: relative;
  margin: 0 10px 0 auto;
  list-style: none;
`

export const UserInfoSection = styled.div`
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 24px;
  box-sizing: border-box;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.15) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  margin-bottom: 8px;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
    pointer-events: none;
  }
`

export const ProfilePicture = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  object-fit: cover;

  &:hover {
    transform: scale(1.08);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
  }
`

export const UserCardContainer = styled.div`
  color: white;
  font-size: 15px;
  font-weight: 500;
  margin-left: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  letter-spacing: 0.3px;

  p {
    margin: 0;
    line-height: 1.4;
  }
`

export const UserRoleBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  i {
    font-size: 10px;
  }
`

export const QuickActionsSection = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`

export const QuickActionButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  i {
    font-size: 14px;
    transition: transform 0.25s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);

    i {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  }
`

export const SidebarListContainer = styled.div`
  width: 100%;
  position: relative;
  min-height: calc(100% - 100px);
  padding-bottom: 70px;
`

export const ContentOverlay = styled.div<NavbarProps>`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  height: 100vh;
  width: 100vw;
  z-index: 140;
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${(p) => (p.$isOpen ? 1 : 0)};
  visibility: ${(p) => (p.$isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  cursor: pointer;
`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
`

export const SectionTitle = styled.div`
  margin: 20px 24px 12px 24px;
  width: calc(100% - 48px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SectionIcon = styled.i`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  width: 18px;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 11px;
  padding: 0;
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  flex: 1;
  text-transform: uppercase;
  letter-spacing: 2px;
`

export const SubsectionList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`

export const SubsectionItem = styled.li`
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  border-left: 3px solid transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background: rgba(255, 255, 255, 0.05);
    transition: width 0.3s ease;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    border-left-color: var(--secondary-color);

    &::before {
      width: 100%;
    }
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.12);
  }
`

export const BotonSeccion = styled.button`
  border: none;
  font-size: 14px;
  padding: 16px 28px;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  width: 100%;
  text-align: left;
  font-weight: 400;
  background-color: transparent;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.3px;
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;

  i {
    font-size: 16px;
    width: 20px;
    text-align: center;
    opacity: 0.8;
    transition: all 0.25s ease;
  }

  &:hover {
    color: white;
    padding-left: 32px;

    i {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &.cerrar-sesion {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 350px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(135deg, rgba(220, 53, 69, 0.15) 0%, rgba(220, 53, 69, 0.1) 100%);
    color: #ff7b7b;
    font-weight: 500;
    padding: 18px 28px;

    i {
      color: #ff7b7b;
    }

    &:hover {
      background: linear-gradient(135deg, rgba(220, 53, 69, 0.25) 0%, rgba(220, 53, 69, 0.15) 100%);
      color: #ff5252;
      padding-left: 32px;

      i {
        color: #ff5252;
      }
    }

    @media (max-width: 768px) {
      width: 100vw;
    }
  }
`

export const NavbarLogo = styled.img`
  height: 42px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
  }
`

export const NavbarTitle = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-left: 80px;
  opacity: 0.95;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 70px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`

export const NavbarUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: 24px;

  @media (max-width: 768px) {
    gap: 10px;
    margin-right: 16px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`

export const NavbarUserName = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.95;

  i {
    font-size: 12px;
    opacity: 0.8;
  }
`

export const NavbarUserRole = styled.span`
  color: white;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  opacity: 0.9;
`
