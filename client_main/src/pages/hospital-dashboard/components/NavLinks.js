import { NavLink } from "react-router-dom";
import calendar from "../../../assets/images/icons/calendar.png";
const NavLinks = () => {
  const navs = [
    {
      key: 1,
      icon: require("../../../assets/images/icons/global.png"),
      name: "Dashboard",
      link: "/hospital-dashboard",
    },
    {
      key: 2,
      icon: require("../../../assets/images/icons/jobs.png"),
      name: "Jobs",
      link: "/jobs",
    },
    {
      key: 3,
      icon: require("../../../assets/images/icons/growth.png"),
      name: "Statistics",
      link: "/statistics",
    },
    {
      key: 4,
      icon: require("../../../assets/images/icons/wallet.png"),
      name: "Wallet",
      link: "/wallet",
    },
    {
      key: 5,
      icon: require("../../../assets/images/icons/star.png"),
      name: "Favorites",
      link: "/favourites",
    },
    {
      key: 6,
      icon: require("../../../assets/images/icons/calendar.png"),
      name: "Calender",
      link: "/calender",
    },
    {
      key: 7,
      icon: require("../../../assets/images/icons/question.png"),
      name: "Help/Support",
      link: "/helpsupport",
    },
    {
      key: 8,
      icon: require("../../../assets/images/icons/tourism.png"),
      name: "Site Guide",
      link: "/site-guide",
    },
  ];

  return (
    <ul className="dashboard-nav-items">
      {navs.map((nav) => (
        <li className="dashboard-nav-lists" key={nav.key}>
          <NavLink
            to={nav.link}
            className={`dashboard-nav-link ${({ isActive }) =>
              isActive ? "active" : ""}`}>
            <img src={nav.icon} alt="" />
            <span>{nav.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
