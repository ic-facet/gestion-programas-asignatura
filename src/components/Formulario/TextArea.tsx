import React, { useEffect, useRef } from 'react'

const styles = {
  wrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column' as const,
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid transparent',
    marginBottom: '16px'
  },
  label: {
    background: 'linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%)',
    color: 'white',
    padding: '14px 20px',
    fontWeight: 600,
    fontSize: '14px',
    letterSpacing: '0.4px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  textarea: {
    width: '100%',
    border: 'none',
    backgroundColor: '#fafafa',
    padding: '16px',
    fontSize: '14px',
    lineHeight: 1.7,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    resize: 'vertical' as const,
    minHeight: '120px',
    fontFamily: 'inherit',
    boxSizing: 'border-box' as const,
    outline: 'none'
  },
  textareaDisabled: {
    backgroundColor: '#f0f0f0',
    cursor: 'not-allowed',
    color: '#666'
  },
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
  }
}

interface TextAreaTextoInterface {
  name: string
  id: string
  value: string
  mensajeDeError: string
  label: string
  onChange: (name: string, value: string) => void
  modoLectura: boolean
}

const TextArea: React.FC<TextAreaTextoInterface> = ({
  name,
  id,
  value,
  mensajeDeError,
  label,
  onChange,
  modoLectura
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current?.style) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.max(120, textareaRef.current.scrollHeight)}px`
    }
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(name, e.target.value)
  }

  return (
    <div style={styles.wrapper}>
      <label htmlFor={id} style={styles.label}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={modoLectura}
        ref={textareaRef}
        style={{
          ...styles.textarea,
          ...(modoLectura ? styles.textareaDisabled : {})
        }}
      />
      {mensajeDeError && (
        <div style={styles.errorMessage}>
          <i className="fas fa-exclamation-triangle"></i>
          {mensajeDeError}
        </div>
      )}
    </div>
  )
}

export default TextArea
