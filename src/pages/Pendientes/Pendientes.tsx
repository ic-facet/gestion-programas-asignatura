import { Tabla } from './components'
import { Titulo, Button } from '../../components'
import {
  Container,
  Content,
  HeaderSection,
  BackButtonContainer
} from './PendientesStyled'

export default function TareasPendientes() {
  const handleVolver = () => {
    window.location.href = '/'
  }

  return (
    <Container>
      <Content>
        <HeaderSection>
          <BackButtonContainer>
            <Button
              text="← Volver al inicio"
              onClick={handleVolver}
              variant="secondary"
            />
          </BackButtonContainer>
          <Titulo>Tareas Pendientes</Titulo>
        </HeaderSection>
        <Tabla />
      </Content>
    </Container>
  )
}
