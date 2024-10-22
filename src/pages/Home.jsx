import React from 'react';
import Header from '../components/Header.jsx';
import '../style/Home.css'
import flechaIcon from '../images/icon-flecha.png';

function Home() {
    return (
        <>
            
            <div className="download-curriculo">
                <div className='titulo-download'>
                    <h2>Baixe meu currículo</h2>
                </div>
                <div className='icon-button'>
                    <img src={flechaIcon}></img>
                    <a href="/files/CurrículoNoemiCho2024.pdf" download>
                        <button className="download-button">Download</button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Home;
