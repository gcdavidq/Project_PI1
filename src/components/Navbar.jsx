import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import exitIcon from '../assets/icons/exit.svg';
import '../styles/menu.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 inter-medium">
      <div className="container px-5">
        <Link className="navbar-brand d-flex align-items-center" to="/rutas">
          <img src={logo} alt="Logo" style={{ height: '30px', marginRight: '8px' }} />
          <span className="fw-bolder">EcoRouteX</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <li className="nav-item">
              <Link className="nav-link" to="/rutas">
                Rutas actuales
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/conductores">
                Conductores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ver_rutas">
                Ver rutas
              </Link>
            </li>
            <button className="logout-button">
              <Link to="/">Salir</Link>
              <img src={exitIcon} alt="Salir" className="icon-class" />
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
