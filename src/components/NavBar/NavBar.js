//css
import "./NavBar.css";
//react
import { NavLink } from "react-router-dom";
//react icons
import { MdOutlineMenuOpen } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
//components
import LateralMenu from "../LateralMenu/LateralMenu";
//hooks
import { useAuth } from "../../hooks/useAuth";

const NavBar = () => {
  //users
  const { auth, loading } = useAuth();

  function closeList() {
    const boxShadow = document.querySelector(".shadowJS");
    const boxLinks = document.querySelector(".linksJS");

    if (boxShadow.classList.contains("shadowJS")) {
      boxShadow.classList.toggle("LateralMenu_box-shadowJS");

      setTimeout(() => {
        boxLinks.classList.toggle("LateralMenu_box-linksJS");
      }, 200);
    }
  }

  return (
    <div className="NavBar">
      <div className="NavBar_content-boxes">
        <div>
          <LateralMenu closeList={closeList} />
        </div>
        <div className="NavBar-content">
          <div className="NavBar-styleDesk">
            <div className="NavBar-styleDesk-content">
              <ul className="NavBar-styleDesk-list">
                <li>
                  <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                  <NavLink to="/about">Sobre</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contato</NavLink>
                </li>
                <li>
                  <NavLink to="/gallery">Galeria</NavLink>
                </li>
                {!auth && (
                  <li>
                    <NavLink to="/auth">Logar</NavLink>
                  </li>
                )}
                {auth && (
                  <li>
                    <NavLink to="/profile">Perfil</NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="NavBar-hamburger" onClick={closeList}>
            <MdOutlineMenuOpen className="NavBar-hamburger_icon" />
          </div>

          <NavLink className="NavBar-link">
            <div className="NavBar-content__logo">
              <div className="NavBar_box-logo">
                <AiFillThunderbolt className="NavBar_box-icon" />
                <h1>
                  Carlos<strong>Eletricista</strong>
                </h1>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
