import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'
import { colorPorLlenado } from '../util'
import { CircleMarker, MapContainer, Marker, Polyline, TileLayer, Tooltip, useMap } from 'react-leaflet'

const CENTRO_SAN_BORJA = [-12.1005, -76.999]

const iconoDeposito = L.divIcon({
  className: '',
  html: '<div class="pin pin-deposito" title="Depósito">D</div>',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

const iconoParada = (orden, actual) =>
  L.divIcon({
    className: '',
    html: `<div class="pin pin-parada${actual ? ' pin-actual' : ''}">${orden}</div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
  })

function Encuadrar({ puntos }) {
  const mapa = useMap()
  const clave = puntos.map((p) => p.n_nodo).join()
  useEffect(() => {
    if (puntos.length) {
      mapa.fitBounds(puntos.map((p) => [p.lat, p.lon]), { padding: [36, 36] })
    }
    // Solo se reencuadra cuando cambia el conjunto de puntos, no en cada render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clave, mapa])
  return null
}

/**
 * contenedores: todos los del sector (coloreados por llenado).
 * ruta: respuesta de la API ({paradas, tramos, pasos}) o null.
 * paso: decisión que se está mostrando (1..n, n+1 = regreso); null = ruta completa.
 */
export default function MapaRuta({ deposito, contenedores = [], ruta = null, paso = null }) {
  const tramosVisibles = ruta ? ruta.tramos.slice(0, paso ?? ruta.tramos.length) : []
  const paradasVisibles = ruta ? ruta.paradas.slice(1, (paso ?? ruta.paradas.length) + 1) : []
  const enRuta = new Set(paradasVisibles.map((p) => p.n_nodo))
  const candidatos =
    ruta && paso !== null && paso >= 1 && paso <= ruta.pasos.length
      ? new Map(ruta.pasos[paso - 1].candidatos.map((c, i) => [c.n_nodo, i]))
      : new Map()

  return (
    <MapContainer center={CENTRO_SAN_BORJA} zoom={14} className="mapa" scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Encuadrar puntos={deposito ? [deposito, ...contenedores] : contenedores} />

      {tramosVisibles.map((coords, i) => (
        <Polyline
          key={i}
          positions={coords}
          pathOptions={{
            color: i === tramosVisibles.length - 1 && paso !== null ? '#0ea5b7' : '#1d4ed8',
            weight: 5,
            opacity: 0.85,
          }}
        />
      ))}

      {contenedores
        .filter((c) => !enRuta.has(c.n_nodo))
        .map((c) => {
          const lugar = candidatos.get(c.n_nodo)
          const esCandidato = lugar !== undefined
          return (
            <CircleMarker
              key={c.n_nodo}
              center={[c.lat, c.lon]}
              radius={esCandidato ? 10 : 7}
              pathOptions={{
                color: esCandidato ? '#0b3b3c' : '#ffffff',
                weight: esCandidato ? 3 : 1.5,
                fillColor: colorPorLlenado(c.llenado),
                fillOpacity: ruta && !esCandidato && paso === null ? 0.45 : 0.95,
              }}
            >
              <Tooltip>
                Contenedor {c.n_nodo}
                <br />
                Llenado: {c.llenado}%{esCandidato ? ` · candidato #${lugar + 1}` : ''}
              </Tooltip>
            </CircleMarker>
          )
        })}

      {paradasVisibles
        .filter((p) => p.llenado !== null)
        .map((p) => (
          <Marker
            key={p.n_nodo}
            position={[p.lat, p.lon]}
            icon={iconoParada(p.orden, paso !== null && p.orden === paso)}
          >
            <Tooltip>
              Parada {p.orden} · llenado {p.llenado}%
            </Tooltip>
          </Marker>
        ))}

      {deposito && (
        <Marker position={[deposito.lat, deposito.lon]} icon={iconoDeposito}>
          <Tooltip>Depósito: salida y retorno del camión</Tooltip>
        </Marker>
      )}
    </MapContainer>
  )
}
