import React, { useState } from 'react'

import {
  ProgramaAsignaturaInterface,
  ProgramaAsignaturaErrores,
  Correlativa
} from '../../../interfaces/interfaces'
import {
  TIPO_CORRELATIVA,
  REQUISITOS_CORRELATIVA,
  DatoListaInterface,
  MODOS_PROGRAMA_ASIGNATURA,
  ASIGNATURA_VACIA
} from '../../../constants/constants'
import { MensajeDeError, Modal } from '../../../components'
import {
  CorrelativaAsignaturas,
  CorrelativaCantidad,
  CorrelativaModulo
} from './ObjetosListaCorrelativas'
import { concat } from 'lodash'

const styles = {
  sectionContainer: {
    width: '90%',
    maxWidth: '1200px',
    marginBottom: '24px',
    background: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden'
  } as React.CSSProperties,
  sectionHeader: {
    width: '100%',
    background: 'linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%)',
    padding: '18px 24px',
    textAlign: 'center' as const,
    position: 'relative' as const,
    boxSizing: 'border-box' as const
  } as React.CSSProperties,
  sectionTitle: {
    color: 'white',
    fontSize: '16px',
    margin: 0,
    fontWeight: 600,
    letterSpacing: '1.2px',
    textTransform: 'uppercase' as const
  } as React.CSSProperties,
  contentSection: {
    padding: '24px 32px 32px',
    boxSizing: 'border-box' as const
  } as React.CSSProperties,
  correlativasList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
    marginBottom: '16px'
  } as React.CSSProperties,
  addButton: {
    width: '100%',
    padding: '14px 20px',
    border: '2px dashed #cbd5e1',
    borderRadius: '12px',
    background: '#f8fafc',
    color: 'var(--primary-color)',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  } as React.CSSProperties,
  addButtonDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed'
  } as React.CSSProperties,
  modalContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
    padding: '8px 0'
  } as React.CSSProperties,
  modalOption: {
    width: '100%',
    padding: '16px 20px',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    background: 'white',
    color: '#374151',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textAlign: 'left' as const
  } as React.CSSProperties,
  emptyState: {
    textAlign: 'center' as const,
    padding: '32px 20px',
    color: '#64748b',
    fontSize: '14px',
    background: '#f8fafc',
    borderRadius: '12px',
    border: '1px dashed #cbd5e1',
    marginBottom: '16px'
  } as React.CSSProperties
}

interface SeccionCorrelativasProps {
  programaAsignatura: ProgramaAsignaturaInterface
  setProgramaAsignatura: (
    programaAsignatura: ProgramaAsignaturaInterface
  ) => void
  modoProgramaAsignatura: string
  erroresSeccionCorrelativas: ProgramaAsignaturaErrores
  asignaturasDisponibles: DatoListaInterface[]
}

