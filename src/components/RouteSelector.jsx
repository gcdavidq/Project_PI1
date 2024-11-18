import React, { useState } from 'react';
import imagen1 from '../assets/images/sec_1_1.png';
import imagen2 from '../assets/images/sec_1_2.png';
import imagen3 from '../assets/images/sec_2_1.png';
import imagen4 from '../assets/images/sec_2_2.png';

const RouteSelector = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const mostrarImagen = (ruta) => {
    setSelectedImage(ruta);
  };

  return (
    <section className="row">
      {/* Selección de Rutas */}
      <div className="col-lg-4">
        <h3>Seleccionar Ruta</h3>
        <div className="list-group mb-3">
          <button onClick={() => mostrarImagen(imagen1)} className="list-group-item list-group-item-action">Ruta N°1</button>
          <button onClick={() => mostrarImagen(imagen2)} className="list-group-item list-group-item-action">Ruta N°2</button>
          <button onClick={() => mostrarImagen(imagen3)} className="list-group-item list-group-item-action">Ruta N°3</button>
          <button onClick={() => mostrarImagen(imagen4)} className="list-group-item list-group-item-action">Ruta N°4</button>
        </div>
      </div>

      {/* Área de Mapa */}
      <div className="col-lg-8 d-flex justify-content-center align-items-center">
        <div className="border bg-light rounded p-2 text-center">
          {selectedImage ? (
            <img id="imagen" src={selectedImage} alt="Imagen aquí" />
          ) : (
            <p>Selecciona una ruta para ver la imagen</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default RouteSelector;
