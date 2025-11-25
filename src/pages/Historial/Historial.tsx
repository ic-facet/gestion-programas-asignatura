import { useState } from 'react'
import useHistorial from './hooks/useHistorial'
import useFiltros from './hooks/useFiltros'
import TableHistorial from './components/TableHistorial'
import { useNavigate } from 'react-router-dom'
import { MODOS_PROGRAMA_ASIGNATURA } from '../../constants/constants'
import Filtros from './components/Filtros'
import { ProgramasHistorial } from '../../types'
import { client } from '../../utils/axiosClient'
import { Titulo, Spinner } from '../../components'
import { Container, Content } from './HistorialStyled'

export default function Historial() {
  const navigate = useNavigate()
  const [programasHistorial, setProgramasHistorial] =
    useState<ProgramasHistorial | null>(null)

  const {
    filtros,
    selectedFiltros,
    setSelectedFiltros,
    loadingFiltros,
    errorFiltros
  } = useFiltros()

  const {
    searchHistorialProgramas,
    loading: tablaLoading,
    error: errorTabla
  } = useHistorial({
    setProgramasHistorial
  })

  const tableColumns = ['Asignatura', 'Acciones']

  if (errorFiltros) {
    return (
      <Container>
        <Content>
          <Titulo>Historial de programas</Titulo>
          <div style={{ textAlign: 'center', padding: '40px', color: '#dc3545' }}>
            <i className="fas fa-exclamation-circle" style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }} />
            <h2>Error al cargar los filtros</h2>
          </div>
        </Content>
      </Container>
    )
  }

  if (loadingFiltros || !filtros) {
    return (
      <Container>
        <Content>
          <Titulo>Historial de programas</Titulo>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '80px 20px' }}>
            <Spinner />
          </div>
        </Content>
      </Container>
    )
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
        <Filtros
          filtros={filtros}
          setSelectedFiltros={setSelectedFiltros}
          searchHistorialProgramas={searchHistorialProgramas}
          selectedFiltros={selectedFiltros}
        />

        <TableHistorial
          tableColumns={tableColumns}
          tableData={programasHistorial}
          verPrograma={verPrograma}
          imprimir={imprimir}
          isLoading={tablaLoading}
          error={errorTabla}
        />
      </Content>
    </Container>
  )
}
