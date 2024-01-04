import '../../../components/Table/Table.css'
import { MODOS_PROGRAMA_ASIGNATURA } from '../../../constants/constants'

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
}

type ModosProgramaAsignatura = keyof typeof MODOS_PROGRAMA_ASIGNATURA

export default function Table({
  tableColumns,
  tableData,
  verPrograma
}: TableProps) {
  // Si acciones no es null entonces renderizamos esa columna

  return (
    <article>
      <table className="content-table">
        <thead>
          <tr>
            {tableColumns.map((column) => (
              <th>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.asignatura.nombre}</td>
              <td>{item.estado}</td>
              <td id="column-acciones">
                {item.acciones_posibles ? (
                  <>
                    {item.acciones_posibles.ver_programa ? (
                      <i
                        onClick={() =>
                          verPrograma(
                            item.id,
                            MODOS_PROGRAMA_ASIGNATURA.VER as ModosProgramaAsignatura
                          )
                        }
                        className="fas fa-eye"
                        title="Ver programa"
                      ></i>
                    ) : null}
                    {item.acciones_posibles.imprimir ? (
                      <i
                        //   TODO: Agregar onclick xd
                        className="fas fa-print"
                        title="Imprimir"
                      ></i>
                    ) : null}
                  </>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  )
}
