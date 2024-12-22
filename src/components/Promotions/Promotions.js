//css
import "./Promotions.css";
//react icons
import { GiPiggyBank } from "react-icons/gi";



const Promotions = () => {
  return (
    <div className="Promotions">
      <div className="Promotions_content">
        <div className="Promotions_box">

          <div className="Promotions_box-description">
            <div className="Promotions_box-slogan">
              <p>effective & efficiente</p>
              <h1>Eletricista <strong>Certificado</strong> com projeto</h1>
            </div>
            <div className="Promotions_box-info">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam, numquam possimus nam minus natus perspiciatis, hic est
                similique magnam quo odit! Sit labore doloremque repellat
                consequatur repellendus unde similique quia! numquam possimus nam minus natus perspiciatis, hic est
                similique magnam quo odit! Sit labore doloremque repellat
              </p>
            </div>
            <div className="Promotions_box-NewPromotion">
              <div className="Promotions_box-submit">
                <input type="text" className="Promotions_input" placeholder="Insira Seu Email"/>
                <input type="submit" value="eviar" className="Promotions_submit"/>
              </div>
            </div>
            <div className="Promotions_box-icons">
              <div className="Promotions_box-icon">
                <GiPiggyBank/>
                <p>Descontos excluzivos por Email.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Promotions;
