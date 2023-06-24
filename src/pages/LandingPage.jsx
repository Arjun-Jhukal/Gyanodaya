import Banner from "../components/Banner/Banner";
import About from "../container/About";
import FacultySingle from "../components/FacultySingle/FacultySingle";
import FacilitySingle from "../components/FacilitySingle/FacilitySingle";
import CounterSingle from "../components/FacilitySingle/FacilitySingle";
import AlbumSingle from "../components/AlbumSingle/AlbumSingle";
import TestimonialSingle from "../components/TestimonialSingle/TestimonialSingle";
import Layout from "../components/Layout/Layout";

const LandingPage = () => {
  return (
    <main className="main">
      <Layout>
        <Banner />
        <About />
        <FacultySingle />
        <FacilitySingle />
        <CounterSingle />
        <AlbumSingle />
        <TestimonialSingle />
      </Layout>
    </main>
  );
};

export default LandingPage;
