import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/css/registration-section_main.css';
import patientsIcon from '../../assets/images/icons/patient-icon.png';
import specialistIcon from '../../assets/images/icons/specialist-icon.png';
import RegistrationSectionFooter from './components/RegistrationSectionFooter';

function BasicData7() {
  return (
    <div className="main-background">
      <section className="page-content-wrapper">
        <section className="icon-case">
          <Link to="/accounts-verified-1">
            <div className="back-icon-wrapper">
              <i className="bi bi-arrow-left back-arrow"></i>
            </div>
          </Link>
        </section>
        <section className="registration-default " id="enrolment-specific">
          <div className="content-wrapper">
            <h5 className="open-sans text-center">Verify Your Account</h5>
            <div
              className="user-type-icon-wrapper d-flex flex-row"
              style={{ justifyContent: 'space-around' }}
            >
              <div className="account-type-icon-background">
                <img src={specialistIcon} alt="specialist-icon" />
              </div>
              <div className="account-type-icon-background">
                <img src={patientsIcon} alt="patients-icon" />
              </div>
            </div>
            <div className="section-text">
              <p className="mb-3">Email Address Verified!!!</p>
              <p>
                Now, let's get mobile number. Enter your phone number to verify
                your mobile line and activate your account
              </p>
            </div>
            <label htmlFor="mobileNumber">Phone Number</label>
            <input
              id="mobileNumber"
              type="phone"
              className="form-control mb-3"
            />
            <div className="btn-wrapper mb-4">
              <Link to="/basic-data-8" className="btn custom-button">
                Verify Phone Number
              </Link>
            </div>
          </div>
        </section>
      </section>
      <RegistrationSectionFooter />
    </div>
  );
}

export default BasicData7;
