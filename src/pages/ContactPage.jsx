import Layout from "../components/Layout/Layout";
import AlbumPage from "./AlbumPage";

const ContactPage = () => {
  return (
    <Layout>
      <p>Page Banner</p>
      <div className="row">
        <div className="col-lg-6 col-12">
          <p>Form</p>
        </div>
        <div className="col-lg-6 col-12">
          <p>Image</p>
        </div>
      </div>

      <div className="map">
        <p>Google Map</p>
      </div>
    </Layout>
  );
};

export default ContactPage;
