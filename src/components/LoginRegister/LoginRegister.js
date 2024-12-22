//css
import "./LoginRegister.css";
//react icons
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
//react
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//components
import MessageError from "../../components/MessageError/MessageError";
//Slices
import { register, login, reset } from "../../slices/authSlice";

const LoginRegister = () => {
  //initial State Register
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //initial State login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  //register User
  const SubmitRegister = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    dispatch(register(user));

    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setTimeout(() => {
      dispatch(reset());
    }, 4000);
  };

  //login User
  const SubmitLogin = (e) => {
    e.preventDefault();

    const user = {
      email: loginEmail,
      password: loginPassword,
    };

    dispatch(login(user));

    setTimeout(() => {
      dispatch(reset());
    }, 4000);
  };

  //Animate
  function EventForm() {
    //Initial var
    const buttonSignIn = document.querySelector(
      ".LoginRegister_content-SignIn-content"
    );
    const buttonRegistration = document.querySelector(
      ".LoginRegister_content-Registration-content"
    );

    const FormLogin = document.querySelector(
      ".LoginRegister_card-Box-description-login"
    );
    const FormRegister = document.querySelector(
      ".LoginRegister_card-Box-description-register"
    );

    const activeSignIn = document.querySelector(
      ".LoginRegister_content-SignIn"
    );
    const activeRegistration = document.querySelector(
      ".LoginRegister_content-Registration"
    );

    //Events
    buttonSignIn.addEventListener("click", () => {
      if (
        buttonSignIn.classList.contains("LoginRegister_content-SignIn-content")
      ) {
        activeSignIn.classList.add("active");
        activeRegistration.classList.remove("active");

        FormLogin.classList.add("LoginRegister_card-Box-description-loginJS");
        FormRegister.classList.add(
          "LoginRegister_card-Box-description-registerJS"
        );
      }
    });

    buttonRegistration.addEventListener("click", () => {
      if (
        buttonRegistration.classList.contains(
          "LoginRegister_content-Registration-content"
        )
      ) {
        activeRegistration.classList.add("active");
        activeSignIn.classList.remove("active");

        FormRegister.classList.remove(
          "LoginRegister_card-Box-description-registerJS"
        );
        FormLogin.classList.remove(
          "LoginRegister_card-Box-description-loginJS"
        );
      }
    });
  }

  useEffect(() => {
    const Time = setTimeout(() => {
      EventForm();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <div className="LoginRegister">
      <div className="LoginRegister_content">
        <div className="LoginRegister_box">
          <div className="LoginRegister_card">
            <div className="LoginRegister_card-Box-Event">
              <div className="LoginRegister_content-SignIn ">
                <div className="LoginRegister_content-SignIn-content">
                  <IoPeople className="LoginRegister_content-SignIn-icon" />
                  <p>Logar</p>
                </div>
              </div>

              <div className="LoginRegister_content-Registration active">
                <div className="LoginRegister_content-Registration-content">
                  <FaUserEdit className="LoginRegister_content-Registration-icon" />
                  <p>Cadastrar</p>
                </div>
              </div>
            </div>
            <div className="LoginRegister_card-Boxes-interval">
              <div className="LoginRegister_card-Box-description-login">
                <div className="LoginRegister_card-Box-title">
                  <h1>Faça login para ver as novidades e posts exclusivos !</h1>
                  <div className="LoginRegister_card-Box-title-Line"></div>
                </div>
                <div className="LoginRegister_card-Box-desSlogan">
                  <p>Informe seus Dados</p>
                </div>
                <div className="LoginRegister_card-Box-form">
                  <form
                    className="LoginRegister_card-form"
                    onSubmit={SubmitLogin}
                  >
                    <div>
                      <input
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setLoginEmail(e.target.value)}
                        value={loginEmail || ""}
                      />
                      <input
                        type="text"
                        placeholder="Senha"
                        onChange={(e) => setLoginPassword(e.target.value)}
                        value={loginPassword || ""}
                      />
                    </div>
                    <div className="LoginRegister_card-Box-submit">
                      {!loading && <input type="submit" value="Logar" />}
                      {loading && (
                        <input type="submit" value="Aguarde...." disabled />
                      )}
                    </div>
                  </form>
                </div>
                <div className="LoginRegister_card-Box-redirect">
                  <div className="LoginRegister_card-Box-redirectArrow">
                    <FaArrowLeftLong className="LoginRegister_card-Arrow" />

                    <NavLink>Voltar ao Inicio.</NavLink>
                  </div>
                </div>
                {error && (
                  <div className="LoginRegister_card-contentMessageError">
                    <div className="LoginRegister_card-contentMessageError-box">
                      <MessageError error={error} type="error" />
                    </div>
                  </div>
                )}
              </div>

              <div className="LoginRegister_card-Box-description-register">
                <div className="LoginRegister_card-Box-title">
                  <h1>Cadastre-se para interagir, curtir e comentar em Meus posts!</h1>
                  <div className="LoginRegister_card-Box-title-Line"></div>
                </div>
                <div className="LoginRegister_card-Box-desSlogan">
                  <p>Informe seus Dados</p>
                </div>
                <div className="LoginRegister_card-Box-form">
                  <form
                    className="LoginRegister_card-form"
                    onSubmit={SubmitRegister}
                  >
                    <div>
                      <input
                        type="text"
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name || ""}
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email || ""}
                      />
                      <input
                        type="text"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password || ""}
                      />
                      <input
                        type="text"
                        placeholder="Confirme sua senha"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword || ""}
                      />
                    </div>
                    <div className="LoginRegister_card-Box-submit">
                      {!loading && <input type="submit" value="Cadastrar" />}
                      {loading && (
                        <input type="submit" value="Aguarde...." disabled />
                      )}
                    </div>
                  </form>
                </div>
                <div className="LoginRegister_card-Box-redirect">
                  <div className="LoginRegister_card-Box-redirectArrow">
                    <FaArrowLeftLong className="LoginRegister_card-Arrow" />

                    <NavLink>Voltar ao Inicio.</NavLink>
                  </div>
                </div>
                {error && (
                  <div className="LoginRegister_card-contentMessageError">
                    <div className="LoginRegister_card-contentMessageError-box">
                      <MessageError error={error} type="error" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
