import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%',
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
  selectWrapper: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'stretch',
    overflow: 'hidden',
    width: '70%',
    position: 'relative' as const,
    backgroundColor: '#fafafa',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  selectWrapperError: {
    backgroundColor: '#fef2f2'
  },
  select: {
    color: '#374151',
    width: '100%',
    padding: '14px 18px',
    fontSize: '14px',
    textAlign: 'left' as const,
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    appearance: 'none' as const,
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%232d669d' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
    backgroundPosition: 'right 16px center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '18px',
    paddingRight: '48px',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box' as const
  },
  selectDisabled: {
    backgroundColor: '#f0f0f0',
    cursor: 'not-allowed',
    color: '#888',
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23888' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`
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

interface ChoicesForDropdown {
  id: number | string
  informacion: string
}

interface DropdownInterface {
  name: string
  label: string
  value: number | string
  error: string
  choices: ChoicesForDropdown[]
  onChange: (value: number | string) => void
  modoLectura: boolean
}

const Dropdown: React.FC<DropdownInterface> = ({
  name,
  label,
  value,
  error,
  choices,
  onChange,
  modoLectura
}) => {
  const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }

  return (
    <div style={{ width: '100%' }}>
      <div style={styles.container}>
        <label style={styles.label}>{label}</label>
        <div style={{
          ...styles.selectWrapper,
          ...(error ? styles.selectWrapperError : {})
        }}>
          <select
            name={name}
            value={value}
            onChange={handleValueChange}
            disabled={modoLectura}
            style={{
              ...styles.select,
              ...(modoLectura ? styles.selectDisabled : {})
            }}
          >
            {choices.map((choice) => (
              <option key={choice.id} value={choice.id}>
                {choice.informacion}
              </option>
            ))}
          </select>
        </div>
      </div>
      {!!error && (
        <div style={styles.errorMessage}>
          <i className="fas fa-exclamation-triangle"></i>
          {error}
        </div>
      )}
    </div>
  )
}

export default Dropdown
