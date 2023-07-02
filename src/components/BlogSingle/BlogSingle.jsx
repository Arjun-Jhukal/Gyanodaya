import SectionTitle from "../SectionTitle/SectionTitle";

import { Link } from "react-router-dom";

import Pagination from "../Pagination/Pagination";

const BlogSingle = ({ data, sectionTitle, sliceValue, pagination }) => {
  return (
    <div className="blog pt-120">
      <div className="container">
        {sectionTitle ? <SectionTitle subTitle={"Our Blogs"} title={"Views and Ideas from Our Students and Teachers"} /> : ""}
        <div className="row">
          {data.slice(0, sliceValue).map((item, index) => {
            return (
              <div className="col-lg-4 col-12" key={index}>
                <div className="blog__image">
                  <img src={item.image} alt={item.title} />
                </div>
                <Link to={`/blog/${index}`} className="sm_heading">
                  {item.title}
                </Link>
                <div className="blog__info">
                  <span className="date">{item.date}</span>
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

export default BlogSingle;
