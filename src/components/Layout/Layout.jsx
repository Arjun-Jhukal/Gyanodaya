import FooterNavSingle from "../FooterNavSingle/FooterNavSingle";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main__app">{children}</main>
      <FooterNavSingle />
    </>
  );
};

export default Layout;
