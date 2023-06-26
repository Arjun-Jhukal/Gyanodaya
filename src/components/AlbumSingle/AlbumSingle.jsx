import album01 from "../../assets/img/01.jpg";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
const AlbumSingle = ({ data }) => {
  return (
    // <div className="album section__gap">
    //   <div className="container-fluid">
    //     <div className="row g-0">
    //       <div className="col-lg-4">
    //         <div className="album__item">
    //           <img src={album01} alt="" />

    //           <div className="album__item__text">
    //             <h1 className="sm_heading">Album 01</h1>
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium!</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="faculty section__gap">
      <div className="container">
        <SectionTitle subTitle={"Our Albums"} title={"Few Glimps of Gyanodaya "} />
        <div className="row ">
          {data.map((item, index) => {
            return (
              <div className="col-lg-6 col-md-6 col-12" key={index}>
                <div className="faculty__item">
                  <img src={item.image} alt="" />

                  <div className="faculty__item__text">
                    <Link to={"/"} className="md_heading">
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
