import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/css/registration-section_main.css';
import patientsIcon from '../../assets/images/icons/patient-icon.png';
import specialistIcon from '../../assets/images/icons/specialist-icon.png';
import RegistrationSectionFooter from './components/RegistrationSectionFooter';

function BasicData6() {
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
              <p className="mb-3">
                Verify your email and phone number to activate your account.
              </p>
              <p>
                We just sent an email to <br />
                <strong>youremail@gmail.com</strong>
              </p>
            </div>
            <div className="btn-wrapper">
              <Link to="/basic-data-7" className="btn custom-button">
                Resend Verification Email
              </Link>
            </div>
          </div>
        </section>
      </section>
      <RegistrationSectionFooter />
    </div>
  );
}

export default BasicData6;