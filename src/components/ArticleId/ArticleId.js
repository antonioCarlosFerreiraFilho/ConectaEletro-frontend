//css
import "./ArticleId.css";
//components
import FormCommentsArticle from "../FormCommentsArticle/FormCommentsArticle";
//react
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//images
import { uploads } from "../../utils/config";
//redux
import { useDispatch, useSelector } from "react-redux";
//slices
import { getArticle } from "../../slices/articleSlice";

const ArticleId = () => {
  //react
  const { id } = useParams();

  //redux
  const dispatch = useDispatch();
  const { article } = useSelector((state) => state.article);

  //renderizando
  useEffect(() => {
    dispatch(getArticle(id));
  }, [dispatch, id]);

  return (
    <div className="ArticleId">
      <div className="ArticleId_content">
        <div className="ArticleId_card">
          <div className="ArticleId_card-info">
            <div>
              {article.images && (
                <img src={`${uploads}/Article/${article.images[1]}`} alt="" />
              )}
            </div>
            <div className="ArticleId_card-box-date">
              <div>
                <p>
                  {article.data} / {article.category}
                </p>
              </div>
              <div>
                <h1>{article.title2}</h1>
              </div>
            </div>
          </div>

          <div className="ArticleId_card-description">
            <div>
              <h1>{article.title3}</h1>
            </div>
            <div>
              <p>{article.description2}</p>
            </div>
            <div>
              <h1>{article.title4}</h1>
            </div>
            <div>
              <p>{article.description3}</p>
            </div>
          </div>

          <div className="ArticleId_card-images">
            <div className="ArticleId_card-boXimages">
              <div>
              {article.images && (
                <img src={`${uploads}/Article/${article.images[2]}`} alt="" />
              )}
              </div>
              <div>
              {article.images && (
                <img src={`${uploads}/Article/${article.images[3]}`} alt="" />
              )}
              </div>
            </div>
            <div>
              <div className="ArticleId_card-dubleImage-description">
                <p>{article.description4}</p>
              </div>
            </div>
          </div>

          <div className="ArticleId_card-block">
            <div>
              <div className="ArticleId_card-block-title">
                <h1>{article.title5}</h1>
                <p>{article.description5}</p>
              </div>
            </div>
            <div className="ArticleId_card-block-Desk">
              <div>
              {article.images && (
                <img src={`${uploads}/Article/${article.images[4]}`} className="ArticleId_card-block-image" alt="" />
              )}
              </div>

              <div className="ArticleId_card-block-box_list">
                <ul className="ArticleId_card-block-list">
                  <li>
                    <p>{article.list1}</p>
                  </li>
                  <li>
                    <p>{article.list2}</p>
                  </li>
                  <li>
                    <p>{article.list3}</p>
                  </li>
                  <li>
                    <p>{article.list4}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ArticleId_card-InfoServices">
            <div className="ArticleId_card-InfoServices-image">
              <div className="ArticleId_card-InfoServices-shadow">
                <div className="ArticleId_card-InfoServices-card">
                  <div className="ArticleId_card-InfoServices-box-TXT">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Animi molestias debitis qui reiciendis voluptatum,
                      necessitatibus quia exercitationem quod omnis aperiam
                      perferendis porro libero placeat quaerat esse explicabo
                      iste id eaque?
                    </p>
                  </div>
                  <div className="ArticleId_card-InfoServices-box-Name">
                    <p>Jehovah Perfecto-CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <FormCommentsArticle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleId;
