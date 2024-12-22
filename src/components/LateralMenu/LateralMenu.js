//css
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./LateralMenu.css";
//react icons
import { IoClose } from "react-icons/io5";
//hooks
import { useAuth } from "../../hooks/useAuth";
//Slices
import { logout, reset } from "../../slices/authSlice";
//redux
import { useSelector, useDispatch } from "react-redux";

const LateralMenu = ({ closeList }) => {
  //users
  const { auth, loading } = useAuth();
  //react
  const navigate = useNavigate();
  //Redux
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/");
  };

  function MenuClose() {
    closeList();
  }

  function ListClose() {
    closeList();
  }

  return (
    <div className="LateralMenu">
      <div>
        <div className="LateralMenu_content">
          <div className="LateralMenu_box-shadow shadowJS"></div>
          <div className="LateralMenu_box-links linksJS">
            <div className="LateralMenu_box-content-icons">
              <IoClose className="LateralMenu_icon" onClick={MenuClose} />
            </div>
            <div className="LateralMenu_box-All-links">
              <ul className="LateralMenu_list" onClick={ListClose}>
                <li>
                  <NavLink to="/">Ínicio</NavLink>
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
                  <>
                    <li>
                      <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li>
                      <NavLink to="/" onClick={handleLogout}>
                        Sair
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LateralMenu;
