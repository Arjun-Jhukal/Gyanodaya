import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../assets/img/logo.png";
import { useState } from "react";
const Navbar = ({ data }) => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [dropStatus, setDropStatus] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const toggleMenu = (currentActive) => {
    setActiveMenu(currentActive);
  };
  const toggleDropDown = () => {
    setDropStatus(!dropStatus);
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
          <ul className={showMobileMenu ? "menu__items active" : "menu__items"}>
            {data.map((navLink, index) => {
              const dropdownStatus = navLink.hasOwnProperty("subItem");

              return (
                <li key={index} className={dropdownStatus ? "menu_has_child " : ""} onClick={toggleDropDown}>
                  <Link
                    className={`${activeMenu === navLink.item ? "active" : ""}`}
                    onClick={() => {
                      toggleMenu(navLink.item);
                    }}
                    to={navLink.link}
                  >
                    {navLink.item}
                  </Link>

                  {dropdownStatus ? (
                    <ul className="dropdown__items">
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

            <button className="close__btn d-md-none" onClick={toggleMobileMenu}>
              <AiOutlineClose size={24} />
            </button>
          </ul>
          <button className="burger d-md-none" onClick={toggleMobileMenu}>
            <GiHamburgerMenu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
