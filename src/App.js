import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import RoutesPage from './pages/RoutesPage';
import Conductores from './pages/Conductor';
import Ver_Rutas from './pages/Ver_Rutas';
import './styles/menu.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/rutas" element={<RoutesPage />} />
              <Route path="/conductores" element={<Conductores />} />
              <Route path="/ver_rutas" element={<Ver_Rutas />} />
            </Routes>
          </Router>
      </header>
    </div>
  );
}

export default App;
