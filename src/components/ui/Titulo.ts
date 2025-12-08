import React from 'react'

// Inline styles for page titles
export const tituloStyles = {
  titulo: {
    color: 'var(--primary-color)',
    fontSize: '32px',
    width: '100%',
    textAlign: 'center' as const,
    boxSizing: 'border-box' as const,
    margin: '0 0 32px',
    textTransform: 'uppercase' as const,
    fontWeight: 700,
    letterSpacing: '1.5px',
    position: 'relative' as const,
    paddingBottom: '20px'
  } as React.CSSProperties,
  subtitulo: {
    color: 'var(--third-color)',
    textAlign: 'center' as const,
    fontSize: '22px',
    margin: '-20px 0 24px',
    textTransform: 'uppercase' as const,
    fontWeight: 500,
    letterSpacing: '1px'
  } as React.CSSProperties,
  tituloSeccion: {
    color: 'white',
    fontSize: '16px',
    textAlign: 'center' as const,
    width: '100%',
    background: 'linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%)',
    boxSizing: 'border-box' as const,
    padding: '18px 24px',
    textTransform: 'uppercase' as const,
    margin: 0,
    fontWeight: 600,
    letterSpacing: '1.2px',
    borderRadius: 0,
    position: 'relative' as const
  } as React.CSSProperties
}

// Functional components with inline styles
export const Titulo: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return React.createElement('h1', { style: tituloStyles.titulo }, children)
}

export const Subtitulo: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return React.createElement('h2', { style: tituloStyles.subtitulo }, children)
}

export const TituloSeccion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return React.createElement('h3', { style: tituloStyles.tituloSeccion }, children)
}
