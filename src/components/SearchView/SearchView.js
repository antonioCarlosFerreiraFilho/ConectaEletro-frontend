//CSS
import "./SearchView.css";
//react
import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
//API
import { uploads } from "../../utils/config";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { searchArticle } from "../../slices/articleSlice";
//hooks
import { useQuery } from "../../hooks/useQuery";
import { useScroll } from "../../hooks/useScroll";

const SearchView = () => {
  //initial States
  const query = useQuery();
  const search = query.get("q");

  //Redux
  const dispatch = useDispatch();
  const { articles, loading } = useSelector((state) => state.article);

  //LOAD Articles
  useEffect(() => {
    dispatch(searchArticle(search));
  }, [dispatch, search]);

  function ScrollTop() {
    useScroll(0, 0, 1000);
  }

  return (
    <div className="Search">
      <div className="Search-content">
        <div className="Search-content-searchUser">
          <h1>
            Voce esta Buscando por: <strong> {search} </strong>{" "}
          </h1>
        </div>
        <div className="Search-boxes-all">
          <div className="Search-boxes-content">
            {loading ? (
              <h1>carregando...</h1>
            ) : (
              <div className="CardGallery_box-views-wrap">
                {articles &&
                  articles.map((card) => (
                    <div className="CardGallery_box-views" key={card._id}>
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
                          <h1 className="CardGallery_box-title">
                            {card.title1}
                          </h1>
                        </div>
                        <div>
                          <p className="CardGallery_box-descriptionService">
                            {card.description1}
                          </p>
                        </div>
                        <div className="CardGallery_box-Link">
                          <NavLink to={`/article/${card._id}`} onClick={ScrollTop}>
                            Saber mais..
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchView;
