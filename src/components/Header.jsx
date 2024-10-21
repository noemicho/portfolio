// Header.jsx
import React from 'react';
import '../style/Header.css';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#">Portfolio</a>
        </div>
        <div className="navbar-items">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre mim</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Experiência</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Competências</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
