import Layout from "../components/Layout/Layout";
import AlbumSingle from "../components/AlbumSingle/AlbumSingle";
import Data from "../data.json";
import Pagination from "../components/Pagination/Pagination";

const AlbumPage = () => {
  return (
    <Layout>
      <AlbumSingle data={Data.albums} sliceValue={8} />
      <Pagination />
    </Layout>
  );
};

export default AlbumPage;
