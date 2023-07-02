import Layout from "../components/Layout/Layout";
import NoticeSingle from "../components/NoticeSingle/NoticeSingle";
import Data from "../data.json";
const NoticePage = () => {
  return (
    <Layout>
      <div className="container section__gap">
        <NoticeSingle pagination={true} sliceValue={15} data={Data.notices} />
      </div>
    </Layout>
  );
};

export default NoticePage;
