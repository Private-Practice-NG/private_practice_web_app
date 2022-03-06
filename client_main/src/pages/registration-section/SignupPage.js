import React from 'react';
import '../../assets/styles/css/registration-section_main.css';
import RegistrationSectionFooter from './components/RegistrationSectionFooter';
import brandLogo from '../../assets/images/bg-logo.svg';
import patientsIcon from '../../assets/images/icons/patient-icon.png';
import specialistIcon from '../../assets/images/icons/specialist-icon.png';
import hospitalsIcon from '../../assets/images/icons/hospital-icon.png';
import { Link } from 'react-router-dom';

export const SignupPage = () => {
  return (
    <main
      className="main-background"
      style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
    >
      <div className="index-page_parent-wrapper">
        <section className="header">
          <Link to="/" className="d-flex flex-column">
            <div className="brand-wrapper d-flex flex-row">
              <img src={brandLogo} alt="private-practice-brand-logo" />
              <div className="brand-name d-flex open-sans">
                Private Practice
              </div>
            </div>
          </Link>
        </section>
        <h2 className="section-title text-center">Select A User Category</h2>
        <section className="usertype-wrapper d-flex flex-row">
          <div className="usertype-group">
            <Link to="/hospitals-enrolment-page" className="d-flex flex-column">
              <div className="usertype-icon-background">
                <img src={hospitalsIcon} alt="hospitals" />
              </div>
              <div className="usertype-name">Hospital</div>
            </Link>
          </div>
          <div className="usertype-group">
            <Link to="/general-user-data1" className="d-flex flex-column">
              <div className="usertype-icon-background">
                <img src={patientsIcon} alt="regular-user" />
              </div>
              <div className="usertype-name">User</div>
            </Link>
          </div>
          <div className="usertype-group">
            <Link to="/general-specialist-data1" className="d-flex flex-column">
              <div className="usertype-icon-background">
                <img src={specialistIcon} alt="specialists" />
              </div>
              <div className="usertype-name">Specialist</div>
            </Link>
          </div>
        </section>
      </div>
      <RegistrationSectionFooter />
    </main>
  );
};
