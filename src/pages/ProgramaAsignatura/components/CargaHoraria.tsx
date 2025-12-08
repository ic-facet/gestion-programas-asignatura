import React from 'react'
import { ProgramaAsignaturaInterface } from '../../../interfaces'
import camelCase from 'lodash/camelCase'
import { CAMPOS_CARGA_HORARIA } from '../../../constants/constants'

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
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px'
  } as React.CSSProperties,
  statCard: {
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
    textAlign: 'center' as const
  } as React.CSSProperties,
  statValue: {
    fontSize: '32px',
    fontWeight: 700,
    color: 'var(--primary-color)',
    marginBottom: '8px',
    lineHeight: 1
  } as React.CSSProperties,
  statLabel: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#64748b',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px'
  } as React.CSSProperties
}

interface CargaHorariaProps {
  programaAsignatura: ProgramaAsignaturaInterface
}

export default function CargaHoraria({
  programaAsignatura
}: CargaHorariaProps) {
  const { cargaHoraria } = programaAsignatura

  const camposConValor = CAMPOS_CARGA_HORARIA.filter(
    (config) => cargaHoraria[camelCase(config.name)]
  )

  return (
    <section style={styles.sectionContainer}>
      <div style={styles.sectionHeader}>
        <h3 style={styles.sectionTitle}>Carga Horaria</h3>
      </div>
      <div style={styles.contentSection}>
        <div style={styles.statsGrid}>
          {camposConValor.map((config) => (
            <div key={config.id} style={styles.statCard}>
              <div style={styles.statValue}>{cargaHoraria[camelCase(config.name)] || 0}</div>
              <div style={styles.statLabel}>{config.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
