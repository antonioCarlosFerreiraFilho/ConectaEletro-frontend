import "./DescriptionServices.css";
//react icons
import { FaHelmetSafety } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { GiTeamIdea } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const DescriptionServices = () => {
  return (
    <div className="DescriptionServices">
      <div className="DescriptionServices_content">
        <div className="DescriptionServices_boxes">
          <div className="DescriptionServices_box">
            <div className="DescriptionServices_description">
              <div className="DescriptionServices_box-moon-icon">
                <div className="DescriptionServices_moon-icon"></div>
                <FaHelmetSafety className="DescriptionServices_icon" />
              </div>

              <div className="DescriptionServices_des-info">
                <h1>Obras e remodelações</h1>
                <p>
                  Tenho experiência em obras e remodelações de casas, realizando
                  instalações elétricas, ajustes e melhorias para garantir
                  segurança e eficiência.
                </p>
              </div>
            </div>
          </div>

          <div className="DescriptionServices_box">
            <div className="DescriptionServices_description">
              <div className="DescriptionServices_box-moon-icon">
                <div className="DescriptionServices_moon-icon"></div>
                <GrCertificate className="DescriptionServices_icon" />
              </div>

              <div className="DescriptionServices_des-info">
                <h1>Projetos certificados</h1>
                <p>
                  Trabalho em parceria com engenheiros em projetos que exigem
                  certificação, garantindo qualidade e conformidade com as
                  normas técnicas.
                </p>
              </div>
            </div>
          </div>

          <div className="DescriptionServices_box">
            <div className="DescriptionServices_description">
              <div className="DescriptionServices_box-moon-icon">
                <div className="DescriptionServices_moon-icon"></div>
                <GiTeamIdea className="DescriptionServices_icon" />
              </div>

              <div className="DescriptionServices_des-info">
                <h1>Trabalho em Equipe</h1>
                <p>
                  Já trabalhei em equipes grandes em construções, onde um único
                  eletricista não seria suficiente devido ao prazo apertado para
                  entrega, aonde o tempo é eficiência fazem a diferença.
                </p>
              </div>
            </div>
          </div>

          <div className="DescriptionServices_Call">
            <div className="DescriptionServices_Call-box">
              <div className="DescriptionServices_Call-Link">
                <NavLink>Contacte-me</NavLink>
              </div>
              <div className="DescriptionServices_Call-PhoneLink">
                <div className="DescriptionServices_Call-Phone">
                  <img src="/ImagesCarrossel/call-center_270728.png" alt="" />
                </div>
                <div className="DescriptionServices_Call-linkClick">
                  <a href="">+(351) 934 897 540</a>
                  <p>Clique é Entre em contato agora mesmo!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionServices;
