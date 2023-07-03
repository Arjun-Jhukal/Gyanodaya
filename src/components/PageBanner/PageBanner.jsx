import { Link } from "react-router-dom";
import bannerImage from "../../assets/img/12.jpg";
const PageBanner = ({ pageTitle, page }) => {
  const style = {
    background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${bannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top ",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "300px",
    display: "grid",
    placeItems: "center",
  };
  return (
    <div className="page__banner" style={style}>
      <div className="container">
        <div className="page__banner__content">
          <h1 className="lg__heading">{pageTitle}</h1>
          <div className="page__nav">
            <Link to={"/"}>Home</Link>
            <span>{page}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
