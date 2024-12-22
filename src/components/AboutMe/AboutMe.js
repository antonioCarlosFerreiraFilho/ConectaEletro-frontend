//css
import "./AboutMe.css";
//components
import DescriptionServices from "../DescriptionServices/DescriptionServices";

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="AboutMe-boxes">
        <div className="AboutMe-box-description-styleDesk">
          <div className="AboutMe-box-description">
            <div className="AboutMe-box-description-Title">
              <div>
                <p>Qualidade para Sua Casa</p>
              </div>
              <div>
                <h1>Seu eletricista de confiança</h1>
              </div>
            </div>
            <div className="AboutMe-box-description-TXT">
              <p>
                {" "}
                Trabalho sempre com materiais de qualidade, seguindo todas as
                normas de segurança para garantir um serviço confiável e
                duradouro. Sua casa merece um cuidado especial, e meu
                compromisso é entregar um serviço impecável para sua
                tranquilidade.
              </p>
            </div>
          </div>
        </div>

        <div className="AboutMe-box-Services-style">
          <div className="AboutMe-box-Services">
            <div className="AboutMe-box-Services-content">
              <div className="AboutMe-box-Services-image01"></div>
              <div className="AboutMe-box-Services-image02"></div>
              <div className="AboutMe-box-Services-image03"></div>

              <div className="AboutMe-box-Services-boxInfo">
                <div className="AboutMe-box-Services-boxInfo-content">
                  <div className="AboutMe-box-Services-boxInfo-description">
                    <div>
                      <div className="AboutMe-box-Services-boxInfo-description-infos">
                        <p className="AboutMe-box-Services-boxInfo-description-infos-plus">
                          +
                        </p>
                        <h1>430</h1>
                      </div>
                      <div className="AboutMe-box-Services-boxInfo-description-infosDes">
                        <p>Projetos</p>
                      </div>
                    </div>
                    <div className="AboutMe-box-Services-boxInfo-description-Line"></div>
                    <div>
                      <div className="AboutMe-box-Services-boxInfo-description-infos">
                        <h1>100</h1>
                        <p className="AboutMe-box-Services-boxInfo-description-infos-plus">
                          %
                        </p>
                      </div>
                      <div className="AboutMe-box-Services-boxInfo-description-infosDes">
                        <p>De Satisfação</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="AboutMe-box-descriptionServices">
            <DescriptionServices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
