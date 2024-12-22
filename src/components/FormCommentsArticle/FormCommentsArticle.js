import "./FormCommentsArticle.css";
//react
import { useState, useEffect } from "react";
//API
import { uploads } from "../../utils/config";
//redux
import { useDispatch, useSelector } from "react-redux";
//slices
import { commentArticle, reset } from "../../slices/articleSlice";
import { profile} from "../../slices/userSlice";
//hooks
import { useAuth } from "../../hooks/useAuth";
//components
import MessageError from "../MessageError/MessageError";

const FormCommentsArticle = () => {
  //users
  const { auth, loading } = useAuth();

  //Initial States
  const [name, setName] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  //redux
  const dispatch = useDispatch();
  const { article, message, error } = useSelector((state) => state.article);
  const { user } = useSelector((state) => state.user);

  //LOAD USER DATA
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

    //SET USER
    useEffect(() => {
      if (user) {
        setName(user.name);
      }
    }, [user]);

  //initial state Comments
  const [commentText, setCommentText] = useState("");

  //submit Comment
  function HandleComment(e) {
    e.preventDefault();

    const commentData = {
      comments: commentText,
      id: article._id,
    };

    dispatch(commentArticle(commentData));

    setCommentText("");

    setTimeout(() => {
      dispatch(reset());
    }, 4000);
  }

  return (
    <div className="FormCommentsArticle">
      <div className="FormCommentsArticle-title-Counter">
        <h1>Comments ({article.comments && article.comments.length})</h1>
      </div>
      <div className="FormCommentsArticle_box-comments">
        <div className="FormCommentsArticle_array-Comments">
          {article.comments && article.comments.length === 0 && (
            <>
              <p>não há comentarios, Seja o primeiro a deixar uma dica</p>
            </>
          )}
          {article.comments &&
            article.comments.map((comment) => (
              <div className="FormCommentsArticle_Comment" key={comment.userId}>
                <div className="FormCommentsArticle_Comment-contentInfo">
                  <div className="FormCommentsArticle_Comment-contentInfo-imageUser">
                  {comment.userImage && (
                      <img
                        src={`${uploads}/Users/${comment.userImage}`}
                        alt="image user"
                      />
                    )}
                  </div>
                  <div className="FormCommentsArticle_Comment-contentInfo-NameUser">
                    <h1>{comment.userName}</h1>
                  </div>
                  <div className="FormCommentsArticle_Comment-contentInfo-comment">
                    <p>{comment.comments}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="FormCommentsArticle_Form">
          <div className="FormCommentsArticle_Form-content-box">
            <div className="FormCommentsArticle_Form-Description-Description">
              <div>
                <h1>Leave A Reaply</h1>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  dicta saepe voluptatum quisquam nulla necessitatibus sed odit 
                </p>
              </div>
            </div>
            <div className="FormCommentsArticle_Form-Description-BoxForm">
              <form
                onSubmit={HandleComment}
                className="FormCommentsArticle_Form-Description-BoxForm-form"
              >
                <div className="FormCommentsArticle_Form-Description-BoxForm-form-textArea">
                  <textarea
                    placeholder="Comment*"
                    onChange={(e) => setCommentText(e.target.value)}
                    value={commentText || ""}
                    maxLength={160}
                  ></textarea>
                </div>
                <div className="FormCommentsArticle_Form-Description-BoxForm-form-submit">
                  <input type="submit" value="Post Comment" />
                </div>
                {error && (
                  <div className="FormCommentsArticle_Form-Description-BoxForm-form-MessageError">
                    <div className="FormCommentsArticle_Form-Description-BoxForm-form-MessageError-box">
                      <MessageError error={error} type="error" />
                    </div>
                  </div>
                )}

                {!auth && (
                  <div className="FormCommentsArticle_Form-Description-BoxForm-form-AlertAuth">
                    <div className="FormCommentsArticle_Form-Description-BoxForm-form-AlertAuth-box">
                      <p>vocé precisa estar logado para comentar</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCommentsArticle;
