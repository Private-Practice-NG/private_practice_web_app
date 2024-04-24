// import React from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../../styles/css/registration-section_main.css';
// import patientsIcon from '../../../assets/images/icons/patient-icon.png';
import specialistIcon from '../../../assets/images/icons/specialist-icon.png';
import spinner from './../../../assets/images/spinner.gif';
import RegistrationSectionParentWrapper from '../components/RegistrationSectionParentWrapper';

function EmailVerification() {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const { userType, userId, token } = useParams();
  const baseUrl = `https://private-practice.fly.dev`;
  useEffect(() => {
    fetch(`${baseUrl}/api/${userType}/${userId}/verify/${token}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [baseUrl, userType, userId, token]);
  return (
    <RegistrationSectionParentWrapper backlink='/'>
      {loading ? (
        <section className='registration-default ' id='enrolment-specific'>
          <div className='content-wrapper'>
            <div className='section-text'>
              <img src={spinner} alt='' />
            </div>
          </div>
        </section>
      ) : (
        <section className='registration-default ' id='enrolment-specific'>
          {response.success === true ? (
            <div className='content-wrapper'>
              <h5 className='open-sans text-center'>
                Email Verification Successfull!!!
              </h5>
              <div
                className='user-type-icon-wrapper d-flex flex-row'
                style={{ justifyContent: 'space-around' }}
              >
                <div className='account-type-icon-background'>
                  <img src={specialistIcon} alt='specialist-icon' />
                </div>
              </div>
              <div className='section-text'>
                <p className='mb-3' style={{ fontWeight: 'bold' }}>
                  Email Verified
                </p>
                <p>
                  Email address has been verified successfully Login into your
                  account and complete your registration
                </p>
              </div>
              <div className='btn-wrapper mb-4'>
                <Link to='/' className='btn custom-button'>
                  Home
                </Link>
              </div>
            </div>
          ) : response.success === false &&
            response.message === 'Session Expired 400 error' ? (
            <div className='content-wrapper'>
              <h5 className='open-sans text-center'>
                Email Verification Session Expired!!!
              </h5>
              <div
                className='user-type-icon-wrapper d-flex flex-row'
                style={{ justifyContent: 'space-around' }}
              >
                <div className='account-type-icon-background'>
                  <img src={specialistIcon} alt='specialist-icon' />
                </div>
              </div>
              <div className='section-text'>
                <p className='mb-3' style={{ fontWeight: 'bold' }}>
                  Session Expired!!!
                </p>
                <p>
                  There was an Error While Verifying your email address with
                  this link. The session for this link as expired log in and
                  resend Email verification link.
                </p>
              </div>
              <div className='btn-wrapper mb-4'>
                <Link to='/' className='btn custom-button'>
                  Home
                </Link>
              </div>
            </div>
          ) : (
            <div className='content-wrapper'>
              <h5 className='open-sans text-center'>
                Email Verification Error!!!
              </h5>
              <div
                className='user-type-icon-wrapper d-flex flex-row'
                style={{ justifyContent: 'space-around' }}
              >
                <div className='account-type-icon-background'>
                  <img src={specialistIcon} alt='specialist-icon' />
                </div>
              </div>
              <div className='section-text'>
                <p className='mb-3' style={{ fontWeight: 'bold' }}>
                  Email not verified
                </p>
                <p>
                  There was an Error While Verifying your email address with
                  this link. if email not yet verified log in and resend Email
                  verification link.
                </p>
              </div>
              <div className='btn-wrapper mb-4'>
                <Link to='/' className='btn custom-button'>
                  Home
                </Link>
              </div>
            </div>
          )}
        </section>
      )}
    </RegistrationSectionParentWrapper>
  );
}

export default EmailVerification;
