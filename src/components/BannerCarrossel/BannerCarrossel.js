//css
import "./BannerCarrossel.css";
//react icons
import { FaPlus } from "react-icons/fa";
import { useEffect } from "react";

const BannerCarrossel = () => {


  function ScrollCarrossel() {
    let counter = 0;
    const box = document.querySelector(".BannerCarrossel_boxes");
    const cards = document.querySelectorAll(".BannerCarrossel_card");
    const maxLength = cards.length;

    const nextBox = () => {
      counter++;

      if (counter >= maxLength) {
        counter = 0;
      }

      box.style.transform = `translateX(${-counter * 33.33}%)`;
    };

    setInterval(() => {
      nextBox();
    }, 10000);
  }

  useEffect(() => {
    const Time = setTimeout(() => {
      ScrollCarrossel();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <div className="BannerCarrossel">
      <div className="BannerCarrossel_cards">
        <div className="BannerCarrossel_boxes">

          <div className="BannerCarrossel_card">
            <div className="BannerCarrossel_box">
              <div className="BannerCarrossel_content-info">
                <div className="BannerCarrossel_box-description">
                  <div>
                    <h1 className="BannerCarrossel_title">Residencial</h1>
                  </div>

                  <div className="BannerCarrossel_box-button">
                    <div className="BannerCarrossel_button">
                      <FaPlus className="BannerCarrossel_icons-plus" />
                    </div>
                  </div>

                  <div className="BannerCarrossel_box-view">
                    <div>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo harum perspiciatis quo ipsa, suscipit in eius
                        doloremque numquam quisquam esse dolores, amet voluptas
                        libero sapiente, nesciunt placeat. Tempore, atque vitae.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="BannerCarrossel_card">
            <div className="BannerCarrossel_box">
              <div className="BannerCarrossel_content-info">
                <div className="BannerCarrossel_box-description">
                  <div>
                    <h1 className="BannerCarrossel_title">Industrial</h1>
                  </div>

                  <div className="BannerCarrossel_box-button">
                    <div className="BannerCarrossel_button">
                      <FaPlus className="BannerCarrossel_icons-plus" />
                    </div>
                  </div>

                  <div className="BannerCarrossel_box-view">
                    <div>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo harum perspiciatis quo ipsa, suscipit in eius
                        doloremque numquam quisquam esse dolores, amet voluptas
                        libero sapiente, nesciunt placeat. Tempore, atque vitae.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="BannerCarrossel_card">
            <div className="BannerCarrossel_box">
              <div className="BannerCarrossel_content-info">
                <div className="BannerCarrossel_box-description">
                  <div>
                    <h1 className="BannerCarrossel_title">Reparos Gerais</h1>
                  </div>

                  <div className="BannerCarrossel_box-button">
                    <div className="BannerCarrossel_button">
                      <FaPlus className="BannerCarrossel_icons-plus" />
                    </div>
                  </div>

                  <div className="BannerCarrossel_box-view">
                    <div>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo harum perspiciatis quo ipsa, suscipit in eius
                        doloremque numquam quisquam esse dolores, amet voluptas
                        libero sapiente, nesciunt placeat. Tempore, atque vitae.
                      </p>
                    </div>
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

export default BannerCarrossel;
