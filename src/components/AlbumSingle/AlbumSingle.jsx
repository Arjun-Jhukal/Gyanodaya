import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
const AlbumSingle = ({ data, sliceValue, sectionTitle }) => {
  return (
    <div className="faculty section__gap">
      <div className="container">
        {sectionTitle ? (
          <SectionTitle
            subTitle={"Our Albums"}
            title={"Few Glimps of Prabha Dhamkot "}
          />
        ) : (
          ""
        )}
        <div className="row ">
          {data.slice(0, sliceValue).map((item, index) => {
            return (
              <div className="col-lg-6 col-md-6 col-12" key={index}>
                <div className="faculty__item">
                  <img src={item.image} alt="" />

                  <div className="faculty__item__text">
                    <Link to={`/album/${index}`} className="md_heading">
                      {item.title}
                    </Link>
                    <span>{item.brief}</span>
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

export default AlbumSingle;
