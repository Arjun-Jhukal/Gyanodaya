import { FiPhoneCall } from "react-icons/fi";
import { FaLocationArrow, FaEnvelopeOpenText } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import ContactBox from "../ContactBox/ContactBox";
const FooterNavSingle = ({ data }) => {
  return (
    <footer className="footer ">
      <ContactBox />
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="footer__logo">
              <Link to={"/"}>
                {" "}
                <img src={logo} alt="" />
              </Link>
            </div>
            <ul className="contacts">
              <li>
                <FiPhoneCall />
                <span>+977 9812767046</span>
              </li>
              <li>
                <FaLocationArrow />
                <span>New Baneshwor, Kathmandu 44600, Nepal</span>
              </li>
              <li>
                <FaEnvelopeOpenText />
                <span>+977 9812767046</span>
              </li>
            </ul>
          </div>

          {data.map((item, index) => {
            return (
              <div className="col-lg-2 col-md-6 col-12" key={index}>
                <h1 className="footer__title">{item.title}</h1>
                <ul>
                  {item.links.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link to={"/"}>{link}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="text">
            <p>copyright &copy; 2023 Gyanodaya Vidya Niketan.All Rights Reserved</p>
            <p>
              Designed By:{" "}
              <Link to={"https://arjunjhukal.com.np"} target="_blank">
                Arjun Jhukal
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNavSingle;
