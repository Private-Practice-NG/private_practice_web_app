import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/styles/css/email-page.css";
import Logo from "../../../assets/images/bg-logo.svg";

function MailVerificationPage1() {
  return (
    <section className="email-page-parent">
      <div className="main-page-content-wrapper">
        <div className="logo-wrapper d-flex flex-row">
          <img src={Logo} alt="private-practice logo" />
          <div className="brand-name open-sans ">
            Private <br /> Practive
          </div>
        </div>
        <div className="text-case">
          <strong>Verify your email to continue your registration.</strong>
          <p className="mt-4">
            Hi <strong>Precious Chikezie</strong>
          </p>
          <p>
            Thanks for your interest in joining Private Practice. To continue
            your registration, we need to verify your email address.
          </p>
          <div className="btn-wrapper">
            <Link
              to="/verify-user-mobile-number"
              className="btn custom-button mt-2 mb-4">
              Verify Email
            </Link>
          </div>
          <p>
            Thanks for your time, <br /> The private practice team
          </p>
        </div>
      </div>
      <div className="base-content text-center">
        <a href="https://dummylink.com">Contact Support</a>
        <span style={{ fontSize: "20px" }}>|</span>
        <a href="https://dummylink.com">Privacy Policy</a> <br />
        <span>16 Usuma Street, Maitama, Abuja, Nigeria </span> <br />
        <span>2020 Private Practice Inc </span>
      </div>
    </section>
  );
}

export default MailVerificationPage1;
