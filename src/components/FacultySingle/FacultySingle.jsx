import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
const FacultySingle = ({ data }) => {
  return (
    <div className="faculty__two pt-120">
      <div className="container">
        <SectionTitle subTitle={"Our Courses"} title={"Explore Our Programs"} />
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-lg-4  col-12" key={index}>
                <div className="faculty__two__item">
                  <div className="faculty__two__image">
                    <img src={item.image} alt="" />
                  </div>

                  <div className="faculty__two__text">
                    <Link to={"/"} className={"sm_heading text-center d-block"}>
                      {item.title}
                    </Link>
                    <p>{item.brief}</p>
                  </div>

                  <div className="faculty__two__btn">
                    <Link to={"/"} className="btn btn__2">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FacultySingle;
