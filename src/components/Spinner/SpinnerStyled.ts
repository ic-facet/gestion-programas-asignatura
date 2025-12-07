import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.95);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  animation: ${fadeIn} 0.3s ease-out;
`

export const LoadingCircle = styled.div`
  width: 56px;
  height: 56px;
  border: 4px solid rgba(45, 102, 157, 0.1);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${spin} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 4px solid transparent;
    border-top-color: var(--third-color);
    border-radius: 50%;
    animation: ${spin} 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite reverse;
  }

  &.modal-styles {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    border-width: 3px;

    &::before {
      border-width: 3px;
    }
  }
`

export const LoadingText = styled.p`
  font-size: 14px;
  color: #64748b;
  letter-spacing: 0.5px;
  animation: ${pulse} 2s ease-in-out infinite;
  margin: 0;
`

export const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
  animation: ${fadeIn} 0.2s ease-out;
`

interface InlineSpinnerProps {
  $size?: 'small' | 'medium' | 'large'
}

const getSpinnerSize = (size: string = 'medium') => {
  switch (size) {
    case 'small':
      return '20px'
    case 'large':
      return '48px'
    default:
      return '32px'
  }
}

export const InlineSpinner = styled.div<InlineSpinnerProps>`
  width: ${({ $size }) => getSpinnerSize($size)};
  height: ${({ $size }) => getSpinnerSize($size)};
  border: 3px solid rgba(45, 102, 157, 0.15);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  display: inline-block;
`
