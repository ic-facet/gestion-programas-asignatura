import { FiltrosType, selectedFiltrosType } from 'types'
import { Dropdown } from '../../../components'
import { FilterSection, FilterTitle, FilterGrid, FilterButton } from '../HistorialStyled'

interface FiltrosProps {
  filtros: FiltrosType
  selectedFiltros: selectedFiltrosType
  setSelectedFiltros: (filtros: selectedFiltrosType) => void
  searchHistorialProgramas: (selectedFiltros: selectedFiltrosType) => void
}

export default function Filtros({
  searchHistorialProgramas,
  selectedFiltros,
  filtros,
  setSelectedFiltros
}: FiltrosProps) {
  const handleChangeSelect = (
    tipo: 'carrera' | 'asignatura' | 'anio_lectivo' | 'semestre',
    value: string | number
  ) => {
    const filtro = filtros.find((filtro) => filtro.tipo === tipo)
    const item = filtro?.opciones.find((opcion) => opcion.id == value)

    setSelectedFiltros({
      ...selectedFiltros,
      [tipo]: item
    })
  }

  return (
    <FilterSection>
      <FilterTitle>Filtros</FilterTitle>
      <FilterGrid>
        {filtros.map((filtroGroup) => {
          return (
            <Dropdown
              key={filtroGroup.tipo}
              name={filtroGroup.tipo}
              label={filtroGroup.nombre}
              error=""
              value={selectedFiltros[filtroGroup.tipo].id}
              choices={filtroGroup.opciones}
              onChange={(value) => handleChangeSelect(filtroGroup.tipo, value)}
              modoLectura={false}
            />
          )
        })}
      </FilterGrid>
      <FilterButton onClick={() => searchHistorialProgramas(selectedFiltros)}>
        Filtrar
      </FilterButton>
    </FilterSection>
  )
}
