import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import '../assets/styles/css/components/top-navbar.css';
import brandLogo from '../assets/images/logo.png';

function TopNavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light top-nav">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={brandLogo} alt="private practice logo" />
            <span>Private Practice</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-page" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-page" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="btn-wrapper">
              <Link to="/start-login" className="btn btn-x" type="button">
                Login
              </Link>
              <Link to="/start-signup" className="btn btn-xx" type="button">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default TopNavbar;
