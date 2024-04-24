import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/css/registration-section_main.css';
import patientsIcon from '../../../assets/images/icons/patient-icon.png';
import RegistrationSectionParentWrapper from '../components/RegistrationSectionParentWrapper';

function VerifyUserEmail() {
  return (
    <RegistrationSectionParentWrapper backlink='/general-user-data-1'>
      <section className='registration-default ' id='enrolment-specific'>
        <div className='content-wrapper'>
          <h5 className='open-sans text-center'>Verify Your Account</h5>
          <div
            className='user-type-icon-wrapper d-flex flex-row'
            style={{ justifyContent: 'space-around' }}
          >
            <div className='account-type-icon-background'>
              <img src={patientsIcon} alt='patients-icon' />
            </div>
          </div>
          <div className='section-text'>
            <p className='mb-3'>
              Verify your email and phone number to activate your account.
            </p>
            <p>
              We just sent an email to <br />
              <strong>youremail@gmail.com</strong>
            </p>
          </div>
          <div className='btn-wrapper'>
            <Link to='/email-verification_user' className='btn custom-button'>
              Resend Verification Email
            </Link>
          </div>
        </div>
      </section>
    </RegistrationSectionParentWrapper>
  );
}

export default VerifyUserEmail;
