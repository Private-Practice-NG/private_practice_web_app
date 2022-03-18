import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/styles/css/registration-section_main.css";
// import patientsIcon from '../../../assets/images/icons/patient-icon.png';
import specialistIcon from "../../../assets/images/icons/specialist-icon.png";
import RegistrationSectionParentWrapper from "../components/RegistrationSectionParentWrapper";

function VerifyMobileNumber() {
  return (
    <RegistrationSectionParentWrapper backlink="/verify-specialist-email">
      <section className="registration-default " id="enrolment-specific">
        <div className="content-wrapper">
          <h5 className="open-sans text-center">Verify Your Account</h5>
          <div
            className="user-type-icon-wrapper d-flex flex-row"
            style={{ justifyContent: "space-around" }}>
            <div className="account-type-icon-background">
              <img src={specialistIcon} alt="specialist-icon" />
            </div>
          </div>
          <div className="section-text">
            <p className="mb-3" style={{ fontWeight: "bold" }}>
              Email Address Verified!!!
            </p>
            <p>
              Now, let's get mobile number. Enter your phone number to verify
              your mobile line and activate your account
            </p>
          </div>
          <label htmlFor="mobileNumber">Phone Number</label>
          <input id="mobileNumber" type="phone" className="form-control mb-3" />
          <div className="btn-wrapper mb-4">
            <Link
              to="/mobile-number-verification_specialist"
              className="btn custom-button">
              Verify Phone Number
            </Link>
          </div>
        </div>
      </section>
    </RegistrationSectionParentWrapper>
  );
}

export default VerifyMobileNumber;
