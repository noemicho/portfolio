
import React from 'react';
import '../style/Contato.css';
import WhatsAppIcon from '../images/icon-whatsapp.png';
import LinkedinIcon from '../images/icon-linkedin.png';
import GithubIcon from '../images/icon-github.png';

function Contato() {
    return (
        <>
            
            <div className='titulo-contato'>
                    <h2>Meus Contatos</h2>
            </div>
            <div className='contato'>
                <div className='div-1'>
                    <div className='content-contato'>
                        <div className='flex'>
                            <p>WhatsApp: </p>
                            <span>(21) 98462-4365</span>
                        </div>
                        <div className='flex'>
                            <p>E-mail:  </p>
                            <span>noemicho14@gmail.com</span>
                        </div>
                        <div className='flex'>
                            <p>Linkedin:  </p>
                            <span>https://www.linkedin.com/in/noemi-cho-curriculo</span>
                        </div>
                        <div className='flex'>
                            <p>Github:  </p>
                            <span>https://github.com/noemicho</span>
                        </div>
                    </div>
                </div>
                <div className='div-2'>
                    <a href='https://wa.me/qr/7V224DCI45OIK1' target="_blank" rel="noopener noreferrer" alt='link-whatsapp'>
                        <img id='whatsapp' src={WhatsAppIcon} alt="WhatsApp" />
                    </a>
                    <a href='https://www.linkedin.com/in/noemi-cho-curriculo/' target="_blank" rel="noopener noreferrer" alt='link-linkedin'>
                        <img id='linkedin' src={LinkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href='https://github.com/noemicho' target="_blank" rel="noopener noreferrer" alt='link-github'>
                        <img id='github' src={GithubIcon} alt="GitHub" />
                    </a>
                </div>
            </div>
        </>    
    );
}

export default Contato;