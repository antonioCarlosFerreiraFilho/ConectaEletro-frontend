//css
import "./BannerAbout.css";
//react
import { NavLink } from "react-router-dom";

const BannerAbout = () => {
  return (
    <div>
      <div className="BannerArticle">
        <div className="BannerArticle_content">
          <div className="BannerArticle_box-shadow">
            <div className="BannerArticle_card">
              <div className="BannerArticle_card-title">
                <h1>Especialista em instalações elétricas rápidas e seguras!</h1>
              </div>
              <div className="BannerArticle_card-list">
                <div className="BannerArticle_card-item">
                  <div>
                    <NavLink>Sobre /</NavLink>
                    <NavLink>Projetos /</NavLink>
                  </div>
                  <div>
                    <NavLink>Contato /</NavLink>
                    <NavLink>Serviço Elétrico Residencial</NavLink>
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

export default BannerAbout;
