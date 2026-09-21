import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSesion } from '../contexto'
import { inicioSegunRol } from '../util'

export default function Navbar() {
  const { usuario, cerrar } = useSesion()
  const navegar = useNavigate()

  function salir() {
    cerrar()
    navegar('/')
  }

  return (
    <header className="navbar">
      <div className="contenedor navbar-interior">
        <Link to="/" className="marca">
          <img src="/logo.png" alt="" width="36" height="28" />
          EcoRouteX
        </Link>
        <nav aria-label="Principal">
          {usuario?.rol === 'administrador' && (
            <>
              <NavLink to="/rutas-actuales">Rutas actuales</NavLink>
              <NavLink to="/conductores">Conductores</NavLink>
              <NavLink to="/ver-rutas">Ver rutas</NavLink>
            </>
          )}
          {usuario?.rol === 'conductor' && <NavLink to="/mi-ruta">Mi ruta</NavLink>}
          {!usuario && (
            <>
              <a href="/#como-funciona">Cómo funciona</a>
              <a href="/#demo">Demo</a>
            </>
          )}
          {usuario ? (
            <button className="boton boton-oscuro" onClick={salir}>
              Salir
            </button>
          ) : (
            <Link className="boton boton-oscuro" to="/login">
              Ingresar
            </Link>
          )}
        </nav>
      </div>
      {usuario && (
        <p className="contenedor saludo">
          Sesión de <b>{usuario.nombre} {usuario.apellido}</b> · {usuario.rol}
          {' · '}
          <Link to={inicioSegunRol(usuario)}>ir a mi panel</Link>
        </p>
      )}
    </header>
  )
}
