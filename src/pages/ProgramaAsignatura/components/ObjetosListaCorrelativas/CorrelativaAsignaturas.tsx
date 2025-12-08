import React from 'react'
import {
  DatoListaInterface,
  TIPO_CORRELATIVA,
  LISTADO_SELECCION_TIPOS_CORRELATIVA
} from '../../../../constants/constants'
import { correlativaStyles } from './CorrelativaStyled'
import { Dropdown, Input } from '../../../../components'

interface CorrelativaAsignaturasInterface {
  asignaturaSeleccionada: DatoListaInterface
  tipo: TIPO_CORRELATIVA
  asignaturasDisponibles: DatoListaInterface[]
  enCambioTipoCorrelativa: (seleccion: string | number) => void
  enCambioAsignaturaSeleccionada: (seleccion: number | string) => void
  enBorradoCorrelativa: () => void
  modoLectura: boolean
}

const CorrelativaAsignaturas: React.FC<CorrelativaAsignaturasInterface> = ({
  asignaturaSeleccionada,
  tipo,
  asignaturasDisponibles,
  enCambioAsignaturaSeleccionada,
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
        {modoLectura ? (
          <Input
            id="Asignatura"
            type="text"
            name="Asignatura"
            mensajeDeError=""
            value={asignaturaSeleccionada.informacion}
            label="Asignatura"
            onChange={() => {}}
            modoLectura={modoLectura}
          />
        ) : (
          <Dropdown
            name="Asignatura"
            value={asignaturaSeleccionada.id}
            error=""
            label="Asignatura"
            choices={asignaturasDisponibles}
            onChange={enCambioAsignaturaSeleccionada}
            modoLectura={modoLectura}
          />
        )}
      </div>
      {!modoLectura && (
        <button style={correlativaStyles.deleteButton} onClick={enBorradoCorrelativa}>
          <i className="fas fa-solid fa-trash" />
        </button>
      )}
    </div>
  )
}

export default CorrelativaAsignaturas
