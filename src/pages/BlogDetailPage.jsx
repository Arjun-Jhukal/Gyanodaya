import Recent from "../components/Aside/Recent";
import DetailSingle from "../components/DetailSingle/DetailSingle";
import Layout from "../components/Layout/Layout";

const ProgramDetailPage = ({ data }) => {
  return (
    <Layout>
      <div className="blog__detail section__gap mb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-12">
              <DetailSingle data={data} />
            </div>
            <div className="col-lg-3 col-12">
              <aside className="aside">
                <Recent data={data} />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProgramDetailPage;
