import member01 from "../../assets/img/19.jpg";

const TeamSingle = () => {
  const totalItems = Array.from({ length: 10 });
  return (
    <div className="team section__gap mb-60">
      <div className="container">
        <div className="row">
          {totalItems.map((item, index) => {
            return (
              <div className="col-lg-3 col-md-4 col-6" key={index}>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamSingle;
