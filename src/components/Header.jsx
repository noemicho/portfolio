// Header.jsx
import React from 'react';
import '../style/Header.css';
import iconEstrela from '../images/icon-estrela.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <nav className="navbar">
        <div className="navbar-title">
          <img src={iconEstrela}></img>
          <Link to='/sobre'><h1>Noemi Cho</h1></Link>
          <p>Bacharelando em Ciência da Computação</p>
        </div>
        <div className="navbar-menu">
          <ul className="menu-items">
            <li className="menu-item">
              <Link to='/'><a>Home</a></Link>
            </li>
            <li className="menu-item">
              <Link to='/sobre'><a>Sobre</a></Link>
            </li>
            <li className="menu-item">
              <Link to='/experiencia'><a>Experiência</a></Link>
            </li>
            <li className="menu-item">
              <Link to='/competencias'><a>Competências</a></Link>
            </li>
            <li className="menu-item">
              <Link to='/contato'><a>Contato</a></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
