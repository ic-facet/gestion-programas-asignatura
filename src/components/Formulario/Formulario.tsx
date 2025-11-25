import styled from 'styled-components'

export const Formulario = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  margin: 20px 0 0;
  justify-content: space-between;
`

export const MensajeDeError = styled.span`
  color: #dc3545;
  max-width: 500px;
  width: 100%;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 500;
  background: #fff5f5;
  border-radius: 6px;
  margin-top: 6px;
  display: block;
`

export const TextAreaLabel = styled.label`
  background-color: var(--primary-color);
  color: white;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.3px;
  border-radius: 8px 8px 0 0;
`

export const TextAreaStyled = styled.textarea`
  border: 2px solid #e0e0e0;
  background-color: #fafafa;
  padding: 12px;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 0 0 8px 8px;
  transition: all 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    background-color: white;
    box-shadow: 0 0 0 3px rgba(45, 102, 157, 0.1);
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`

export const SectionDivider = styled.hr`
  height: 5px;
  width: 90%;
  background-color: var(--secondary-color);
  border: none;
  width: 100%;
  height: auto;
  resize: none;
`

export const TextAreaContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 12px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin: 12px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`

export const LabelContainer = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  margin: 10px auto;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
`

export const InputLabel = styled.label`
  background-color: var(--primary-color);
  color: white;
  width: 30%;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const InputStyled = styled.input`
  border: 2px solid transparent;
  width: 70%;
  background-color: #fafafa;
  padding: 12px 16px;
  color: #333;
  font-size: 14px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    background-color: white;
    box-shadow: 0 0 0 3px rgba(45, 102, 157, 0.1);
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
    color: #666;
  }
`

export const ContenedorLista = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 10px auto;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
`

export const TituloLista = styled.h4`
  background-color: var(--primary-color);
  color: white;
  padding: 5px 10px;
  font-weight: 400;
`

export const Listado = styled.ul`
  border: none;
  width: 100%;
  background-color: #00000022;
  list-style: none;
`

export const Item = styled.li`
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #00000022;
  }
`

export const ModalInputContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 10px auto;
  flex-direction: column;

  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
`

export const SeleccionConModalLabel = styled.label`
  background-color: var(--primary-color);
  color: white;
  padding: 5px 10px;
  width: 100%;
`

export const ModalInputSection = styled.div`
  display: flex;
  width: 100%;
`

export const ModalInput = styled.input`
  width: 80%;
  padding: 5px 10px;
  border: none;
  box-sizing: border-box;
  background-color: #00000022;
`

export const ModalInputButton = styled.button`
  margin: 0;
  box-sizing: border-box;
  color: var(--primary-color);
  background-color: var(--secondary-color);
  width: 20%;
  border: none;
`

export const DoubleSelectionCoulmunsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const ListadoColumna = styled.li`
  border: none;
  width: 100%;
  list-style: none;
`

export const DoubleSelectionCoulumn = styled.div`
  width: 50%;
  background-color: #00000022;

  &.lectura {
    width: 100%;
  }
`

export const TituloColumna = styled(TituloLista)`
  background-color: var(--secondary-color);
  color: var(--primary-color);
`

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  overflow: hidden;
  margin: 8px 0;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`

export const SelectStyled = styled.select`
  color: #333;
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  text-align: left;
  border: 2px solid transparent;
  cursor: pointer;
  background-color: #fafafa;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 16px;
  padding-right: 40px;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    background-color: white;
    box-shadow: 0 0 0 3px rgba(45, 102, 157, 0.1);
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
    color: #666;
  }

  &::placeholder {
    text-transform: uppercase;
    color: #999;
    opacity: 0.9;
  }
`

interface TieneErrorInterface {
  $tieneError: boolean
}

export const InputButtonContainer = styled.div<TieneErrorInterface>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 70%;
  position: relative;
  border: 2px solid ${(props) => (props.$tieneError ? '#dc3545' : 'transparent')};
  border-radius: ${(props) => (props.$tieneError ? '0 8px 8px 0' : '0')};
  transition: border-color 0.3s ease;
`
