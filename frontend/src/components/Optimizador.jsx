import { useEffect, useState } from 'react'
import { api } from '../api'
import { useSesion } from '../contexto'
import MapaRuta from './MapaRuta'
import Metricas from './Metricas'
import PanelPasos from './PanelPasos'

const PESOS_ORIGINALES = { llenado: 0.3, distancia: 0.5, tiempo: 0.2 }
const ETIQUETAS = {
  llenado: 'Nivel de llenado',
  distancia: 'Cercanía (distancia)',
  tiempo: 'Rapidez (tiempo)',
}

export default function Optimizador({ puedeGuardar = false }) {
  const { servidor } = useSesion()
  const [sector, setSector] = useState(1)
  const [capacidad, setCapacidad] = useState(1000)
  const [pesos, setPesos] = useState(PESOS_ORIGINALES)
  const [guardar, setGuardar] = useState(puedeGuardar)
  const [mapa, setMapa] = useState(null)
  const [ruta, setRuta] = useState(null)
  const [paso, setPaso] = useState(null)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (servidor !== 'listo') return
    let vigente = true
    api
      .contenedores(sector)
      .then((datos) => vigente && setMapa(datos))
      .catch((e) => vigente && setError(e.message))
    return () => {
      vigente = false
    }
  }, [sector, servidor])

  function cambiarSector(nuevo) {
    setSector(nuevo)
    setRuta(null)
    setPaso(null)
  }

  async function calcular(evento) {
    evento.preventDefault()
    setCargando(true)
    setError('')
    try {
      const resultado = await api.optimizar({
        sector,
        capacidad,
        pesos,
        guardar: puedeGuardar && guardar,
      })
      setRuta(resultado)
      setPaso(null)
    } catch (e) {
      setError(e.message)
    } finally {
      setCargando(false)
    }
  }

  const sinPesos = pesos.llenado + pesos.distancia + pesos.tiempo === 0
  const pesosCambiados = Object.keys(pesos).some((k) => pesos[k] !== PESOS_ORIGINALES[k])

  return (
    <div className="optimizador">
      <form className="panel-control" onSubmit={calcular}>
        <h3>Buscar por sector</h3>

        <label className="campo">
          <span>Selecciona un sector</span>
          <select value={sector} onChange={(e) => cambiarSector(Number(e.target.value))}>
            {[1, 2, 3, 4].map((s) => (
              <option key={s} value={s}>
                Sector {s}
              </option>
            ))}
          </select>
        </label>

        <label className="campo">
          <span>
            Capacidad del camión <output>{capacidad}</output>
          </span>
          <input
            type="range"
            min="200"
            max="2000"
            step="100"
            value={capacidad}
            onChange={(e) => setCapacidad(Number(e.target.value))}
          />
        </label>

        <fieldset className="pesos">
          <legend>
            Pesos de la prioridad
            {pesosCambiados && (
              <button type="button" className="enlace" onClick={() => setPesos(PESOS_ORIGINALES)}>
                Restaurar
              </button>
            )}
          </legend>
          {Object.keys(ETIQUETAS).map((clave) => (
            <label className="campo" key={clave}>
              <span>
                {ETIQUETAS[clave]} <output>{pesos[clave].toFixed(2)}</output>
              </span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={pesos[clave]}
                onChange={(e) => setPesos({ ...pesos, [clave]: Number(e.target.value) })}
              />
            </label>
          ))}
        </fieldset>

        {puedeGuardar && (
          <label className="casilla">
            <input type="checkbox" checked={guardar} onChange={(e) => setGuardar(e.target.checked)} />
            Guardar y asignar a un camión
          </label>
        )}

        <button className="boton boton-primario" disabled={cargando || sinPesos || servidor !== 'listo'}>
          {cargando ? 'Calculando…' : 'Cargar mapa'}
        </button>
        {error && <p className="aviso aviso-error">{error}</p>}
        {ruta?.ruta_id && <p className="aviso aviso-ok">Ruta #{ruta.ruta_id} guardada y asignada.</p>}

        <ul className="leyenda" aria-label="Leyenda del mapa">
          <li><i style={{ background: '#3fae49' }} /> Llenado bajo (&lt; 40%)</li>
          <li><i style={{ background: '#e9a23b' }} /> Medio (40–69%)</li>
          <li><i style={{ background: '#d9483b' }} /> Alto (≥ 70%)</li>
        </ul>
      </form>

      <div className="marco-mapa">
        {servidor !== 'listo' && (
          <div className="velo-mapa">
            <span className="spinner" />
            <p>
              <strong>Despertando el servidor…</strong>
              <br />
              {servidor === 'despertando'
                ? 'El plan gratuito se duerme tras un rato sin visitas; puede tardar hasta un minuto.'
                : 'Está tardando más de lo normal. Seguimos intentando; el mapa aparecerá solo.'}
            </p>
          </div>
        )}
        <MapaRuta
          deposito={mapa?.deposito}
          contenedores={mapa?.contenedores}
          ruta={ruta}
          paso={paso}
        />
      </div>

      {ruta && (
        <>
          <Metricas ruta={ruta} />
          <PanelPasos ruta={ruta} paso={paso} setPaso={setPaso} />
        </>
      )}
    </div>
  )
}
