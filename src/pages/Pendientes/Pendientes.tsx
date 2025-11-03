import { Tabla } from './components'
import { Titulo } from '../../components'
import { Container, Content } from './PendientesStyled'

export default function TareasPendientes() {
  return (
    <Container>
      <Content>
        <Titulo>Tareas Pendientes</Titulo>
        <Tabla />
      </Content>
    </Container>
  )
}
