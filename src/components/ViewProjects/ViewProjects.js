//css
import "./ViewProjects.css";
//react icons
import { IoIosArrowForward } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
//hooks
import { useScroll } from "../../hooks/useScroll";
//react
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const ViewProjects = () => {
  function spanBox() {
    const Cards = document.querySelectorAll(".ViewProjects_projects-photos");
    const PopUp = document.querySelector(".ViewProjects_projects-images");
    const PopUpClose = document.querySelector(
      ".ViewProjects_projects-images-iconClose"
    );

    Cards.forEach((elements) => {
      elements.addEventListener("click", () => {
        PopUp.classList.add("ViewProjects_projects-imagesJS");

        if (elements.classList.contains("image01")) {
          PopUp.classList.add("image01");
        } else {
          PopUp.classList.remove("image01");
        }

        if (elements.classList.contains("image02")) {
          PopUp.classList.add("image02");
        } else {
          PopUp.classList.remove("image02");
        }

        if (elements.classList.contains("image03")) {
          PopUp.classList.add("image03");
        } else {
          PopUp.classList.remove("image03");
        }

        if (elements.classList.contains("image04")) {
          PopUp.classList.add("image04");
        } else {
          PopUp.classList.remove("image04");
        }

        if (elements.classList.contains("image05")) {
          PopUp.classList.add("image05");
        } else {
          PopUp.classList.remove("image05");
        }

        if (elements.classList.contains("image06")) {
          PopUp.classList.add("image06");
        } else {
          PopUp.classList.remove("image06");
        }

        if (elements.classList.contains("image07")) {
          PopUp.classList.add("image07");
        } else {
          PopUp.classList.remove("image07");
        }

        if (elements.classList.contains("image08")) {
          PopUp.classList.add("image08");
        } else {
          PopUp.classList.remove("image08");
        }

        if (elements.classList.contains("image09")) {
          PopUp.classList.add("image09");
        } else {
          PopUp.classList.remove("image09");
        }
      });
    });

    PopUpClose.addEventListener("click", () => {
      if (PopUp.classList.contains("ViewProjects_projects-imagesJS")) {
        PopUp.classList.remove("ViewProjects_projects-imagesJS");
      }
    });
  }

  function ScrollTop() {
    useScroll(0, 0, 0);
  }

  useEffect(() => {
    const Time = setTimeout(() => {
      spanBox();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <div className="ViewProjects">
      <div className="ViewProjects_content">
        <div className="ViewProjects_box">
          <div className="ViewProjects_title">
            <h1>Conheça Meu Trabalho</h1>
            <p>Experiência Comprovada</p>
          </div>

          <div className="ViewProjects_box-projects-photos">
            <div className="ViewProjects_projects-images">
              <div className="ViewProjects_projects-images-icons">
                <IoMdCloseCircle className="ViewProjects_projects-images-iconClose" />
              </div>
            </div>
            <div className="ViewProjects_projects-photos image01"></div>
            <div className="ViewProjects_projects-photos image02"></div>
            <div className="ViewProjects_projects-photos image03"></div>
            <div className="ViewProjects_projects-photos image04"></div>
            <div className="ViewProjects_projects-photos image05"></div>
            <div className="ViewProjects_projects-photos image06"></div>
            <div className="ViewProjects_projects-photos image07"></div>
            <div className="ViewProjects_projects-photos image08"></div>
            <div className="ViewProjects_projects-photos image09"></div>
            <div className="ViewProjects_projects-photos image03"></div>
          </div>

          <div className="ViewProjects_view-more" onClick={ScrollTop}>
            <NavLink to={"/gallery"}>galeria de projetos executados</NavLink>
            <IoIosArrowForward className="ViewProjects_icon-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProjects;
