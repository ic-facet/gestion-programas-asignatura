import React, { useEffect, useState } from 'react'

import {
  SeleccionConModal,
  Button,
  DoubleSelectionInput
} from '../../../components'
import {
  ProgramaAsignaturaInterface,
  ProgramaAsignaturaErrores
} from '../../../interfaces/interfaces'
import {
  MODOS_PROGRAMA_ASIGNATURA,
  DatosListaSeleccionInterface
} from '../../../constants/constants'

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
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    marginBottom: '24px'
  } as React.CSSProperties,
  descriptoresSection: {
    marginTop: '8px'
  } as React.CSSProperties,
  resultadoTextArea: {
    width: '100%',
    padding: '14px 16px',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '14px',
    lineHeight: 1.6,
    fontFamily: 'inherit',
    resize: 'vertical' as const,
    minHeight: '80px',
    transition: 'all 0.2s ease',
    background: '#fafafa',
    marginBottom: '12px',
    boxSizing: 'border-box' as const,
    outline: 'none'
  } as React.CSSProperties,
  textareaDisabled: {
    background: '#f1f5f9',
    color: '#64748b',
    cursor: 'not-allowed'
  } as React.CSSProperties,
  radioGroupContainer: {
    background: 'white',
    borderRadius: '12px',
    padding: '16px 20px',
    marginBottom: '12px',
    border: '1px solid #e2e8f0',
    transition: 'all 0.2s ease'
  } as React.CSSProperties,
  radioGroupLabel: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 600,
    color: '#374151',
    marginBottom: '12px'
  } as React.CSSProperties,
  radioOptionsRow: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '8px'
  } as React.CSSProperties,
  radioOption: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 14px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    background: '#f1f5f9',
    color: '#64748b',
    border: '2px solid transparent'
  } as React.CSSProperties,
  radioOptionChecked: {
    background: 'linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%)',
    color: 'white',
    border: '2px solid var(--primary-color)'
  } as React.CSSProperties,
  radioOptionDisabled: {
    cursor: 'not-allowed'
  } as React.CSSProperties,
  hiddenInput: {
    display: 'none'
  } as React.CSSProperties,
  addButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '8px'
  } as React.CSSProperties
}

interface SeccionDescriptoresProps {
  programaAsignatura: ProgramaAsignaturaInterface
  setProgramaAsignatura: (
    programaAsignatura: ProgramaAsignaturaInterface
  ) => void
  modoProgramaAsignatura: string
  erroresPrograma: ProgramaAsignaturaErrores
}

