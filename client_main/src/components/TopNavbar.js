import React from 'react';
import '../assets/styles/css/components/top-navbar.css';
import brandLogo from '../assets/images/logo.png';

function TopNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light top-nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://google.com">
          <img src={brandLogo} alt="private practice logo" />
          <span>Private Practice</span>
        </a>
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
              <a className="nav-link" href="go.com">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="go.com">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="go.com">
                contact
              </a>
            </li>
          </ul>
          <div className="btn-wrapper">
            <a href="go.com" className="btn btn-x" type="submit">
              Login
            </a>
            <a href="go.com" className="btn btn-xx" type="submit">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
