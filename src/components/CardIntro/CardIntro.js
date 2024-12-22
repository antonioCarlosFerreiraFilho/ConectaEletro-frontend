import "./CardIntro.css";

const CardIntro = () => {
  return (
    <div className="CardIntro">
      <div className="CardIntro_content">
        <div className="CardIntro_box">
          <div className="CardIntro_box-images">
            <div className="CardIntro_box-image01"></div>
            <div className="CardIntro_box-image02"></div>
          </div>
        </div>

        <div className="CardIntro_content-about">
          <div className="CardIntro_about">
            <p>Eletricista Residencial Certificado.</p>
          </div>
          <div className="CardIntro_title">
            <h1>
              Eletricista residencial especializado em instalação{" "}
              <strong> Elétrica.</strong>
            </h1>
          </div>
          <div className="CardIntro_txt">
            <p>
              Se você está procurando um eletricista residencial qualificado é
              certificado, capaz de oferecer serviços com excelência técnica e
              segurança, você encontrou a pessoa certa. Com experiência
              comprovada em instalações e manutenções elétricas, estou à
              disposição para atender todas as necessidades da sua casa.
            </p>
          </div>
          <div className="CardIntro_list-content">
            <ul className="CardIntro_list">
              <li>Instalação Elétrica Completa</li>
              <li>Manutenção Preventiva e Corretiva</li>
              <li>Automação Residencial</li>
              <li>Troca e Reparo de Fiação</li>
              <li>Instalação de Iluminação e Tomadas</li>
            </ul>
          </div>
          <div className="CardIntro_about-professional">
            <div className="CardIntro_about-box">
              <div className="CardIntro_photo-professional"></div>
              <div className="CardIntro_about-name-professional">
                <h1>Carlos Ferreira</h1>
                <p>seu profissional Eletrico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIntro;
