import { Spinner } from '../../../components'
import { MODOS_PROGRAMA_ASIGNATURA } from '../../../constants/constants'
import { tableRowProgramasVigentes } from 'props/props'
import {
  TableWrapper,
  StyledTable,
  ActionIcon,
  LoadingContainer,
  EmptyRow,
  ErrorRow
} from '../HistorialStyled'

interface TableProps {
  tableColumns: string[]
  tableData: tableRowProgramasVigentes[] | null
  verPrograma: (
    id: number | null,
    modoPrograma: ModosProgramaAsignatura
  ) => void
  imprimir: (
    id: number | string | null,
    modoPrograma: ModosProgramaAsignatura
  ) => void
  isLoading: boolean
  error: boolean
}

type ModosProgramaAsignatura = keyof typeof MODOS_PROGRAMA_ASIGNATURA

export default function TableHistorial({
  tableColumns,
  tableData,
  verPrograma,
  imprimir,
  isLoading,
  error
}: TableProps) {
  if (isLoading) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    )
  }

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {tableColumns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableData && tableData.length > 0 ? (
            tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.asignatura.nombre}</td>
                <td id="column-acciones">
                  {item.acciones_posibles ? (
                    <>
                      {item.acciones_posibles.ver_programa && (
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
                      )}
                      {item.acciones_posibles.imprimir && (
                        <ActionIcon
                          onClick={() =>
                            imprimir(
                              item.id,
                              MODOS_PROGRAMA_ASIGNATURA.IMPRIMIR as ModosProgramaAsignatura
                            )
                          }
                          className="fas fa-print"
                          title="Imprimir"
                        />
                      )}
                    </>
                  ) : null}
                </td>
              </tr>
            ))
          ) : error ? (
            <ErrorRow>
              <td colSpan={tableColumns.length}>
                <i className="fas fa-exclamation-triangle" />
                Ocurrió un error al momento de realizar la búsqueda
              </td>
            </ErrorRow>
          ) : (
            <EmptyRow>
              <td colSpan={tableColumns.length}>
                <i className="fas fa-search" />
                No hay datos que coincidan con la búsqueda
              </td>
            </EmptyRow>
          )}
        </tbody>
      </StyledTable>
    </TableWrapper>
  )
}
