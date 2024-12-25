//css
import "./CardGallery.css";
//react icons
import { FaArrowRightLong } from "react-icons/fa6";
//react
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//slices
import { allArticle } from "../../slices/articleSlice";
import { uploads } from "../../utils/config";
//components
import Loading from "../../components/Loading/Loading";
//hooks
import { useScroll } from "../../hooks/useScroll";

const CardGallery = () => {
  //slices
  const { articles, loading } = useSelector((state) => state.article);

  //redux
  const dispatch = useDispatch();

  //Rederizando
  useEffect(() => {
    dispatch(allArticle());
  }, [dispatch]);

  function ScrollTop() {
    useScroll(0, 0, 1000);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="CardGallery_contentAll">
            <div className="CardGallery">
              <div className="CardGallery_boxes">
                {articles.map((card) => (
                  <div className="CardGallery_box" key={card._id}>
                    <div className="CardGallery_box-Image">
                      <img
                        className="CardGallery_Image"
                        src={`${uploads}/Article/${card.images[0]}`}
                        alt=""
                      />
                    </div>
                    <div className="CardGallery_box-description">
                      <div>
                        <p className="CardGallery_box-date">{card.data}</p>
                      </div>
                      <div>
                        <h1 className="CardGallery_box-title">{card.title1}</h1>
                      </div>
                      <div>
                        <p className="CardGallery_box-descriptionService">
                          {card.description1}
                        </p>
                      </div>
                      <div className="CardGallery_box-Link">
                        <NavLink
                          to={`/article/${card._id}`}
                          onClick={ScrollTop}
                        >
                          Saber mais..
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/*
                <div className="CardGallery_Pagination">
              <div className="CardGallery_Pagination-content">
                <NavLink>
                  <div className="CardGallery_Pagination-content-box CardGallery_Pagination-content-box-current">
                    <p>1</p>
                  </div>
                </NavLink>
                <NavLink>
                  <div className="CardGallery_Pagination-content-box">
                    <p>2</p>
                  </div>
                </NavLink>
                <div className="CardGallery_Pagination-content-box-icon">
                  <FaArrowRightLong className="CardGallery_Pagination-content-icon" />
                </div>
              </div>
            </div>
                */}
          </div>
        </>
      )}
    </>
  );
};

export default CardGallery;
