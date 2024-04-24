// import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/css/registration-section_main.css';
import RegistrationSectionParentWrapper from '../components/RegistrationSectionParentWrapper';

function MoreSpecialistData3() {
  return (
    <RegistrationSectionParentWrapper backlink='/more-specialist-data-2'>
      <section className='registration-default '>
        <div className='content-wrapper'>
          <h5 className='open-sans text-center'>Medical Information</h5>
          <p className='text-center'>
            Add some medical informations about yourself. We'd like to collect
            them in case of an emergency.
          </p>
          <div className='form-wrapper' id='form-grouping-specific'>
            <label htmlFor='allergies'>Allergies*</label>
            <input type='text' id='allergies' className='form-control mb-4' />
            <div className='form-grouping'>
              <div className='form-input-group'>
                <label htmlFor='blood-group'>Blood Group*</label>
                <select type='text' id='blood-group' className='form-control'>
                  <option value='M'>
                    M (Precious Chikezie's blood group (ha-ha-ha))
                  </option>
                  <option value='Q'>Q (Abdul's blood group (ha-ha-ha))</option>
                  <option value='O'>
                    O (I know am dead if somebody sees this (ha-ha-ha))
                  </option>
                  <option value='AA'>AA</option>
                </select>
              </div>
              <div className='form-input-group'>
                <label htmlFor='genotype'>Genotype*</label>
                <select type='text' id='genotype' className='form-control'>
                  <option value='A+'>Z+</option>
                  <option value='O+'>M-</option>
                </select>
              </div>
            </div>
          </div>

          <div className='btn-wrapper mb-5'>
            <Link
              to='/more-specialist-data-4'
              className='btn custom-button'
              style={{ width: '100%' }}
            >
              Save and Continue - Next
            </Link>
          </div>
        </div>
      </section>
    </RegistrationSectionParentWrapper>
  );
}

export default MoreSpecialistData3;
