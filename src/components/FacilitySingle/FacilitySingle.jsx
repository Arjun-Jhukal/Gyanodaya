import { FiBookOpen } from "react-icons/fi";
import { Link } from "react-router-dom";
const FacilitySingle = () => {
  return (
    <section className="facility section__gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="facility__item">
              <div className="facility__item__icon">
                <FiBookOpen size={40} />
              </div>
              <Link to={"/facility"} className="sm_heading ">
                Transportation
              </Link>

              <div className="facility__brief">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, vel dignissimos repellat esse at dolorem accusamus perferendis
                  minima harum velit, beatae officiis recusandae sit? Sapiente, reiciendis? Quo delectus culpa similique?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitySingle;
