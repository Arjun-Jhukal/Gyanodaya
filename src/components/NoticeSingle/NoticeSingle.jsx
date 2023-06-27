import { Link } from "react-router-dom";
import notice01 from "../../assets/img/01.jpg";
const NoticeSingle = () => {
  return (
    <div className="notice">
      <div className="container">
        <div className="notice__item">
          <div className="notice__image">
            <img src={notice01} alt="" />
          </div>
          <div className="notice__text">
            <Link to={"/"} className="sm_heading">
              Admission Open for +2 2023
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni mollitia exercitationem quis illum minima tempore totam neque dolores
              corrupti aut voluptates sapiente unde odio fuga, sed harum animi, natus accusantium!
            </p>
            <span>2023-04-04</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeSingle;
