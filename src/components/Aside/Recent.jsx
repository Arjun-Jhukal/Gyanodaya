import image from "../../assets/img/07.jpg";
import { Link } from "react-router-dom";
const Recent = () => {
  return (
    <div className="aside__box">
      <h5 className="sm_heading">Recent Blog</h5>

      <div className="aside__box__item">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="title">
          <Link to={`/blog`}>Lorem, ipsum dolor. Lorem, ipsum dolor.</Link>
        </div>
      </div>
    </div>
  );
};

export default Recent;