export default function SeccionDescriptores({
  programaAsignatura,
  setProgramaAsignatura,
  modoProgramaAsignatura,
  erroresPrograma
}: SeccionDescriptoresProps) {
  const { descriptores } = programaAsignatura
  const modoLectura =
    modoProgramaAsignatura === MODOS_PROGRAMA_ASIGNATURA.VER ||
    modoProgramaAsignatura === MODOS_PROGRAMA_ASIGNATURA.REVISAR

  const datosListaSeleccionDescriptores: DatosListaSeleccionInterface[] =
    descriptores.descriptores.map((descriptor) => {
      return {
        id: descriptor.id,
        informacion: descriptor.nombre,
        seleccionado: descriptor.seleccionado
      }
    })

  const [cantidadEjesTransversales, setCantidadEjesTransversales] =
    useState<number>(0)
  const [cantidadActividadesReservadas, setCantidadActividadesReservadas] =
    useState<number>(0)

  useEffect(() => {
    const cantidadActividades = descriptores.actividadesReservadas.filter(
      (item) => item.nivel !== 0
    ).length

    const cantidadEjes = descriptores.ejesTransversales.filter(
      (item) => item.nivel !== 0
    ).length

    setCantidadActividadesReservadas(cantidadActividades)
    setCantidadEjesTransversales(cantidadEjes)
  }, [descriptores])

  const handleResultadosAprendizajeChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const { value } = e.target

    const resultadosAprendizaje = [
      ...programaAsignatura.descriptores.resultadosAprendizaje
    ]
    resultadosAprendizaje[index] = value

    setProgramaAsignatura({
      ...programaAsignatura,
      descriptores: {
        ...programaAsignatura.descriptores,
        resultadosAprendizaje: resultadosAprendizaje
      }
    })
  }

  const resultadosAprendizajeCount = () => {
    const resultadosAprendizaje =
      programaAsignatura.descriptores.resultadosAprendizaje || []

    return resultadosAprendizaje.filter((item) => item !== '').length || 0
  }

  const aniadirResultadoAprendizaje = () => {
    setProgramaAsignatura({
      ...programaAsignatura,
      descriptores: {
        ...programaAsignatura.descriptores,

        resultadosAprendizaje: [
          ...programaAsignatura.descriptores.resultadosAprendizaje,
          ''
        ]
      }
    })
  }

  const abrirModalResultados = () => {
    const resultadosAprendizaje: string[] =
      descriptores.resultadosAprendizaje || []
    const resultadosAprendizajeLimpios = resultadosAprendizaje.filter(
      (item) => item !== ''
    )
    if (resultadosAprendizajeLimpios.length === 0)
      resultadosAprendizajeLimpios.push('')

    setProgramaAsignatura({
      ...programaAsignatura,
      descriptores: {
        ...programaAsignatura.descriptores,

        resultadosAprendizaje: resultadosAprendizajeLimpios
      }
    })
  }

  const handleEjeTransversalChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target

    const ejesTransversales = [...descriptores.ejesTransversales]
    ejesTransversales[index].nivel = parseInt(value)

    setProgramaAsignatura({
      ...programaAsignatura,
      descriptores: {
        ...programaAsignatura.descriptores,

        ejesTransversales
      }
    })
  }

  const handleDescriptorChange = (id: number) => {
    if (modoLectura) return
    const descriptores = [...programaAsignatura.descriptores.descriptores]
    const descriptor = descriptores.find((descriptor) => descriptor.id === id)
    if (descriptor) descriptor.seleccionado = !descriptor.seleccionado

    setProgramaAsignatura({
      ...programaAsignatura,
      descriptores: {
        ...programaAsignatura.descriptores,

        descriptores
      }
    })
  }

  const handleActividadReservadaChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target
    const actividadesReservadas = [...descriptores.actividadesReservadas]
    actividadesReservadas[index].nivel = parseInt(value)

    setProgramaAsignatura({
      ...programaAsignatura,
      descriptores: {
        ...programaAsignatura.descriptores,
        actividadesReservadas
      }
    })
  }

  const getRadioStyle = (checked: boolean, disabled: boolean) => ({
    ...styles.radioOption,
    ...(checked ? styles.radioOptionChecked : {}),
    ...(disabled ? styles.radioOptionDisabled : {})
  })

  return (
    <section style={styles.sectionContainer}>
      <div style={styles.sectionHeader}>
        <h3 style={styles.sectionTitle}>Información Específica</h3>
      </div>
      <div style={styles.contentSection}>
        <div style={styles.cardsGrid}>
          <SeleccionConModal
            className="resultadosAprendizaje"
            onOpenModal={abrirModalResultados}
            name="resultados-aprendizaje"
            valorInput={resultadosAprendizajeCount()}
            mensajeDeError={erroresPrograma.descriptores.resultadosAprendizaje}
            isDisabled={modoLectura}
            tituloModal="Resultados de Aprendizaje"
          >
            {descriptores.resultadosAprendizaje.map((resultado, index) => (
              <div key={index}>
                <textarea
                  value={resultado}
                  onChange={(e) => handleResultadosAprendizajeChange(e, index)}
                  rows={2}
                  disabled={modoLectura}
                  placeholder="Ingrese el resultado de aprendizaje..."
                  style={{
                    ...styles.resultadoTextArea,
                    ...(modoLectura ? styles.textareaDisabled : {})
                  }}
                />
                {index === descriptores.resultadosAprendizaje.length - 1 && (
                  <div style={styles.addButtonContainer}>
                    <Button
                      text="+"
                      onClick={aniadirResultadoAprendizaje}
                      disabled={modoLectura}
                      size="small"
                    />
                  </div>
                )}
              </div>
            ))}
          </SeleccionConModal>

          <SeleccionConModal
            name="ejes-transversales"
            valorInput={cantidadEjesTransversales}
            mensajeDeError={erroresPrograma.descriptores.ejesTransversales}
            isDisabled={modoLectura}
            className="resultadosAprendizaje"
            tituloModal="Ejes Transversales"
          >
            {descriptores.ejesTransversales.map((eje, index) => (
              <div key={index} style={styles.radioGroupContainer}>
                <label style={styles.radioGroupLabel}>{eje.nombre}</label>
                <div style={styles.radioOptionsRow}>
                  {[
                    { value: 0, label: 'Nada' },
                    { value: 1, label: 'Bajo' },
                    { value: 2, label: 'Medio' },
                    { value: 3, label: 'Alto' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      style={getRadioStyle(eje.nivel === option.value, modoLectura)}
                    >
                      <input
                        type="radio"
                        name={eje.nombre}
                        value={option.value}
                        checked={eje.nivel === option.value}
                        onChange={(e) => handleEjeTransversalChange(e, index)}
                        disabled={modoLectura}
                        style={styles.hiddenInput}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </SeleccionConModal>

          <SeleccionConModal
            name="actividades-reservadas"
            valorInput={cantidadActividadesReservadas}
            className="resultadosAprendizaje"
            mensajeDeError={erroresPrograma.descriptores.actividadesReservadas}
            isDisabled={modoLectura}
            tituloModal="Actividades Reservadas"
          >
            {descriptores.actividadesReservadas.map((actividad, index) => (
              <div key={index} style={styles.radioGroupContainer}>
                <label style={styles.radioGroupLabel}>{actividad.nombre}</label>
                <div style={styles.radioOptionsRow}>
                  {[
                    { value: 0, label: 'Nada' },
                    { value: 1, label: 'Bajo' },
                    { value: 2, label: 'Medio' },
                    { value: 3, label: 'Alto' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      style={getRadioStyle(actividad.nivel === option.value, modoLectura)}
                    >
                      <input
                        type="radio"
                        name={actividad.nombre}
                        value={option.value}
                        checked={actividad.nivel === option.value}
                        onChange={(e) => handleActividadReservadaChange(e, index)}
                        disabled={modoLectura}
                        style={styles.hiddenInput}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </SeleccionConModal>
        </div>

        <div style={styles.descriptoresSection}>
          <DoubleSelectionInput
            modoLectura={modoLectura}
            datosParaSeleccion={datosListaSeleccionDescriptores}
            titulo="DESCRIPTORES"
            mensajeDeError={erroresPrograma.descriptores.descriptores}
            handleListChange={handleDescriptorChange}
          />
        </div>
      </div>
    </section>
  )
}
