import aboutImage from "../assets/img/08.jpg";
// import sign from "../assets/img/06.png";
const About = () => {
  return (
    <div className="about section__gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="about__image">
              <img src={aboutImage} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about__message">
              <span className="sub_heading">Welcome Message</span>
              <h1 className="sm_heading">Welcome to Gyanodaya Vidya Niketan</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                expedita repellendus veritatis nulla, necessitatibus nam. Quas
                voluptas atque ratione similique, voluptatem animi totam quaerat
                sed neque praesentium, accusantium ullam deleniti.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
                mollitia quo aspernatur est suscipit nam, ea vitae veritatis
                blanditiis quae temporibus impedit id nihil quam quas voluptatem
                numquam? Asperiores, dolorum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, quidem!
              </p>
              <div className="message__box">
                <h1 className="sm_heading">Ganesh kunwar</h1>
                {/* <img src={sign} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
