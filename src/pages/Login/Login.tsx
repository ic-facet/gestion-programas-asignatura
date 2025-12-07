import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../../img'
import { RUTAS_PAGINAS } from '../../constants/constants'
import { DEV_MODE } from '../../helpers/env-variables'
import { useAuth } from '../../hooks/useAuth'
import { client } from '../../utils/axiosClient'
import {
  Container,
  Card,
  ProfileImage,
  LogoContainer,
  LogoUNT,
  LogoFACET,
  LoginTitle,
  LoginSubtitle,
  LoginH3,
  Text,
  LoginButton,
  Divider,
  BackButton
} from './LoginStyled'

const BASE_FRONTEND_URL = import.meta.env.VITE_BASE_FRONTEND_URL
const CLIENT_ID = import.meta.env.VITE_GOOGLE_OAUTH2_CLIENT_ID

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { getAuthUser } = useAuth()

  const openGoogleLoginPage = useCallback(() => {
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth'

    const scope = [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile'
    ].join(' ')

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: CLIENT_ID,
      redirect_uri: `${BASE_FRONTEND_URL}${RUTAS_PAGINAS.LOGIN_LOADING}`,
      prompt: 'select_account',
      access_type: 'offline',
      scope
    })

    const url = `${googleAuthUrl}?${params}`

    window.location.href = url
  }, [])

  const handleDevLogin = useCallback(async () => {
    try {
      await client.post('auth/dev-login/')
      await getAuthUser()
      navigate(RUTAS_PAGINAS.INICIO)
    } catch (error) {
      console.error('Error en login de desarrollo:', error)
    }
  }, [navigate, getAuthUser])

  const handleGoBack = useCallback(() => {
    navigate(RUTAS_PAGINAS.INICIO)
  }, [navigate])

  return (
    <Container>
      <BackButton onClick={handleGoBack} aria-label="Volver al inicio">
        <i className="fas fa-arrow-left" />
        <span>Volver al inicio</span>
      </BackButton>

      <Card>
        <ProfileImage>
          <i className="fas fa-user" />
        </ProfileImage>

        <LogoContainer>
          <LogoUNT src={img.UNT} alt="Logo UNT" />
          <LogoFACET src={img.FACET} alt="Logo FACET" />
        </LogoContainer>

        <LoginTitle>
          Sistema de Gestión de Programas de Asignatura
        </LoginTitle>
        <LoginSubtitle>
          Facultad de Ciencias Exactas y Tecnología
        </LoginSubtitle>
        <LoginH3>Universidad Nacional de Tucumán</LoginH3>

        <Text>
          Para acceder a las funciones del sistema, inicie sesión con Google.
          Si es su primera vez, comuníquese con el administrador para obtener acceso.
        </Text>

        <LoginButton onClick={openGoogleLoginPage}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
            alt="Google"
          />
          <p>Iniciar sesión con Google</p>
        </LoginButton>

        {DEV_MODE && (
          <>
            <Divider>o</Divider>
            <LoginButton onClick={handleDevLogin} $isDev>
              <p>🔧 Login de Desarrollo (Solo Local)</p>
            </LoginButton>
          </>
        )}
      </Card>
    </Container>
  )
}

export default Login
