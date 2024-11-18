import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterPanel from '../components/FilterPanel';
//import MapComponent from '../components/Mapa';
import '../styles/ruta_style.css';

const RoutesPage = () => {
    function limpiarJson(json) {
        // Eliminar saltos de línea y barras invertidas de toda la cadena
        let contenidoLimpio = json.replace(/\n/g, ' ').replace(/\\'/g, "'").replace(/\\"/g, '"');

        // Decodificar entidades HTML
        const doc = new DOMParser().parseFromString(contenidoLimpio, 'text/html');
        contenidoLimpio = doc.documentElement.textContent || doc.documentElement.innerText;

        return contenidoLimpio; 
    }
  const cargarMapaDinamico = async (sectorSeleccionado) => {
    try {
      //console.log("Sector seleccionado:", sectorSeleccionado);
      const response = await fetch('http://localhost/ProyectoReact/ecoroutex//backend/php/get_mapa.php',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sector: sectorSeleccionado }), 
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      //console.log('Datos del mapa:', data);
      
      if (data && data.mapa_html) {
        const contenidoLimpio = limpiarJson(data.mapa_html);
        const iframe = document.getElementById('iframe-mapa');
        iframe.contentDocument.open();
        iframe.contentDocument.write(data.mapa_html);
        iframe.contentDocument.close();
      } else {
        console.error('No se encontró ninguna fila o "mapa" está vacío.');
      }
    }catch(error){
      console.error('Error al cargar el mapa:', error);
    } 
  };

  return (
    <div className="all-content">
      <Navbar />
      <main>
        <h1>Rutas actuales de los camiones recolectores:</h1>
        <div className="content">
          <FilterPanel onLoadMap={cargarMapaDinamico} />
          <div className="route-image">
            <iframe id="iframe-mapa" className="mapa-actual" src='' width="100%" height="100%"><p>Cargar Mapa</p></iframe>
          </div>
        </div>
        
      </main>
      <Footer />
    </div>
  );
};

export default RoutesPage;