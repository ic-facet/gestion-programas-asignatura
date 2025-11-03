import { PlanesDeEstudioInterface } from 'interfaces/interfaces'
import { StyledTable, ActionIcon } from '../MatrizStyled'

interface TableProps {
  tableColumns: string[]
  tableData: PlanesDeEstudioInterface[]
  generarMatriz: (id_plan: number, id_carrera: number) => void
}

// TODO: Esta tabla va a ser borrada dado que no se usara esta vista
export default function TablaPlanesEstudio({
  tableColumns,
  tableData,
  generarMatriz
}: TableProps) {
  return (
    <article>
      <StyledTable>
        <thead>
          <tr>
            {tableColumns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.carreraNombre}</td>
              <td id="column-acciones">
                <ActionIcon
                  className="fa fa-file-excel"
                  onClick={() => generarMatriz(item.id, item.carreraId)}
                  title="Generar Matriz de Tributación"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </article>
  )
}
