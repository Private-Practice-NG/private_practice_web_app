import React from 'react';
import '../../assets/styles/css/registration-section_profile-summary.css';
import userAvatar from '../../assets/images/avatar/avatar-2.png';
import { Link } from 'react-router-dom';

function ProfileSetupComplete() {
  return (
    <>
      <section className="profile-summary-background "></section>
      <main className="main-content-wrapper_overlay">
        <section className="main-profile-section-background ">
          <section className="user-intro text-center">
            <div className="user-avatar-case">
              <img src={userAvatar} alt="User-avatar" />
            </div>
            <div className="user-name mt-2 montserrat">Precious Ochagana</div>
            <span className="user-specialization">Cardiologist</span>
          </section>
          <section className="profile-array-wrapper">
            <div className="profile-setup-complete_text-wrapper text-center">
              <p>GREAT WORK</p>
              <p>
                Your practicing profile has been setup and sent for
                verification. <br /> Sit back, and relax while we work on
                getting you verified within the next 48 hours.
              </p>
              <p>We will contact you once the process done.</p>
            </div>
          </section>
          <section className="btn-wrapper">
            <Link to="/specialist-dashboard" className="btn custom-button">
              Go To Dashboard
            </Link>
          </section>
        </section>
      </main>
    </>
  );
}

export default ProfileSetupComplete;
