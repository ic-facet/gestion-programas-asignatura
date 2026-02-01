import { useState, useEffect } from 'react'
import { ProgramasVigentes } from '../../../types'
import { getProgramasVigentes } from '../services'

type useProgramasVigentesType = {
  programasVigentes: ProgramasVigentes
  loading: boolean
  error: boolean
  errorMessage: string
}

const useProgramasVigentes = (): useProgramasVigentesType => {
  const [programasVigentes, setProgramasVigentes] = useState<ProgramasVigentes>(
    []
  )
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProgramasVigentes()
        setProgramasVigentes(response)
        setLoading(false)
      } catch (err: any) {
        console.error(err)
        setError(true)
        setLoading(false)

        // Extraer el mensaje de error del backend
        const message = err?.response?.data?.error ||
                       'Ocurrió un error al cargar los programas vigentes'
        setErrorMessage(message)
      }
    }
    fetchData()
  }, [])

  return { programasVigentes, loading, error, errorMessage }
}

export default useProgramasVigentes
