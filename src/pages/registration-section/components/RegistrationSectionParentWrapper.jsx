// import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationSectionFooter from './RegistrationSectionFooter';

function RegistrationSectionParentWrapper({ children, backlink }) {
  return (
    <div className='main-background'>
      <section className='page-content-wrapper'>
        <section className='icon-case'>
          <Link to={backlink}>
            <div className='back-icon-wrapper'>
              <i className='bi bi-arrow-left back-arrow'></i>
            </div>
          </Link>
        </section>

        {children}
      </section>
      <RegistrationSectionFooter />
    </div>
  );
}

export default RegistrationSectionParentWrapper;
