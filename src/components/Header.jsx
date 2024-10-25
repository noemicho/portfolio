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
          <img src={iconEstrela} alt='icone-estrela'></img>
          <h1>Noemi Cho</h1>
          <p>Bacharelando em Ciência da Computação</p>
        </div>
        <div className="navbar-menu">
          <ul className="menu-items">
            <li className="menu-item">
              <Link to='/'><button href=''>Home</button></Link>
            </li>
            <li className="menu-item">
              <Link to='/sobre'><button >Sobre</button></Link>
            </li>
            <li className="menu-item">
              <Link to='/experiencia'><button>Experiência</button></Link>
            </li>
            <li className="menu-item">
              <Link to='/competencias'><button>Competências</button></Link>
            </li>
            <li className="menu-item">
              <Link to='/contato'><button>Contato</button></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
