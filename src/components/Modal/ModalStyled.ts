import styled, { keyframes, css } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -45%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

const slideDown = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -55%) scale(0.95);
  }
`

interface OverlayProps {
  $isClosing?: boolean
}

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1000;
  animation: ${({ $isClosing }) => $isClosing ? fadeOut : fadeIn} 0.3s ease-out forwards;
  cursor: pointer;
`

interface ModalContainerProps {
  $isClosing?: boolean
  $size?: 'small' | 'medium' | 'large' | 'fullscreen'
}

const getModalSize = (size: string = 'medium') => {
  switch (size) {
    case 'small':
      return css`max-width: 400px;`
    case 'large':
      return css`max-width: 800px;`
    case 'fullscreen':
      return css`
        max-width: 95vw;
        max-height: 95vh;
        width: 95vw;
        height: 95vh;
      `
    default:
      return css`max-width: 500px;`
  }
}

export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  ${({ $size }) => getModalSize($size)}
  background-color: white;
  border-radius: 24px;
  padding: 0;
  z-index: 1001;
  max-height: 85vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 25px 80px rgba(0, 0, 0, 0.35),
    0 10px 30px rgba(0, 0, 0, 0.15);
  animation: ${({ $isClosing }) => $isClosing ? slideDown : slideUp} 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

  &.resultadosAprendizaje {
    max-width: 900px;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%);
    color: white;
    padding: 20px 28px;
    border-radius: 24px 24px 0 0;
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      animation: shimmer 3s ease-in-out infinite;
    }

    @keyframes shimmer {
      0% { left: -100%; }
      50%, 100% { left: 100%; }
    }
  }

  textarea {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid #e8e8e8;
    border-radius: 12px;
    font-size: 14px;
    line-height: 1.6;
    resize: vertical;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-family: inherit;
    background-color: #fafafa;

    &:hover {
      border-color: #d0d0d0;
    }

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      background-color: white;
      box-shadow: 0 0 0 4px rgba(45, 102, 157, 0.1);
    }

    &::placeholder {
      color: #999;
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    max-height: 90vh;
    border-radius: 20px;

    h2 {
      padding: 16px 20px;
      font-size: 16px;
      border-radius: 20px 20px 0 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

export const ModalContent = styled.div`
  padding: 28px;
  overflow-y: auto;
  flex: 1;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 3px;

    &:hover {
      background: rgba(0, 0, 0, 0.25);
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 20px 28px;
  border-top: 1px solid #f0f0f0;
  background: #fafafa;
  border-radius: 0 0 24px 24px;

  @media (max-width: 768px) {
    padding: 16px 20px;
    flex-direction: column-reverse;

    button {
      width: 100%;
      margin: 4px 0;
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.2s ease;
  z-index: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
`

export const ModalHeader = styled.div`
  position: relative;
`
