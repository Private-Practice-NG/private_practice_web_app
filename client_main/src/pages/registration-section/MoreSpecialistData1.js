import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/css/registration-section_main.css';
import Icon from '../../assets/images/icons/specialist-icon.png';
import RegistrationSectionFooter from './components/RegistrationSectionFooter';

function MoreSpecialistData1() {
  return (
    <div className="main-background">
      <section className="page-content-wrapper">
        <section className="icon-case">
          <Link to="/specialist-account-verified">
            <div className="back-icon-wrapper">
              <i className="bi bi-arrow-left back-arrow"></i>
            </div>
          </Link>
        </section>
        <section
          className="registration-default text-center"
          id="basic-data-1-specific"
        >
          <div className="content-wrapper">
            <h5 className="open-sans ">Personal Data</h5>
            <p>Alright, Lets's identify you with an image</p>
            <div className="account-type-icon-background">
              <img src={Icon} alt="signup-icon" />
            </div>
            <div className="btn-wrapper" style={{ marginTop: '20px' }}>
              <Link to="/more-specialist-data-1" className="btn custom-button">
                Select Profile Image
              </Link>
            </div>
            <div className="section-text">
              <p className="mb-3" style={{ fontWeight: 'bold' }}>
                Your profile image should:
              </p>
              <ul>
                <li>Be a close-up image of your face</li>
                <li>Show your face clearly - no shades</li>
                <li>Be clear and crisp</li>
                <li>Have a neutral background</li>
              </ul>
            </div>
            <div className="btn-wrapper">
              <Link
                to="/more-specialist-data-2"
                className="btn custom-button"
                style={{ width: '100%' }}
              >
                Save and Continue
              </Link>
            </div>
          </div>
        </section>
      </section>
      <RegistrationSectionFooter />
    </div>
  );
}

export default MoreSpecialistData1;
