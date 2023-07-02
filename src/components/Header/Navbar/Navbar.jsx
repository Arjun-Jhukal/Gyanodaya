import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../assets/img/logo.png";

const Navbar = ({ data }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const changeActive = (link) => {
    setActiveMenu(link);
  };

  return (
    <nav className="menu">
      <div className="container">
        <div className="menu__bar">
          <div className="menu__logo">
            <Link to={"/"}>
              <img src={logo} alt="School Logo" />
            </Link>
          </div>
          <ul className={"menu__items"}>
            {data.map((navLink, index) => {
              const dropdownStatus = navLink.hasOwnProperty("subItem");

              return (
                <li onClick={toggleDropdown} key={index} className={dropdownStatus ? "has_child" : ""}>
                  <Link onClick={() => changeActive(navLink.item)} className={activeMenu === navLink.item ? "active" : ""} to={navLink.link}>
                    {navLink.item}
                  </Link>

                  {dropdownStatus ? (
                    <ul className={showDropdown && dropdownStatus ? "dropdown__items active" : "dropdown__items"}>
                      {navLink.subItem.map((dropdownItem, index) => {
                        return (
                          <li key={index}>
                            <Link to={`/team/${index}`}>{dropdownItem.item}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}

            <button className="btn__close d-md-none">
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
