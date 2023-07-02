import Layout from "../components/Layout/Layout";
import About from "../container/About";
import Data from "../data.json";
import TestimonialSingle from "../components/TestimonialSingle/TestimonialSingle";
const AboutPage = () => {
  return (
    <Layout>
      <About />
      <TestimonialSingle data={Data.testimonials} />
    </Layout>
  );
};

export default AboutPage;
