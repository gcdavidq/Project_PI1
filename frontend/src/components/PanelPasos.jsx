import { useEffect, useState } from 'react'
import { colorPorLlenado } from '../util'

const INTERVALO_MS = 1400

export default function PanelPasos({ ruta, paso, setPaso }) {
  const [reproduciendo, setReproduciendo] = useState(false)
  // Un paso por decisión + uno final por el regreso al depósito.
  const ultimo = ruta.tramos.length
  const decision = paso !== null && paso <= ruta.pasos.length ? ruta.pasos[paso - 1] : null

  useEffect(() => {
    if (!reproduciendo) return
    const id = setTimeout(() => {
      const siguiente = (paso ?? 0) + 1
      setPaso(siguiente)
      if (siguiente >= ultimo) setReproduciendo(false)
    }, INTERVALO_MS)
    return () => clearTimeout(id)
  }, [reproduciendo, paso, ultimo, setPaso])

  function alternar() {
    if (!reproduciendo && (paso === null || paso >= ultimo)) setPaso(1)
    setReproduciendo(!reproduciendo)
  }

  return (
    <section className="pasos">
      <header>
        <div>
          <h3>Cómo decide el algoritmo</h3>
          <p>
            En cada parada se puntúan los contenedores pendientes y se elige el de mayor prioridad
            que todavía quepa en el camión.
          </p>
        </div>
        <div className="controles">
          <button
            className="boton"
            onClick={() => setPaso(Math.max(1, (paso ?? 2) - 1))}
            disabled={paso === 1}
            aria-label="Paso anterior"
          >
            ‹
          </button>
          <button className="boton boton-primario" onClick={alternar}>
            {reproduciendo ? 'Pausar' : paso === null ? '▶ Ver paso a paso' : '▶ Reproducir'}
          </button>
          <button
            className="boton"
            onClick={() => setPaso(Math.min(ultimo, (paso ?? 0) + 1))}
            disabled={paso === ultimo}
            aria-label="Paso siguiente"
          >
            ›
          </button>
          {paso !== null && (
            <button
              className="boton"
              onClick={() => {
                setReproduciendo(false)
                setPaso(null)
              }}
            >
              Ver ruta completa
            </button>
          )}
        </div>
      </header>

      {paso !== null && (
        <>
          <input
            className="linea-tiempo"
            type="range"
            min="1"
            max={ultimo}
            value={paso}
            onChange={(e) => setPaso(Number(e.target.value))}
            aria-label="Paso del recorrido"
          />
          {decision ? (
            <div className="decision">
              <p className="decision-titulo">
                <b>Paso {paso}</b> de {ultimo} · desde{' '}
                {paso === 1 ? 'el depósito' : `la parada ${paso - 1}`} hay{' '}
                {decision.total_candidatos} candidatos · capacidad restante tras recoger:{' '}
                <b>{decision.capacidad_restante}</b>
              </p>
              <div className="tabla-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Contenedor</th>
                      <th>Llenado</th>
                      <th>Distancia</th>
                      <th>Tiempo</th>
                      <th>Prioridad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decision.candidatos.map((c, i) => {
                      const elegido = c.n_nodo === decision.destino
                      return (
                        <tr key={c.n_nodo} className={elegido ? 'elegido' : c.cabe ? '' : 'no-cabe'}>
                          <td>{i + 1}</td>
                          <td className="mono">
                            {c.n_nodo}
                            {elegido && <span className="chip">elegido</span>}
                            {!c.cabe && <span className="chip chip-gris">no cabe</span>}
                          </td>
                          <td>
                            <i className="punto" style={{ background: colorPorLlenado(c.llenado) }} />
                            {c.llenado}%
                          </td>
                          <td>{Math.round(c.distancia)} m</td>
                          <td>{c.tiempo.toFixed(1)} min</td>
                          <td>
                            <div className="barra barra-prioridad">
                              <i style={{ width: `${c.prioridad * 100}%` }} />
                            </div>
                            <span className="mono">{c.prioridad.toFixed(3)}</span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <p className="decision-titulo">
              <b>Regreso al depósito.</b> No quedan contenedores que quepan en el camión, así que
              vuelve por el camino más corto (Dijkstra sobre la red vial).
            </p>
          )}
        </>
      )}
    </section>
  )
}
