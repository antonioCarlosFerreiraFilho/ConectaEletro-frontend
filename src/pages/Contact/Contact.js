//css
import "./Contact.css";
//components
import BannerContact from '../../components/BannerContact/BannerContact';
import FormContact from "../../components/FormContact/FormContact";
import AboutCarrossel from "../../components/AboutCarrossel/AboutCarrossel";
import AboutCustomers from "../../components/AboutCustomers/AboutCustomers";
import NewSletter from "../../components/NewSletter/NewSletter";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div>

      <section>
        <BannerContact />
      </section>

      <section className="Contact_P">
        <div className="Contact_FormContact-AboutCarrossel">
          <div className="FormContact">
            <FormContact />
          </div>
          <div className="AboutCarrossel">
            <AboutCarrossel />
          </div>
        </div>
      </section>

      <section>
        <AboutCustomers />
      </section>

      <section>
        <NewSletter />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Contact;
