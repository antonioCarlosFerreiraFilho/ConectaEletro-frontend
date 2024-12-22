import { NavLink } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <div className="PageNotFound_content">

        <div className="PageNotFound_box">
          <div className="PageNotFound_box-Image">
            
          </div>
          <div className="PageNotFound_Error">
            <h1>404</h1>
          </div>
          <div className="PageNotFound_description">
            <div>
              <h1>Oops! <strong>artigo</strong> ou <strong>Rota</strong> não <strong>encontrado</strong>.</h1>
            </div>
            <div className="PageNotFound_box-back">
              <NavLink to="/" >Voltar Para o Ínicio</NavLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PageNotFound;
