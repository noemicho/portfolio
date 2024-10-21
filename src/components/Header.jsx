import React from 'react';
import '../style/Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#sobre-mim">Sobre Mim</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <button className="btn btn-primary">Meu Botão Bootstrap</button>

    </header>
  );
}

export default Header;
