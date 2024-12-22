//css
import "./AboutCarrossel.css";
//react icons
import { RiDoubleQuotesL } from "react-icons/ri";
import { useEffect } from "react";

const AboutCarrossel = () => {
  function ScrollCarrossel() {
    let counter = 0;
    const box = document.querySelector(".AboutCarrossel_boxes-scrroll");
    const cards = document.querySelectorAll(".AboutCarrossel_box-card");
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
    }, 10000);
  }

  useEffect(() => {
    const Time = setTimeout(() => {
      ScrollCarrossel();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <div className="AboutCarrossel">
      <div className="AboutCarrossel_content">
        <div className="AboutCarrossel_box">
          <div className="AboutCarrossel_Card">
            <div className="AboutCarrossel_backgroud"></div>

            <div className="AboutCarrossel_Carrossel">
              <div className="AboutCarrossel_content-Carrossel">
                <div className="AboutCarrossel_boxes-scrroll">
                  <div className="AboutCarrossel_box-card">
                    <div className="AboutCarrossel_box-card-description">
                      <div className="AboutCarrossel_box-image-info">
                        <div className="AboutCarrossel_image"></div>
                        <div className="AboutCarrossel_doubleQuotes">
                          <RiDoubleQuotesL className="AboutCarrossel_Quests" />
                        </div>
                      </div>
                      <div className="AboutCarrossel_box-Opinion">
                        <div>
                          <p>Carlos Eletricista</p>
                        </div>
                        <div>
                          <h1>Troca Completa de Toda a Fiação Antiga</h1>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div>
                        <div className="AboutCarrossel_box-TXT">
                          <p>
                            Excelente trabalho! A fiação antiga foi substituída
                            com segurança, e o serviço foi realizado com muita
                            organização e cuidado.
                          </p>
                        </div>
                        <div className="AboutCarrossel_box-name-user">
                          <p>- João Ferreira</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="AboutCarrossel_box-card">
                    <div className="AboutCarrossel_box-card-description">
                      <div className="AboutCarrossel_box-image-info">
                        <div className="AboutCarrossel_image"></div>
                        <div className="AboutCarrossel_doubleQuotes">
                          <RiDoubleQuotesL className="AboutCarrossel_Quests" />
                        </div>
                      </div>
                      <div className="AboutCarrossel_box-Opinion">
                        <div>
                          <p>Carlos Eletricista</p>
                        </div>
                        <div>
                          <h1>
                            Instalação de Painel de LED em Todos os Cômodos
                          </h1>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div>
                        <div className="AboutCarrossel_box-TXT">
                          <p>
                            Serviço impecável! As luzes foram instaladas com
                            perfeição, e o trabalho foi concluído dentro do
                            prazo combinado.
                          </p>
                        </div>
                        <div className="AboutCarrossel_box-name-user">
                          <p>- Mariana Costa</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="AboutCarrossel_box-card">
                    <div className="AboutCarrossel_box-card-description">
                      <div className="AboutCarrossel_box-image-info">
                        <div className="AboutCarrossel_image"></div>
                        <div className="AboutCarrossel_doubleQuotes">
                          <RiDoubleQuotesL className="AboutCarrossel_Quests" />
                        </div>
                      </div>
                      <div className="AboutCarrossel_box-Opinion">
                        <div>
                          <p>Carlos Eletricista</p>
                        </div>
                        <div>
                          <h1>Reparo em Tomadas com Mau Contato e Curto</h1>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div>
                        <div className="AboutCarrossel_box-TXT">
                          <p>
                            As tomadas agora estão perfeitas! O profissional foi
                            super atencioso e resolveu tudo rapidamente.
                            Recomendo muito.
                          </p>
                        </div>
                        <div className="AboutCarrossel_box-name-user">
                          <p>- Ana Paula Martins</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="AboutCarrossel_box-card">
                    <div className="AboutCarrossel_box-card-description">
                      <div className="AboutCarrossel_box-image-info">
                        <div className="AboutCarrossel_image"></div>
                        <div className="AboutCarrossel_doubleQuotes">
                          <RiDoubleQuotesL className="AboutCarrossel_Quests" />
                        </div>
                      </div>
                      <div className="AboutCarrossel_box-Opinion">
                        <div>
                          <p>Carlos Eletricista</p>
                        </div>
                        <div>
                          <h1>Correção de Problemas no Quadro de Energia</h1>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div>
                        <div className="AboutCarrossel_box-TXT">
                          <p>
                            Serviço rápido e eficiente! Meu quadro de energia
                            foi ajustado, e agora tudo funciona sem quedas de
                            luz. Excelente!
                          </p>
                        </div>
                        <div className="AboutCarrossel_box-name-user">
                          <p>- Lucas Andrade</p>
                        </div>
                      </div>
                    </div>
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

export default AboutCarrossel;
