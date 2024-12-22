//css
import "./PaymentMethod.css";
//react icons
import { FaCcMastercard } from "react-icons/fa6";
import { IoMdCash } from "react-icons/io";

const PaymentMethod = () => {
  return (
    <div className="PaymentMethod">
      <div className="PaymentMethod_content">

        <div className="PaymentMethod_description">
          <div>
            <h1>Formas de pagamento</h1>
          </div>
          <div className="PaymentMethod_box-contentTxT">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum atque consequuntur veritatis! Laboriosam ipsum ducimus
            </p>
          </div>
        </div>
        
        <div className="PaymentMethod_methods">

          <div className="PaymentMethod_method">
            <div>
              <div>
                <FaCcMastercard className="PaymentMethod_method-icon"/>
              </div>
              <div className="PaymentMethod_method-description">
                <p>Cartão de débito MasterCard</p>
              </div>
            </div>
            <div className="PaymentMethod_method-info">
              <p>
                Se você tem uma loja física e não aceita pagamentos em cartão de
                crédito e/ou débito, certamente está deixando de conquistar uma
                grande parcela do seu público-alvo.
              </p>
            </div>
          </div>

          <div className="PaymentMethod_method PaymentMethod_method-mbWay">
            <div>
              <div className="PaymentMethod_method-image">
                
              </div>
              <div className="PaymentMethod_method-description">
                <p>Trasferencias Bancarias</p>
              </div>
            </div>
            <div className="PaymentMethod_method-info">
              <p>
                Se você tem uma loja física e não aceita pagamentos em cartão de
                crédito e/ou débito, certamente está deixando de conquistar uma
                grande parcela do seu público-alvo.
              </p>
            </div>
          </div>

          <div className="PaymentMethod_method">
            <div>
              <div>
                <IoMdCash className="PaymentMethod_method-icon-cash"/>
              </div>
              <div className="PaymentMethod_method-description">
                <p>Dinheiro em espécie</p>
              </div>
            </div>
            <div className="PaymentMethod_method-info">
              <p>
                Se você tem uma loja física e não aceita pagamentos em cartão de
                crédito e/ou débito, certamente está deixando de conquistar uma
                grande parcela do seu público-alvo.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