const SeccionCorrelativas: React.FC<SeccionCorrelativasProps> = ({
  programaAsignatura,
  setProgramaAsignatura,
  modoProgramaAsignatura,
  erroresSeccionCorrelativas,
  asignaturasDisponibles
}) => {
  const { correlativas } = programaAsignatura
  const [modalSeleccionAbierto, setModalSeleccionAbierto] =
    useState<boolean>(false)

  const asignaturasCorrelativasDisponibles = concat(
    [ASIGNATURA_VACIA],
    asignaturasDisponibles
  )

  const NUEVO_CORRELATIVA_ASIGNATURA: Correlativa = {
    id: null,
    requisito: REQUISITOS_CORRELATIVA.ASIGNATURA,
    tipo: TIPO_CORRELATIVA.NO_SELECCIONADO,
    asignatura: ASIGNATURA_VACIA
  }

  const NUEVO_CORRELATIVA_CANTIDAD: Correlativa = {
    id: null,
    requisito: REQUISITOS_CORRELATIVA.CANTIDAD_ASIGNATURAS,
    tipo: TIPO_CORRELATIVA.NO_SELECCIONADO,
    cantidadAsignaturas: 0
  }

  const NUEVA_CORRELATIVA_MODULO: Correlativa = {
    id: null,
    requisito: REQUISITOS_CORRELATIVA.MODULO,
    tipo: TIPO_CORRELATIVA.NO_SELECCIONADO,
    modulo: ''
  }

  const modoLectura =
    modoProgramaAsignatura === MODOS_PROGRAMA_ASIGNATURA.VER ||
    modoProgramaAsignatura === MODOS_PROGRAMA_ASIGNATURA.REVISAR

  const handleSeleccionarCorrelativaAsignatura = (
    indice: number,
    asignaturaSeleccionada: number | string
  ) => {
    var correlativasModificadas = correlativas
    const objetoAsignaturaSeleccionada = asignaturasDisponibles.find(
      (dato) => dato.id == asignaturaSeleccionada
    )

    correlativasModificadas[indice] = {
      ...correlativasModificadas[indice],
      asignatura: objetoAsignaturaSeleccionada || ASIGNATURA_VACIA
    }

    setProgramaAsignatura({
      ...programaAsignatura,
      correlativas: correlativasModificadas
    })
  }

  const enCambioTipoCorrelativa = (
    indice: number,
    tipoCorrelativa: string | number
  ) => {
    const tipoSeleccionado =
      tipoCorrelativa === TIPO_CORRELATIVA.NO_SELECCIONADO
        ? TIPO_CORRELATIVA.NO_SELECCIONADO
        : tipoCorrelativa === TIPO_CORRELATIVA.APROBADO
          ? TIPO_CORRELATIVA.APROBADO
          : TIPO_CORRELATIVA.REGULAR

    var correlativasModificadas = correlativas
    correlativasModificadas[indice] = {
      ...correlativasModificadas[indice],
      tipo: tipoSeleccionado
    }

    setProgramaAsignatura({
      ...programaAsignatura,
      correlativas: correlativasModificadas
    })
  }

  const handleBorrarCorrelativa = (indice: number) => {
    var nuevasCorrelativas = correlativas
    nuevasCorrelativas.splice(indice, 1)
    setProgramaAsignatura({
      ...programaAsignatura,
      correlativas: nuevasCorrelativas
    })
  }

  const handleAgregarCorrelativa = () => {
    setModalSeleccionAbierto(true)
  }

  const handleCerrarModal = () => {
    setModalSeleccionAbierto(false)
  }

  const handleSeleccionRequisitoCorrelativa = (
    requisito: REQUISITOS_CORRELATIVA
  ) => {
    var correlativasModificadas = correlativas

    if (requisito === REQUISITOS_CORRELATIVA.ASIGNATURA) {
      correlativasModificadas.push(NUEVO_CORRELATIVA_ASIGNATURA)
    }
    if (requisito === REQUISITOS_CORRELATIVA.MODULO) {
      correlativasModificadas.push(NUEVA_CORRELATIVA_MODULO)
    }
    if (requisito === REQUISITOS_CORRELATIVA.CANTIDAD_ASIGNATURAS) {
      correlativasModificadas.push(NUEVO_CORRELATIVA_CANTIDAD)
    }
    setProgramaAsignatura({
      ...programaAsignatura,
      correlativas: correlativasModificadas
    })
    handleCerrarModal()
  }

  const handleModificarCantidadAsignaturas = (
    indice: number,
    cantidad: string | number
  ) => {
    var cantidadNueva = undefined
    if (typeof cantidad === 'string') {
      cantidadNueva = parseInt(cantidad) || 0
    } else {
      cantidadNueva = cantidad
    }

    var correlativasModificadas = correlativas
    correlativasModificadas[indice] = {
      ...correlativasModificadas[indice],
      cantidadAsignaturas: cantidadNueva
    }

    setProgramaAsignatura({
      ...programaAsignatura,
      correlativas: correlativasModificadas
    })
  }

  const handleModificarModulo = (indice: number, modulo: string | number) => {
    var correlativasModificadas = correlativas
    correlativasModificadas[indice] = {
      ...correlativasModificadas[indice],
      modulo: modulo.toString()
    }

    setProgramaAsignatura({
      ...programaAsignatura,
      correlativas: correlativasModificadas
    })
  }

  return (
    <section style={styles.sectionContainer}>
      <Modal
        open={modalSeleccionAbierto}
        onClose={handleCerrarModal}
        modalTitle="Seleccionar tipo de correlativa"
      >
        <div style={styles.modalContent}>
          <button
            style={styles.modalOption}
            onClick={() =>
              handleSeleccionRequisitoCorrelativa(
                REQUISITOS_CORRELATIVA.ASIGNATURA
              )
            }
          >
            Asignatura aprobada o regular
          </button>
          <button
            style={styles.modalOption}
            onClick={() =>
              handleSeleccionRequisitoCorrelativa(
                REQUISITOS_CORRELATIVA.CANTIDAD_ASIGNATURAS
              )
            }
          >
            Numero de asignaturas aprobadas/regulares
          </button>
          <button
            style={styles.modalOption}
            onClick={() =>
              handleSeleccionRequisitoCorrelativa(REQUISITOS_CORRELATIVA.MODULO)
            }
          >
            Modulo aprobado o regular
          </button>
        </div>
      </Modal>
      <div style={styles.sectionHeader}>
        <h3 style={styles.sectionTitle}>Correlativas</h3>
      </div>
      <div style={styles.contentSection}>
        {correlativas.length === 0 && modoLectura && (
          <div style={styles.emptyState}>No hay correlativas registradas</div>
        )}
        <div style={styles.correlativasList}>
          {correlativas.map((correlativa, index) => {
            if (correlativa.requisito === REQUISITOS_CORRELATIVA.ASIGNATURA) {
              return (
                <CorrelativaAsignaturas
                  modoLectura={modoLectura}
                  key={`${programaAsignatura.id}${correlativa.id}`}
                  tipo={correlativa.tipo}
                  asignaturasDisponibles={asignaturasCorrelativasDisponibles}
                  asignaturaSeleccionada={
                    correlativa.asignatura || ASIGNATURA_VACIA
                  }
                  enCambioAsignaturaSeleccionada={(seleccion: number | string) =>
                    handleSeleccionarCorrelativaAsignatura(index, seleccion)
                  }
                  enBorradoCorrelativa={() => handleBorrarCorrelativa(index)}
                  enCambioTipoCorrelativa={(seleccion) =>
                    enCambioTipoCorrelativa(index, seleccion)
                  }
                />
              )
            }

            if (
              correlativa.requisito === REQUISITOS_CORRELATIVA.CANTIDAD_ASIGNATURAS
            ) {
              return (
                <CorrelativaCantidad
                  key={`${programaAsignatura.id}${correlativa.id}`}
                  cantidadAsignaturas={correlativa.cantidadAsignaturas || 0}
                  tipo={correlativa.tipo}
                  enCambioCantidadAsignaturas={(valor) =>
                    handleModificarCantidadAsignaturas(index, valor)
                  }
                  enBorradoCorrelativa={() => handleBorrarCorrelativa(index)}
                  enCambioTipoCorrelativa={(seleccion) =>
                    enCambioTipoCorrelativa(index, seleccion)
                  }
                  modoLectura={modoLectura}
                />
              )
            }

            if (correlativa.requisito === REQUISITOS_CORRELATIVA.MODULO)
              return (
                <CorrelativaModulo
                  key={`${programaAsignatura.id}${correlativa.id}`}
                  modulo={correlativa.modulo || ''}
                  tipo={correlativa.tipo}
                  enCambioModulo={(modulo) => handleModificarModulo(index, modulo)}
                  enBorradoCorrelativa={() => handleBorrarCorrelativa(index)}
                  enCambioTipoCorrelativa={(seleccion) =>
                    enCambioTipoCorrelativa(index, seleccion)
                  }
                  modoLectura={modoLectura}
                />
              )
          })}
        </div>
        <MensajeDeError>{erroresSeccionCorrelativas.correlativas}</MensajeDeError>
        {!modoLectura && (
          <button
            onClick={handleAgregarCorrelativa}
            disabled={modoLectura}
            style={{
              ...styles.addButton,
              ...(modoLectura ? styles.addButtonDisabled : {})
            }}
          >
            + Agregar correlativa
          </button>
        )}
      </div>
    </section>
  )
}

export default SeccionCorrelativas
