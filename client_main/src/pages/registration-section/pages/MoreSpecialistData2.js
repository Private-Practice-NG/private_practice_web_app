import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/css/registration-section_main.css';
import RegistrationSectionParentWrapper from './components/RegistrationSectionParentWrapper';

function MoreSpecialistData2() {
  return (
    <RegistrationSectionParentWrapper backlink="/more-specialist-data-1">
      <section className="registration-default" id="basic-data-2-specific">
        <div className="content-wrapper">
          <h5 className="open-sans text-center">More Personal Data</h5>
          <p className="text-center">
            Add some more important details about yourself
          </p>
          <div className="form-wrapper">
            <form action="#">
              <label htmlFor="bio">
                Bio* (A great bio help you stand out amongst other specialists.)
              </label>
              <textarea
                type="text"
                id="bio"
                className="form-control"
                rows="5"
              ></textarea>
              <div className="form-grouping">
                <div className="form-input-group">
                  <label htmlFor="sex">Sex*</label>
                  <select type="sex" id="sex" className="form-control">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="form-input-group">
                  <label htmlFor="date-of-birth">Date of Birth*</label>
                  <input
                    type="date"
                    id="date-of-birth"
                    className="form-control"
                  ></input>
                </div>
              </div>
            </form>
          </div>
          <div className="form-wrapper">
            <label htmlFor="address">Address*</label>
            <input type="text" id="address" className="form-control mb-4" />
            <div className="form-grouping">
              <div className="form-input-group">
                <label htmlFor="state">State*</label>
                <select type="text" id="state" className="form-control">
                  <option value="Abuja">Abuja</option>
                  <option value="Niger">Niger</option>
                </select>
              </div>
              <div className="form-input-group">
                <label htmlFor="city">City*</label>
                <select type="text" id="city" className="form-control">
                  <option value="Abuja">Abuja</option>
                  <option value="Niger">Niger</option>
                </select>
              </div>
            </div>
          </div>

          <div className="btn-wrapper mb-5">
            <Link
              to="/more-specialist-data-3"
              className="btn custom-button"
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

export default MoreSpecialistData2;
