import React, { useState } from 'react'
import Modal from '../Modal/Modal'

const styles = {
  cardContainer: {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
    margin: '0'
  } as React.CSSProperties,
  cardHeader: {
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    padding: '12px 16px',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  } as React.CSSProperties,
  cardTitle: {
    fontSize: '13px',
    fontWeight: 600,
    color: 'var(--primary-color)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px'
  } as React.CSSProperties,
  cardBody: {
    width: '100%',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  } as React.CSSProperties,
  cardBodyDisabled: {
    cursor: 'default'
  } as React.CSSProperties,
  valueDisplay: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  } as React.CSSProperties,
  valueNumber: {
    fontSize: '36px',
    fontWeight: 700,
    color: 'var(--primary-color)',
    lineHeight: 1
  } as React.CSSProperties,
  valueLabel: {
    fontSize: '14px',
    color: '#64748b'
  } as React.CSSProperties,
  editButton: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 12px rgba(45, 102, 157, 0.3)'
  } as React.CSSProperties,
  editButtonDisabled: {
    background: '#e2e8f0',
    boxShadow: 'none'
  } as React.CSSProperties,
  errorMessage: {
    color: '#dc3545',
    padding: '10px 14px',
    fontSize: '13px',
    fontWeight: 500,
    background: 'linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderTop: '1px solid #fecaca'
  } as React.CSSProperties
}

interface SeleccionConModalInterface {
  name: string
  mensajeDeError: string
  valorInput: number
  isDisabled: boolean
  children: React.ReactNode
  tituloModal: string
  onOpenModal?: () => void
  className?: string
}

const SeleccionConModal: React.FC<SeleccionConModalInterface> = ({
  name: _name,
  mensajeDeError,
  valorInput,
  isDisabled,
  children,
  tituloModal,
  onOpenModal,
  className = ''
}) => {
  const [modalAbierto, setModalAbierto] = useState<boolean>(false)

  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (isDisabled) return

    if (onOpenModal) {
      onOpenModal()
    }
    setModalAbierto(true)
  }

  const handleCloseModal = () => {
    setModalAbierto(false)
  }

  return (
    <div style={styles.cardContainer}>
      <Modal
        className={className}
        onClose={handleCloseModal}
        open={modalAbierto}
        modalTitle={tituloModal}
        botonGuardado={true}
      >
        {children}
      </Modal>
      <div style={styles.cardHeader}>
        <span style={styles.cardTitle}>{tituloModal}</span>
      </div>
      <button
        onClick={handleOpenModal}
        style={{
          ...styles.cardBody,
          ...(isDisabled ? styles.cardBodyDisabled : {})
        }}
      >
        <div style={styles.valueDisplay}>
          <span style={styles.valueNumber}>{valorInput}</span>
          <span style={styles.valueLabel}>
            {valorInput === 1 ? 'elemento' : 'elementos'}
          </span>
        </div>
        <div style={{
          ...styles.editButton,
          ...(isDisabled ? styles.editButtonDisabled : {})
        }}>
          <i className={isDisabled ? 'fas fa-eye' : 'fas fa-edit'}></i>
        </div>
      </button>
      {mensajeDeError && (
        <div style={styles.errorMessage}>
          <i className="fas fa-exclamation-triangle"></i>
          {mensajeDeError}
        </div>
      )}
    </div>
  )
}

export default SeleccionConModal
