
import React from 'react';
import Header from '../components/Header.jsx'
import '../style/Contato.css';
import WhatsAppIcon from '../images/icon-whatsapp.png';
import LinkedinIcon from '../images/icon-linkedin.png';
import GithubIcon from '../images/icon-github.png';

function Contato() {
    return (
        <>
            <Header />
            <div className='titulo-contato'>
                    <h2>Meus Contatos</h2>
            </div>
            <div className='contato'>
                <div className='div-1'>
                    <div className='content-contato'>
                        <p>WhatsApp: (21) 98462-4365</p>
                        <p>E-mail: noemicho14@gmail.com</p>
                        <p>Linkedin: https://www.linkedin.com/in/noemi-cho-curriculo/</p>
                        <p>Github: https://github.com/noemicho</p>
                    </div>
                </div>
                <div className='div-2'>
                    <a href='https://wa.me/qr/7V224DCI45OIK1' target="_blank" rel="noopener noreferrer">
                        <img id='whatsapp' src={WhatsAppIcon} alt="WhatsApp" />
                    </a>
                    <a href='https://www.linkedin.com/in/noemi-cho-curriculo/' target="_blank" rel="noopener noreferrer">
                        <img id='linkedin' src={LinkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href='https://github.com/noemicho' target="_blank" rel="noopener noreferrer">
                        <img id='github' src={GithubIcon} alt="GitHub" />
                    </a>
                </div>
            </div>
        </>    
    );
}

export default Contato;