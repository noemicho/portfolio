import React from 'react';
import '../style/Competencias.css';

function Competencias() {
    const habilidades = [
        "Microsoft Office",
        "HTML/CSS",
        "Git/GitHub",
        "JavaScript",
        "SQL Server",
        "MySQL",
        "Edição de Fotos",
        "Edição de Vídeo - Adobe After Effects",
        "phpMyAdmin",
        "PHP",
        "React",
        "NodeJs/Express",
        "MongoDB",
        "Java",
        "Linguagem R",
        "Python"
    ];

    return (
        <>
            <div className='full-page'>
                <div className='competencias'>
                    <h3>Minhas Competências</h3>
                    <ul className='competencias-list'>
                        {habilidades.map((habilidade, index) => (
                            <li key={index}>{habilidade}</li>
                        ))}
                    </ul>
                </div>
                <div className='linguagens'>
                    <h3>Linguagens</h3>
                    <ul>
                        <li>Inglês Avançado</li>
                        <li>Espanhol Intermediário</li>
                        <li>Mandarim (Em progresso)</li>
                    </ul>
                </div>
            </div>
            
        </>
        
    );
}

export default Competencias;
