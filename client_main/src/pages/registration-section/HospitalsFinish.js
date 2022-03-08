import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/css/registration-section_main.css';
import Icon from '../../assets/images/icons/hospital-icon.png';
import RegistrationSectionFooter from './components/RegistrationSectionFooter';

function HospitalFinish() {
  return (
    <div className="main-background">
      <section className="page-content-wrapper">
        <section className="icon-case">
          <Link to="/hospitals-enrolment-page">
            <div className="back-icon-wrapper">
              <i className="bi bi-arrow-left back-arrow"></i>
            </div>
          </Link>
        </section>
        <section className="registration-default">
          <div className="content-wrapper" id="hospitals-finish-specific">
            <h3 className="open-sans text-center">Request Submitted</h3>
            <div className="account-type-icon-background">
              <img src={Icon} alt="specialist-icon" />
            </div>
            <div className="section-text">
              <p className="mb-3">Thanks for your interest in our platform </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
                ad deserunt obcaecati maiores quas, possimus quo ipsum ab eius
                voluptatem dolor nisi, reiciendis error nulla dignissimos
                adipisci enim atque eum?
              </p>
            </div>
            <div className="btn-wrapper">
              <Link to="/" className="btn custom-button">
                Return to Homepage
              </Link>
            </div>
          </div>
        </section>
      </section>
      <RegistrationSectionFooter />
    </div>
  );
}

export default HospitalFinish;
