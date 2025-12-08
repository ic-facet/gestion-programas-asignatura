import React from 'react'
import { DatoListaInterface } from '../../constants/constants'

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column' as const,
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid transparent'
  },
  title: {
    background: 'linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%)',
    color: 'white',
    padding: '14px 20px',
    fontWeight: 600,
    fontSize: '14px',
    letterSpacing: '0.3px',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  list: {
    border: 'none',
    width: '100%',
    backgroundColor: '#fafafa',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    maxHeight: '300px',
    overflowY: 'auto' as const
  },
  item: {
    padding: '14px 20px',
    fontSize: '14px',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#374151'
  },
  itemBullet: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'var(--secondary-color)',
    flexShrink: 0
  }
}

interface ListadoDatosInterface {
  tituloListado: string
  datos: DatoListaInterface[]
}

const ListadoDatos: React.FC<ListadoDatosInterface> = ({
  datos,
  tituloListado
}) => {
  return (
    <div style={styles.container}>
      <h4 style={styles.title}>{tituloListado}</h4>
      <ul style={styles.list}>
        {datos.map((dato) => (
          <li key={dato.id} style={styles.item}>
            <span style={styles.itemBullet}></span>
            {dato.informacion}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListadoDatos
