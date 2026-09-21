import { useEffect, useState } from 'react'
import { api } from '../api'
import MapaRuta from '../components/MapaRuta'
import Optimizador from '../components/Optimizador'
import { km, minutos } from '../util'

function useDatos(cargar) {
  const [estado, setEstado] = useState({ datos: null, error: '', cargando: true })
  useEffect(() => {
    let vigente = true
    cargar()
      .then((datos) => vigente && setEstado({ datos, error: '', cargando: false }))
      .catch((e) => vigente && setEstado({ datos: null, error: e.message, cargando: false }))
    return () => {
      vigente = false
    }
    // `cargar` es una función estable del módulo api.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return estado
}

function Estado({ cargando, error }) {
  if (cargando) return <p className="aviso"><span className="spinner" /> Cargando…</p>
  if (error) return <p className="aviso aviso-error">{error}</p>
  return null
}

const fecha = (iso) =>
  new Date(iso).toLocaleString('es-PE', { dateStyle: 'medium', timeStyle: 'short' })

// La ruta guardada no incluye los pasos del algoritmo; se adapta a lo que espera el mapa.
const comoRutaDeMapa = (detalle) => ({ paradas: detalle.puntos, tramos: detalle.tramos, pasos: [] })
const soloContenedores = (detalle) => detalle.puntos.filter((p) => p.llenado !== null)

export function RutasActuales() {
  return (
    <div className="contenedor pagina">
      <h1>Rutas actuales de los camiones recolectores</h1>
      <Optimizador puedeGuardar />
    </div>
  )
}

export function Conductores() {
  const { datos, ...estado } = useDatos(api.conductores)
  return (
    <div className="contenedor pagina">
      <h1>Conductores</h1>
      <Estado {...estado} />
      {datos && (
        <div className="tabla-scroll">
          <table className="tabla-grande">
            <thead>
              <tr><th>Nombre</th><th>DNI</th><th>Celular</th><th>Placa</th></tr>
            </thead>
            <tbody>
              {datos.map((c) => (
                <tr key={c.id_usuario}>
                  <td>{c.nombre_completo}</td>
                  <td className="mono">{c.dni}</td>
                  <td className="mono">{c.celular ?? '—'}</td>
                  <td className="mono">{c.placa ?? 'Sin camión'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export function VerRutas() {
  const { datos, ...estado } = useDatos(api.rutas)
  const [detalle, setDetalle] = useState(null)
  const [error, setError] = useState('')

  const abrir = (id) =>
    api.ruta(id).then(setDetalle).catch((e) => setError(e.message))

  return (
    <div className="contenedor pagina">
      <h1>Historial de rutas</h1>
      <Estado {...estado} error={estado.error || error} />
      {datos?.length === 0 && (
        <p className="aviso">Aún no hay rutas guardadas. Calcula una en «Rutas actuales».</p>
      )}
      {detalle && (
        <div className="marco-mapa marco-detalle">
          <MapaRuta
            deposito={detalle.puntos[0]}
            contenedores={soloContenedores(detalle)}
            ruta={comoRutaDeMapa(detalle)}
          />
        </div>
      )}
      {datos?.length > 0 && (
        <div className="tabla-scroll">
          <table className="tabla-grande">
            <thead>
              <tr>
                <th>#</th><th>Fecha</th><th>Sector</th><th>Camión</th><th>Paradas</th>
                <th>Distancia</th><th>Tiempo</th><th>Estado</th><th></th>
              </tr>
            </thead>
            <tbody>
              {datos.map((r) => (
                <tr key={r.id} className={detalle?.id === r.id ? 'elegido' : ''}>
                  <td className="mono">{r.id}</td>
                  <td>{fecha(r.fecha_creacion)}</td>
                  <td>Sector {r.sector}</td>
                  <td className="mono">{r.placa ?? '—'}</td>
                  <td>{r.paradas}</td>
                  <td>{km(r.distancia)}</td>
                  <td>{minutos(r.tiempo)}</td>
                  <td>
                    <span className={`chip${r.activo ? '' : ' chip-gris'}`}>
                      {r.activo ? 'activa' : 'reemplazada'}
                    </span>
                  </td>
                  <td>
                    <button className="enlace" onClick={() => abrir(r.id)}>Ver en mapa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export function MiRuta() {
  const { datos, ...estado } = useDatos(api.miRuta)
  return (
    <div className="contenedor pagina">
      <h1>Mi ruta de hoy</h1>
      <Estado {...estado} />
      {!estado.cargando && !estado.error && !datos && (
        <p className="aviso">
          Tu camión todavía no tiene una ruta asignada. Un administrador debe calcularla y guardarla.
        </p>
      )}
      {datos && (
        <>
          <section className="metricas">
            <div className="metrica"><span>Camión</span><strong className="mono">{datos.placa}</strong></div>
            <div className="metrica"><span>Sector</span><strong>{datos.sector}</strong></div>
            <div className="metrica"><span>Paradas</span><strong>{datos.paradas}</strong></div>
            <div className="metrica"><span>Distancia</span><strong>{km(datos.distancia)}</strong></div>
            <div className="metrica"><span>Tiempo de conducción</span><strong>{minutos(datos.tiempo)}</strong></div>
          </section>
          <div className="marco-mapa marco-detalle">
            <MapaRuta
              deposito={datos.puntos[0]}
              contenedores={soloContenedores(datos)}
              ruta={comoRutaDeMapa(datos)}
            />
          </div>
          <ol className="lista-paradas">
            {soloContenedores(datos).map((p) => (
              <li key={p.n_nodo}>
                <span className="numero">{p.orden}</span>
                Contenedor <span className="mono">{p.n_nodo}</span>
                <span className="chip chip-gris">{p.llenado}% lleno</span>
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  )
}
