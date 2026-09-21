import { Link } from 'react-router-dom'
import Optimizador from '../components/Optimizador'

const PASOS = [
  {
    titulo: 'La ciudad como grafo',
    texto:
      'La red vial de San Borja se descarga de OpenStreetMap: 1 364 intersecciones (nodos) y 3 196 tramos de calle (aristas) con su longitud y sentido.',
  },
  {
    titulo: 'Contenedores con nivel de llenado',
    texto:
      'Cada contenedor es un nodo del grafo y reporta qué tan lleno está. Una matriz guarda la distancia y el tiempo por calles entre todos los contenedores de un sector.',
  },
  {
    titulo: 'Prioridad en cada parada',
    texto:
      'Desde donde está el camión se puntúa a cada contenedor pendiente combinando llenado, cercanía y rapidez. Se visita el de mayor puntaje que aún quepa en el camión.',
  },
  {
    titulo: 'Dijkstra entre paradas',
    texto:
      'El camino exacto por las calles entre una parada y la siguiente se calcula con el algoritmo de Dijkstra. Al llenarse, el camión regresa al depósito.',
  },
]

const EQUIPO = [
  'Arquiño Cerna, Noemi Salomina',
  'Aybar Escobar, Edithson Ricardo',
  'Colla Cervantes, Marelly Massiel',
  'Quezada Marceliano, Gian Carlos',
  'Salazar Cobian, Arny Eliu',
]

export default function Landing() {
  return (
    <>
      <section className="hero">
        <div className="contenedor hero-interior">
          <div>
            <p className="sobretitulo">Recolección de residuos · San Borja, Lima</p>
            <h1>
              El camión de basura no debería <em>deambular</em> por la ciudad.
            </h1>
            <p className="bajada">
              EcoRouteX calcula qué contenedores visitar y en qué orden, según qué tan llenos están
              y qué tan lejos quedan, y traza el recorrido calle por calle. Menos kilómetros, menos
              combustible, menos emisiones.
            </p>
            <div className="acciones">
              <a className="boton boton-primario boton-grande" href="#demo">
                Probar la demo
              </a>
              <Link className="boton boton-grande" to="/login">
                Entrar al panel
              </Link>
            </div>
          </div>
          <img className="hero-logo" src="/logo.png" alt="Logo de EcoRouteX" width="392" height="308" />
        </div>
      </section>

      <section className="contenedor seccion">
        <h2>El problema</h2>
        <div className="cifras">
          <div>
            <strong>54,6%</strong>
            <p>de las municipalidades del Perú cuenta con un Plan de Manejo de Residuos Sólidos (INEI, 2020).</p>
          </div>
          <div>
            <strong>40%</strong>
            <p>de las emisiones del país relacionadas con energía proviene del sector transporte.</p>
          </div>
          <div>
            <strong>+200%</strong>
            <p>es el aumento proyectado de esas emisiones al 2050 si no hay cambios. Hoy a los camiones se les dice qué puntos visitar, no el camino más eficiente.</p>
          </div>
        </div>
      </section>

      <section className="contenedor seccion" id="como-funciona">
        <h2>Cómo funciona</h2>
        <ol className="como-funciona">
          {PASOS.map((p, i) => (
            <li key={p.titulo}>
              <span className="numero">{i + 1}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>
        <div className="formula">
          <code>
            prioridad = <b>0.3</b>·llenado + <b>0.5</b>·(1 − distancia) + <b>0.2</b>·(1 − tiempo)
          </code>
          <p>
            Cada factor se normaliza entre 0 y 1. Los pesos son los del proyecto original; en la
            demo puedes moverlos y ver cómo cambia la ruta.
          </p>
        </div>
      </section>

      <section className="seccion seccion-demo" id="demo">
        <div className="contenedor">
          <h2>Pruébalo</h2>
          <p className="bajada">
            Datos reales de calles, contenedores simulados. Elige un sector, pulsa <b>Cargar mapa</b> y
            luego <b>Ver paso a paso</b> para seguir cada decisión del algoritmo.
          </p>
          <Optimizador />
        </div>
      </section>

      <section className="contenedor seccion">
        <h2>Sobre el proyecto</h2>
        <div className="sobre">
          <p>
            EcoRouteX nació en 2024 como proyecto grupal del curso <b>Proyectos de Ingeniería I</b> de
            la Universidad Peruana Cayetano Heredia. La versión original corría sobre AWS Lambda y
            MySQL; esta es una reconstrucción con FastAPI, PostgreSQL y React que conserva el
            algoritmo y el diseño del equipo.
          </p>
          <ul>
            {EQUIPO.map((nombre) => (
              <li key={nombre}>{nombre}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
