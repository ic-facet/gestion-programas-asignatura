import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import img from '../../img'
import { RUTAS_PAGINAS } from '../../constants/constants'
import { DEV_MODE } from '../../helpers/env-variables'
import { useAuth } from '../../hooks/useAuth'
import { client } from '../../utils/axiosClient'

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

  return (
    <div className="container">
      <div className="card">
        <div className="profile-image">
          <i className="fas fa-user" />
        </div>

        <img className="logo-unt" src={img.UNT} />
        <img className="logo-facet" src={img.FACET} />
        <h1 className="login-title">
          Sistema de Gestion de Programas de Asignatura
        </h1>
        <h2 className="login-subtitle">
          Facultad de Ciencias Exactas y Tecnología
        </h2>
        <h3 className="login-h3">Universidad Nacional de Tucumán</h3>
        <p className="text">
          Para poder acceder a las funciones del sistema, debe iniciar sesión
          con Google. Si es su primera vez ingresando, debe comunicarse con el
          administrador del sistema para dar acceso.
        </p>
        <button onClick={openGoogleLoginPage} className="login-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" />
          <p>Iniciar sesion con Google</p>
        </button>

        {DEV_MODE && (
          <>
            <div style={{ margin: '10px 0', color: '#666', fontSize: '14px' }}>
              - o -
            </div>
            <button
              onClick={handleDevLogin}
              className="login-button"
              style={{
                backgroundColor: '#ff9800',
                border: '2px solid #f57c00'
              }}
            >
              <p>🔧 Login de Desarrollo (Solo Local)</p>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Login
