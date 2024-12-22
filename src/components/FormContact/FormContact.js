//css
import "./FormContact.css";
//components
import MessageError from "../MessageError/MessageError";
//redux
import { useDispatch, useSelector } from "react-redux";
//react
import { useState, useEffect } from "react";
//slices
import { newContact, reset } from "../../slices/contactSlice";

const FormContact = () => {
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

  return (
    <div className="FormContact">
      <div className="FormContact_content">
        <div className="FormContact_box-infos">
          <div className="FormContact_content-infos">
            <h1>Eletricista em Sua Casa</h1>
            <div className="FormContact_content-slogan">
              <p>Solicitação de Atendimento</p>
            </div>
            <div className="FormContact_content-description">
              <p>
                Estou pronto para resolver o seu problema elétrico com rapidez e
                segurança. Para que possa atendê-lo diretamente em sua
                residência, pedimos que você preencha o formulário abaixo com
                suas informações
              </p>
            </div>
          </div>

          <div className="FormContact_form-content">
            <form className="FormContact_form" onSubmit={newContactSubmit}>
              <input
                type="text"
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
                value={name || ""}
                maxLength={20}
              />
              <input
                type="text"
                placeholder="Telefone para contato"
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
              <textarea
                name=""
                id=""
                placeholder="Descrição do problema a ser resolvido."
                onChange={(e) => setDescription(e.target.value)}
                value={description || ""}
                maxLength={140}
              ></textarea>
              <div className="FormContact_box-submit">
                <p>
                  Após o envio, Vou entrar em contato para confirmar
                  os detalhes e agendar o atendimento no melhor horário para
                  você. 
                </p>
                <div className="FormContact_box-inputSubmit">
                  {loading && (
                    <input type="submit" disabled value="aguarde......" />
                  )}
                  {!loading && <input type="submit" value="Enviar" />}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="FormContact_content-messageError">
          <div className="FormContact_content-message">
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
  );
};

export default FormContact;
