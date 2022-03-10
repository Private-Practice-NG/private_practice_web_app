import NavLinks from "./NavLinks";
import logo from "assets/images/logo.png";

const Sidenav = () => {
  return (
    <header className="dashboard-header">
      <div className="dashboard-title-container">
        <img src={logo} alt="private pratice logo" />
        <h1 className="dashboard-title">Private Practice</h1>
      </div>

      <nav className="dashboard-nav">
        <NavLinks />
      </nav>
    </header>
  );
};
export default Sidenav;
