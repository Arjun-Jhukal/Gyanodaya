import FooterNavSingle from "../FooterNavSingle/FooterNavSingle";
import Header from "../Header/Header";
import Data from "../../data.json";

const Layout = ({ children }) => {
  return (
    <>
      <Header data={Data.navbar} />
      <main className="main__app">{children}</main>
      <FooterNavSingle data={Data.footerNav} />
    </>
  );
};

export default Layout;
