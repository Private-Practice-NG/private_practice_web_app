// import React from 'react';
import { Link } from 'react-router-dom';

function SpecialistsRegistrationFooter() {
  return (
    <footer className='registration-section-footer'>
      <div className='flow-left'>
        <Link className='link' to='/privacy-policy-page'>
          Privacy
        </Link>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link' to='/help-page'>
          Help
        </Link>
      </div>
      <div className='flow-right'>
        <div>
          <p>@2020 PrivatePractice INC.</p>
        </div>
      </div>
    </footer>
  );
}

export default SpecialistsRegistrationFooter;
