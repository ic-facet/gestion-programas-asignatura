import React from 'react'

import { ListadoDatos } from '../../../components'
import { ProgramaAsignaturaInterface } from '../../../interfaces/interfaces'

const styles = {
  container: {
    width: '90%',
    maxWidth: '1200px',
    marginBottom: '24px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    background: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden'
  },
  headerSection: {
    width: '100%',
    background: 'linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%)',
    padding: '32px 24px',
    textAlign: 'center' as const,
    position: 'relative' as const,
    boxSizing: 'border-box' as const
  },
  asignaturaTitle: {
    color: 'white',
    fontSize: '28px',
    margin: 0,
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase' as const
  },
  contentSection: {
    width: '100%',
    padding: '24px 32px 32px',
    boxSizing: 'border-box' as const
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginBottom: '24px'
  },
  infoCard: {
    background: '#f8fafc',
    borderRadius: '12px',
    padding: '16px 20px',
    border: '1px solid #e2e8f0',
    transition: 'all 0.2s ease'
  },
  infoLabel: {
    display: 'block',
    fontSize: '11px',
    fontWeight: 700,
    color: 'var(--primary-color)',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
    marginBottom: '6px'
  },
  infoValue: {
    display: 'block',
    fontSize: '15px',
    color: '#374151',
    fontWeight: 500
  },
  listsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px'
  }
}

interface InformacionGeneralProps {
  programaAsignatura: ProgramaAsignaturaInterface
}

const InformacionGeneral: React.FC<InformacionGeneralProps> = ({
  programaAsignatura
}) => {
  const { informacionGeneral } = programaAsignatura

  return (
    <section style={styles.container}>
      <div style={styles.headerSection}>
        <h1 style={styles.asignaturaTitle}>{informacionGeneral.nombreAsignatura}</h1>
      </div>
      <div style={styles.contentSection}>
        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <span style={styles.infoLabel}>Código</span>
            <span style={styles.infoValue}>{informacionGeneral.codigoAsignatura}</span>
          </div>
          <div style={styles.infoCard}>
            <span style={styles.infoLabel}>Año Académico</span>
            <span style={styles.infoValue}>{informacionGeneral.anioAcademico}</span>
          </div>
          <div style={styles.infoCard}>
            <span style={styles.infoLabel}>Bloque Curricular</span>
            <span style={styles.infoValue}>{informacionGeneral.bloqueCurricular}</span>
          </div>
        </div>
        <div style={styles.listsContainer}>
          <ListadoDatos
            datos={informacionGeneral.carreras}
            tituloListado="Carrera/s"
          />
          <ListadoDatos
            datos={informacionGeneral.equipoDocente}
            tituloListado="Equipo docente"
          />
        </div>
      </div>
    </section>
  )
}

export default InformacionGeneral
