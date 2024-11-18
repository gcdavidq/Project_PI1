import React, { useState } from 'react';
import logo from '../assets/images/san_borja_logo.png';
import '../styles/styles.css';
import { loginUser } from '../services/api';  // Función que interactúa con PHP

function Login() {
  const [user, setUser] = useState('administrador');
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Llamar a la API (PHP) para autenticar al usuario
    const response = await loginUser(user, dni, password);
    
    if (response.success) {
      // Redirigir o mostrar la página de rutas
      window.location.href = '/rutas';  // O puedes usar React Router para cambiar la ruta
    } else {
      setError(response.error || 'Error de autenticación');
    }
  };

  return (
    <div className="container">
      {/* Header específico para la página de login */}
      <div className="title">
        <h1>EcoRouteX</h1>
        <h2>Administradores</h2>
      </div>

      <div class="all">
          <div class="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
      {/* Formulario de login */}
      <div className="login-box">
        <h2>Iniciar sesión</h2>
        
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="user">Usuario</label>
          <select id="user" name="user" value={user} onChange={(e) => setUser(e.target.value)}>
            <option value="administrador">Administrador</option>
            <option value="trabajador">Conductor</option>
          </select>

          <label htmlFor="dni">DNI</label>
          <input
            type="text"
            id="dni"
            name="dni"
            placeholder="DNI"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <button type="submit">Iniciar sesión</button>
          <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
        </form>
      </div>
      {/* Footer específico para la página de login */}
        <footer>
          <p>📞 +51 987654321 | ✉️ EcoRouteX_sol@gob.pe</p>
        </footer>
      </div>
    </div>
  );
}

export default Login;