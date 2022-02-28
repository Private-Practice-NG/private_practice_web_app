import React from 'react';
import { Link } from 'react-router-dom';

export const SignupPage = () => {
  return (
    <div
      style={{ margin: '200px auto', fontSize: '25px', textAlign: 'center' }}
    >
      Welcome to the signup/usertype-registration page
      <Link to="/start-specialist-registration/accounts-verified-1">
        <p style={{ color: 'blue' }}>
          click here to go to specialist registration
        </p>
      </Link>
    </div>
  );
};
