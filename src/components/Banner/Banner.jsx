import Slider from "react-slick";
import { Link } from "react-router-dom";

const BannerSingle = ({ data }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    fade: true,
    cssEase: "linear",
  };

  return (
    <Slider className="banner" {...settings}>
      {data.map((item, index) => {
        return (
          <div className="banner__item" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="banner__text ">
              <h1 className="sub__heading">Welcome To School</h1>
              <h1 className="lg__heading">{item.title}</h1>
              <p>{item.brief}</p>

              <div className="btn__group">
                <Link to={"/about"} className="btn btn__1">
                  Read More
                </Link>
                <Link to={"/contact"} className="btn btn__2">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default BannerSingle;
