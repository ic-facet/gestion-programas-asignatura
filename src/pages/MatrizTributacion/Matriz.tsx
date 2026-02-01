import React, { useState } from 'react'

import TablaPlanesEstudio from './TablasPlanesEstudio/TablaPlanesEstudio'
import usePlanesDeEstudio from './hooks/usePlanesDeEstudio'
import { getMatrizDeTributacion } from './servicios'
import { Modal, Titulo, Subtitulo, Button } from '../../components'
import {
  Container,
  Header,
  TableContainer,
  LoadingContainer,
  ErrorContainer,
  BackButtonContainer
} from './MatrizStyled'

const COLUMNAS_TABLA = ['Plan de Estudio', 'Carrera', 'Acciones']

const Matriz: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const { loading, error, planesDeEstudio } = usePlanesDeEstudio()
  const [mensajeDeError, setMensajeDeError] = useState<string>('')

  const handleVolver = () => {
    window.location.href = '/'
  }

  const handleGenerarMatriz = (idPlan: number, idCarrera: number) => {
    getMatrizDeTributacion(idPlan, idCarrera).then((response) => {
      if (response.status === 200 && response.data) {
        setModalIsOpen(false)

        // Crear un objeto URL con los datos del archivo
        const url = window.URL.createObjectURL(new Blob([response.data]))

        // Crear un enlace temporal
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'matriz-tributacion.csv')

        // Simular clic en el enlace para iniciar la descarga
        document.body.appendChild(link)
        link.click()

        // Limpiar el objeto URL y el enlace
        window.URL.revokeObjectURL(url)
        document.body.removeChild(link)
      } else if (response.status === 400 && response.error) {
        if (response.error.all) {
          setMensajeDeError(response.error.all)
        } else {
          setMensajeDeError('Error inesperado. Intente nuevamente más tarde')
        }

        setModalIsOpen(true)
      } else {
        setMensajeDeError('Error inesperado. Intente nuevamente más tarde')
        setModalIsOpen(true)
      }
    })
  }

  return (
    <Container>
      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        modalTitle="Ocurrió un Error"
      >
        <div>{mensajeDeError}</div>
      </Modal>

      <Header>
        <BackButtonContainer>
          <Button
            text="← Volver al inicio"
            onClick={handleVolver}
            variant="secondary"
          />
        </BackButtonContainer>
        <Titulo>Generar Reportes</Titulo>
        <Subtitulo>Matriz de Tributación</Subtitulo>
      </Header>

      {loading ? (
        <LoadingContainer>Cargando planes de estudio...</LoadingContainer>
      ) : error ? (
        <ErrorContainer>
          <i className="fas fa-exclamation-triangle" />
          {error}
        </ErrorContainer>
      ) : (
        <TableContainer>
          <TablaPlanesEstudio
            tableColumns={COLUMNAS_TABLA}
            tableData={planesDeEstudio}
            generarMatriz={handleGenerarMatriz}
          />
        </TableContainer>
      )}
    </Container>
  )
}

export default Matriz
