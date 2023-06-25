import faculty01 from "../../assets/img/03.jpg";
const FacultySingle = () => {
  return (
    <div className="faculty section__gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="faculty__item">
              <img src={faculty01} alt="" />

              <div className="faculty__item__text">
                <h1 className="md_heading">BSc.CSIT</h1>
                <span>Tribhuwan University</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultySingle;
