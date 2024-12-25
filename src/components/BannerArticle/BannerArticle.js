import { NavLink } from "react-router-dom";
import "./BannerArticle.css";

const BannerArticle = () => {
  return (
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
                  <NavLink to={"/about"}>Sobre /</NavLink>
                  <NavLink>Circuito de Tomadas /</NavLink>
                </div>
                <div>
                  <NavLink>Manutenção eletrica /</NavLink>
                  <NavLink>Serviços Gerais Eletricos</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerArticle;
