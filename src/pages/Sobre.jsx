
import React from 'react';
import Header from '../components/Header.jsx'
import '../style/Sobre.css';

function Sobre() {
    return (
        <>
            <Header />
            <div className='sobre'>
                <div className='content-sobre'>
                
                    Olá, me chamo <h2>Noemi Cho de Almeida!</h2>
                    <br></br>  
                    Tenho 21 anos e estou cursando Ciência da Computação
                    no Centro Federal de Educação Tecnológica Celso Suckow da Fonseca
                    (CEFET/RJ).
                    <br></br>  
                    Tenho grande interesse em Desenvolvimento Web e na 
                    área de Dados, com experiência prática em desenvolver e manter 
                    sistemas tanto no front-end quanto no back-end. 
                    <br></br>  
                    Estou sempre 
                    buscando aprender e me atualizar, pois acredito que o aprendizado
                    contínuo é essencial para acompanhar as mudanças e evoluir como
                    desenvolvedora.

                </div>
            </div>
        </>  
    );
}

export default Sobre;