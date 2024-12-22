//css
import "./NewSletter.css";
//components
import MessageError from "../../components/MessageError/MessageError";
//redux
import { useDispatch, useSelector } from "react-redux";
//react
import { useState, useEffect } from "react";
//slices
import { newSletter, reset } from "../../slices/newSletterSlice";

const NewSletter = () => {
  //States
  const [email, setEmail] = useState("");

  //redux
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector((state) => state.newsletter);

  //Submit Sletter
  function sendSletter(e) {
    e.preventDefault();

    const EmailSend = {
      email,
    };

    dispatch(newSletter(EmailSend));

    setEmail("");

    setTimeout(() => {
      dispatch(reset());
    }, 4000);
  }

  //Reset
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className="NewSletter">
      <div className="NewSletter_container">
        <div className="NewSletter_box">
          <div className="NewSletter_box-titleDesk">
            <h1>Tenha ofertas exclusivas por Email !</h1>
          </div>
          <div className="NewSletter_box-Form">
            <form
              action=""
              onSubmit={sendSletter}
              className="NewSletter_box-inputs"
            >
              <input
                type="text"
                className="NewSletter_input-TXT"
                placeholder="Seu Email ou Gmail."
                onChange={(e) => setEmail(e.target.value)}
                value={email || ""}
              />
              {loading && (
                <input
                  type="submit"
                  value="AGUARDE...."
                  disabled
                  className="NewSletter_input-submit"
                />
              )}
              {!loading && (
                <input type="submit" className="NewSletter_input-submit" />
              )}
            </form>
            <div className="NewSletter_box-inputs-boxMessageError">
              <div className="NewSletter_box-inputs-boxMessage">
                {message && (
                  <>
                    <div>
                      <MessageError error={message} type="success" />
                    </div>
                  </>
                )}
                {error && (
                  <>
                    <div>
                      <MessageError error={error} type="error" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSletter;
