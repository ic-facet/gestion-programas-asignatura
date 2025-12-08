import { useState } from 'react'
import AsyncSelectComponent from 'react-select/async'
import { StylesConfig, GroupBase } from 'react-select'
import { client } from '../../../utils/axiosClient'
import debounce from 'lodash/debounce'
import { FilterSection, FilterTitle, FilterGrid, FilterButton } from '../HistorialStyled'

interface SelectOption {
  value: number | string
  label: string
}

interface SelectedFilters {
  carrera: SelectOption | null
  semestre: SelectOption | null
  asignatura: SelectOption | null
  anio_lectivo: SelectOption | null
}

interface FiltrosAsyncProps {
  onSearch: (filters: {
    carrera: number | string | null
    semestre: number | string | null
    asignatura: number | string | null
    anio_lectivo: number | string | null
  }) => void
}

interface PaginatedResponse {
  results: Array<{ id: number | string; informacion: string }>
  count: number
  next: string | null
  previous: string | null
}

const customStyles: StylesConfig<SelectOption, false, GroupBase<SelectOption>> = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '48px',
    borderRadius: '10px',
    border: state.isFocused
      ? '2px solid var(--primary-color)'
      : '2px solid #e2e8f0',
    backgroundColor: 'white',
    boxShadow: state.isFocused
      ? '0 0 0 3px rgba(45, 102, 157, 0.12)'
      : 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: 'var(--primary-color)',
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '4px 16px',
  }),
  input: (provided) => ({
    ...provided,
    margin: '0',
    padding: '0',
    fontSize: '14px',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#9ca3af',
    fontSize: '14px',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '14px',
    color: '#374151',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '12px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
    border: '1px solid #e2e8f0',
    overflow: 'hidden',
    zIndex: 9999,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: '8px',
    maxHeight: '250px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? 'var(--primary-color)'
      : state.isFocused
        ? 'rgba(45, 102, 157, 0.08)'
        : 'white',
    color: state.isSelected ? 'white' : '#374151',
    padding: '12px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    marginBottom: '4px',
    transition: 'all 0.15s ease',
    '&:last-child': {
      marginBottom: 0,
    },
    '&:active': {
      backgroundColor: state.isSelected
        ? 'var(--primary-color)'
        : 'rgba(45, 102, 157, 0.12)',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: 'var(--primary-color)',
    padding: '8px 12px',
    transition: 'transform 0.2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0)',
    '&:hover': {
      color: 'var(--primary-color)',
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: '#9ca3af',
    padding: '8px',
    '&:hover': {
      color: '#dc3545',
    },
  }),
  loadingIndicator: (provided) => ({
    ...provided,
    color: 'var(--primary-color)',
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    fontSize: '14px',
    color: '#6b7280',
    padding: '16px',
  }),
  loadingMessage: (provided) => ({
    ...provided,
    fontSize: '14px',
    color: '#6b7280',
  }),
}

const filterConfig = [
  { key: 'carrera', label: 'Carrera', endpoint: '/api/filtros/carreras/', placeholder: 'Buscar carrera...' },
  { key: 'semestre', label: 'Semestre', endpoint: '/api/filtros/semestres/', placeholder: 'Buscar semestre...' },
  { key: 'asignatura', label: 'Asignatura', endpoint: '/api/filtros/asignaturas/', placeholder: 'Buscar asignatura...' },
  { key: 'anio_lectivo', label: 'Ano Lectivo', endpoint: '/api/filtros/anios-lectivos/', placeholder: 'Buscar ano...' },
]

export default function FiltrosAsync({ onSearch }: FiltrosAsyncProps) {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    carrera: null,
    semestre: null,
    asignatura: null,
    anio_lectivo: null,
  })

  const createLoadOptions = (endpoint: string) => {
    const debouncedFetch = debounce(
      async (inputValue: string, callback: (options: SelectOption[]) => void) => {
        try {
          const params = new URLSearchParams()
          if (inputValue) {
            params.append('search', inputValue)
          }
          params.append('page_size', '20')

          const response = await client.get<PaginatedResponse>(
            `${endpoint}?${params.toString()}`
          )

          const options: SelectOption[] = response.data.results.map((item) => ({
            value: item.id,
            label: item.informacion,
          }))

          callback(options)
        } catch (error) {
          console.error('Error loading options:', error)
          callback([])
        }
      },
      300
    )

    return (inputValue: string): Promise<SelectOption[]> => {
      return new Promise((resolve) => {
        debouncedFetch(inputValue, resolve)
      })
    }
  }

  const handleChange = (key: keyof SelectedFilters, option: SelectOption | null) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: option,
    }))
  }

  const handleSearch = () => {
    onSearch({
      carrera: selectedFilters.carrera?.value ?? null,
      semestre: selectedFilters.semestre?.value ?? null,
      asignatura: selectedFilters.asignatura?.value ?? null,
      anio_lectivo: selectedFilters.anio_lectivo?.value ?? null,
    })
  }

  return (
    <FilterSection>
      <FilterTitle>Filtros de Busqueda</FilterTitle>
      <FilterGrid>
        {filterConfig.map((filter) => (
          <div key={filter.key} className="filter-item">
            <label className="filter-label">{filter.label}</label>
            <AsyncSelectComponent
              value={selectedFilters[filter.key as keyof SelectedFilters]}
              onChange={(option) => handleChange(filter.key as keyof SelectedFilters, option)}
              loadOptions={createLoadOptions(filter.endpoint)}
              defaultOptions
              cacheOptions
              styles={customStyles}
              placeholder={filter.placeholder}
              isClearable
              noOptionsMessage={({ inputValue }) =>
                inputValue ? 'No se encontraron resultados' : 'Escriba para buscar...'
              }
              loadingMessage={() => 'Buscando...'}
            />
          </div>
        ))}
      </FilterGrid>
      <FilterButton onClick={handleSearch}>
        <i className="fas fa-search" style={{ marginRight: '8px' }} />
        Buscar
      </FilterButton>
    </FilterSection>
  )
}
