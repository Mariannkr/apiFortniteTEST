/* eslint-disable no-unused-vars */
import React from 'react';

const Navbar = () => {
  const navbarStyles = {
    backgroundColor: 'lightblue',
    padding: '10px',
    // Agrega otros estilos según sea necesario
  };

  return (
    <nav style={navbarStyles}>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
