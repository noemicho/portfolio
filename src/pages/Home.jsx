import React from 'react';
import Header from '../components/Header.jsx';
import '../style/Home.css'

function Home() {
    return (
        <>
            <Header />
            <div className="download-curriculo">
                <h2>Baixe meu currículo</h2>
                <a href="/files/CurrículoNoemiCho2024.pdf" download>
                    <button className="download-button">Baixar Arquivo</button>
                </a>
            </div>
        </>
    );
}

export default Home;
