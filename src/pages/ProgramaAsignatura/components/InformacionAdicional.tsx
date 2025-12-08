import React from 'react'
import {
  ProgramaAsignaturaInterface,
  ProgramaAsignaturaErrores
} from '../../../interfaces/interfaces'
import {
  MODOS_PROGRAMA_ASIGNATURA,
  CAMPOS_INFORMACION_ADICIONAL
} from '../../../constants/constants'
import { TextArea } from '../../../components'

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
  formGrid: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px'
  } as React.CSSProperties
}

interface InformacionAdicionalProps {
  programaAsignatura: ProgramaAsignaturaInterface
  setProgramaAsignatura: (
    programaAsignatura: ProgramaAsignaturaInterface
  ) => void
  modoProgramaAsignatura: string
  erroresInfornacionAdicional: ProgramaAsignaturaErrores
}

export default function InformacionAdicional({
  programaAsignatura,
  setProgramaAsignatura,
  modoProgramaAsignatura,
  erroresInfornacionAdicional
}: InformacionAdicionalProps) {
  const { informacionAdicional } = programaAsignatura
  const modoLectura =
    modoProgramaAsignatura === MODOS_PROGRAMA_ASIGNATURA.VER ||
    modoProgramaAsignatura === MODOS_PROGRAMA_ASIGNATURA.REVISAR

  const handleChange = (name: string, value: string) => {
    setProgramaAsignatura({
      ...programaAsignatura,
      informacionAdicional: {
        ...programaAsignatura.informacionAdicional,
        [name]: value
      }
    })
  }

  return (
    <section style={styles.sectionContainer}>
      <div style={styles.sectionHeader}>
        <h3 style={styles.sectionTitle}>Información Adicional</h3>
      </div>
      <div style={styles.contentSection}>
        <div style={styles.formGrid}>
          {CAMPOS_INFORMACION_ADICIONAL.map((config) => (
            <TextArea
              key={config.id}
              modoLectura={modoLectura || config.name === 'contenidos'}
              label={config.label}
              name={config.name}
              id={config.name}
              value={informacionAdicional[config.name]}
              onChange={handleChange}
              mensajeDeError={
                erroresInfornacionAdicional.informacionAdicional[config.name]
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
