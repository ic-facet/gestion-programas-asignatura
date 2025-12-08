import React from 'react'
import {
  TIPO_CORRELATIVA,
  LISTADO_SELECCION_TIPOS_CORRELATIVA
} from '../../../../constants/constants'
import { correlativaStyles } from './CorrelativaStyled'
import { Input, Dropdown } from '../../../../components'

interface CorrelativaAsignaturasInterface {
  modulo: string
  tipo: TIPO_CORRELATIVA
  enCambioTipoCorrelativa: (seleccion: number | string) => void
  enCambioModulo: (valor: number | string) => void
  enBorradoCorrelativa: () => void
  modoLectura: boolean
}

const CorrelativaModulo: React.FC<CorrelativaAsignaturasInterface> = ({
  modulo,
  tipo,
  enCambioModulo,
  enBorradoCorrelativa,
  enCambioTipoCorrelativa,
  modoLectura
}) => {
  return (
    <div style={correlativaStyles.container}>
      <div style={correlativaStyles.infoContainer}>
        <Dropdown
          name="tipoCorrelativa"
          value={tipo.valueOf()}
          error=""
          label="Tipo de Correlativa"
          choices={LISTADO_SELECCION_TIPOS_CORRELATIVA}
          onChange={enCambioTipoCorrelativa}
          modoLectura={modoLectura}
        />
      </div>
      <div style={correlativaStyles.infoContainer}>
        <Input
          id="modulo"
          type="text"
          name="modulo"
          mensajeDeError=""
          value={modulo}
          label="Módulo"
          onChange={enCambioModulo}
          modoLectura={modoLectura}
        />
      </div>
      {!modoLectura && (
        <button style={correlativaStyles.deleteButton} onClick={enBorradoCorrelativa}>
          <i className="fas fa-solid fa-trash" />
        </button>
      )}
    </div>
  )
}

export default CorrelativaModulo
