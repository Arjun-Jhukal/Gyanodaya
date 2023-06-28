import Recent from "../components/Aside/Recent";
import Layout from "../components/Layout/Layout";
import NoticeSingle from "../components/NoticeSingle/NoticeSingle";

const NoticePage = () => {
  return (
    <Layout>
      <div className="container section__gap">
        <div className="row">
          <div className="col-lg-8 col-12">
            <NoticeSingle />
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <Recent />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NoticePage;
