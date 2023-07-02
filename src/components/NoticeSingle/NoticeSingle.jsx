import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import SectionTitle from "../SectionTitle/SectionTitle";
const NoticeSingle = ({ data, sectionTitle, sliceValue, pagination }) => {
  return (
    <div className="notice pt-120">
      <div className="container">
        {sectionTitle ? <SectionTitle subTitle={"News and Notices"} title={"Regular updates about School Activities"} /> : ""}
        <div className="row">
          {data.slice(0, sliceValue).map((item, index) => {
            return (
              <div className="col-lg-6 col-12" key={index}>
                <div className="notice__item">
                  <div className="notice__text">
                    <span className="date">{item.date}</span>
                    <Link to={`/notices/${index}`} className="sm_heading">
                      {item.title}
                    </Link>
                    <p>{item.brief}</p>
                  </div>
                  <div className="notice__btns">
                    {item.download ? <Link className="btn btn__1">Download</Link> : ""}
                    <Link className="btn btn__2">Read Online</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {pagination ? <Pagination /> : ""}
      </div>
    </div>
  );
};

export default NoticeSingle;
