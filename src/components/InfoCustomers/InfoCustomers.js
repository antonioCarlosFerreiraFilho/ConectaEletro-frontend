//css
import "./InfoCustomers.css";
//react
import { useEffect } from "react";
//react icons
import { FaPhoneAlt } from "react-icons/fa";

const InfoCustomers = () => {
  function ScrollCarrossel() {
    let counter = 0;
    const box = document.querySelector(".InfoCustomers_carrossel-boxes");
    const cards = document.querySelectorAll(".InfoCustomers_carrossel-card");
    const maxLength = cards.length;

    const nextBox = () => {
      counter++;

      if (counter >= maxLength) {
        counter = 0;
      }

      box.style.transform = `translateX(${-counter * 25}%)`;
    };

    setInterval(() => {
      nextBox();
    }, 6000);
  }

  useEffect(() => {
    const Time = setTimeout(() => {
      ScrollCarrossel();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <div className="InfoCustomers">
      <div className="InfoCustomers_container">
        <div className="InfoCustomers_content-infos">
          <div>
            <div className="InfoCustomers_statistics">
              <p>Estatísticas de Sucesso</p>
            </div>
            <div className="InfoCustomers_title-P">
              <h1>Destaques dos Meus Projetos</h1>
            </div>
          </div>

          <div className="InfoCustomers_box-Desk">
            <div className="InfoCustomers_box-numbers">
              <div className="InfoCustomers_numbers">
                <p>+</p>
                <h1>430</h1>
              </div>
              <div className="InfoCustomers_numbers-descriprion">
                <p>Projetos Executados</p>
              </div>
            </div>

            <div className="InfoCustomers_box-numbers">
              <div className="InfoCustomers_numbers">
                <h1>97</h1>
                <p>%</p>
              </div>
              <div className="InfoCustomers_numbers-descriprion">
                <p>dos Orçamentos Aprovados</p>
              </div>
            </div>

            <div className="InfoCustomers_box-numbers">
              <div className="InfoCustomers_numbers">
                <h1>100</h1>
                <p>%</p>
              </div>
              <div className="InfoCustomers_numbers-descriprion">
                <p>de Satisfação Garantida</p>
              </div>
            </div>
          </div>
        </div>

        <div className="InfoCustomers_carrossel">
          <div className="InfoCustomers_carrossel-scrroll">
            <div className="InfoCustomers_carrossel-boxes">
              <div className="InfoCustomers_carrossel-card">
                <div className="InfoCustomers_carrossel-description">
                  <div className="InfoCustomers_carrossel-image"></div>

                  <div className="InfoCustomers_carrossel-info-user">
                    <p>Carlos Eletricista 24h</p>
                    <h1>Serviço de Qualidade e Pontualidade</h1>
                  </div>
                </div>

                <div className="InfoCustomers_carrossel-comments">
                  <div className="InfoCustomers_carrossel-TXT">
                    <p>
                      "Contratei o Carlos para modernizar o sistema elétrico da
                      minha casa, e fiquei impressionado com o resultado. Ele
                      foi muito profissional, pontual e deixou tudo funcionando
                      perfeitamente. Recomendo de olhos fechados!"
                    </p>
                  </div>
                </div>

                <div className="InfoCustomers_name-users">
                  <p>- André Silva.</p>
                </div>
              </div>

              <div className="InfoCustomers_carrossel-card">
                <div className="InfoCustomers_carrossel-description">
                  <div className="InfoCustomers_carrossel-image"></div>

                  <div className="InfoCustomers_carrossel-info-user">
                    <p>Carlos Eletricista 24h</p>
                    <h1>Iluminação Perfeita para Minha Sala</h1>
                  </div>
                </div>

                <div className="InfoCustomers_carrossel-comments">
                  <div className="InfoCustomers_carrossel-TXT">
                    <p>
                      "Queria uma iluminação especial para destacar os quadros
                      na minha sala, e o Carlos fez um trabalho incrível. Ele
                      entendeu exatamente o que eu queria e entregou um serviço
                      impecável. Muito obrigado!"
                    </p>
                  </div>
                </div>

                <div className="InfoCustomers_name-users">
                  <p>- Cláudia Almeida.</p>
                </div>
              </div>

              <div className="InfoCustomers_carrossel-card">
                <div className="InfoCustomers_carrossel-description">
                  <div className="InfoCustomers_carrossel-image"></div>

                  <div className="InfoCustomers_carrossel-info-user">
                    <p>Carlos Eletricista 24h</p>
                    <h1>Profissionalismo e Segurança</h1>
                  </div>
                </div>

                <div className="InfoCustomers_carrossel-comments">
                  <div className="InfoCustomers_carrossel-TXT">
                    <p>
                      "Precisei trocar toda a fiação da minha casa antiga, e o
                      Carlos foi extremamente cuidadoso e eficiente. Ele
                      explicou cada etapa do processo e me deixou tranquila
                      quanto à segurança. Excelente profissional!"
                    </p>
                  </div>
                </div>

                <div className="InfoCustomers_name-users">
                  <p>- Mariana Costa.</p>
                </div>
              </div>

              <div className="InfoCustomers_carrossel-card">
                <div className="InfoCustomers_carrossel-description">
                  <div className="InfoCustomers_carrossel-image"></div>

                  <div className="InfoCustomers_carrossel-info-user">
                    <p>Carlos Eletricista 24h</p>
                    <h1>Automação Residencial</h1>
                  </div>
                </div>

                <div className="InfoCustomers_carrossel-comments">
                  <div className="InfoCustomers_carrossel-TXT">
                    <p>
                      "Sempre quis integrar dispositivos inteligentes na minha
                      casa, mas achava complicado. O Carlos cuidou de tudo,
                      desde a instalação até as configurações. Agora, controlo
                      tudo pelo celular, graças a ele!"
                    </p>
                  </div>
                </div>

                <div className="InfoCustomers_name-users">
                  <p>- Ricardo Menezes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="InfoCustomers_servicesEmergency">
          <div className="InfoCustomers_servicesEmergency-boxes">
            <div className="InfoCustomers_servicesEmergency-back">
              <div className="InfoCustomers_servicesEmergency-description">
                <h1>Emergência Elétrica</h1>
                <p>
                  Problemas elétricos podem acontecer a qualquer momento,
                  ofereço serviços de emergência 24 horas
                </p>
                <div className="InfoCustomers_servicesEmergency-icons-numbers">
                  <FaPhoneAlt className="InfoCustomers_servicesEmergency-icons" />
                  <p>+(351)974 897 540</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCustomers;
