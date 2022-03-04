import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/css/registration-section_main.css';
import Icon from '../../assets/images/icons/hospital-icon.png';
import RegistrationSectionFooter from './components/RegistrationSectionFooter';

function HospitalsEnrolmentRequest() {
  return (
    <div className="main-background" id="enrolment-specific">
      <section className="page-content-wrapper">
        <section className="icon-case">
          <Link to="/start-signup">
            <div className="back-icon-wrapper">
              <i className="bi bi-arrow-left back-arrow"></i>
            </div>
          </Link>
        </section>
        <section className="registration-default">
          <div className="content-wrapper">
            <h5 className="open-sans text-center">
              Request Hospital Enrolment
            </h5>
            <div className="account-type-icon-background">
              <img src={Icon} alt="specialist-icon" />
            </div>
            <div className="section-text">
              <p className="open-sans" style={{ fontSize: '14px' }}>
                <strong>
                  Fill out the form to enrol your hospital. <br /> We will
                  contact you withing 48hours for verification.
                </strong>
              </p>
            </div>
            <div className="form-wrapper">
              <form action="#">
                <label htmlFor="hospitalName">Hospital Name</label>
                <input
                  type="text"
                  id="hospitalName"
                  className="form-control"
                ></input>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control"></input>

                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="contact"
                  id="contactNumber"
                  className="form-control"
                ></input>
              </form>
            </div>
            <div className="agreement-section">
              <input type="checkbox" className="checkbox"></input>
              <div className="agreement-text">
                Yes, I understand and agree to all private practice
                <Link to="/" className="open-sans bold-link">
                  Terms of Services
                </Link>
                including the{' '}
                <Link to="/" className="open-sans bold-link">
                  User Agreement
                </Link>{' '}
                and{' '}
                <Link to="/" className="open-sans bold-link">
                  Privacy Policy
                </Link>
                .
              </div>
            </div>
            <div className="btn-wrapper">
              <Link to="/basic-data-1" className="btn custom-button">
                Request Enrolment - Next
              </Link>
            </div>
            <div className="login-prompt">
              Already have and account?{' '}
              <Link to="/" className="open-sans bold-link">
                Login
              </Link>
            </div>
          </div>
        </section>
      </section>
      <RegistrationSectionFooter />
    </div>
  );
}

export default HospitalsEnrolmentRequest;