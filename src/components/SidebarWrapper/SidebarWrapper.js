import { NavLink } from "react-router-dom";
import "./SidebarWrapper.css";
//react icons
import { IoSearch } from "react-icons/io5";

const SidebarWrapper = () => {
  return (
    <div className="SidebarWrapper">
      <div className="SidebarWrapper_box-All">
        <div className="SidebarWrapper_card">
          {/*
          <div className="SidebarWrapper_card-boxes">
            <div>
              <form className="SidebarWrapper_card-box-search">
                <input type="text" className="SidebarWrapper_card-input" />

                <div className="SidebarWrapper_card-box-icon">
                  <input
                    type="submit"
                    value=" "
                    className="SidebarWrapper_card-inputSearch"
                  />
                </div>
              </form>
            </div>
          </div>

          */}

          <div className="SidebarWrapper_card-NewPosts">
            <div className="SidebarWrapper_card-NewPosts-boxesAll">
              <div className="SidebarWrapper_card-NewPosts-card">
                <div className="SidebarWrapper_card-NewPosts-title">
                  <h1>Serviços Recentes :</h1>
                </div>

                <NavLink
                  to={"/article/67579b86f91ca95aec5b1270"}
                  className="SidebarWrapper_card-NewPosts-imageInfo"
                >
                  <div className="SidebarWrapper_card-NewPosts-box-image">
                    <img src="/Projects/08.jpg" alt="" />
                  </div>
                  <div className="SidebarWrapper_card-NewPosts-infoService">
                    <p className="SidebarWrapper_card-NewPosts-infoService-title">
                      Dez 15, 2024
                    </p>
                    <p className="SidebarWrapper_card-NewPosts-infoService-info">
                      Instalação Elétrica Externa
                    </p>
                  </div>
                </NavLink>

                <NavLink
                  to="/article/6757980bf91ca95aec5b126a"
                  className="SidebarWrapper_card-NewPosts-imageInfo"
                >
                  <div className="SidebarWrapper_card-NewPosts-box-image">
                    <img src="/Projects/01.jpeg" alt="" />
                  </div>
                  <div className="SidebarWrapper_card-NewPosts-infoService">
                    <p className="SidebarWrapper_card-NewPosts-infoService-title">
                      Dez 01, 2024
                    </p>
                    <p className="SidebarWrapper_card-NewPosts-infoService-info">
                      Instalação de coluna predial saliente
                    </p>
                  </div>
                </NavLink>

                <NavLink
                  to="/article/6757a1b0f91ca95aec5b1290"
                  className="SidebarWrapper_card-NewPosts-imageInfo"
                >
                  <div className="SidebarWrapper_card-NewPosts-box-image">
                    <img src="/Projects/02.jpeg" alt="" />
                  </div>
                  <div className="SidebarWrapper_card-NewPosts-infoService">
                    <p className="SidebarWrapper_card-NewPosts-infoService-title">
                      Dez 12, 2024
                    </p>
                    <p className="SidebarWrapper_card-NewPosts-infoService-info">
                      Eletricidade Completa Residencial Saliente
                    </p>
                  </div>
                </NavLink>

                <NavLink
                  to="/article/675edfcf2a72abacdb0c5ce1"
                  className="SidebarWrapper_card-NewPosts-imageInfo"
                >
                  <div className="SidebarWrapper_card-NewPosts-box-image">
                    <img src="/Projects/09.jpg" alt="" />
                  </div>
                  <div className="SidebarWrapper_card-NewPosts-infoService">
                    <p className="SidebarWrapper_card-NewPosts-infoService-title">
                      Dez 21, 2024
                    </p>
                    <p className="SidebarWrapper_card-NewPosts-infoService-info">
                      Circuitos de Tomadas e Manutenção Elétrica
                    </p>
                  </div>
                </NavLink>

                <NavLink
                  to="/article/67579f4bf91ca95aec5b1286"
                  className="SidebarWrapper_card-NewPosts-imageInfo"
                >
                  <div className="SidebarWrapper_card-NewPosts-box-image">
                    <img src="/Projects/04.jpeg" alt="" />
                  </div>
                  <div className="SidebarWrapper_card-NewPosts-infoService">
                    <p className="SidebarWrapper_card-NewPosts-infoService-title">
                      Dez 17, 2024
                    </p>
                    <p className="SidebarWrapper_card-NewPosts-infoService-info">
                      Instalação e Manutenção de Quadros Elétricos
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="SidebarWrapper_card-imagesLink">
            <div className="SidebarWrapper_card-imagesLink-title">
              <h1>Destaques :</h1>
            </div>
            <div className="SidebarWrapper_card-imagesLink-content">
              <div className="SidebarWrapper_card-imagesLink-box">
                <NavLink
                  to="/article/6757a1b0f91ca95aec5b1290"
                  className="SidebarWrapper_card-imagesLink-Link"
                >
                  <img src="/Projects/00.jpeg" alt="" />
                </NavLink>

                <NavLink
                  to="/article/6757980bf91ca95aec5b126a"
                  className="SidebarWrapper_card-imagesLink-Link"
                >
                  <img src="/Projects/01.jpeg" alt="" />
                </NavLink>

                <NavLink
                  to="/article/6757a1b0f91ca95aec5b1290"
                  className="SidebarWrapper_card-imagesLink-Link"
                >
                  <img src="/Projects/02.jpeg" alt="" />
                </NavLink>

                <NavLink
                  to="/article/67579f4bf91ca95aec5b1286"
                  className="SidebarWrapper_card-imagesLink-Link"
                >
                  <img src="/Projects/03.jpeg" alt="" />
                </NavLink>

                <NavLink
                  to="/article/675ee3b20bc71b075a7a280f"
                  className="SidebarWrapper_card-imagesLink-Link"
                >
                  <img src="/Projects/04.jpeg" alt="" />
                </NavLink>
              </div>
            </div>
          </div>

          {/*
         
          <div className="SidebarWrapper_card-Tags">
            <div className="SidebarWrapper_card-Tags-content">
              <div className="SidebarWrapper_card-Tags-Title">
                <h1>Tags :</h1>
              </div>
              <div className="SidebarWrapper_card-Tags-boxes">
                <a href="">Eletricidade</a>
                <a href="">Quadros Eletricos</a>
                <a href="">Persianas</a>
                <a href="">Eletricidade Saliente</a>
                <a href="">Candeeiros</a>
                <a href="">Serviços Gerais</a>
                <a href="">Stores</a>
                <a href="">Portinhola</a>
                <a href="">Corte Geral</a>
                <a href="">Circuitos Novos</a>
                <a href="">Trabalhos Certificados</a>
              </div>
            </div>
          </div>
         */}
        </div>
      </div>
    </div>
  );
};

export default SidebarWrapper;
