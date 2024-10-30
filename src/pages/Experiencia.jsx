import React from 'react';
import '../style/Experiencia.css'; 

function Experiencia() {
    return (
        <div className="timeline-container">
            {/*<h1>Experiência</h1>*/}
            
            <div className="timeline">
                
                <div className="timeline-item">
                    <div className="timeline-dot">09/2024</div>
                    <div className="timeline-content">
                        <h2>Pesquisa sobre Predição de Atraso Aéreo</h2>
                        <p className="empresa">Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)</p>
                        <p className="descricao">
                            Iniciei uma pesquisa sob a orientação do professor Eduardo Ogasawara, focada na predição de atrasos em voos. Estamos desenvolvendo modelos utilizando a linguagem R e o pacote <code>daltoolbox</code>, analisando dados de voos, incluindo horários, condições meteorológicas e tráfego aéreo. 
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot">04/2024</div>
                    <div className="timeline-content">
                        <h2>Estagiária TI</h2>
                        <p className="empresa">Centauro Engenharia</p>
                        <p className="descricao">
                            Desenvolvo e realizo a manutenção do portal da empresa em PHP e JavaScript, também administrando e fazendo manutenção do banco de dados MySQL, por meio do phpMyAdmin. Além de realizar atividades de infraestrutura e suporte em TI.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot">12/2023</div>
                    <div className="timeline-content">
                        <h2>Jovem Aprendiz Relatórios</h2>
                        <p className="empresa">Studio VS | Sistemas Exclusivos para a Gestão de Shopping Centers</p>
                        <p className="descricao">
                            Geração de relatórios atendendo às demandas específicas dos clientes. Utilizando habilidades avançadas em consultas SQL e produção de relatórios em diversos formatos, como PDF, Excel e CSV, utilizando ferramentas especializadas como o iReport e também em PHP.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot">05/2023</div>
                    <div className="timeline-content">
                        <h2>Jovem Aprendiz Infraestrutura TI</h2>
                        <p className="empresa">Studio VS | CIEE Rio - Centro de Integração Empresa Escola</p>
                        <p className="descricao">
                            Montar, instalar, configurar e reconfigurar dispositivos de hardware; Auxiliar na manutenção de computadores, notebooks, monitores e impressoras; Gerenciar estoque do setor; Auxiliar usuários a partir de tickets-chamados.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot">12/2020</div>
                    <div className="timeline-content">
                        <h2>Conclusão de Ensino Médio</h2>
                        <p className="empresa">Pensi Colégio e Curso</p>
                        <p className="descricao">
                            Concluí o Ensino Médio em 2020, abrangendo todos os três anos de formação, o que me proporcionou uma base sólida para o meu desenvolvimento acadêmico.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot">02/2020</div>
                    <div className="timeline-content">
                        <h2>Conclusão de Curso de Inglês</h2>
                        <p className="empresa">Wizard by Pearson</p>
                        <p className="descricao">
                            Completei o curso de inglês em 2020, adquirindo habilidades avançadas em comunicação, compreensão e escrita na língua inglesa.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Experiencia;
