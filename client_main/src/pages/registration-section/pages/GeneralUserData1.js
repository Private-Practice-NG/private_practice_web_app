import React from "react";
import { Link } from "react-router-dom";
import "assets/styles/css/registration-section_main.css";
import patientsIcon from "assets/images/icons/patient-icon.png";
import RegistrationSectionParentWrapper from "./components/RegistrationSectionParentWrapper";

function GeneralUserData1() {
  return (
    <RegistrationSectionParentWrapper backlink="/start-signup">
      <section className="registration-default " id="enrolment-specific">
        <div className="content-wrapper">
          <h5 className="open-sans text-center">Setup A Free User Account</h5>
          <div
            className="user-type-icon-wrapper d-flex flex-row"
            style={{ justifyContent: "space-around" }}>
            <div className="account-type-icon-background">
              <img src={patientsIcon} alt="patients-icon" />
            </div>
          </div>
          <div className="form-wrapper mt-4" id="form-grouping-specific">
            <form action="#">
              <div className="form-grouping">
                <div className="form-input-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"></input>
                </div>
                <div className="form-input-group">
                  <label htmlFor="middleName">Middle Name</label>
                  <input
                    type="text"
                    id="middleName"
                    className="form-control"></input>
                </div>
              </div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" className="form-control"></input>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control"></input>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"></input>
              <label htmlFor="repeatPassword">Repeat Password</label>
              <input
                type="password"
                id="repeatPassword"
                className="form-control"></input>
            </form>
          </div>
          <div className="agreement-section">
            <input type="checkbox" className="checkbox"></input>
            <div className="agreement-text">
              Yes, I understand and agree to all private practice
              <Link to="/" className="open-sans bold-link">
                Terms of Services{" "}
              </Link>
              including the{" "}
              <Link to="/" className="open-sans bold-link">
                User Agreement
              </Link>{" "}
              and{" "}
              <Link to="/" className="open-sans bold-link">
                Privacy Policy
              </Link>
              .
            </div>
          </div>
          <div className="btn-wrapper">
            <Link to="/verify-user-email" className="btn custom-button">
              Create My Account
            </Link>
          </div>
          <div className="login-prompt">
            Already have and account?{" "}
            <Link to="/" className="open-sans bold-link">
              Login
            </Link>
          </div>
        </div>
      </section>
    </RegistrationSectionParentWrapper>
  );
}

export default GeneralUserData1;
