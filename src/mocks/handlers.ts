import type { RequestHandler } from 'msw'

// Unused imports commented out since MSW is disabled
// import { rest } from 'msw'
// import programaAsignaturas from './fixtures/programaAsignaturas.json'
// import programasAsignaturas from './fixtures/programasAsignaturas.json'
// import ProgramasVigentes from './fixtures/programasVigentes.json'
// import { HANDLERS } from '../constants/constants'
// import { BASE_URL } from '../helpers/env-variables'

// Usuario de desarrollo por defecto
// const devUser = {
//   data: {
//     user: {
//       email: 'dev@facet.unt.edu.ar',
//       first_name: 'Usuario',
//       last_name: 'Desarrollo',
//       profile_picture: null
//     },
//     roles: {
//       es_administrador: true,
//       es_director_de_carrera: true,
//       es_docente: true,
//       es_secretario_academico: true
//     }
//   }
// }

const handlers: RequestHandler[] = [
  // ============================================
  // TODAS LAS PETICIONES DE AUTH VAN AL BACKEND REAL
  // ============================================
  // Ya no se mockea nada - todas las peticiones pasan al backend Django
  // Esto fuerza al usuario a hacer login real con el botón de desarrollo
  // que crea una sesión Django válida

  // ============================================
  // TODAS LAS DEMÁS PETICIONES VAN AL BACKEND REAL
  // No agregar más mocks aquí - dejar que pasen al servidor Django
  // ============================================
]

export default handlers
