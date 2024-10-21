// Header.jsx
import React from 'react';
import '../style/Header.css';

function Header() {
  return (
    <div className='header'>
      <nav className="navbar">
        <div className="navbar-title">
          <h1>Meu Portfolio</h1>
        </div>
        <div className="navbar-menu">
          <ul className="menu-items">
            <li className="menu-item">
              <a href="#home">Home</a>
            </li>
            <li className="menu-item">
              <a href="#sobre">Sobre</a>
            </li>
            <li className="menu-item">
              <a href="#experiencia">Experiência</a>
            </li>
            <li className="menu-item">
              <a href="#habilidades">Habilidades</a>
            </li>
            <li className="menu-item">
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
