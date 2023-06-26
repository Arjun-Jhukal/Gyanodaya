import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../assets/img/logo.png";
const Navbar = () => {
  return (
    <nav className="menu">
      <div className="container">
        <div className="menu__bar">
          <div className="menu__logo">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul className="menu__items active">
            <li>
              <Link to={"/"} className="active">
                Home
              </Link>
            </li>
            <li className="menu_has_child ">
              <Link to={"/"}>About</Link>
              <ul className="dropdown__items">
                <li>
                  <Link to={"/"}>Management Team</Link>
                </li>
                <li>
                  <Link to={"/"}>Administrative Team</Link>
                </li>
                <li>
                  <Link to={"/"}>Teaching Staffs</Link>
                </li>
                <li>
                  <Link to={"/"}>Message From CEO</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"/"}>Courses</Link>
            </li>
            <li>
              <Link to={"/"}>Notice</Link>
            </li>
            <li>
              <Link to={"/"}>Contact Us</Link>
            </li>

            <button className="close__btn d-md-none">
              <AiOutlineClose size={24} />
            </button>
          </ul>
          <button className="burger d-md-none">
            <GiHamburgerMenu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
