//css
import "./Home.css";
//components
import Banner from "../../components/Banner/Banner";
import CardIntro from "../../components/CardIntro/CardIntro";
import BannerCarrossel from "../../components/BannerCarrossel/BannerCarrossel";
import ShowsInformation from "../../components/ShowsInformation/ShowsInformation";
import FullServiceCarrossel from "../../components/FullServiceCarrossel/FullServiceCarrossel";
import AboutProfessional from "../../components/AboutProfessional/AboutProfessional";
import ViewProjects from "../../components/ViewProjects/ViewProjects";
import InfoCustomers from "../../components/InfoCustomers/InfoCustomers";
import ServiceCarrossel from "../../components/ServiceCarrossel/ServiceCarrossel";
import BestOption from "../../components/BestOption/BestOption";
import ServicesInfo from "../../components/ServicesInfo/ServicesInfo";
import CarouselServices from "../../components/CarouselServices/CarouselServices";
import NewSletter from "../../components/NewSletter/NewSletter";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>

      <section>
        <CardIntro />
      </section>

      <section>
        <BannerCarrossel />
      </section>

      <section>
        <ShowsInformation />
      </section>

      <section>
        <FullServiceCarrossel />
      </section>

      <section>
        <AboutProfessional />
      </section>

      <section>
        <ViewProjects />
      </section>

      <section>
        <InfoCustomers />
      </section>

      <section>
        <ServiceCarrossel />
      </section>

      <section>
        <BestOption />
      </section>

      <section className="Home_ServicesInfo-NewSletter">
        <div  className="content_ServicesInfo-NewSletter">
          <div className="ServicesInfo">
            <ServicesInfo />
          </div>

          <div className="CarouselServices">
            <CarouselServices />
          </div>
        </div>
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

export default Home;
