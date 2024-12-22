//css
import "./CarouselServices.css";
//react
import { NavLink } from "react-router-dom";
//react icons
import { IoIosArrowForward } from "react-icons/io";
import { useEffect } from "react";

const CarouselServices = () => {
  function ScrollServices() {
    let counter = 0;
    const box = document.querySelector(".CarouselServices_boxes");
    const cards = document.querySelectorAll(".CarouselServices_box");
    const maxLength = cards.length;

    const nextBox = () => {
      counter++;

      if (counter >= maxLength) {
        counter = 0;
      }

      box.style.transform = `translateX(${-counter * 16.8}%)`;
    };

    setInterval(() => {
      nextBox();
    }, 6000);
  }

  useEffect(() => {
    const Time = setTimeout(() => {
      ScrollServices();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <div>
      <div className="CarouselServices_content-all">
        <div className="CarouselServices">
          <div className="CarouselServices_content">
            <div className="CarouselServices_boxes">
              <div className="CarouselServices_box">
                <div className="CarouselServices_image-service">
                  <div className="CarouselServices_image-content-box"></div>
                </div>
                <div className="CarouselServices_infos-service">
                  <div className="CarouselServices_infos-service-des">
                    <div className="CarouselServices_infos-title">
                      <h1>Circuito De Tomada Direto Para Cozinha</h1>
                    </div>
                    <div className="CarouselServices_infos-txt">
                      <p>
                        a potência total do forno e da placa, que pode variar
                        entre 1.000 W a 7.000 W ou mais, dependendo do modelo...
                      </p>
                    </div>
                    <div className="CarouselServices_link-projects">
                      <NavLink>Saiba Mais</NavLink>
                      <IoIosArrowForward className="CarouselServices_link-icon" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="CarouselServices_box">
                <div className="CarouselServices_image-service">
                  <div className="CarouselServices_image-content-box01"></div>
                </div>
                <div className="CarouselServices_infos-service">
                  <div className="CarouselServices_infos-service-des">
                    <div className="CarouselServices_infos-title">
                      <h1>Instalação Elétrica Externa Completa</h1>
                    </div>
                    <div className="CarouselServices_infos-txt">
                      <p>
                        Como a instalação será externa, os cabos devem ser
                        adequados para áreas externas ou internas que são mais
                        resistentes...
                      </p>
                    </div>
                    <div className="CarouselServices_link-projects">
                      <NavLink>Saiba Mais</NavLink>
                      <IoIosArrowForward className="CarouselServices_link-icon" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="CarouselServices_box">
                <div className="CarouselServices_image-service">
                  <div className="CarouselServices_image-content-box02"></div>
                </div>
                <div className="CarouselServices_infos-service">
                  <div className="CarouselServices_infos-service-des">
                    <div className="CarouselServices_infos-title">
                      <h1>Coluna Predial Completa</h1>
                    </div>
                    <div className="CarouselServices_infos-txt">
                      <p>
                        A coluna predial é responsável por receber a energia
                        elétrica da concessionária e distribuí-la para os
                        diversos andares e...
                      </p>
                    </div>
                    <div className="CarouselServices_link-projects">
                      <NavLink>Saiba Mais</NavLink>
                      <IoIosArrowForward className="CarouselServices_link-icon" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="CarouselServices_box">
                <div className="CarouselServices_image-service">
                  <div className="CarouselServices_image-content-box03"></div>
                </div>
                <div className="CarouselServices_infos-service">
                  <div className="CarouselServices_infos-service-des">
                    <div className="CarouselServices_infos-title">
                      <h1>Manutenção Eletrica + Quadro Elétrico</h1>
                    </div>
                    <div className="CarouselServices_infos-txt">
                      <p>
                        E levado em consideração a quantidade de circuitos e os
                        disjuntores que serão necessários. Isso inclui o tipo...
                      </p>
                    </div>
                    <div className="CarouselServices_link-projects">
                      <NavLink>Saiba Mais</NavLink>
                      <IoIosArrowForward className="CarouselServices_link-icon" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="CarouselServices_box">
                <div className="CarouselServices_image-service">
                  <div className="CarouselServices_image-content-box04"></div>
                </div>
                <div className="CarouselServices_infos-service">
                  <div className="CarouselServices_infos-service-des">
                    <div className="CarouselServices_infos-title">
                      <h1>Instalação de tomadas trifásicas</h1>
                    </div>
                    <div className="CarouselServices_infos-txt">
                      <p>
                        identificar as fases no quadro elétrico, usar cabo
                        apropriado, conectar as fases e o neutro na tomada
                        trifásica, aterrar e testar a instalação e...
                      </p>
                    </div>
                    <div className="CarouselServices_link-projects">
                      <NavLink>Saiba Mais</NavLink>
                      <IoIosArrowForward className="CarouselServices_link-icon" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="CarouselServices_box">
                <div className="CarouselServices_image-service">
                  <div className="CarouselServices_image-content-box05"></div>
                </div>
                <div className="CarouselServices_infos-service">
                  <div className="CarouselServices_infos-service-des">
                    <div className="CarouselServices_infos-title">
                      <h1>Instalação de Esquentador e Termoacumulador</h1>
                    </div>
                    <div className="CarouselServices_infos-txt">
                      <p>
                        Em relação à manutenção propriamente dita, um
                        termoacumulador deverá fazer uma manutenção de 6 em 6
                        meses, e de 2 em 2 anos deve substituir a...
                      </p>
                    </div>
                    <div className="CarouselServices_link-projects">
                      <NavLink>Saiba Mais</NavLink>
                      <IoIosArrowForward className="CarouselServices_link-icon" />
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

export default CarouselServices;
