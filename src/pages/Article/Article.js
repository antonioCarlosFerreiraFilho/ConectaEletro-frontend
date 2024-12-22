//css
import "./Article.css";
//components
import BannerArticle from "../../components/BannerArticle/BannerArticle";
import ArticleId from "../../components/ArticleId/ArticleId";
import SidebarWrapper from "../../components/SidebarWrapper/SidebarWrapper";
import NewSletter from "../../components/NewSletter/NewSletter";
import Footer from "../../components/Footer/Footer";

const Article = () => {
  return (
    <div>
      <section>
        <BannerArticle />
      </section>

      <section className="Article_content">
        <div className="Article_id-SideBar">
          <div className="Article_id">
            <ArticleId />
          </div>
          <div className="Article_SideBar">
            <SidebarWrapper />
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

export default Article;
