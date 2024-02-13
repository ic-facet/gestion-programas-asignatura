import { useState, useEffect } from 'react'
import { Filtros, selectedFiltrosType } from '../../../types'
import { getFiltros } from '../services'

type useHistorialType = {
  filtros: Filtros | null
  setFiltros: React.Dispatch<React.SetStateAction<Filtros | null>>
  selectedFiltros: selectedFiltrosType | null
  setSelectedFiltros: React.Dispatch<React.SetStateAction<selectedFiltrosType | null>>
  loadingFiltros: boolean
  errorFiltros: boolean
}

const useHistorial = (): useHistorialType => {
  const [filtros, setFiltros] =
    useState<Filtros | null>(null)
  const [selectedFiltros, setSelectedFiltros] = useState<selectedFiltrosType | null>(null)
  const [loadingFiltros, setLoading] = useState<boolean>(true)
  const [errorFiltros, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFiltros()
        setFiltros(response)
        setLoading(false)

        const carreras = response.find(item => item.tipo === 'carrera');
        const semestres = response.find(item => item.tipo === 'semestre');
        const asignaturas = response.find(item => item.tipo === 'asignatura');
        const anio_lectivo = response.find(item => item.tipo === 'anio_lectivo');

        const parsedSelectedFiltros = {
          carrera: carreras ? carreras.opciones[0].id : null,
          semestre: semestres ? semestres.opciones[0].id : null,
          asignatura: asignaturas? asignaturas.opciones[0].id : null,
          anio_lectivo: anio_lectivo ? anio_lectivo.opciones[0].id :null,
        };

        setSelectedFiltros(parsedSelectedFiltros)
      } catch (err) {
        console.error(err)
        setError(true)
      }
    }
    fetchData()
  }, [])

  return { filtros, setFiltros, selectedFiltros, setSelectedFiltros, loadingFiltros, errorFiltros }
}

export default useHistorial
