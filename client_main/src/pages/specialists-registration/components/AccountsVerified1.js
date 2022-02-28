import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../assets/images/icons/specialist-icon.png';

function AccountsVerified1() {
  return (
    <section className="route-pages-wrapper">
      <section className="icon-case">
        <div className="back-icon-wrapper">
          <Link to="/start-signup">
            <i className="bi bi-arrow-left back-arrow"></i>
          </Link>
        </div>
      </section>
      <section className="accounts-verified-1-content">
        <div className="content-wrapper">
          <h5 className="open-sans">Account Verified</h5>
          <div className="account-type-icon-background">
            <img src={Icon} alt="specialist-icon" />
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
            <Link
              to="/start-specialist-registration"
              className="btn custom-button"
            >
              Practicing profile
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AccountsVerified1;
