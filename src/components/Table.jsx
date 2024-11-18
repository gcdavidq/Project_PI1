import React from 'react';

const Table = ({ data }) => (
  <div className="table-responsive">
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>DNI</th>
          <th>Celular</th>
          <th>Placa</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.nombre_completo}</td>
            <td>{row.dni}</td>
            <td>{row.celular}</td>
            <td>{row.placa}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
