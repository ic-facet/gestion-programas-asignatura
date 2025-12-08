import React from 'react'
import {
  TIPO_CORRELATIVA,
  LISTADO_SELECCION_TIPOS_CORRELATIVA
} from '../../../../constants/constants'
import { correlativaStyles } from './CorrelativaStyled'
import { Input, Dropdown } from '../../../../components'

interface CorrelativaAsignaturasInterface {
  cantidadAsignaturas: number
  tipo: TIPO_CORRELATIVA
  enCambioTipoCorrelativa: (seleccion: number | string) => void
  enCambioCantidadAsignaturas: (valor: number | string) => void
  enBorradoCorrelativa: () => void
  modoLectura: boolean
}

const CorrelativaCantidad: React.FC<CorrelativaAsignaturasInterface> = ({
  cantidadAsignaturas,
  tipo,
  enCambioCantidadAsignaturas,
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
          id="cantidad"
          type="number"
          name="cantidad"
          mensajeDeError=""
          value={cantidadAsignaturas}
          label="Cantidad asignaturas"
          onChange={enCambioCantidadAsignaturas}
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

export default CorrelativaCantidad
