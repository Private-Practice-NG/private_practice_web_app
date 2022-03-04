import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/css/registration-section_main.css';
import Icon from '../../assets/images/icons/specialist-icon.png';
import RegistrationSectionFooter from './components/RegistrationSectionFooter';

function AccountsVerified1() {
  return (
    <div className="main-background">
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
            <h5 className="open-sans text-center">Account Verified</h5>
            <div className="account-type-icon-background">
              <img src={Icon} alt="user-icon" />
            </div>
            <div className="section-text">
              <p className="mb-3">
                Verified! Your account has been fully created and verified.
              </p>
              <div className="intermediate-text open-sans">What's next?</div>
              <p>
                Now your account has been created, it's time to setup your
                practicing profile to enable you to search for jobs and to be
                displayed in the market place for hiring. <br />
                You can proceed to create your practice profile by clicking the
                button below or you can return to dashboard.
              </p>
            </div>
            <div className="btn-wrapper">
              <Link
                to="/start-specialist-registration"
                className="btn custom-button"
              >
                Dashboard
              </Link>
              <Link to="/accounts-verified-2" className="btn custom-button">
                Practicing profile
              </Link>
            </div>
          </div>
        </section>
      </section>
      <RegistrationSectionFooter />
    </div>
  );
}

export default AccountsVerified1;
