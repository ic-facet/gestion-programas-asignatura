import styled, { keyframes, css } from 'styled-components'
import { ToastType } from './Toast'

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`

type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'

const getPositionStyles = (position: Position) => {
  switch (position) {
    case 'top-left':
      return css`
        top: 20px;
        left: 20px;
      `
    case 'bottom-right':
      return css`
        bottom: 20px;
        right: 20px;
      `
    case 'bottom-left':
      return css`
        bottom: 20px;
        left: 20px;
      `
    case 'top-center':
      return css`
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
      `
    case 'bottom-center':
      return css`
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
      `
    default:
      return css`
        top: 20px;
        right: 20px;
      `
  }
}

interface ToastContainerProps {
  $position: Position
}

export const ToastContainer = styled.div<ToastContainerProps>`
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  width: 100%;
  pointer-events: none;

  ${({ $position }) => getPositionStyles($position)}

  @media (max-width: 480px) {
    max-width: calc(100% - 40px);
    left: 20px;
    right: 20px;
    transform: none;
  }
`

const getTypeStyles = (type: ToastType) => {
  switch (type) {
    case 'success':
      return css`
        --toast-color: #10b981;
        --toast-bg: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
        --toast-border: #a7f3d0;
      `
    case 'error':
      return css`
        --toast-color: #ef4444;
        --toast-bg: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
        --toast-border: #fecaca;
      `
    case 'warning':
      return css`
        --toast-color: #f59e0b;
        --toast-bg: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
        --toast-border: #fde68a;
      `
    case 'info':
      return css`
        --toast-color: #3b82f6;
        --toast-bg: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
        --toast-border: #bfdbfe;
      `
  }
}

interface ToastWrapperProps {
  $type: ToastType
  $isExiting: boolean
}

export const ToastWrapper = styled.div<ToastWrapperProps>`
  ${({ $type }) => getTypeStyles($type)}

  background: var(--toast-bg);
  border: 1px solid var(--toast-border);
  border-radius: 16px;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.1),
    0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  pointer-events: auto;
  animation: ${({ $isExiting }) => ($isExiting ? slideOut : slideIn)} 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  position: relative;

  &:hover {
    box-shadow:
      0 12px 48px rgba(0, 0, 0, 0.12),
      0 6px 16px rgba(0, 0, 0, 0.06);
  }
`

export const ToastContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 18px;
`

interface ToastIconProps {
  $type: ToastType
}

export const ToastIcon = styled.div<ToastIconProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
  font-size: 14px;

  ${({ $type }) => {
    switch ($type) {
      case 'success':
        return css`background: linear-gradient(135deg, #10b981 0%, #059669 100%);`
      case 'error':
        return css`background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);`
      case 'warning':
        return css`background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);`
      case 'info':
        return css`background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);`
    }
  }}
`

export const ToastMessage = styled.div`
  flex: 1;
  min-width: 0;
`

export const ToastTitle = styled.h4`
  margin: 0 0 4px 0;
  font-size: 15px;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.3;
`

export const ToastDescription = styled.p`
  margin: 0;
  font-size: 13px;
  color: #6b7280;
  line-height: 1.5;
`

export const ToastCloseButton = styled.button`
  background: transparent;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #6b7280;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--toast-color);
  }

  i {
    font-size: 12px;
  }
`

interface ToastProgressProps {
  $type: ToastType
}

export const ToastProgress = styled.div<ToastProgressProps>`
  height: 3px;
  transition: width 0.1s linear;

  ${({ $type }) => {
    switch ($type) {
      case 'success':
        return css`background: linear-gradient(90deg, #10b981, #34d399);`
      case 'error':
        return css`background: linear-gradient(90deg, #ef4444, #f87171);`
      case 'warning':
        return css`background: linear-gradient(90deg, #f59e0b, #fbbf24);`
      case 'info':
        return css`background: linear-gradient(90deg, #3b82f6, #60a5fa);`
    }
  }}
`
