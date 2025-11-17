import styled, { css } from 'styled-components'

interface StyledButtonProps {
  $variant?: 'primary' | 'secondary' | 'danger' | 'success'
  $size?: 'small' | 'medium' | 'large'
}

const getVariantStyles = (variant: string = 'primary') => {
  switch (variant) {
    case 'secondary':
      return css`
        background: var(--secondary-color);
        color: var(--primary-color);
        &:hover {
          background: var(--third-color);
        }
      `
    case 'danger':
      return css`
        background: #dc3545;
        color: white;
        &:hover {
          background: #c82333;
        }
      `
    case 'success':
      return css`
        background: #28a745;
        color: white;
        &:hover {
          background: #218838;
        }
      `
    default:
      return css`
        background: var(--primary-color);
        color: white;
        &:hover {
          background: var(--dark-color);
        }
      `
  }
}

const getSizeStyles = (size: string = 'medium') => {
  switch (size) {
    case 'small':
      return css`
        padding: 8px 16px;
        font-size: 13px;
      `
    case 'large':
      return css`
        padding: 16px 32px;
        font-size: 18px;
      `
    default:
      return css`
        padding: 12px 24px;
        font-size: 15px;
      `
  }
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ $variant }) => getVariantStyles($variant)}
  ${({ $size }) => getSizeStyles($size)}

  border: none;
  border-radius: 12px;
  margin: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-transform: uppercase;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 8px 0;
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
