import { useNavigate } from 'react-router-dom'

import { Spinner } from '../../../../components'
import {
  RUTAS_PAGINAS,
  MODOS_PROGRAMA_ASIGNATURA
} from '../../../../constants/constants'
import useTareasPendientes from '../../hooks/useTareasPendientes'
import {
  TableWrapper,
  StyledTable,
  ActionIcon,
  LoadingContainer,
  EmptyRow,
  ErrorRow
} from '../../PendientesStyled'

export default function Tabla() {
  const { tareasPendientes, loading, error } = useTareasPendientes()

  const navigate = useNavigate()

  const columnasTablaPendientes = [
    'ASIGNATURA',
    'TAREA PENDIENTE',
    'ACCIONES POSIBLES'
  ]

  const handleVerPrograma = (id: number | null) => {
    navigate(`${RUTAS_PAGINAS.PROGRAMA_DE_ASIGNATURA}/${id}`)
  }

  const handleModificarPrograma = (id: number | null) => {
    navigate(
      `${RUTAS_PAGINAS.PROGRAMA_DE_ASIGNATURA}/${MODOS_PROGRAMA_ASIGNATURA.EDITAR}/${id}`
    )
  }

  const handleModificarAPartirUltimo = (id: number | null) => {
    navigate(
      `${RUTAS_PAGINAS.PROGRAMA_DE_ASIGNATURA}/${MODOS_PROGRAMA_ASIGNATURA.EDITAR_ULTIMO}/${id}`
    )
  }

  const handleCrearNuevoPrograma = (id: number | null) => {
    navigate(
      `${RUTAS_PAGINAS.PROGRAMA_DE_ASIGNATURA}/${MODOS_PROGRAMA_ASIGNATURA.NUEVO}/${id}`
    )
  }

  const handleRevisarPrograma = (id: number | null) => {
    navigate(
      `${RUTAS_PAGINAS.PROGRAMA_DE_ASIGNATURA}/${MODOS_PROGRAMA_ASIGNATURA.REVISAR}/${id}`
    )
  }

  return loading ? (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  ) : (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {columnasTablaPendientes.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tareasPendientes.length > 0 ? (
            <>
              {tareasPendientes.map((item) => (
                <tr key={item.asignatura.id}>
                  <td>{item.asignatura.nombre}</td>
                  <td>{item.accionRequerida}</td>
                  <td id="column-acciones">
                    {item.accionesPosibles && (
                      <>
                        {item.accionesPosibles.verPrograma && (
                          <ActionIcon
                            onClick={() => handleVerPrograma(item.idPrograma)}
                            className="fas fa-eye"
                            title="Ver programa"
                          />
                        )}
                        {item.accionesPosibles.modificarPrograma && (
                          <ActionIcon
                            onClick={() =>
                              handleModificarPrograma(item.idPrograma)
                            }
                            className="fas fa-edit"
                            title="Editar programa"
                          />
                        )}
                        {item.accionesPosibles.modificarUltimo && (
                          <ActionIcon
                            onClick={() =>
                              handleModificarAPartirUltimo(item.asignatura.id)
                            }
                            className="fas fa-sync"
                            title="Modificar a partir del último programa"
                          />
                        )}
                        {item.accionesPosibles.nuevo && (
                          <ActionIcon
                            onClick={() =>
                              handleCrearNuevoPrograma(item.asignatura.id)
                            }
                            className="fas fa-plus"
                            title="Nuevo programa"
                          />
                        )}
                        {item.accionesPosibles.revisarPrograma && (
                          <ActionIcon
                            onClick={() =>
                              handleRevisarPrograma(item.idPrograma)
                            }
                            className="fas fa-check"
                            title="Revisar programa"
                          />
                        )}
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </>
          ) : error ? (
            <ErrorRow>
              <td colSpan={3}>
                <i className="fas fa-exclamation-triangle" />
                Ocurrió un error al momento de realizar la búsqueda
              </td>
            </ErrorRow>
          ) : (
            <EmptyRow>
              <td colSpan={3}>
                <i className="fas fa-inbox" />
                No hay tareas pendientes
              </td>
            </EmptyRow>
          )}
        </tbody>
      </StyledTable>
    </TableWrapper>
  )
}
