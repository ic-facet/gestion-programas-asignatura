import React from 'react'

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row' as const,
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid transparent'
  },
  label: {
    background: 'linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%)',
    color: 'white',
    width: '30%',
    minWidth: '150px',
    padding: '14px 20px',
    fontWeight: 600,
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as const,
    letterSpacing: '0.3px',
    boxSizing: 'border-box' as const
  },
  input: {
    border: 'none',
    width: '70%',
    backgroundColor: '#fafafa',
    padding: '14px 18px',
    color: '#333',
    fontSize: '14px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box' as const
  },
  inputDisabled: {
    backgroundColor: '#f0f0f0',
    cursor: 'not-allowed',
    color: '#888'
  },
  errorMessage: {
    color: '#dc3545',
    maxWidth: '500px',
    width: '100%',
    padding: '10px 14px',
    fontSize: '13px',
    fontWeight: 500,
    background: 'linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%)',
    borderRadius: '10px',
    marginTop: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderLeft: '4px solid #dc3545'
  }
}

interface InputTextoInterface {
  name: string
  id: string
  value: string | number
  type: string
  label: string
  mensajeDeError: string
  onChange: (value: string | number) => void
  modoLectura: boolean
}

const Input: React.FC<InputTextoInterface> = ({
  name,
  id,
  value,
  type,
  label,
  mensajeDeError,
  onChange,
  modoLectura
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <>
      <div style={styles.container}>
        <label htmlFor={id} style={styles.label}>{label}</label>
        <input
          type={type}
          id={id}
          name={name}
          onChange={handleChange}
          disabled={modoLectura}
          value={value}
          style={{
            ...styles.input,
            ...(modoLectura ? styles.inputDisabled : {})
          }}
        />
      </div>
      {mensajeDeError && (
        <div style={styles.errorMessage}>
          <i className="fas fa-exclamation-triangle"></i>
          {mensajeDeError}
        </div>
      )}
    </>
  )
}

export default Input
