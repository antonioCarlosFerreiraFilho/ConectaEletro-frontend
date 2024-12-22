//css
import "./InfoTopHeader.css";
//react icons
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { GiPositionMarker } from "react-icons/gi";




const InfoTopHeader = () => {
  return (
    <div className="InfoTopHeader">
      <div className="InfoTopHeader_content">

        <div className="InfoTopHeader_box">
          <div className="InfoTopHeader_content-icons">
            <FaPhoneAlt className="InfoTopHeader_icon"/>
            <p>934 897 540</p>
          </div>

          <div className="InfoTopHeader_content-icons Desk-Info">
            <GiPositionMarker  className="InfoTopHeader_icon"/>
            <p>Atendimento em toda lisboa</p>
          </div>

          <div className="InfoTopHeader_content-icons">
            <IoTime className="InfoTopHeader_icon"/>
            <p>Atendimento Urgente 24h</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoTopHeader;
