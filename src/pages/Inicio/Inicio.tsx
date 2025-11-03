import Button from '../../components/ui/Button'
import { RUTAS_PAGINAS } from '../../constants/constants'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import {
  Division,
  Funcionalidad,
  Portada,
  SeccionFuncionalidades,
  TituloFuncionalidad,
  IconoFuncionalidad,
  DescripcionFuncionalidad,
  TextoBienvenidaContainer,
  LogoFacet
} from './InicioStyled'
import img from '../../img'

const Inicio: React.FC = () => {
  const { auth } = useAuth()
  const navigate = useNavigate()

  const handleLoginButton = () => {
    navigate(RUTAS_PAGINAS.LOGIN)
  }

  return (
    <>
      <Portada>
        <TextoBienvenidaContainer>
          <LogoFacet src={img.FACETNoBackground} />
          <TituloFuncionalidad>
            <b>¡Bienvenido a SGPA!</b>
          </TituloFuncionalidad>
          <DescripcionFuncionalidad>
            <b>Sistema de Gestion para Programas de Asignautra</b> para la
            Facultad de Ciencias Exactas y Tecnología de la Universidad Nacional
            de Tucumán.
            <br />
            <br />
            {auth.isLoggedIn ? (
              <>
                Contáctese con el administrador del sistema para obtener los
                permisos necesarios para utilizar el sistema, si aún no los
                tiene.
              </>
            ) : (
              <>
                Inicie sesión para acceder a las funcionalidades del sistema.
                <br />
                <Button text="Iniciar Sesión" onClick={handleLoginButton} />
              </>
            )}
          </DescripcionFuncionalidad>
        </TextoBienvenidaContainer>
      </Portada>
      <Division>Explore las Funcionalidades del Sistema</Division>
      <SeccionFuncionalidades>
        <Funcionalidad>
          <IconoFuncionalidad>
            <i className="fas fa-file-alt" />
          </IconoFuncionalidad>
          <TituloFuncionalidad>Generación de Informes</TituloFuncionalidad>
          <DescripcionFuncionalidad>
            Genere informes completos sobre las asignaturas de cada carrera,
            incluyendo la matriz de tributación y análisis académicos.
          </DescripcionFuncionalidad>
        </Funcionalidad>
        <Funcionalidad>
          <IconoFuncionalidad>
            <i className="fas fa-history" />
          </IconoFuncionalidad>
          <TituloFuncionalidad>Historial de Programas</TituloFuncionalidad>
          <DescripcionFuncionalidad>
            Filtre y busque programas de asignaturas de diferentes períodos
            académicos. Descargue documentos en formato PDF.
          </DescripcionFuncionalidad>
        </Funcionalidad>
        <Funcionalidad>
          <IconoFuncionalidad>
            <i className="fas fa-edit" />
          </IconoFuncionalidad>
          <TituloFuncionalidad>Actualización de Programas</TituloFuncionalidad>
          <DescripcionFuncionalidad>
            Los docentes pueden actualizar programas de asignatura y los
            directores de carrera pueden validar los cambios realizados.
          </DescripcionFuncionalidad>
        </Funcionalidad>
      </SeccionFuncionalidades>
    </>
  )
}

export default Inicio
