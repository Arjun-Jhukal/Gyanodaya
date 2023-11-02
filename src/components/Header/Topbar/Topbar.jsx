import { FaEnvelopeOpenText, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar = ({ onClick }) => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row justify-content-center align-items-center ">
          <div className="col-md-6 col-12">
            <ul className="justify-content-center">
              <li>
                <FaPhone size={18} />
                <Link to={"tel:+977 9812767046"}>+977&nbsp;9812787046</Link>
              </li>
              <li>
                <FaEnvelopeOpenText size={18} />
                <Link to={"mailto:connectjhukal@gmail.com"}>connectgvn@gmail.com</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-12">
            <ul className="justify-content-center">
              <li>
                <button type="button" className="btn btn__3" onClick={onClick}>
                  Admission
                </button>
              </li>
              <li>
                <Link to={"/contact"} type="button" className="btn btn__3">
                  Apply Online
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
