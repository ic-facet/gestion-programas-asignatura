import React from 'react'
import styled from 'styled-components'

import { MensajeDeError } from './Formulario'
import { DatosListaSeleccionInterface } from 'constants/constants'

const Container = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin: 8px 0;
`

const Header = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  padding: 14px 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h4`
  font-size: 13px;
  font-weight: 600;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 4px;
    height: 16px;
    background: var(--primary-color);
    border-radius: 2px;
  }
`

const Badge = styled.span`
  background: var(--primary-color);
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`

const ChipsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  min-height: 60px;
`

const Chip = styled.button<{ $selected: boolean; $disabled: boolean }>`
  padding: 10px 16px;
  border-radius: 25px;
  font-size: 13px;
  font-weight: 500;
  cursor: ${props => props.$disabled ? 'default' : 'pointer'};
  transition: all 0.2s ease;
  border: 2px solid ${props => props.$selected ? 'var(--primary-color)' : '#e2e8f0'};
  background: ${props => props.$selected ? 'linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%)' : 'white'};
  color: ${props => props.$selected ? 'white' : '#64748b'};
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    border-color: var(--primary-color);
    transform: ${props => props.$disabled ? 'none' : 'translateY(-1px)'};
    box-shadow: ${props => props.$disabled ? 'none' : '0 4px 12px rgba(45, 102, 157, 0.2)'};
  }

  i {
    font-size: 12px;
  }
`

const EmptyMessage = styled.div`
  color: #94a3b8;
  font-size: 14px;
  text-align: center;
  padding: 20px;
  font-style: italic;
`

interface DoubleSelectionInputInterface {
  titulo: string
  mensajeDeError: string
  handleListChange: (id: number) => void
  datosParaSeleccion: DatosListaSeleccionInterface[]
  modoLectura: boolean
}

const DoubleSelectionInput: React.FC<DoubleSelectionInputInterface> = ({
  titulo,
  mensajeDeError,
  handleListChange,
  datosParaSeleccion,
  modoLectura
}) => {
  const seleccionados = datosParaSeleccion.filter(item => item.seleccionado)
  const itemsToShow = modoLectura ? seleccionados : datosParaSeleccion

  return (
    <Container>
      <Header>
        <Title>{titulo}</Title>
        <Badge>{seleccionados.length} seleccionados</Badge>
      </Header>
      {mensajeDeError && <MensajeDeError>{mensajeDeError}</MensajeDeError>}
      <ChipsContainer>
        {itemsToShow.length === 0 ? (
          <EmptyMessage>No hay elementos seleccionados</EmptyMessage>
        ) : (
          itemsToShow.map((item) => (
            <Chip
              key={item.id}
              $selected={item.seleccionado}
              $disabled={modoLectura}
              onClick={() => !modoLectura && handleListChange(item.id)}
            >
              <i className={item.seleccionado ? 'fas fa-check-circle' : 'far fa-circle'}></i>
              {item.informacion}
            </Chip>
          ))
        )}
      </ChipsContainer>
    </Container>
  )
}

export default DoubleSelectionInput
