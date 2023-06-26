import { useState } from "react";
import bannerImage from "../../assets/img/05.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";
const CounterSingle = ({ data }) => {
  const counterStyle = {
    width: "100%",
    height: "400px",
    background: `linear-gradient(to top,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${bannerImage}) fixed center`,
    backgroundPosition: "center/center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "grid",
    placeItems: "center",
  };

  const [large, setLarge] = useState(false);

  return (
    <div className="counter" style={counterStyle}>
      <div className="container">
        <SectionTitle subTitle={"Our Facility"} title={"Why Gyanodaya ?"} />
        <div className="row">
          {data.map((item, index) => {
            let value = parseInt(item.value);
            let updatedValue = 0;

            if (value >= 1000) {
              updatedValue = value / 1000;
              setLarge(true);
            } else {
              updatedValue = value;
            }

            return (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                <div className="counter__item">
                  <h1 className={large ? "large lg__heading" : "lg__heading"}>{updatedValue}</h1>
                  <span className="sm_heading">{item.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CounterSingle;
