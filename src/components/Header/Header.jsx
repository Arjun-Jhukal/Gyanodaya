import Topbar from "./Topbar/Topbar";
import Navbar from "./Navbar/Navbar";
const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <Topbar />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
