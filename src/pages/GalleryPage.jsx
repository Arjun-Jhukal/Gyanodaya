import Layout from "../components/Layout/Layout";
import image01 from "../assets/img/10.jpg";
import PageBanner from "../components/PageBanner/PageBanner";
const GalleryPage = () => {
  const totalItems = Array.from({ length: 20 });
  return (
    <Layout>
      <PageBanner pageTitle={"Our Gallery"} page={"Gallery"} />
      <div className="gallery mb-60 section__gap">
        <div className="container">
          <div className="row">
            {totalItems.map((item, index) => {
              return (
                <div className="col-lg-3 col-sm-4 col-6" key={index}>
                  <img src={image01} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
