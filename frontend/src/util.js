export const km = (metros) => `${(metros / 1000).toFixed(2)} km`
export const minutos = (m) => `${m.toFixed(1)} min`

export function colorPorLlenado(llenado) {
  // Hex y no variables CSS: Leaflet los escribe como atributos SVG.
  if (llenado >= 70) return '#d9483b'
  if (llenado >= 40) return '#e9a23b'
  return '#3fae49'
}

export const inicioSegunRol = (usuario) =>
  usuario?.rol === 'administrador' ? '/rutas-actuales' : '/mi-ruta'
