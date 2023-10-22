import member01 from "../../assets/img/18.jpg";

const TeamSingle = ({ data }) => {
  return (
    <div className="team section__gap mb-60">
      <div className="container">
        <div className="row">
          {data.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-6" key={index}>
              <div className="team__member">
                <div className="team__member__profile">
                  <img src={member01} alt={item.name} />
                </div>
                <div className="team__text">
                  <span>{item.position}</span>
                  <h1 className="sm_heading">{item.name}</h1>
                  <span>{item.degree}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSingle;
