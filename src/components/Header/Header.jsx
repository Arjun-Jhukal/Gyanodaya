import Topbar from "./Topbar/Topbar";
import Navbar from "./Navbar/Navbar";
const Header = ({ data }) => {
  return (
    <header className="header">
      <Topbar />
      <Navbar data={data} />
    </header>
  );
};

export default Header;
