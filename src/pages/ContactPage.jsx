import Form from "../components/Form/Form";
import Layout from "../components/Layout/Layout";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import image from "../assets/img/11.jpg";
import PageBanner from "../components/PageBanner/PageBanner";
const ContactPage = () => {
  const MapEmbed = () => {
    const mapEmbedHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5402407077777!2d85.33104707537099!3d27.700601425789117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19be56d18205%3A0xccbccf6af662d059!2sShangrila%20Tower!5e0!3m2!1sen!2snp!4v1687933106999!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

    return <div dangerouslySetInnerHTML={{ __html: mapEmbedHTML }} />;
  };
  return (
    <Layout>
      <PageBanner pageTitle={"Contact Us"} page={"Contact"} />
      <div className="container section__gap contact__page">
        <div className="row">
          <div className="col-lg-6 col-12">
            <SectionTitle subTitle={"Reach Out To Us"} title={"Fill up the Form below and our team will reach out you"} />
            <Form />
          </div>
          <div className="col-lg-6 col-12">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="map mb-80">
        <MapEmbed />
      </div>
    </Layout>
  );
};

export default ContactPage;
