import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/css/registration-section_main.css';
import patientsIcon from '../../assets/images/icons/patient-icon.png';
// import specialistIcon from '../../assets/images/icons/specialist-icon.png';
import RegistrationSectionParentWrapper from './components/RegistrationSectionParentWrapper';

function MobileNumberVerificationUser() {
  return (
    <RegistrationSectionParentWrapper backlink="/verify-user-mobile-number">
      <section className="registration-default " id="enrolment-specific">
        <div className="content-wrapper">
          <h5 className="open-sans text-center">Verify Your Account</h5>
          <div
            className="user-type-icon-wrapper d-flex flex-row"
            style={{ justifyContent: 'space-around' }}
          >
            <div className="account-type-icon-background">
              <img src={patientsIcon} alt="patients-icon" />
            </div>
          </div>
          <div className="section-text">
            <p>
              A verification code has been sent to <br />
              <strong>081 2234 2234</strong>, Enter it below.
            </p>
          </div>
          <input
            placeholder="Enter Verification Code"
            className="form-control mb-3"
          />
          <div className="btn-wrapper mb-4">
            <Link to="/user-account-verified" className="btn custom-button">
              Verify
            </Link>
          </div>
        </div>
      </section>
    </RegistrationSectionParentWrapper>
  );
}

export default MobileNumberVerificationUser;
