import Banner from "../components/Banner/Banner";
import About from "../container/About";
import FacultySingle from "../components/FacultySingle/FacultySingle";
import FacilitySingle from "../components/FacilitySingle/FacilitySingle";
import CounterSingle from "../components/CounterSingle/CounterSingle";
import AlbumSingle from "../components/AlbumSingle/AlbumSingle";
import TestimonialSingle from "../components/TestimonialSingle/TestimonialSingle";
import Layout from "../components/Layout/Layout";

import Data from "../data.json";

import NoticeSingle from "../components/NoticeSingle/NoticeSingle";
import Popup from "../components/Popup/Popup";
import BlogSingle from "../components/BlogSingle/BlogSingle";

const LandingPage = () => {
  return (
    <main className="main">
      <Layout>
        <Banner data={Data.banner} />
        <About />
        <FacultySingle data={Data.faculty} sectionTitle={true} />
        <FacilitySingle data={Data.facility} sectionTitle={true} />
        <CounterSingle data={Data.counter} />
        <NoticeSingle data={Data.notices} sliceValue={6} sectionTitle={true} pagination={false} />
        <AlbumSingle data={Data.albums} sliceValue={4} sectionTitle={true} />
        <TestimonialSingle data={Data.testimonials} />
        <BlogSingle data={Data.blog} sliceValue={3} sectionTitle={true} />

        <Popup />
      </Layout>
    </main>
  );
};

export default LandingPage;
