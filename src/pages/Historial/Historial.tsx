import { useState } from 'react'
import TableHistorial from './components/TableHistorial'
import { useNavigate } from 'react-router-dom'
import { MODOS_PROGRAMA_ASIGNATURA } from '../../constants/constants'
import FiltrosAsync from './components/FiltrosAsync'
import { ProgramasHistorial } from '../../types'
import { client } from '../../utils/axiosClient'
import { Titulo } from '../../components'
import { Container, Content } from './HistorialStyled'

export default function Historial() {
  const navigate = useNavigate()
  const [programasHistorial, setProgramasHistorial] =
    useState<ProgramasHistorial | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const tableColumns = ['Asignatura', 'Acciones']

  const handleSearch = async (filters: {
    carrera: number | string | null
    semestre: number | string | null
    asignatura: number | string | null
    anio_lectivo: number | string | null
  }) => {
    setLoading(true)
    setError(false)

    try {
      const params = new URLSearchParams()
      if (filters.carrera) params.append('carrera', String(filters.carrera))
      if (filters.semestre) params.append('semestre', String(filters.semestre))
      if (filters.asignatura) params.append('asignatura', String(filters.asignatura))
      if (filters.anio_lectivo) params.append('anio_academico', String(filters.anio_lectivo))

      const response = await client.get(`/api/historial/?${params.toString()}`)
      setProgramasHistorial(response.data)
    } catch (err) {
      console.error('Error fetching historial:', err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const verPrograma = (id: number | null, modoPrograma: string) => {
    if (modoPrograma === MODOS_PROGRAMA_ASIGNATURA.VER)
      navigate(`/programa-asignatura/${id}`)
  }

  const imprimir = (id: number | string | null) => {
    const descargarPDF = async () => {
      try {
        const response = await client.get(`/api/programas/pdf/${id}/`, {
          responseType: 'blob'
        })

        const blob = new Blob([response.data], { type: 'application/pdf' })
        const url = window.URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'programa.pdf')
        document.body.appendChild(link)
        link.click()

        window.URL.revokeObjectURL(url)
      } catch (error) {
        console.error('Error al descargar el PDF:', error)
      }
    }

    descargarPDF()
  }

  return (
    <Container>
      <Content>
        <Titulo>Historial de programas</Titulo>
        <FiltrosAsync onSearch={handleSearch} />

        <TableHistorial
          tableColumns={tableColumns}
          tableData={programasHistorial}
          verPrograma={verPrograma}
          imprimir={imprimir}
          isLoading={loading}
          error={error}
        />
      </Content>
    </Container>
  )
}
