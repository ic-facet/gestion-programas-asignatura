import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../utils/axiosClient'

interface Auth {
  isLoggedIn: boolean
  userEmail: string | null
  userFirstName: string | null
  userLastName: string | null
  userProfilePicture: string | null
  userRoles: {
    es_docente: boolean
    es_administrador: boolean
    es_director_de_carrera: boolean
    es_secretario_academico: boolean
  }
}

interface AuthContextType {
  auth: Auth
  setAuth: React.Dispatch<React.SetStateAction<Auth>>
  handleLogout: () => void
  getAuthUser: () => void
  isAuthLoading: boolean
}

const defaultAuth: Auth = {
  isLoggedIn: false,
  userEmail: null,
  userFirstName: null,
  userLastName: null,
  userProfilePicture: null,
  userRoles: {
    es_administrador: false,
    es_director_de_carrera: false,
    es_docente: false,
    es_secretario_academico: false
  }
}

const AuthContext = createContext<AuthContextType>({
  auth: defaultAuth,
  setAuth: () => {},
  handleLogout: () => {},
  getAuthUser: () => {},
  isAuthLoading: true
})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<Auth>(defaultAuth)
  const [isAuthLoading, setIsAuthLoading] = useState(true)
  const navigate = useNavigate()

  const handleLogout = async () => {
    const response = await client.get('auth/logout/')

    if (response.status === 200) {
      setAuth(defaultAuth)
      navigate('/')
    }
  }

  const getAuthUser = async () => {
    setIsAuthLoading(true)
    client
      .get(`auth/me/`)
      .then((res) => {
        const { user, roles } = res.data.data
        setAuth({
          isLoggedIn: true,
          userEmail: user.email,
          userFirstName: user.first_name,
          userLastName: user.last_name,
          userProfilePicture: user.profile_picture,
          userRoles: roles
        })
      })
      .catch((err) => {
        console.log('[ERROR ON AUTH]', err)
      })
      .finally(() => {
        setIsAuthLoading(false)
      })
  }

  useEffect(() => {
    getAuthUser()
  }, [])

  return (
    <AuthContext.Provider value={{ auth, setAuth, handleLogout, getAuthUser, isAuthLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
export { AuthContext, AuthProvider }
