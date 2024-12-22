//css
import "./About.css";
//componets
import BannerAbout from "../../components/BannerAbout/BannerAbout";
import AboutMe from "../../components/AboutMe/AboutMe";
import ViewProjects from "../../components/ViewProjects/ViewProjects";
import NewSletter from "../../components/NewSletter/NewSletter";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div>
      <section>
        <BannerAbout />
      </section>

      <section>
        <AboutMe />
      </section>

      <section>
        <ViewProjects />
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

export default About;
