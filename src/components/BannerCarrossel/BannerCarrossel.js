//css
import "./BannerCarrossel.css";
//react icons
import { FaPlus } from "react-icons/fa";
import { useEffect } from "react";

const BannerCarrossel = () => {
  function ScrollCarrossel() {
    let counter = 0;
    const box = document.querySelector(".BannerCarrossel_boxes");
    const cards = document.querySelectorAll(".BannerCarrossel_card");
    const maxLength = cards.length;

    const nextBox = () => {
      counter++;

      if (counter >= maxLength) {
        counter = 0;
      }

      box.style.transform = `translateX(${-counter * 33.33}%)`;
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
    <div className="BannerCarrossel">
      <div className="BannerCarrossel_cards">
        <div className="BannerCarrossel_boxes">
          <div className="BannerCarrossel_card">
            <div className="BannerCarrossel_box">
              <div className="BannerCarrossel_content-info">
                <div className="BannerCarrossel_box-description">
                  <div>
                    <h1 className="BannerCarrossel_title">Manutenção</h1>
                  </div>

                  <div className="BannerCarrossel_box-button">
                    <div className="BannerCarrossel_button">
                      <FaPlus className="BannerCarrossel_icons-plus" />
                    </div>
                  </div>

                  <div className="BannerCarrossel_box-view">
                    <div>
                      <p>
                        Identificação de falhas, reparos rápidos, manutenção em
                        quadro eléctrico, troca de fiação, instalação de
                        equipamentos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="BannerCarrossel_card">
            <div className="BannerCarrossel_box">
              <div className="BannerCarrossel_content-info">
                <div className="BannerCarrossel_box-description">
                  <div>
                    <h1 className="BannerCarrossel_title">Automação</h1>
                  </div>

                  <div className="BannerCarrossel_box-button">
                    <div className="BannerCarrossel_button">
                      <FaPlus className="BannerCarrossel_icons-plus" />
                    </div>
                  </div>

                  <div className="BannerCarrossel_box-view">
                    <div>
                      <p>
                        Configuração de sistemas de iluminação, controle de
                        energia e outros dispositivos inteligentes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="BannerCarrossel_card">
            <div className="BannerCarrossel_box">
              <div className="BannerCarrossel_content-info">
                <div className="BannerCarrossel_box-description">
                  <div>
                    <h1 className="BannerCarrossel_title">
                      Instalação Elétrica
                    </h1>
                  </div>

                  <div className="BannerCarrossel_box-button">
                    <div className="BannerCarrossel_button">
                      <FaPlus className="BannerCarrossel_icons-plus" />
                    </div>
                  </div>

                  <div className="BannerCarrossel_box-view">
                    <div>
                      <p>
                        Planejamento elétrico para construções ou reformas
                        residenciais, Manutenção ou troca de equipamentos
                        eléctricos
                      </p>
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

export default BannerCarrossel;
