import Banner from "../components/Banner/Banner";
import About from "../container/About";
import FacultySingle from "../components/FacultySingle/FacultySingle";
import FacilitySingle from "../components/FacilitySingle/FacilitySingle";
import CounterSingle from "../components/CounterSingle/CounterSingle";
import AlbumSingle from "../components/AlbumSingle/AlbumSingle";
import TestimonialSingle from "../components/TestimonialSingle/TestimonialSingle";
import Layout from "../components/Layout/Layout";

import Data from "../data.json";
import TeamSingle from "../components/TeamSingle/TeamSingle";
import NoticeSingle from "../components/NoticeSingle/NoticeSingle";
import Popup from "../components/Popup/Popup";
import BlogSingle from "../components/BlogSingle/BlogSingle";

const LandingPage = () => {
  return (
    <main className="main">
      <Layout>
        <Banner data={Data.banner} />
        <About />
        <FacultySingle data={Data.faculty} />
        <FacilitySingle data={Data.facility} />
        <CounterSingle data={Data.counter} />
        <AlbumSingle data={Data.albums} />
        <TestimonialSingle data={Data.testimonials} />
        <BlogSingle />
        <Popup />
      </Layout>
    </main>
  );
};

export default LandingPage;
