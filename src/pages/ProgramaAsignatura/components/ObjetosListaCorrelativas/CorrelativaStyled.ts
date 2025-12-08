import React from 'react'

export const correlativaStyles = {
  container: {
    display: 'flex',
    flexDirection: 'row' as const,
    padding: '16px 20px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    boxSizing: 'border-box' as const,
    gap: '16px',
    transition: 'all 0.2s ease'
  } as React.CSSProperties,
  deleteButton: {
    backgroundColor: '#ef4444',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
    padding: '10px 14px',
    borderRadius: '8px',
    fontSize: '14px',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '40px'
  } as React.CSSProperties,
  infoContainer: {
    flex: 1,
    display: 'flex',
    minWidth: 0
  } as React.CSSProperties
}

// Legacy exports for backward compatibility - these are now just style objects
export const CorrelativaContainer = correlativaStyles.container
export const BorrarCorrelativaButton = correlativaStyles.deleteButton
export const InfoContainer = correlativaStyles.infoContainer
