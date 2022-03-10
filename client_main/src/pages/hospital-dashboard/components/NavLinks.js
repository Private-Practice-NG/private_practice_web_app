import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const navs = [
    {
      key: 1,
      icon: "fab fa-regular fa-earth-africa",
      name: "Dashboard",
      link: "/hospital-dashboard",
    },
    {
      key: 2,
      icon: "fa-regular fa-rectangle-list",
      name: "Jobs",
      link: "/jobs",
    },
    {
      key: 3,
      icon: "hello",
      name: "Statistics",
      link: "/statistics",
    },
    {
      key: 4,
      icon: "fa-regular fa-wallet",
      name: "Wallet",
      link: "/wallet",
    },
    {
      key: 5,
      icon: "fa-regular fa-star",
      name: "Favorites",
      link: "/favourites",
    },
    {
      key: 6,
      icon: "fa-light fa-calendar-clock",
      name: "Calender",
      link: "/calender",
    },
    {
      key: 7,
      icon: "fa-regular fa-circle-question",
      name: "Help/Support",
      link: "/helpsupport",
    },
    {
      key: 8,
      icon: "hello",
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
            <i className={nav.icon}></i>
            <span>{nav.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
