import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/css/registration-section_main.css';
import Icon from '../../assets/images/icons/patient-icon.png';
import RegistrationSectionFooter from './components/RegistrationSectionFooter';

function AccountsVerified2() {
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
        <section className="registration-default">
          <div className="content-wrapper">
            <h5 className="open-sans text-center">Account Verified</h5>
            <div className="account-type-icon-background">
              <img src={Icon} alt="specialist-icon" />
            </div>
            <div className="section-text">
              <p className="mb-3">
                Verified! Your account has been fully created and verified.
              </p>
              <div className="intermediate-text open-sans">What's next?</div>
              <p>
                As a basic user, you can use the platform for basic things such
                as locating a Health Facility, that offers a service you need
                such as vertinary clinic, an optical clinic etc. And many more
                intersting things,feel free to explore the platform.
              </p>
            </div>
            <div className="btn-wrapper">
              <Link
                to="/start-specialist-registration"
                className="btn custom-button"
              >
                Dashboard
              </Link>
              <Link
                to="/hospital-registration-done"
                className="btn custom-button"
              >
                Find Hospital
              </Link>
            </div>
          </div>
        </section>
      </section>
      <RegistrationSectionFooter />
    </div>
  );
}

export default AccountsVerified2;
