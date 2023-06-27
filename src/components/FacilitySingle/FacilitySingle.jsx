import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
const FacilitySingle = ({ data }) => {
  return (
    <section className="facility pt-120 ">
      <div className="container">
        <SectionTitle subTitle={"Our Facility"} title={"Why Gyanodaya ?"} />
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <div className="facility__item">
                  <div className="facility__item__icon">
                    <img src={item.image} alt="" />
                  </div>
                  <Link to={"/facility"} className="sm_heading ">
                    {item.title}
                  </Link>

                  <div className="facility__brief">
                    <p>{item.brief}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacilitySingle;
