import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSesion } from '../contexto'
import { inicioSegunRol } from '../util'

const DEMOS = [
  { rol: 'Administrador', dni: '70000001', password: 'admin123', nota: 'Calcula, guarda y revisa rutas' },
  { rol: 'Conductor', dni: '12345678', password: 'conductor123', nota: 'Ve la ruta asignada a su camión' },
]

export default function Login() {
  const { usuario, iniciar, servidor } = useSesion()
  const navegar = useNavigate()
  const [dni, setDni] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [enviando, setEnviando] = useState(false)

  if (usuario) return <Navigate to={inicioSegunRol(usuario)} replace />

  async function enviar(evento) {
    evento.preventDefault()
    setEnviando(true)
    setError('')
    try {
      navegar(inicioSegunRol(await iniciar(dni, password)))
    } catch (e) {
      setError(e.message)
      setEnviando(false)
    }
  }

  return (
    <div className="contenedor login">
      <form className="tarjeta" onSubmit={enviar}>
        <img src="/logo.png" alt="" width="84" height="66" />
        <h1>Ingresar a EcoRouteX</h1>

        <label className="campo">
          <span>DNI</span>
          <input
            value={dni}
            onChange={(e) => setDni(e.target.value.replace(/\D/g, '').slice(0, 8))}
            inputMode="numeric"
            autoComplete="username"
            placeholder="8 dígitos"
            required
            minLength={8}
          />
        </label>
        <label className="campo">
          <span>Contraseña</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </label>

        {error && <p className="aviso aviso-error">{error}</p>}
        {servidor === 'despertando' && (
          <p className="aviso">Despertando el servidor; el primer ingreso puede tardar un poco.</p>
        )}
        <button className="boton boton-primario boton-grande" disabled={enviando}>
          {enviando ? 'Ingresando…' : 'Ingresar'}
        </button>
      </form>

      <aside className="demos">
        <h2>Usuarios de demostración</h2>
        <p>Es una demo pública con datos simulados. Pulsa uno para rellenar el formulario.</p>
        {DEMOS.map((d) => (
          <button
            key={d.dni}
            type="button"
            className="demo"
            onClick={() => {
              setDni(d.dni)
              setPassword(d.password)
            }}
          >
            <b>{d.rol}</b>
            <span className="mono">
              {d.dni} · {d.password}
            </span>
            <small>{d.nota}</small>
          </button>
        ))}
      </aside>
    </div>
  )
}
