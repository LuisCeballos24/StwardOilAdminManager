import React from "react";
import { Link } from "react-router-dom";

// Components
import { HeaderMenu } from "../components/HeaderMenu";
import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";

// Assets
import Usuarios from '../../public/Usuarios.jpg';
import Transacciones from '../../public/Transacciones.jpg';
import Barcos from '../../public/Barcos.png';
import Servicios from '../../public/Servicios.png';

// Css
import "../Css/Menu.css";

const Menu = () => {
  return (
    <div className="barcoFondo">
      <HeaderMenu title="Gestiones" />
      <ul className="cardsMenu">
        <li>
          <Link to="/AdminPage"><Cards title="Usuarios" img={Usuarios} alt="Imagen de la sección Usuarios"/></Link>
        </li>
        <li>
          <Link to="/transacciones"><Cards title="Transacciones" img={Transacciones} alt="Imagen de la sección Transacciones"/></Link>
        </li>
        <li>
          <Link to="/barcos"><Cards title="Barcos" img={Barcos} alt="Imagen de la sección Barcos"/></Link>
        </li>
        <li>
          <Link to="/servicios"><Cards title="Servicios" img={Servicios} alt="Imagen de la sección Servicios"/></Link>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Menu;
