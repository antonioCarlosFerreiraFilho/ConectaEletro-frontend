//css
import { NavLink } from "react-router-dom";
import "./Footer.css";
//react icons
import { AiFillThunderbolt } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_content">
        <div className="Footer_boxes">
          <div className="Footer_desckStyle">
            <div>
              <div className="Footer_box-content">
                <div className="Footer_box-logo">
                  <AiFillThunderbolt className="Footer_box-icon" />
                  <h1>
                    Carlos<strong>Eletricista</strong>
                  </h1>
                </div>
              </div>

              <div className="Footer_box-description">
                <div className="Footer_box-des">
                  <p>
                    Todos os direitos reservados. Este site e seu conteúdo,
                    incluindo design, front-end e back-end, são protegidos por
                    leis de propriedade intelectual. É proibida a reprodução,
                    modificação ou uso sem autorização prévia do proprietário.
                  </p>
                </div>
              </div>
            </div>

            <div className="Footer_box-About">
              <div>
                <h1>Sobre / Contato</h1>
              </div>
              <div className="Footer_box-content-infos">
                <div className="Footer_box-content-description">
                  <FaLocationDot className="Footer_box-content-icons" />
                  <p>2745-308 Lisboa Sintra Monte Abraão.</p>
                </div>
                <div className="Footer_box-content-description">
                  <FaClock className="Footer_box-content-icons" />
                  <p>De Segunda a Sabado 24 horas.</p>
                </div>
                <div className="Footer_box-content-description">
                  <FaPhoneAlt className="Footer_box-content-icons" />
                  <p>+(351) 934 897 540</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="Footer_box-navigation">
              <div>
                <h1>Navegação</h1>
              </div>
              <ul>
                <li>
                  <NavLink>Home</NavLink>
                </li>
                <li>
                  <NavLink>Sobre</NavLink>
                </li>
                <li>
                  <NavLink>Contato</NavLink>
                </li>
                <li>
                  <NavLink>Projetos</NavLink>
                </li>
                <li>
                  <NavLink>Logar / Cadastrar</NavLink>
                </li>
              </ul>
            </div>

            <div className="Footer_box-Copyright">
              <div className="Footer_box-copyServices">
                <FaRegCopyright className="Footer_box-Copyright-icon" />
                <h1>2022 CarlosEletricista</h1>
              </div>
              <div>
                <p>Todos os direitos reservados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
