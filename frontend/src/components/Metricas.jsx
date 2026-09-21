import { km, minutos } from '../util'

export default function Metricas({ ruta }) {
  const { comparacion } = ruta
  const paradas = ruta.pasos.length
  const mejora = comparacion.ahorro_distancia_pct
  const ahorroKm = (comparacion.distancia - ruta.distancia_total) / 1000

  return (
    <section className="metricas" aria-label="Resultado de la ruta">
      <div className="metrica">
        <span>Distancia</span>
        <strong>{km(ruta.distancia_total)}</strong>
      </div>
      <div className="metrica">
        <span>Tiempo de conducción</span>
        <strong>{minutos(ruta.tiempo_total)}</strong>
      </div>
      <div className="metrica">
        <span>Contenedores atendidos</span>
        <strong>{paradas}</strong>
        <small>{ruta.contenedores_pendientes} quedan para otro viaje</small>
      </div>
      <div className="metrica">
        <span>Carga recogida</span>
        <strong>
          {ruta.carga_recogida} / {ruta.capacidad}
        </strong>
        <div className="barra">
          <i style={{ width: `${(ruta.carga_recogida / ruta.capacidad) * 100}%` }} />
        </div>
      </div>
      <div className={`metrica metrica-ahorro${mejora < 0 ? ' negativa' : ''}`}>
        <span>Frente a recorrer las mismas paradas sin priorizar</span>
        <strong>
          {mejora >= 0 ? '−' : '+'}
          {Math.abs(mejora)}% de distancia
        </strong>
        <small>
          {km(comparacion.distancia)} en orden de registro ·{' '}
          {ahorroKm >= 0 ? `${ahorroKm.toFixed(2)} km ahorrados` : 'esta combinación de pesos no mejora'}
        </small>
      </div>
    </section>
  )
}
