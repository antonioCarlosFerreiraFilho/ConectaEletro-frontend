//css
import "./Banner.css";
//react
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
//react icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
//slices
import { newContact, reset } from "../../slices/contactSlice";
//components
import MessageError from "../MessageError/MessageError";
//redux
import { useDispatch, useSelector } from "react-redux";

const Banner = () => {
  //States Contact
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  //redux
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector((state) => state.contact);

  //Contact Submit
  function newContactSubmit(e) {
    e.preventDefault();

    const ContactSend = {
      name,
      phone,
      location,
      description,
    };

    dispatch(newContact(ContactSend));

    setName("");
    setPhone("");
    setLocation("");
    setDescription("");

    setTimeout(() => {
      dispatch(reset());
    }, 4000);
  }

  //Start
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  function BannerArray() {
    //Stages Images
    const Images = document.querySelectorAll(".Banner_content-image");
    const maxImages = Images.length;
    let imageCurrent = 0;

    //stages Infos
    const Cards = document.querySelectorAll(".Banner_info-none");
    const maxCards = Cards.length;
    let cardCurrent = 0;

    //Function Image
    const nextImage = () => {
      Images[imageCurrent].classList.remove("activeBanner");

      imageCurrent++;

      if (imageCurrent >= maxImages) {
        imageCurrent = 0;
      }

      Images[imageCurrent].classList.add("activeBanner");
    };

    const nextCard = () => {
      Cards[cardCurrent].classList.remove("activeInfo");

      cardCurrent++;

      if (cardCurrent >= maxCards) {
        cardCurrent = 0;
      }

      Cards[cardCurrent].classList.add("activeInfo");
    };

    setInterval(() => {
      nextImage();
      nextCard();
    }, 5000);
  }

  function ViewForm() {
    const button = document.querySelector(".Banner_clickViews");
    let ArrowTop = document.querySelector(".Banner_arrowTop");
    let ArrowDow = document.querySelector(".Banner_arrowDow");
    const form = document.querySelector(".Banner_content-form");

    button.addEventListener("click", () => {
      ArrowDow.classList.toggle("Banner_arrowDowJS");
      ArrowTop.classList.toggle("Banner_arrowTopJS");

      form.classList.toggle("Banner_content-formJS");
    });
  }

  useEffect(() => {
    const Time = setTimeout(() => {
      BannerArray();
      ViewForm();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <div className="Banner">
      <div className="Banner_content">
        <div className="Banner_content-box">
          <img
            src="/Background/mainslide-01.jpg"
            alt=""
            className="Banner_content-image activeBanner"
          />
          <img
            src="/Background/mainslide-02.jpg"
            alt=""
            className="Banner_content-image "
          />
          <img
            src="/Background/mainslide-03.jpg"
            alt=""
            className="Banner_content-image "
          />
        </div>
        <div className="Banner_content-infos">
          <div className="Banner_content-boxes-info">
            <div className="Banner_info-none activeInfo">
              <p className="Banner_info-offers">Eletricista 24Horas</p>
              <h1>Serviço Electricidade Urgente</h1>
              <p className="Banner_info-offers-des">Reparações Elétricas de Imediato</p>
              <NavLink>Saiba Mais...</NavLink>
            </div>

            <div className="Banner_info-none">
              <p className="Banner_info-offers">Instalação elétrica</p>
              <h1>Manutenção elétrica preventiva</h1>
              <p className="Banner_info-offers-des">Realizamos todo o tipo de serviços Elétricos</p>
              <NavLink>Saiba Mais...</NavLink>
            </div>

            <div className="Banner_info-none">
              <p className="Banner_info-offers">Eletricista residencial 24h</p>
              <h1>Eletricista Certificado</h1>
              <p className="Banner_info-offers-des">Reparações Elétricas</p>
              <NavLink>Saiba Mais...</NavLink>
            </div>
          </div>

        </div>
        <div className="Banner_clickViews">
          <div className="Banner_box-arrow">
            <IoIosArrowDown className="Banner_arrowDow" />
            <IoIosArrowUp className="Banner_arrowTop" />
          </div>
          <div className="Banner_box-infoForm">
            <p>Contacte-me</p>
          </div>
        </div>
      </div>

      <div className="Banner_content-form">
        <div className="Banner_form-content">
          <form className="Banner_form-styleDesk" onSubmit={newContactSubmit}>
            <div className="Banner_form">
              <input
                type="text"
                placeholder="Nome Completo"
                onChange={(e) => setName(e.target.value)}
                value={name || ""}
                maxLength={20}
              />

              <div className="Banner_form-row">
                <input
                  type="text"
                  placeholder="Seu numero"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone || ""}
                  maxLength={12}
                />
                <input
                  type="text"
                  placeholder="Localidade"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location || ""}
                  maxLength={15}
                />
              </div>

              <textarea
                name=""
                id=""
                placeholder="Serviço a ser resolvido"
                onChange={(e) => setDescription(e.target.value)}
                value={description || ""}
                maxLength={140}
              ></textarea>
            </div>
            <div className="Banner_form-boxSubmit">
              {loading && (
                <input type="submit" disabled value="aguarde......" />
              )}
              {!loading && <input type="submit" value="Contactar" />}
            </div>
          </form>
        </div>
        {error && (
          <>
            <div className="popUpErrorMessage">
              <div className="popUpErrorMessage-content">
                <MessageError error={error} type="error" />
              </div>
            </div>
          </>
        )}
        {message && (
          <>
            <div className="popUpErrorMessage">
              <div className="popUpErrorMessage-content">
                <MessageError error={message} type="success" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Banner;
