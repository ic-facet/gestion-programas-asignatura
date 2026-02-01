import { Spinner } from '../../../components'
import { MODOS_PROGRAMA_ASIGNATURA } from '../../../constants/constants'
import {
  TableWrapper,
  StyledTable,
  ActionIcon,
  LoadingContainer,
  EmptyRow,
  ErrorRow
} from '../ProgramasVigentesStyled'

type tableRow = {
  id: number | string
  asignatura: {
    id: number
    nombre: string
  }
  estado: string
  acciones_posibles: {
    ver_programa: boolean
    modificar_programa: boolean
    reutilizar_ultimo: boolean
    modificar_ultimo: boolean
    nuevo: boolean
    imprimir?: boolean
  }
  accion_requerida: string | null
}

interface TableProps {
  tableColumns: string[]
  tableData: tableRow[]
  verPrograma: (
    id: number | string,
    modoPrograma: ModosProgramaAsignatura
  ) => void
  imprimir: (id: number | string, modoPrograma: ModosProgramaAsignatura) => void
  isLoading: boolean
  error: boolean
  errorMessage?: string
}

type ModosProgramaAsignatura = keyof typeof MODOS_PROGRAMA_ASIGNATURA

export default function Table({
  tableColumns,
  tableData,
  verPrograma,
  imprimir,
  isLoading,
  error,
  errorMessage
}: TableProps) {
  // Si acciones no es null entonces renderizamos esa columna

  return isLoading ? (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  ) : (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {tableColumns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            <>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td>{item.asignatura.nombre}</td>
                  <td>{item.estado}</td>
                  <td id="column-acciones">
                    {item.acciones_posibles ? (
                      <>
                        {item.acciones_posibles.ver_programa ? (
                          <ActionIcon
                            onClick={() =>
                              verPrograma(
                                item.id,
                                MODOS_PROGRAMA_ASIGNATURA.VER as ModosProgramaAsignatura
                              )
                            }
                            className="fas fa-eye"
                            title="Ver programa"
                          />
                        ) : null}
                        {item.acciones_posibles.imprimir ? (
                          <ActionIcon
                            onClick={() =>
                              imprimir(
                                item.id,
                                MODOS_PROGRAMA_ASIGNATURA.IMPRIMIR as ModosProgramaAsignatura
                              )
                            }
                            className="fas fa-print"
                            title="Descargar PDF"
                          />
                        ) : null}
                      </>
                    ) : null}
                  </td>
                </tr>
              ))}
            </>
          ) : error ? (
            <ErrorRow>
              <td colSpan={3}>
                <i className="fas fa-exclamation-triangle" />
                {errorMessage || 'Ocurrió un error al momento de realizar la búsqueda'}
              </td>
            </ErrorRow>
          ) : (
            <EmptyRow>
              <td colSpan={3}>
                <i className="fas fa-inbox" />
                No hay programas vigentes
              </td>
            </EmptyRow>
          )}
        </tbody>
      </StyledTable>
    </TableWrapper>
  )
}
