import React from 'react';
import avatar1 from '../../../assets/images/avatar/avatar-1.png';
import avatar4 from '../../../assets/images/avatar/avatar-4.png';

function TopSpecialistSection() {
  return (
    <section className="container top-specialists-section">
      <h2 className="section-header montserrat">
        Meet our top rated specialists
      </h2>
      <div className="row specialist-array">
        <div className="col-lg-4 specialist-profile">
          <a href="go.com">
            <div className="card">
              <img
                src={avatar1}
                className="card-img-top"
                alt="specialist-avatar"
              />
              <div className="card-body">
                <h5 className="card-title">James Ade</h5>
                <span className="specialization"> Dentist </span>
                <span className="specialist-qualifications">Phd, Msc</span>
                <div className="stars-wrapper">
                  <div className="rating">.</div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 specialist-profile">
          <a href="go.com">
            <div className="card">
              <img
                src={avatar1}
                className="card-img-top"
                alt="specialist-avatar"
              />
              <div className="card-body">
                <h5 className="card-title">James Ade</h5>
                <span className="specialization"> Dentist </span>
                <span className="specialist-qualifications">Phd, Msc</span>
                <div className="stars-wrapper">
                  <div className="rating">.</div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 specialist-profile">
          <a href="go.com">
            <div className="card">
              <img
                src={avatar4}
                className="card-img-top"
                alt="specialist-avatar"
              />
              <div className="card-body">
                <h5 className="card-title">James Ade</h5>
                <span className="specialization"> Dentist </span>
                <span className="specialist-qualifications">Phd, Msc</span>
                <div className="stars-wrapper">
                  <div className="rating">.</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default TopSpecialistSection;
