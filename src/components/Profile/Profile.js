//css
import "./Profile.css";
//react icons
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
//react
import { useEffect, useState } from "react";
//API
import { uploads } from "../../utils/config";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { profile, editUser, reset } from "../../slices/userSlice";
//Components
import MessageError from "../../components/MessageError/MessageError";

const Profile = () => {
  //Redux
  const dispatch = useDispatch();
  const { user, loading, error, message } = useSelector((state) => state.user);

  //Initial States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [errorImageFormat, setErrorImageFormat] = useState("");

  //LOAD USER DATA
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  //SET USER
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  //imagem user Escolhida
  const HandleFile = (e) => {
    let ButtonSubmit = document.querySelector(".InputPostPhotos");
    const image = e.target.files[0];

    setPreviewImage(image);

    if (image.type == "image/png") {
      setProfileImage(image);
    } else {
      ButtonSubmit.disabled = true;

      setErrorImageFormat("So aceitamos imagems no formato: (.png)");
      setTimeout(() => {
        setPreviewImage("");
        setErrorImageFormat("");

        ButtonSubmit.disabled = false;
      }, 3000);
    }

   
  };

  //atualizando usuario
  const handleedit = async (e) => {
    e.preventDefault();

    //objeto indefinido
    let userData = {
      name,
    };

    if (password) {
      userData.password = password;
    }

    if (profileImage) {
      userData.imageProfile = profileImage;
    }

    //upload image e data
    const userFormData = Object.keys(userData).reduce((formData, key) => {
      formData.append(key, userData[key]);
      return formData;
    }, new FormData());

    dispatch(editUser(userFormData));

    setTimeout(() => {
      dispatch(reset());
    }, 1000);
  };

  function EventError() {
    setTimeout(() => {
      dispatch(profile());
    }, 1000);
  }

  return (
    <div className="Profile">
      <div className="Profile_edit-content">
        <div className="Profile_edit-content-form">
          <div className="Profile_edit-content-form-content">
            <form
              className="Profile_edit-content-form-content-edit"
              onSubmit={handleedit}
            >
              <div className="Profile-name-banner">
                <div className="Profile_content">
                  <div className="Profile_Banner">
                    <div className="Profile_Banner-boxShadow"></div>
                  </div>

                  <div className="Profile_ImageUser">
                    {(user.imageProfile || previewImage) && (
                      <img
                        src={
                          previewImage
                            ? URL.createObjectURL(previewImage)
                            : `${uploads}/Users/${user.imageProfile}`
                        }
                        alt={user.name}
                      />
                    )}
                  </div>

                  <div className="Profile-box-upload-image">
                    <div className="Profile-boxInputFile">
                      <label htmlFor="inFile">
                        <FaEdit className="Profile-boxInputFile-icon-update" />
                      </label>
                      <input
                        type="file"
                        id="inFile"
                        onChange={HandleFile}
                        className="Profile-InputFile"
                      />
                    </div>
                  </div>
                </div>
                <div className="Profile_infos-content">
                  <div className="Profile_infos-content-nameUser">
                    <h1>{user.name}</h1>
                  </div>
                </div>
              </div>

              <div className="Profile-content-width-max">
                {/* INFO PLATAFORM */}
                <div className="Profile-rulles">
                  <div className="Profile_edit-content-title">
                    <IoMdCheckmarkCircleOutline className="Profile_edit-content-title-icon" />
                    <h1>Edit Basic Information</h1>
                  </div>
                  <div className="Profile_edit-content-rules">
                    <div className="Profile_edit-content-rules-box">
                      <p>
                        <strong>Regras da Plataforma :</strong> Respeite todos
                        os participantes. Não use nomes ou comentários
                        inapropriados, ofensivos ou discriminatórios. Evite
                        palavrões e ataques pessoais. Mantenha as discussões
                        saudáveis e relevantes ao tema. Comentários que violem
                        estas regras serão removidos e podem levar ao bloqueio.
                      </p>
                    </div>
                  </div>
                </div>
                {/* GENERAL INPUTS */}
                <div className="Profile-inputs">
                   {/* NAME */}
                  <div className="Profile_edit-content-form-box-InfoUser">
                    <p>Nome Completo</p>
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name || ""}
                    />
                  </div>
                  {/* EMAIL */}
                  <div className="Profile_edit-content-form-box-InfoUser">
                    <p>Email</p>
                    <input type="text" disabled value={email || ""} />
                  </div>
                  {/* PASSWORD */}
                  <div className="Profile_edit-content-form-box-InfoUser">
                    <p>Senha</p>
                    <input
                      type="text"
                      placeholder="********"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password || ""}
                    />
                  </div>
                  {/* SUBMIT */}
                  <div className="Profile_edit-content-form-box-submit">
                    <div className="Profile_edit-content-form-box-submit-content">
                      {!loading && (
                        <input
                          type="submit"
                          value="Atualizar Dados"
                          className="InputPostPhotos"
                        />
                      )}
                      {loading && (
                        <input type="submit" value="Aguarde...." disabled />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {error && (
          <div className="Profile_edit-MessageError">
            <div className="Profile_edit-MessageError-box">
              <MessageError error={error} type="error" />
            </div>
          </div>
        )}

        {errorImageFormat && (
          <div className="Profile_edit-MessageError">
            <div className="Profile_edit-MessageError-box">
              <MessageError error={errorImageFormat} type="error" />
            </div>
          </div>
        )}

        {error && EventError()}

        {message && (
          <div className="Profile_edit-MessageError">
            <div className="Profile_edit-MessageError-box">
              <MessageError error={message} type="success" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
