//css
import { NavLink } from "react-router-dom";
import "./FullServiceCarrossel.css";
//react icons
import { FaHome } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { useEffect } from "react";
//hooks
import { useScroll } from "../../hooks/useScroll";

const FullServiceCarrossel = () => {
  function ScrollCarrossel() {
    let counter = 0;
    const box = document.querySelector(".FullServiceCarrossel_card-scrroll");
    const cards = document.querySelectorAll(
      ".FullServiceCarrossel_box-transition"
    );
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

  function ScroolLink() {
    useScroll(0, 0, 0);
  }

  useEffect(() => {
    const Time = setTimeout(() => {
      ScrollCarrossel();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <div className="FullServiceCarrossel">
      <div className="FullServiceCarrossel_content">
        <div className="FullServiceCarrossel_box">
          <div className="FullServiceCarrossel_box-description">
            <div>
              <p>Serviços Oferecidos:</p>
            </div>
            <div className="FullServiceCarrossel_box-title">
              <h1>Serviço Elétrico Residencial Certificado</h1>
            </div>
          </div>

          <div className="Carrossel-boxContent-all">
            <div className="FullServiceCarrossel_carrossel">
              <div className="FullServiceCarrossel_boxes">
                <div className="FullServiceCarrossel_card-carrossel">
                  <div className="FullServiceCarrossel_card-scrroll">
                    <div className="FullServiceCarrossel_box-transition">
                      <div className="FullServiceCarrossel_boxesBack">
                        <div className="FullServiceCarrossel_light-bulb"></div>

                        <div className="FullServiceCarrossel_background00">
                          <div className="FullServiceCarrossel_box-content">
                            <div className="FullServiceCarrossel_boxShadow">
                              <AiFillThunderbolt className="FullServiceCarrossel_icon-thunder" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="FullServiceCarrossel_contentDescripton">
                        <div>
                          <h1>Atualização de Quadros Elétricos</h1>
                        </div>
                        <div className="FullServiceCarrossel_contentDescripton-infos">
                          <p>Substituição de quadros</p>
                          <p>adequação às demandas de energia.</p>
                        </div>
                        <div
                          className="FullServiceCarrossel_box-Link"
                          onClick={ScroolLink}
                        >
                          <NavLink to={"/gallery"}>Saber mais...</NavLink>
                        </div>
                      </div>
                    </div>

                    <div className="FullServiceCarrossel_box-transition">
                      <div className="FullServiceCarrossel_boxesBack">
                        <div className="FullServiceCarrossel_light-bulb"></div>

                        <div className="FullServiceCarrossel_background01">
                          <div className="FullServiceCarrossel_box-content">
                            <div className="FullServiceCarrossel_boxShadow">
                              <AiFillThunderbolt className="FullServiceCarrossel_icon-thunder" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="FullServiceCarrossel_contentDescripton">
                        <div>
                          <h1>Instalação de Iluminação</h1>
                        </div>
                        <div className="FullServiceCarrossel_contentDescripton-infos">
                          <p>Manutenção ou substituição</p>
                          <p>Montagem de luminárias, spots e Candeeiros</p>
                        </div>
                        <div
                          className="FullServiceCarrossel_box-Link"
                          onClick={ScroolLink}
                        >
                          <NavLink to={"/gallery"}>Saber mais...</NavLink>
                        </div>
                      </div>
                    </div>

                    <div className="FullServiceCarrossel_box-transition">
                      <div className="FullServiceCarrossel_boxesBack">
                        <div className="FullServiceCarrossel_light-bulb"></div>

                        <div className="FullServiceCarrossel_background02">
                          <div className="FullServiceCarrossel_box-content">
                            <div className="FullServiceCarrossel_boxShadow">
                              <AiFillThunderbolt className="FullServiceCarrossel_icon-thunder" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="FullServiceCarrossel_contentDescripton">
                        <div>
                          <h1>Aterramento</h1>
                        </div>
                        <div className="FullServiceCarrossel_contentDescripton-infos">
                          <p>sistemas de aterramento para residencias</p>
                          <p>Disjuntores Diferenciais</p>
                        </div>
                        <div
                          className="FullServiceCarrossel_box-Link"
                          onClick={ScroolLink}
                        >
                          <NavLink to={"/gallery"}>Saber mais...</NavLink>
                        </div>
                      </div>
                    </div>

                    <div className="FullServiceCarrossel_box-transition">
                      <div className="FullServiceCarrossel_boxesBack">
                        <div className="FullServiceCarrossel_light-bulb"></div>

                        <div className="FullServiceCarrossel_background03">
                          <div className="FullServiceCarrossel_box-content">
                            <div className="FullServiceCarrossel_boxShadow">
                              <AiFillThunderbolt className="FullServiceCarrossel_icon-thunder" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="FullServiceCarrossel_contentDescripton">
                        <div>
                          <h1>Sistema Elétrico Completo</h1>
                        </div>
                        <div className="FullServiceCarrossel_contentDescripton-infos">
                          <p>
                            Montagem completa de redes elétricas residências
                          </p>
                          <p>Com aterramento</p>
                        </div>
                        <div
                          className="FullServiceCarrossel_box-Link"
                          onClick={ScroolLink}
                        >
                          <NavLink to={"/gallery"}>Saber mais...</NavLink>
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

export default FullServiceCarrossel;
