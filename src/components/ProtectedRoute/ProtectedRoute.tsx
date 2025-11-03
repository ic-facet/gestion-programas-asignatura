import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { RUTAS_PAGINAS } from '../../constants/constants'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiresAuth: boolean
}

export const ProtectedRoute = ({ children, requiresAuth }: ProtectedRouteProps) => {
  const { auth } = useAuth()

  // Si la ruta requiere autenticación y el usuario NO está logueado, redirigir a login
  if (requiresAuth && !auth.isLoggedIn) {
    return <Navigate to={RUTAS_PAGINAS.LOGIN} replace />
  }

  // Si la ruta NO requiere autenticación (como login) y el usuario YA está logueado, redirigir a inicio
  if (!requiresAuth && auth.isLoggedIn && window.location.pathname === RUTAS_PAGINAS.LOGIN) {
    return <Navigate to={RUTAS_PAGINAS.INICIO} replace />
  }

  return <>{children}</>
}
