import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Login from './pages/Login'
import { Conductores, MiRuta, RutasActuales, VerRutas } from './pages/Paneles'
import { Protegida, ProveedorSesion } from './sesion'

const admin = (pagina) => <Protegida rol="administrador">{pagina}</Protegida>

export default function App() {
  return (
    <BrowserRouter>
      <ProveedorSesion>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/rutas-actuales" element={admin(<RutasActuales />)} />
            <Route path="/conductores" element={admin(<Conductores />)} />
            <Route path="/ver-rutas" element={admin(<VerRutas />)} />
            <Route path="/mi-ruta" element={<Protegida rol="conductor"><MiRuta /></Protegida>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="pie">
          <div className="contenedor">
            EcoRouteX · Proyectos de Ingeniería I, UPCH ·{' '}
            <a href="https://github.com/gcdavidq/Project_PI1">Código en GitHub</a> · Mapas ©
            OpenStreetMap
          </div>
        </footer>
      </ProveedorSesion>
    </BrowserRouter>
  )
}
