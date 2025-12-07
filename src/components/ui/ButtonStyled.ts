import styled, { css, keyframes } from 'styled-components'

interface StyledButtonProps {
  $variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline' | 'ghost'
  $size?: 'small' | 'medium' | 'large'
  $loading?: boolean
  $fullWidth?: boolean
  $iconOnly?: boolean
}

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`

const getVariantStyles = (variant: string = 'primary') => {
  switch (variant) {
    case 'secondary':
      return css`
        background: linear-gradient(135deg, var(--secondary-color) 0%, var(--third-color) 100%);
        color: var(--primary-color);
        &:hover:not(:disabled) {
          background: linear-gradient(135deg, var(--third-color) 0%, var(--secondary-color) 100%);
          box-shadow: 0 8px 25px rgba(45, 102, 157, 0.25);
        }
      `
    case 'danger':
      return css`
        background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
        color: white;
        &:hover:not(:disabled) {
          background: linear-gradient(135deg, #e04555 0%, #dc3545 100%);
          box-shadow: 0 8px 25px rgba(220, 53, 69, 0.35);
        }
      `
    case 'success':
      return css`
        background: linear-gradient(135deg, #28a745 0%, #218838 100%);
        color: white;
        &:hover:not(:disabled) {
          background: linear-gradient(135deg, #34c759 0%, #28a745 100%);
          box-shadow: 0 8px 25px rgba(40, 167, 69, 0.35);
        }
      `
    case 'outline':
      return css`
        background: transparent;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
        &:hover:not(:disabled) {
          background: var(--primary-color);
          color: white;
          box-shadow: 0 8px 25px rgba(45, 102, 157, 0.25);
        }
      `
    case 'ghost':
      return css`
        background: transparent;
        color: var(--primary-color);
        box-shadow: none;
        &:hover:not(:disabled) {
          background: rgba(45, 102, 157, 0.08);
          box-shadow: none;
        }
      `
    default:
      return css`
        background: linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%);
        color: white;
        &:hover:not(:disabled) {
          background: linear-gradient(135deg, #3d7ab8 0%, var(--primary-color) 100%);
          box-shadow: 0 8px 25px rgba(45, 102, 157, 0.35);
        }
      `
  }
}

const getSizeStyles = (size: string = 'medium') => {
  switch (size) {
    case 'small':
      return css`
        padding: 10px 18px;
        font-size: 12px;
        border-radius: 10px;
      `
    case 'large':
      return css`
        padding: 18px 36px;
        font-size: 16px;
        border-radius: 16px;
      `
    default:
      return css`
        padding: 14px 28px;
        font-size: 14px;
        border-radius: 12px;
      `
  }
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ $variant }) => getVariantStyles($variant)}
  ${({ $size }) => getSizeStyles($size)}

  border: none;
  margin: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
    margin: 8px 0;
  `}

  ${({ $iconOnly, $size }) => $iconOnly && css`
    padding: ${$size === 'small' ? '10px' : $size === 'large' ? '18px' : '14px'};
    border-radius: 50%;
    aspect-ratio: 1;
  `}

  /* Ripple effect */
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 60%);
    transform: scale(0);
    opacity: 0;
    pointer-events: none;
  }

  &:active::after {
    animation: ${ripple} 0.6s ease-out;
  }

  /* Shine effect on hover */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
    pointer-events: none;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover:not(:disabled) {
    transform: translateY(-3px);
  }

  &:active:not(:disabled) {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(45, 102, 157, 0.3), 0 4px 15px rgba(0, 0, 0, 0.12);
  }

  &:focus:not(:focus-visible) {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(45, 102, 157, 0.4), 0 4px 15px rgba(0, 0, 0, 0.12);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    background: #e0e0e0;
    color: #888;

    &::before, &::after {
      display: none;
    }
  }

  ${({ $loading }) => $loading && css`
    pointer-events: none;
    color: transparent;

    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border: 2px solid transparent;
      border-top-color: currentColor;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      color: white;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `}

  @media (max-width: 768px) {
    ${({ $fullWidth }) => !$fullWidth && css`
      width: auto;
    `}
    margin: 6px;
    padding: 12px 20px;
    font-size: 13px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &::before, &::after {
      animation: none;
    }
  }
`

export const CloseModalButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
`

export const SumarTextArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
