import member01 from "../../assets/img/19.jpg";

const TeamSingle = () => {
  return (
    <div className="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-6">
            <div className="team__member">
              <div className="team__member__profile">
                <img src={member01} alt="" />
              </div>
              <div className="team__text">
                <span>Principal</span>
                <h1 className="sm_heading">Mr. Arjun Jhukal</h1>
                <span>BSc. CSIT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSingle;
