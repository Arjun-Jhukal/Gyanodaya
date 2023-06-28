import { Link } from "react-router-dom";
import { FaPhone, FaEnvelopeOpenText } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topbar d-none d-md-block">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                <FaPhone size={18} />
                <Link to={"/"}>+977&nbsp;9812787046</Link>
              </li>
              <li>
                <FaEnvelopeOpenText size={18} />
                <Link to={"/"}>connectjhukal@gmail.com</Link>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <button type="button" className="btn btn__3">
                  Suggestion
                </button>
              </li>
              <li>
                <button type="button" className="btn btn__3">
                  Inquiry
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
