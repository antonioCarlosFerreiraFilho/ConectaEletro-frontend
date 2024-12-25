import { NavLink } from "react-router-dom";
import "./BestOption.css";

const BestOption = () => {
  return (
    <div className="BestOption">
      <div className="BestOption_content">
        <div className="BestOption_box">
          <div className="BestOption_title">
            <h1>
              Sua <strong>melhor opção</strong> Quando se trata de Eletricidade 
            </h1>
          </div>
          <div className="BestOption_txt">
            <p>
              Trabalho sempre com materiais de qualidade, seguindo todas as
              normas de segurança para garantir um serviço confiável e
              duradouro. Sua casa merece um cuidado especial, e meu compromisso
              é entregar um serviço impecável para sua tranquilidade.
            </p>
          </div>
          <div className="BestOption_link">
            <NavLink to={"/about"}>Conheça Meu trabalho</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOption;
