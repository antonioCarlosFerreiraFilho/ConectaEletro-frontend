//CSS
import "./BannerContact.css";
//react
import { NavLink } from "react-router-dom";

const BannerContact = () => {
  return (
    <div>
      <div className="BannerArticle">
        <div className="BannerArticle_content">
          <div className="BannerArticle_box-shadow">
            <div className="BannerArticle_card">
              <div className="BannerArticle_card-title">
                <h1>
                  Emergência elétrica? Serviços Elétricos 24H, chame já!
                </h1>
              </div>
              <div className="BannerArticle_card-list">
                <div className="BannerArticle_card-item">
                  <div>
                    <NavLink to={"/about"}>Sobre /</NavLink>
                    <NavLink  to={"/gallery"}>Projetos /</NavLink>
                  </div>
                  <div>
                    <NavLink to={"/contact"}>Contato /</NavLink>
                    <NavLink to={"/about"}>Serviço Eletrico Residencial</NavLink>
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

export default BannerContact;
