// Header.jsx
import React from 'react';
import '../style/Header.css';
import iconEstrela from '../images/icon-estrela.png';

function Header() {
  return (
    <div className='header'>
      <nav className="navbar">
        <div className="navbar-title">
          <img src={iconEstrela}></img>
          <h1>Noemi Cho</h1>
          <p>Bacharelando em Ciência da Computação</p>
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
              <a href="#habilidades">Competências</a>
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
