import { useState, useCallback } from 'react'
import AsyncSelectComponent from 'react-select/async'
import { StylesConfig, GroupBase } from 'react-select'
import { client } from '../../utils/axiosClient'
import debounce from 'lodash/debounce'

export interface SelectOption {
  value: number | string
  label: string
}

interface AsyncSelectProps {
  name: string
  label: string
  value: SelectOption | null
  onChange: (option: SelectOption | null) => void
  endpoint: string
  placeholder?: string
  disabled?: boolean
  initialOptions?: SelectOption[]
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

const AsyncSelect: React.FC<AsyncSelectProps> = ({
  name,
  label,
  value,
  onChange,
  endpoint,
  placeholder = 'Buscar...',
  disabled = false,
  initialOptions = [],
}) => {
  const [defaultOptions, setDefaultOptions] = useState<SelectOption[]>(initialOptions)

  const loadOptions = async (
    inputValue: string,
    callback: (options: SelectOption[]) => void
  ) => {
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

      if (!inputValue && defaultOptions.length === 0) {
        setDefaultOptions(options)
      }

      callback(options)
    } catch (error) {
      console.error('Error loading options:', error)
      callback([])
    }
  }

  const debouncedLoadOptions = useCallback(
    debounce((inputValue: string, callback: (options: SelectOption[]) => void) => {
      loadOptions(inputValue, callback)
    }, 300),
    [endpoint]
  )

  return (
    <div className="async-select-container">
      <label className="async-select-label">{label}</label>
      <AsyncSelectComponent
        name={name}
        value={value}
        onChange={onChange}
        loadOptions={debouncedLoadOptions}
        defaultOptions={defaultOptions.length > 0 ? defaultOptions : true}
        cacheOptions
        styles={customStyles}
        placeholder={placeholder}
        isDisabled={disabled}
        isClearable
        noOptionsMessage={({ inputValue }) =>
          inputValue ? 'No se encontraron resultados' : 'Escriba para buscar...'
        }
        loadingMessage={() => 'Buscando...'}
      />
    </div>
  )
}

export default AsyncSelect
