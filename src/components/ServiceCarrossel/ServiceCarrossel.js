//css
import "./ServiceCarrossel.css";
//react
import { useEffect } from "react";

const ServiceCarrossel = () => {
  function ScrollCarrossel() {
    let counter = 0;
    const box = document.querySelector(".ServiceCarrossel_content-boxes");
    const cards = document.querySelectorAll(".ServiceCarrossel_card");
    const maxLength = 3;

    const nextBox = () => {
      counter++;

      if (counter >= maxLength) {
        counter = 0;
      }

      box.style.transform = `translateX(${-counter * 25}%)`;
    };

    setInterval(() => {
      nextBox();
    }, 4000);
  }

  useEffect(() => {
    const Time = setTimeout(() => {
      ScrollCarrossel();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <div className="ServiceCarrossel">
      <div className="ServiceCarrossel_box-intro">
        <div className="ServiceCarrossel_box-des">
          <p>Serviços de Eletricista Residencial </p>
        </div>
        <div>
          <h1>Serviços Que Ofereço</h1>
        </div>
        <div className="ServiceCarrossel_box-Txt">
          <div className="ServiceCarrossel_box-TXT-content">
            <p>
              Meu nome é Carlos, sou eletricista Certificado e estou aqui
              para oferecer serviços residenciais com total profissionalismo.
            </p>
          </div>
        </div>
      </div>

      <div className="ServiceCarrossel_StyleDesck">
        <div className="ServiceCarrossel_Carrossel">
          <div className="ServiceCarrossel_content">
            <div className="ServiceCarrossel_content-boxes">
              <div className="ServiceCarrossel_card">
                <div className="ServiceCarrossel_cardBOX">
                  <div className="ServiceCarrossel_card-description">
                    <img src="/ImagesCarrossel/residencial.png" alt="" />
                    <h1>Serviço Residencial.</h1>
                  </div>
                  <div className="ServiceCarrossel_card-List">
                    <ul>
                      <li>Instalação de Tomadas</li>
                      <li>Reparo de Curtos-Circuitos</li>
                      <li>Instalação de Chuveiros Elétricos</li>
                      <li>Montagem de Quadros Elétricos</li>
                      <li>Instalação de Iluminação</li>
                      <li>Manutenção Preventiva e Corretiva</li>
                      <li>Automatização Residencial</li>
                      <li>Aterramento</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="ServiceCarrossel_card">
                <div className="ServiceCarrossel_cardBOX">
                  <div className="ServiceCarrossel_card-description">
                    <img src="/ImagesCarrossel/residencial.png" alt="" />
                    <h1>Serviço Residencial.</h1>
                  </div>
                  <div className="ServiceCarrossel_card-List">
                    <ul>
                      <li>Instalação de Ventiladores de Teto</li>
                      <li>Substituição de Fiação Elétrica</li>
                      <li>Instalação de Painéis Solares</li>
                      <li>Instalação de Diferenciais</li>
                      <li>Instalação de caixas ATI</li>
                      <li>Instalação de Aquecedores Elétricos</li>
                      <li>Detecção Vazamento de Corrente</li>
                      <li>Instalação de Sensores de Presença</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="ServiceCarrossel_card">
                <div className="ServiceCarrossel_cardBOX">
                  <div className="ServiceCarrossel_card-description">
                    <img src="/ImagesCarrossel/residencial.png" alt="" />
                    <h1>Serviço Residencial.</h1>
                  </div>
                  <div className="ServiceCarrossel_card-List">
                    <ul>
                      <li>Instalação de Tomadas USB</li>
                      <li>Reparos em Iluminação de Piscinas</li>
                      <li>Instalação de Luzes de Emergência</li>
                      <li>Reparos em Campainhas</li>
                      <li>Reparos em Interfones</li>
                      <li>Instalação de Eletrodomésticos</li>
                      <li>Instalação Interruptores Inteligentes</li>
                      <li>Instalação de Torneiras Elétricas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="ServiceCarrossel_card">
                <div className="ServiceCarrossel_cardBOX">
                  <div className="ServiceCarrossel_card-description">
                    <img src="/ImagesCarrossel/residencial.png" alt="" />
                    <h1>Serviço Residencial.</h1>
                  </div>
                  <div className="ServiceCarrossel_card-List">
                    <ul>
                      <li>Instalação de Calhas eletricas</li>
                      <li>Instalação de Termoacumuladores</li>
                      <li>Testes de Isolamento e Continuidade</li>
                      <li>Reparos de Campanhas de Portão</li>
                      <li>Reparos Cortinas e Persianas Elétricas</li>
                      <li>Instalação de Quadros Trifasicos</li>
                      <li>Instalação de Luzes LED</li>
                      <li>Instalação Tomadas Externas IP65</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarrossel;
