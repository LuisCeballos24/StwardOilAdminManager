import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <h1>Menú</h1>
      <ul>
        <li>
          <Link to="/AdminPage">Usuario</Link>
        </li>
        <li>
          <Link to="/transacciones">Transacciones</Link>
        </li>
        <li>
          <Link to="/barcos">Barcos</Link>
        </li>
        <li>
          <Link to="/servicios">Servicios</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;