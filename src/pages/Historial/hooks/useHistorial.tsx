import { useState } from 'react'
import { ProgramasHistorial, selectedFiltrosType } from '../../../types'
import { getSearchHistorial } from '../services'

type useHistorialType = {
  searchHistorialProgramas: (
    selectedFiltros: selectedFiltrosType | null
  ) => void
  loading: boolean
  error: boolean
}

type Props = {
  setProgramasHistorial: React.Dispatch<
    React.SetStateAction<ProgramasHistorial | null>
  >
}

const useHistorial = ({ setProgramasHistorial }: Props): useHistorialType => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const searchHistorialProgramas = async (
    selectedFiltros: selectedFiltrosType | null
  ) => {
    try {
      const response = await getSearchHistorial(selectedFiltros)
      setProgramasHistorial(response)
      setLoading(false)
    } catch (err) {
      console.error(err)
      setError(true)
    }
  }

  return { searchHistorialProgramas, loading, error }
}

export default useHistorial
