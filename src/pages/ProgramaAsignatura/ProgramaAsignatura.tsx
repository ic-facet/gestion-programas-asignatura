import { useParams } from 'react-router-dom'

import {
  CargaHoraria,
  InformacionAdicional,
  SeccionDescriptores,
  BotonesProgramaAsignatura,
  BotonesRevisionProgramaAsignatura,
  InformacionGeneral,
  SeccionCorrelativas
} from './components'
import { Spinner, Titulo, Button } from '../../components'
import { MODOS_PROGRAMA_ASIGNATURA } from '../../constants/constants'
import useProgramaAsignatura from './hooks/useProgramaAsignatura'
import {
  Container,
  HeaderSection,
  BackButtonContainer,
  ContentSection
} from './ProgramaAsignaturaStyled'

const ProgramaAsignatura: React.FC<{ modo: string }> = ({ modo }) => {
  // EN el caso de ser modo = NUEVO o EDITAR_ULTIMO, este id corresponderia a la asignatura a la que estamos entrando!!
  const { id } = useParams()

  // Este hook se encarga de hacer el get del programaAsignatura
  const {
    programaAsignatura,
    setProgramaAsignatura,
    modoProgramaAsignatura,
    cargandoPrograma: loading,
    errorCargandoPrograma: errorInesperado,
    erroresProgramaAsignatura,
    guardarPrograma,
    aprobarPrograma,
    pedirCambiosPrograma,
    asignaturasDisponibles,
    accionEnProgreso
  } = useProgramaAsignatura(id?.toString(), modo)

  const modoLectura =
    modo === MODOS_PROGRAMA_ASIGNATURA.VER ||
    modo === MODOS_PROGRAMA_ASIGNATURA.REVISAR

  const handlePostPrograma = (presentar: boolean) => () => {
    guardarPrograma(presentar)
  }

  const handleAprobarPrograma = () => {
    aprobarPrograma()
  }

  const handlePedirCambiosPrograma = (mensaje: string) => {
    pedirCambiosPrograma(mensaje)
  }

  const handleVolver = () => {
    window.location.href = '/'
  }

  const getTitulo = () => {
    switch (modo) {
      case MODOS_PROGRAMA_ASIGNATURA.NUEVO:
        return 'Nuevo Programa de Asignatura'
      case MODOS_PROGRAMA_ASIGNATURA.EDITAR:
        return 'Editar Programa de Asignatura'
      case MODOS_PROGRAMA_ASIGNATURA.EDITAR_ULTIMO:
        return 'Editar Programa de Asignatura'
      case MODOS_PROGRAMA_ASIGNATURA.REVISAR:
        return 'Revisar Programa de Asignatura'
      case MODOS_PROGRAMA_ASIGNATURA.VER:
        return 'Ver Programa de Asignatura'
      default:
        return 'Programa de Asignatura'
    }
  }

  if (errorInesperado)
    return (
      <Container>
        <HeaderSection>
          <BackButtonContainer>
            <Button
              text="← Volver al inicio"
              onClick={handleVolver}
              variant="secondary"
            />
          </BackButtonContainer>
          <Titulo>Error</Titulo>
        </HeaderSection>
        <ContentSection>
          <p>{errorInesperado}</p>
        </ContentSection>
      </Container>
    )

  if (loading) return <Spinner />

  return (
    <Container>
      <HeaderSection>
        <BackButtonContainer>
          <Button
            text="← Volver al inicio"
            onClick={handleVolver}
            variant="secondary"
          />
        </BackButtonContainer>
        <Titulo>{getTitulo()}</Titulo>
      </HeaderSection>
      <ContentSection>
        <InformacionGeneral programaAsignatura={programaAsignatura} />
        <CargaHoraria programaAsignatura={programaAsignatura} />
        <SeccionDescriptores
          programaAsignatura={programaAsignatura}
          setProgramaAsignatura={setProgramaAsignatura}
          modoProgramaAsignatura={modoProgramaAsignatura}
          erroresPrograma={erroresProgramaAsignatura}
        />
        <InformacionAdicional
          programaAsignatura={programaAsignatura}
          setProgramaAsignatura={setProgramaAsignatura}
          modoProgramaAsignatura={modoProgramaAsignatura}
          erroresInfornacionAdicional={erroresProgramaAsignatura}
        />
        <SeccionCorrelativas
          asignaturasDisponibles={asignaturasDisponibles}
          programaAsignatura={programaAsignatura}
          setProgramaAsignatura={setProgramaAsignatura}
          modoProgramaAsignatura={modoProgramaAsignatura}
          erroresSeccionCorrelativas={erroresProgramaAsignatura}
        />
        <br />
        {modo === MODOS_PROGRAMA_ASIGNATURA.REVISAR ? (
          <BotonesRevisionProgramaAsignatura
            handleAprobarPrograma={handleAprobarPrograma}
            handlePedirCambiosPrograma={handlePedirCambiosPrograma}
            error={erroresProgramaAsignatura.all}
            isLoading={accionEnProgreso}
          />
        ) : (
          <BotonesProgramaAsignatura
            error={erroresProgramaAsignatura.all}
            modoLectura={modoLectura}
            handlePostPrograma={handlePostPrograma}
            isLoading={accionEnProgreso}
          />
        )}
      </ContentSection>
    </Container>
  )
}

export default ProgramaAsignatura
