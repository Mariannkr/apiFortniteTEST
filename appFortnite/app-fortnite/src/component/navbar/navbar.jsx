/* eslint-disable no-unused-vars */
import React from 'react';
import './navbar.css';
import fornite_logo from '../../../public/assets/Fornite_logo.png';

{'Comillas simplse alt + 39'}

const Navbar = () => {
const logo = fornite_logo;
  return (
    <nav className='navbar'>
      <ul id='navbar_ul'>
        <li><a href="/">Tienda</a></li>
        <li><a href="/productos">Mapa</a></li>
        <li><a href="/contacto">Miembros</a></li>
      </ul>
      <img src={logo} alt="react" />
    </nav>
  );
};

export default Navbar;