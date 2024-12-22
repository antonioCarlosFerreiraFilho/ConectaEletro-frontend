import "./BannerGallery.css";
import SearchFor from "../SearchFor/SearchFor";

const BannerGallery = () => {
  return (
    <div className="BannerArticle">
      <div className="BannerArticle_content">
        <div className="BannerArticle_box-shadow">
          <div className="BannerArticle_card">
            <div className="BannerArticle_card-title">
              <h1>Especialista em instalações elétricas rápidas e seguras.
                Confira !
              </h1>
            </div>
            <div className="BannerArticle_card-list">
              <div className="BannerGallery-Search">
                <SearchFor />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerGallery;
