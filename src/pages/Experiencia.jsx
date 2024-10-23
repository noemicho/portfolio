import React from 'react';
import '../style/Experiencia.css'; 

function Experiencia() {
    return (
        <div className="timeline-container">
            <h1>Experiência</h1>
            
            <div className="timeline">
                
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h2>Estagiária TI</h2>
                        <p className="empresa">Centauro Engenharia</p>
                        <p className="descricao">
                            Desenvolvo e realizo a manutenção do portal da empresa em PHP e JavaScript, também administrando e fazendo manutenção do banco de dados MySQL, por meio do phpMyAdmin. Além de realizar atividades de infraestrutura e suporte em TI.
                        </p>
                    </div>
                </div>

                
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h2>Jovem Aprendiz Relatórios</h2>
                        <p className="empresa">Studio VS | Sistemas Exclusivos para a Gestão de Shopping Centers</p>
                        <p className="descricao">
                            Geração de relatórios atendendo às demandas específicas dos clientes. Utilizando habilidades avançadas em consultas SQL e produção de relatórios em diversos formatos, como PDF, Excel e CSV, utilizando ferramentas especializadas como o iReport e também em PHP.
                        </p>
                    </div>
                </div>

                
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h2>Jovem Aprendiz Infraestrutura TI</h2>
                        <p className="empresa">Studio VS | CIEE Rio - Centro de Integração Empresa Escola</p>
                        <p className="certificado">Certificado de Conclusão de Curso de Inglês - Wizard by Pearson</p>
                        <p className="descricao">
                            Montar, instalar, configurar e reconfigurar dispositivos de hardware; Auxiliar na manutenção de computadores, notebooks, monitores e impressoras; Gerenciar estoque do setor; Auxiliar usuários a partir de tickets-chamados.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiencia;
