const BASE = (import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000').replace(/\/$/, '')

const CLAVE_SESION = 'ecoroutex.sesion'

export function leerSesion() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_SESION))
  } catch {
    return null
  }
}

export function guardarSesion(sesion) {
  if (sesion) localStorage.setItem(CLAVE_SESION, JSON.stringify(sesion))
  else localStorage.removeItem(CLAVE_SESION)
}

export class ErrorApi extends Error {
  constructor(mensaje, status) {
    super(mensaje)
    this.status = status
  }
}

async function pedir(ruta, { metodo = 'GET', cuerpo } = {}) {
  const token = leerSesion()?.token
  let respuesta
  try {
    respuesta = await fetch(BASE + ruta, {
      method: metodo,
      headers: {
        ...(cuerpo ? { 'Content-Type': 'application/json' } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: cuerpo ? JSON.stringify(cuerpo) : undefined,
    })
  } catch {
    throw new ErrorApi('No se pudo conectar con el servidor.', 0)
  }

  if (respuesta.status === 401 && token) {
    // Token vencido: se cierra la sesión y se vuelve al login.
    guardarSesion(null)
    window.location.assign('/login')
  }
  const datos = await respuesta.json().catch(() => null)
  if (!respuesta.ok) {
    const detalle = typeof datos?.detail === 'string' ? datos.detail : 'Solicitud inválida.'
    throw new ErrorApi(detalle, respuesta.status)
  }
  return datos
}

export const api = {
  health: () => pedir('/health'),
  login: (dni, password) => pedir('/auth/login', { metodo: 'POST', cuerpo: { dni, password } }),
  contenedores: (sector) => pedir(`/contenedores?sector=${sector}`),
  optimizar: (parametros) => pedir('/rutas/optimizar', { metodo: 'POST', cuerpo: parametros }),
  rutas: () => pedir('/rutas'),
  ruta: (id) => pedir(`/rutas/${id}`),
  miRuta: () => pedir('/rutas/mi-ruta'),
  conductores: () => pedir('/conductores'),
}
