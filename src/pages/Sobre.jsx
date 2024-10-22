
import React from 'react';
import '../style/Sobre.css';
import fotoNoemi from '../images/foto-noemi.jpeg';
import { useState } from 'react';

function Sobre() {

    const [isLoading, setIsLoading] = useState(true); 
    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <>
            
            <div className='sobre'>
                <div className='content-sobre'>
                    <div className='principal'>
                        {isLoading &&
                        (<div className="spinner-border text-light loading" role="status"></div>)}
                        
                        <img className="foto" 
                            src={fotoNoemi} 
                            alt="foto-noemi"
                            onLoad={handleImageLoad}
                            style={{ display: isLoading ? 'none' : 'block' }}/>
                        <div className='texto-principal'>
                            Olá, me chamo <h2>Noemi Cho de Almeida!</h2>
                        </div>
                    </div>
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