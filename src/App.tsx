import { useState, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Navbar, ProtectedRoute, Spinner, MainContentContainer } from './components'
import { PAGINAS } from './constants/constants'
import { AuthProvider } from './context/authProvider'

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <AuthProvider>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <MainContentContainer>
        <Suspense fallback={<Spinner />}>
          <Routes>
            {PAGINAS
              .filter((pagina) => pagina.enabled) // Solo renderizar rutas habilitadas
              .map((pagina) => (
                <Route
                  key={pagina.key}
                  path={pagina.path}
                  element={
                    <ProtectedRoute requiresAuth={pagina.protectedByLogin}>
                      {pagina.modo ? (
                        <pagina.component modo={pagina.modo} />
                      ) : (
                        <pagina.component />
                      )}
                    </ProtectedRoute>
                  }
                />
              ))}
            <Route path="*" element={<h1>Página no encontrada</h1>} />
          </Routes>
        </Suspense>
      </MainContentContainer>
    </AuthProvider>
  )
}
