import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import useAuth from '../../hooks/useAuth'
import { client } from '../../utils/axiosClient'
import { Spinner } from '../../components'

const LoginLoading: React.FC = () => {
  const location = useLocation()
  const { getAuthUser } = useAuth()

  useEffect(() => {
    const values = queryString.parse(location.search)
    const code = values.code ? values.code : null

    if (code) {
      onGooglelogin()
    }
  }, [])

  const googleLoginHandler = async (code: string) => {
    try {
      await client.get(`auth/login/google/${code}`)
      await getAuthUser()
      // Usar window.location para forzar recarga completa y actualizar estado
      window.location.href = '/'
      return true
    } catch (error) {
      console.error('Error en login:', error)
      window.location.href = '/'
    }
  }

  const onGooglelogin = async () => {
    await googleLoginHandler(location.search)
  }

  return <Spinner />
}

export default LoginLoading
