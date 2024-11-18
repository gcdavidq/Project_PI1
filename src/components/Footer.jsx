import React from 'react';
import '../styles/menu.css';

const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          <div className="col-auto">
            <div className="small m-0">Copyright &copy; EcoRouteX 2024</div>
          </div>
          <div className="col-auto">
            <a className="small" href="#!">
              Privacidad
            </a>
            <span className="mx-1">&middot;</span>
            <a className="small" href="#!">
              Términos y condiciones
            </a>
            <span className="mx-1">&middot;</span>
            <a className="small" href="#!">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;