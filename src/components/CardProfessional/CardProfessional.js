import "./CardProfessional.css";
import { FaPhoneAlt } from "react-icons/fa";


const CardProfessional = () => {
  return (
    <div className="CardProfessional">
      <div className="CardProfessional_content">

        <div className="CardProfessional_box">
          <div className="CardProfessional_image"></div>
          <div>
            <div className="CardProfessional_title">
              <h1>Responsive</h1>
              <p>&</p>
              <h1>Professional</h1>
            </div>
            <div className="CardProfessional_des">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                dolorem neque distinctio ipsum fugit molestias fugiat alias?
                Nulla sequi vel velit modi similique ut officia corporis
                sapiente consequuntur, aperiam non!
              </p>
            </div>
            <div className="CardProfessional_services">
              <p>Atendimento 24H Todos os dias.</p>
              <div className="CardProfessional_link">
                <FaPhoneAlt className="CardProfessional_link-icon"/>
                <a href="">+(351) 932 015 787</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CardProfessional;
