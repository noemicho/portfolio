import React from 'react';
import '../style/Home.css'
import flechaIcon from '../images/icon-flecha.png';

function Home() {
    return (
        <>    
            <div className='introducao-home'>
                <h2>Bem-vindo(a) ao meu Portfólio!</h2>
                <p>Navegando pelo Menu, é possível visualizar páginas que fazem um resumo sobre mim, minhas experiências profissionais e competências. Além disso, em Contato, você pode anotar meus meios de contato, podendo visualizar meu Linkedin e Repositórios do Github.</p>

            </div>
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
