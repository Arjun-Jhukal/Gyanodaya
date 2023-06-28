import { useState, useEffect } from "react";
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

  useEffect(() => {
    // Check if any value in the data array is >= 1000
    const checkLargeValue = () => {
      for (let item of data) {
        if (parseInt(item.value) >= 1000) {
          setLarge(true);
          return;
        }
      }
      setLarge(false); // Reset to false if no value is >= 1000
    };

    checkLargeValue();
  }, [data]);

  return (
    <div className="counter" style={counterStyle}>
      <div className="container">
        <SectionTitle subTitle={"Our Facility"} title={"Why Gyanodaya ?"} />
        <div className="row">
          {data.map((item, index) => {
            let value = parseInt(item.value);
            let updatedValue = value;
            if (value >= 1000) {
              updatedValue = (value / 1000).toFixed(2);
            }

            return (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                <div className="counter__item">
                  <h1 className={large ? " lg__heading large" : "lg__heading"}>{updatedValue}</h1>
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
