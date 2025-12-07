import styled, { css, keyframes } from 'styled-components'

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
  20%, 40%, 60%, 80% { transform: translateX(4px); }
`

export const Formulario = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  margin: 24px 0 0;
  justify-content: space-between;
  gap: 8px;
`

export const MensajeDeError = styled.span`
  color: #dc3545;
  max-width: 500px;
  width: 100%;
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 500;
  background: linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%);
  border-radius: 10px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-left: 4px solid #dc3545;
  animation: ${shake} 0.5s ease-in-out;

  &::before {
    content: '\f071';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    font-size: 12px;
  }
`

export const TextAreaLabel = styled.label`
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%);
  color: white;
  padding: 14px 20px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.4px;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  gap: 10px;

  i {
    opacity: 0.8;
  }
`

export const TextAreaStyled = styled.textarea`
  border: 2px solid #e8e8e8;
  background-color: #fafafa;
  padding: 16px;
  font-size: 14px;
  line-height: 1.7;
  border-radius: 0 0 12px 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  resize: vertical;
  min-height: 100px;
  font-family: inherit;

  &::placeholder {
    color: #9ca3af;
  }

  &:hover:not(:disabled) {
    border-color: #d0d0d0;
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    background-color: white;
    box-shadow: 0 0 0 4px rgba(45, 102, 157, 0.1);
  }

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
    color: #888;
    border-color: #e0e0e0;
  }
`

export const SectionDivider = styled.hr`
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, transparent, var(--secondary-color), transparent);
  border: none;
  margin: 24px 0;
  opacity: 0.6;
`

interface ContainerProps {
  $isFocused?: boolean
  $hasError?: boolean
}

export const TextAreaContainer = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 14px auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;

  ${({ $hasError }) => $hasError && css`
    border-color: #dc3545;
    box-shadow: 0 4px 16px rgba(220, 53, 69, 0.15);
  `}

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  &:focus-within {
    box-shadow: 0 8px 24px rgba(45, 102, 157, 0.15);
    border-color: var(--primary-color);
  }
`

export const InputContainer = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin: 14px auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;

  ${({ $hasError }) => $hasError && css`
    border-color: #dc3545;
    box-shadow: 0 4px 16px rgba(220, 53, 69, 0.15);
  `}

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  &:focus-within {
    box-shadow: 0 8px 24px rgba(45, 102, 157, 0.15);
    border-color: var(--primary-color);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const LabelContainer = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  margin: 12px auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`

export const InputLabel = styled.label`
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%);
  color: white;
  width: 30%;
  min-width: 150px;
  padding: 14px 20px;
  font-weight: 600;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.3px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    bottom: 20%;
    width: 1px;
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;

    &::after {
      display: none;
    }
  }
`

export const InputStyled = styled.input`
  border: none;
  width: 70%;
  background-color: #fafafa;
  padding: 14px 18px;
  color: #333;
  font-size: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;

  &::placeholder {
    color: #9ca3af;
  }

  &:hover:not(:disabled) {
    background-color: #f5f5f5;
  }

  &:focus {
    outline: none;
    background-color: white;
  }

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
    color: #888;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContenedorLista = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 14px auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  &:focus-within {
    box-shadow: 0 8px 24px rgba(45, 102, 157, 0.15);
    border-color: var(--primary-color);
  }
`

export const TituloLista = styled.h4`
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%);
  color: white;
  padding: 14px 20px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.3px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '';
    width: 4px;
    height: 18px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 2px;
  }
`

export const Listado = styled.ul`
  border: none;
  width: 100%;
  background-color: #fafafa;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 300px;
  overflow-y: auto;

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
`

export const Item = styled.li`
  padding: 14px 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 12px;
  color: #374151;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--secondary-color);
    transition: all 0.2s ease;
  }

  &:hover {
    background-color: #e0f2fe;
    color: var(--primary-color);
    padding-left: 24px;

    &::before {
      background: var(--primary-color);
      transform: scale(1.2);
    }
  }

  &:active {
    background-color: #bae6fd;
    transform: scale(0.99);
  }
`

