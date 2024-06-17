import React from 'react';
import { NavLink } from 'react-router-dom';
import globalIcon from '../assets/images/icons/global.png';
import jobsIcon from '../assets/images/icons/jobs.png';
import growthIcon from '../assets/images/icons/growth.png';
import walletIcon from '../assets/images/icons/wallet.png';
import starIcon from '../assets/images/icons/star.png';
import calendarIcon from '../assets/images/icons/calendar.png';
import questionIcon from '../assets/images/icons/question.png';
import tourismIcon from '../assets/images/icons/tourism.png';

const NavLinks = ({ isHospital }) => {
  const navs = [
    {
      key: 1,
      icon: globalIcon,
      name: "Dashboard",
      hospitalDashboardLink: "/hospital/dashboard",
      specialistDashboardLink: "/specialist/dashboard",
    },
    {
      key: 2,
      icon: jobsIcon,
      name: "Jobs",
      hospitalDashboardLink: "/hospital/jobs",
      specialistDashboardLink: "/specialist/jobs",
    },
    {
      key: 3,
      icon: growthIcon,
      name: "Statistics",
      hospitalDashboardLink: "/hospital/statistics",
      specialistDashboardLink: "/specialist/statistics",
    },
    {
      key: 4,
      icon: walletIcon,
      name: "Wallet",
      hospitalDashboardLink: "/hospital/wallet",
      specialistDashboardLink: "/specialist/wallet",
    },
    {
      key: 5,
      icon: starIcon,
      name: "Favorites",
      hospitalDashboardLink: "/hospital/favourites",
      specialistDashboardLink: "/specialist/favourites",
    },
    {
      key: 6,
      icon: calendarIcon,
      name: "Calender",
      hospitalDashboardLink: "/hospital/calender",
      specialistDashboardLink: "/specialist/calender",
    },
    {
      key: 7,
      icon: questionIcon,
      name: "Help/Support",
      hospitalDashboardLink: "/hospital/helpsupport",
      specialistDashboardLink: "/specialist/helpsupport",
    },
    {
      key: 8,
      icon: tourismIcon,
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
            to={isHospital ? nav.hospitalDashboardLink : nav.specialistDashboardLink}
            className={({ isActive }) => isActive ? 'dashboard-nav-link active' : 'dashboard-nav-link'}
          >
            <img src={nav.icon} alt={nav.name} />
            <span>{nav.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
