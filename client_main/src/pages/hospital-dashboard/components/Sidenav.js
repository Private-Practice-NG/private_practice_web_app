import NavLinks from "./NavLinks";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <header className="dashboard-header">
      <Link to="/hospital-dashboard" className="dashboard-title-container">
        <img src={logo} alt="private pratice logo" />
        <h1 className="dashboard-title">Private Practice</h1>
      </Link>

      <nav className="dashboard-nav">
        <NavLinks />
      </nav>
    </header>
  );
};
export default Sidenav;
