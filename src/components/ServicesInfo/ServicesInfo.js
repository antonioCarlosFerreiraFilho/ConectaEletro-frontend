import { NavLink } from "react-router-dom";
import "./ServicesInfo.css";
//hooks
import { useScroll } from "../../hooks/useScroll";

const ServicesInfo = () => {
  function ScrollTop() {
    useScroll(0, 0, 1000);
  }

  return (
    <div className="ServicesInfo">
      <div className="ServicesInfo_container">
        <div className="ServicesInfo_new-info">
          <div>
            <p>Serviços Recentes</p>
            <h1>Projetos executados</h1>
          </div>
        </div>

        <div className="ServicesInfo_new-contentBoxes">
          <div className="ServicesInfo_new-Links">
            <div className="ServicesInfo_new-data">
              <p>25 Nov, 2024</p>
            </div>
            <div className="ServicesInfo_boxes">
              <div className="ServicesInfo_new-line"></div>
              <p>Coluna Predial Completa</p>
            </div>

            <div className="ServicesInfo_txt-description">
              <p>
                A coluna predial é responsável por receber a energia elétrica da
                concessionária e distribuí-la para os diversos andares e
                unidades do prédio...
              </p>
            </div>
            <div className="ServicesInfo_txt-Link">
              <NavLink
                to={"/article/6757980bf91ca95aec5b126a"}
                onClick={ScrollTop}
              >
                Saiba Mais...
              </NavLink>
            </div>
          </div>

          <div className="ServicesInfo_new-Links">
            <div className="ServicesInfo_new-data">
              <p>03 Nov, 2024</p>
            </div>
            <div className="ServicesInfo_boxes">
              <div className="ServicesInfo_new-line"></div>
              <p>Circuito De Tomada Direto Para Cozinha</p>
            </div>

            <div className="ServicesInfo_txt-description">
              <p>
                a potência total do forno e da placa, que pode variar entre
                1.000 W a 7.000 W ou mais, dependendo do modelo. A carga
                elétrica total será essencial para dimensionar corretamente os
                cabos e disjuntores...
              </p>
            </div>
            <div className="ServicesInfo_txt-Link">
              <NavLink
                to={"/article/675edfcf2a72abacdb0c5ce1"}
                onClick={ScrollTop}
              >
                Saiba Mais...
              </NavLink>
            </div>
          </div>

          <div className="ServicesInfo_new-Links">
            <div className="ServicesInfo_new-data">
              <p>14 Ago, 2024</p>
            </div>
            <div className="ServicesInfo_boxes">
              <div className="ServicesInfo_new-line"></div>
              <p>Instalação Elétrica Externa Completa</p>
            </div>

            <div className="ServicesInfo_txt-description">
              <p>
                Como a instalação será externa, os cabos devem ser adequados
                para áreas externas ou internas que são mais resistentes às
                intempéries ou Os cabos isentos de halogéneos estão livres de
                elementos como o ...
              </p>
            </div>
            <div className="ServicesInfo_txt-Link">
              <NavLink
                to="/article/6757a1b0f91ca95aec5b1290"
                onClick={ScrollTop}
              >
                Saiba Mais...
              </NavLink>
            </div>
          </div>

          <div className="ServicesInfo_new-Links">
            <div className="ServicesInfo_new-data">
              <p>25 Jul, 2024</p>
            </div>
            <div className="ServicesInfo_boxes">
              <div className="ServicesInfo_new-line"></div>
              <p>Manutenção Eletrica + Quadro Elétrico</p>
            </div>

            <div className="ServicesInfo_txt-description">
              <p>
                E levado em consideração a quantidade de circuitos e os
                disjuntores que serão necessários. Isso inclui o tipo de
                circuitos iluminação, tomadas, ar-condicionado...
              </p>
            </div>
            <div className="ServicesInfo_txt-Link">
              <NavLink
                to="/article/67579f4bf91ca95aec5b1286"
                onClick={ScrollTop}
              >
                Saiba Mais...
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesInfo;
