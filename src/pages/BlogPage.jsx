import BlogSingle from "../components/BlogSingle/BlogSingle";
import Layout from "../components/Layout/Layout";
import Data from "../data.json";
const BlogPage = () => {
  return (
    <Layout>
      <BlogSingle data={Data.blog} sliceValue={9} pagination={true} />
    </Layout>
  );
};

export default BlogPage;