export const ModalInputContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 14px auto;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  &:focus-within {
    box-shadow: 0 8px 24px rgba(45, 102, 157, 0.15);
    border-color: var(--primary-color);
  }
`

export const SeleccionConModalLabel = styled.label`
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%);
  color: white;
  padding: 14px 20px;
  width: 100%;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.3px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ModalInputSection = styled.div`
  display: flex;
  width: 100%;
`

export const ModalInput = styled.input`
  width: calc(100% - 56px);
  padding: 14px 18px;
  border: none;
  box-sizing: border-box;
  background-color: #fafafa;
  font-size: 14px;
  color: #374151;
  transition: all 0.2s ease;

  &:disabled {
    background-color: #f0f0f0;
    color: #6b7280;
  }

  &::placeholder {
    color: #9ca3af;
  }
`

export const ModalInputButton = styled.button`
  margin: 0;
  box-sizing: border-box;
  color: white;
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%);
  width: 56px;
  min-width: 56px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: linear-gradient(135deg, #3d7ab8 0%, var(--primary-color) 100%);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background: #e0e0e0;
    color: #888;
    cursor: not-allowed;
    transform: none;
  }
`

export const DoubleSelectionCoulmunsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 200px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ListadoColumna = styled.ul`
  border: none;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  min-height: 150px;
  max-height: 300px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 3px;
  }
`

export const DoubleSelectionCoulumn = styled.div`
  width: 50%;
  background-color: #fafafa;
  transition: all 0.3s ease;

  &:first-child {
    border-right: 2px solid rgba(0, 0, 0, 0.05);
  }

  &.lectura {
    width: 100%;
    border-right: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;

    &:first-child {
      border-right: none;
      border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    }
  }
`

export const TituloColumna = styled.h5`
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--third-color) 100%);
  color: var(--primary-color);
  padding: 12px 16px;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.3px;
  margin: 0;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary-color);
  }
`

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  overflow: hidden;
  margin: 14px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  &:focus-within {
    box-shadow: 0 8px 24px rgba(45, 102, 157, 0.15);
    border-color: var(--primary-color);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const SelectStyled = styled.select`
  color: #374151;
  width: 100%;
  padding: 14px 18px;
  font-size: 14px;
  text-align: left;
  border: none;
  cursor: pointer;
  background-color: #fafafa;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%232d669d' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 16px center;
  background-repeat: no-repeat;
  background-size: 18px;
  padding-right: 48px;
  font-family: inherit;

  &:hover:not(:disabled) {
    background-color: #f5f5f5;
  }

  &:focus {
    outline: none;
    background-color: white;
  }

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
    color: #888;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23888' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  }

  option {
    padding: 12px;
    background: white;
    color: #374151;

    &:checked {
      background: var(--secondary-color);
      color: var(--primary-color);
    }
  }
`

interface TieneErrorInterface {
  $tieneError: boolean
}

export const InputButtonContainer = styled.div<TieneErrorInterface>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  overflow: hidden;
  width: 70%;
  position: relative;
  background-color: #fafafa;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${(props) => props.$tieneError && css`
    background-color: #fef2f2;

    &::after {
      content: '';
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='0 0 20 20'%3e%3cpath fill-rule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z' clip-rule='evenodd'/%3e%3c/svg%3e");
      background-size: contain;
      pointer-events: none;
    }
  `}

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
  color: #9ca3af;
  text-align: center;
  gap: 12px;

  i {
    font-size: 32px;
    opacity: 0.5;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 20px;
  background: var(--secondary-color);
  color: var(--primary-color);
  margin-left: auto;
`

export const HelperText = styled.span`
  display: block;
  font-size: 12px;
  color: #6b7280;
  padding: 8px 20px;
  background: #f9fafb;
  border-top: 1px solid rgba(0, 0, 0, 0.05);

  i {
    margin-right: 6px;
    opacity: 0.6;
  }
`
