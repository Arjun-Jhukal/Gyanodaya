import Layout from "../components/Layout/Layout";
import AlbumSingle from "../components/AlbumSingle/AlbumSingle";
import Data from "../data.json";
import Pagination from "../components/Pagination/Pagination";
import PageBanner from "../components/PageBanner/PageBanner";

const AlbumPage = () => {
  return (
    <Layout>
      <PageBanner pageTitle={"Photo Albums"} page={"Album"} />
      <AlbumSingle data={Data.albums} sliceValue={8} />
      <Pagination />
    </Layout>
  );
};

export default AlbumPage;
