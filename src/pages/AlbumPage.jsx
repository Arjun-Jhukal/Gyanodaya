import Layout from "../components/Layout/Layout";
import AlbumSingle from "../components/AlbumSingle/AlbumSingle";
import Data from "../data.json";

const AlbumPage = () => {
  return (
    <Layout>
      <AlbumSingle data={Data.albums} />
    </Layout>
  );
};

export default AlbumPage;
