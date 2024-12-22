//css
import "./Gallery.css";
//components
import BannerGallery from "../../components/BannerGallery/BannerGallery";
import CardGallery from '../../components/CardGallery/CardGallery';
import SidebarWrapper from "../../components/SidebarWrapper/SidebarWrapper";
import NewSletter from "../../components/NewSletter/NewSletter";
import Footer from "../../components/Footer/Footer";

const Gallery = () => {
  return (
    <div>

      <section>
        <BannerGallery />
      </section>

      <section className="Gallery_content">
        <div className="Gallery_id-SideBar">
          <div className="Gallery_id">
            <CardGallery />
          </div>
          <div className="Gallery_SideBar">
            <SidebarWrapper/>
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

export default Gallery;
