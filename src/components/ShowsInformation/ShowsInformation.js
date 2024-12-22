import "./ShowsInformation.css";
//react icons
import { FaPlus } from "react-icons/fa";
import { useEffect } from "react";

const ShowsInformation = () => {
  return (
    <div className="ShowsInformation">
      <div className="ShowsInformation_content">
        <div className="ShowsInformation_boxes">
          <div className="ShowsInformation_box01">
            <div className="ShowsInformation_shadowBox">
              <div className="ShowsInformation_box-contentButtons">
                <div>
                  <h1>Manutenção</h1>
                </div>
                <div className="ShowsInformation_box-infoPlus">
                  <div className="ShowsInformation_box-button">
                    <div className="ShowsInformation_button">
                      <FaPlus className="ShowsInformation_icons-plus" />
                    </div>
                  </div>
                  <div className="ShowsInformation_box-TxtDescription">
                    <div className="ShowsInformation_box-TxtDescription-content">
                      <p>
                        Identificação de falhas, reparos rápidos, manutenção em
                        quadro eléctrico, troca de fiação, instalação de equipamentos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ShowsInformation_box02">
            <div className="ShowsInformation_shadowBox">
              <div className="ShowsInformation_box-contentButtons">
                <div>
                  <h1>Automação</h1>
                </div>
                <div className="ShowsInformation_box-infoPlus">
                  <div className="ShowsInformation_box-button">
                    <div className="ShowsInformation_button">
                      <FaPlus className="ShowsInformation_icons-plus" />
                    </div>
                  </div>
                  <div className="ShowsInformation_box-TxtDescription">
                    <div className="ShowsInformation_box-TxtDescription-content02">
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

          <div className="ShowsInformation_box03">
            <div className="ShowsInformation_shadowBox">
              <div className="ShowsInformation_box-contentButtons">
                <div>
                  <h1>Instalação Elétrica</h1>
                </div>
                <div className="ShowsInformation_box-infoPlus">
                  <div className="ShowsInformation_box-button">
                    <div className="ShowsInformation_button">
                      <FaPlus className="ShowsInformation_icons-plus" />
                    </div>
                  </div>
                  <div className="ShowsInformation_box-TxtDescription">
                    <div className="ShowsInformation_box-TxtDescription-content03">
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

export default ShowsInformation;
