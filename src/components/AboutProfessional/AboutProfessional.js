import { NavLink } from "react-router-dom";
import "./AboutProfessional.css";
import { IoIosCall } from "react-icons/io";

const AboutProfessional = () => {
  return (
    <div className="AboutProfessional">
      <div className="AboutProfessional_content">
        <div className="AboutProfessional_backgrounds">
          <div className="AboutProfessional_background-00"></div>

          <div className="AboutProfessional_box-info">
            <div className="AboutProfessional_box-title">
              <h1>
                Eletricista residencial <strong>Certificado</strong> com{" "}
                <strong>experiência.</strong>
              </h1>
            </div>
            <div>
              <p>
                Meu objetivo é oferecer soluções elétricas eficientes e
                personalizadas, desde a instalação de redes completas até
                reparos em sistemas já existentes.
              </p>
            </div>
            <div className="AboutProfessional_contact">
              <div className="AboutProfessional_contact-Link">
                <NavLink to={"/contact"}>Pedir orçamento</NavLink>
              </div>
              <div className="AboutProfessional_contact-call">
                <a href="tel:+351934897540">
                  <IoIosCall className="AboutProfessional_contact-icon-call" />
                  Ligue
                </a>
              </div>
            </div>
          </div>

          <div className="AboutProfessional_background-01"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutProfessional;
