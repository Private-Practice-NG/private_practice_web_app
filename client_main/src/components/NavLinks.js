import { NavLink } from "react-router-dom";
const NavLinks = ({ navType }) => {
  const navs = [
    {
      key: 1,
      icon: require("../assets/images/icons/global.png"),
      name: "Dashboard",
      hospitalDashboardLink: "/hospital/dashboard",
      specialistDashboardLink: "/specialist/dashboard",
    },
    {
      key: 2,
      icon: require("../assets/images/icons/jobs.png"),
      name: "Jobs",
      hospitalDashboardLink: "/hospital/jobs",
      specialistDashboardLink: "/specialist/jobs",
    },
    {
      key: 3,
      icon: require("../assets/images/icons/growth.png"),
      name: "Statistics",
      hospitalDashboardLink: "/hospital/statistics",
      specialistDashboardLink: "/specialist/statistics",
    },
    {
      key: 4,
      icon: require("../assets/images/icons/wallet.png"),
      name: "Wallet",
      hospitalDashboardLink: "/hospital/wallet",
      specialistDashboardLink: "/specialist/wallet",
    },
    {
      key: 5,
      icon: require("../assets/images/icons/star.png"),
      name: "Favorites",
      hospitalDashboardLink: "/hospital/favourites",
      specialistDashboardLink: "/specialist/favourites",
    },
    {
      key: 6,
      icon: require("../assets/images/icons/calendar.png"),
      name: "Calender",
      hospitalDashboardLink: "/hospital/calender",
      specialistDashboardLink: "/specialist/calender",
    },
    {
      key: 7,
      icon: require("../assets/images/icons/question.png"),
      name: "Help/Support",
      hospitalDashboardLink: "/hospital/helpsupport",
      specialistDashboardLink: "/specialist/helpsupport",
    },
    {
      key: 8,
      icon: require("../assets/images/icons/tourism.png"),
      name: "Site Guide",
      hospitalDashboardLink: "/hospital/site-guide",
      specialistDashboardLink: "/specialist/site-guide",
    },
  ];

  return (
    <ul className="dashboard-nav-items">
      {navs.map((nav) => (
        <li className="dashboard-nav-lists" key={nav.key}>
          <NavLink
            to={
              navType === "hospital"
                ? nav.hospitalDashboardLink
                : nav.specialistDashboardLink
            }
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
