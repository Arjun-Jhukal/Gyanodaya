import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
// import notice01 from "../../assets/img/01.jpg";
const NoticeSingle = () => {
  const totalNotices = Array.from({ length: 20 });
  return (
    <div className="notice ">
      <div className="container">
        {totalNotices.slice(0, 5).map((item, index) => {
          return (
            <div className="notice__item" key={index}>
              <div className="notice__text">
                <span className="date">2023-04-04</span>
                <Link to={`/notices/${index}`} className="sm_heading">
                  Admission Open for +2 2023
                </Link>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni mollitia exercitationem quis illum minima tempore totam neque
                  dolores corrupti aut voluptates sapiente unde odio fuga, sed harum animi, natus accusantium!
                </p>
              </div>
              <div className="notice__btns">
                <Link className="btn btn__1">Download</Link>
                <Link className="btn btn__2">Read Online</Link>
              </div>
            </div>
          );
        })}

        <Pagination />
      </div>
    </div>
  );
};

export default NoticeSingle;
