import { Link } from "react-router-dom";
import { FaPhone, FaEnvelopeOpenText } from "react-icons/fa";

const Topbar = ({ onClick }) => {
  return (
    <div className="topbar d-none d-md-block">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                <FaPhone size={18} />
                <Link to={"tel:+977 9812767046"}>+977&nbsp;9812787046</Link>
              </li>
              <li>
                <FaEnvelopeOpenText size={18} />
                <Link to={"mailto:connectjhukal@gmail.com"}>connectjhukal@gmail.com</Link>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <button type="button" className="btn btn__3" onClick={onClick}>
                  Suggestion
                </button>
              </li>
              <li>
                <Link to={"/contact"} type="button" className="btn btn__3">
                  Inquiry
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
