import React, { useState }  from 'react';

const FilterPanel = ({ onLoadMap }) => {
  const [selectedOption, setSelectedOption] = useState("1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // Actualiza el valor seleccionado
  };

  const handleLoadMap = () => {
    onLoadMap(selectedOption); // Envía el valor seleccionado al hacer clic en el botón
  };

  return (
    <aside className="filter-panel">
      <h2>Buscar por sector:</h2>
      <div className="filter-group">
        <label htmlFor="opciones">Selecciona un sector:</label>
        <select id="opciones" name="opciones" value={selectedOption} onChange={handleOptionChange}>
          <option value="1">Sector 1</option>
          <option value="2">Sector 2</option>
          <option value="3">Sector 3</option>
          <option value="4">Sector 4</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Capacidad</label>
        <input type="number" min="1" value="400" disabled />
      </div>
      
      <div className="boton">
        <button onClick={handleLoadMap} className="load-button">
          Cargar mapa
        </button>
      </div>
    </aside>
  );
};

export default FilterPanel;