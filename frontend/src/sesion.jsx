import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { api, guardarSesion, leerSesion } from './api'
import { ContextoSesion, useSesion } from './contexto'
import { inicioSegunRol } from './util'

export function ProveedorSesion({ children }) {
  const [sesion, setSesion] = useState(leerSesion)
  // El backend gratuito de Render se duerme; se le hace ping al abrir la página
  // para que ya esté despierto cuando el usuario llegue a la demo.
  const [servidor, setServidor] = useState('despertando')

  useEffect(() => {
    let cancelado = false
    let intento = 0
    const ping = () =>
      api
        .despertar()
        .then(() => !cancelado && setServidor('listo'))
        .catch(() => {
          if (cancelado) return
          intento += 1
          // Un arranque en frío de Render puede pasar del minuto: tras ~1 min se
          // avisa que tarda más de lo normal, pero se sigue reintentando.
          if (intento >= 12) setServidor('caido')
          setTimeout(ping, intento >= 12 ? 10000 : 5000)
        })
    ping()
    return () => {
      cancelado = true
    }
  }, [])

  const valor = {
    usuario: sesion?.usuario ?? null,
    servidor,
    async iniciar(dni, password) {
      const nueva = await api.login(dni, password)
      guardarSesion(nueva)
      setSesion(nueva)
      return nueva.usuario
    },
    cerrar() {
      guardarSesion(null)
      setSesion(null)
    },
  }
  return <ContextoSesion.Provider value={valor}>{children}</ContextoSesion.Provider>
}

export function Protegida({ rol, children }) {
  const { usuario } = useSesion()
  if (!usuario) return <Navigate to="/login" replace />
  if (rol && usuario.rol !== rol) return <Navigate to={inicioSegunRol(usuario)} replace />
  return children
}
