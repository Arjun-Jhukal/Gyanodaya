import BlogSingle from "../components/BlogSingle/BlogSingle";
import Layout from "../components/Layout/Layout";
import Data from "../data.json";
import PageBanner from "../components/PageBanner/PageBanner";
const BlogPage = () => {
  return (
    <Layout>
      <PageBanner PageTitle={" Our Blogs"} page={"Blog"} />
      <BlogSingle data={Data.blog} sliceValue={9} pagination={true} />
    </Layout>
  );
};

export default BlogPage;
