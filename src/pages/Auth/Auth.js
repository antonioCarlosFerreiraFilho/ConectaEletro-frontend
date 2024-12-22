//css
import "./Auth.css";
//components
import LoginRegister from '../../components/LoginRegister/LoginRegister';
import Footer from '../../components/Footer/Footer';

const Auth = () => {
  return (
    <div>
      <section>
        <LoginRegister />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Auth;
