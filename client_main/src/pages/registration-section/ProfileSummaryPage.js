import React from 'react';
import '../../assets/styles/css/registration-section_profile-summary.css';
import Map from '../../assets/images/map.svg';
import Radar from '../../assets/images/radar.svg';
import certificateIcon from '../../assets/images/icons/file-upload.svg';
import userAvatar from '../../assets/images/avatar/avatar-2.png';
import { Link } from 'react-router-dom';

function ProfileSummaryPage() {
  return (
    <>
      <section className="profile-summary-background "></section>
      <main className="main-content-wrapper_overlay">
        <section className="main-profile-section-background ">
          <section className="user-intro text-center">
            <div className="user-avatar-case">
              <img src={userAvatar} alt="User-avatar" />
            </div>
            <div className="user-name mt-2 montserrat">Precious Ochagana</div>
            <span className="user-specialization">Cardiologist</span>
          </section>
          <section className="profile-array-wrapper d-flex flex-row">
            <section className="profile-array d-flex flex-column">
              <section className="profile-array-item">
                <div className="section-header">Personal Information:</div>
                <div className="item-group">
                  <div className="label">Phone :</div>
                  <span>+234 87 2353 2762</span>
                </div>
                <div className="item-group">
                  <div className="label">Sex :</div>
                  <span>Male</span>
                </div>
                <div className="item-group">
                  <div className="label">Phone :</div>
                  <span>+234 87 2353 2762</span>
                </div>
              </section>
              <section className="profile-array-item">
                <div className="section-header">A little about me:</div>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur amet aliquam ipsam molestias. Ratione voluptates t
                  amet consectetur adipisicing elit. Temporibus, saepe!
                </p>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur amet aliquam ipsam molestias. Ratione voluptates t
                  amet consectetur adipisicing elit. Temporibus, saepe!
                </p>
              </section>
              <section className="profile-array-item">
                <div className="section-header">Location:</div>
                <div className="map-case mt-3">
                  <img src={Map} alt="user-map-location" />
                  <div className="location-details d-flex flex-row">
                    <i className="location-icon-wrapper">
                      <img src={Radar} alt="Location-icon" />
                    </i>
                    <span>
                      Loremu street, Calabar close, Wuse Zone 12 Abuja, Nigeria
                    </span>
                  </div>
                </div>
              </section>
              <section className="profile-array-item ">
                <div className="section-header">I am affiliated with:</div>
                <div className="affiliation-item mt-3">
                  Maitama General Hospital
                </div>
                <hr />
                <div className="affiliation-item">
                  John Mulr General Hospital
                </div>
                <hr />
                <div className="affiliation-item">Golden Gate Counselling</div>
              </section>
            </section>
            <section className="profile-array d-flex flex-column">
              <section className="profile-array-item">
                <div className="section-header">specialization:</div>
                <span>Human Neurology</span>
              </section>
              <section className="profile-array-item">
                <div className="section-header">Been in practice for:</div>
                <p className="section-text">15 years</p>
              </section>
              <section
                className="profile-array-item"
                id="certification-specific"
              >
                {/* the profile array item is to be made into a component, 
              exported from the basic-data-4 page, and used here */}

                <div className="certificates-array">
                  <div
                    className="certificates-array-item"
                    style={{ border: '3px solid #22c322' }}
                  >
                    <div className="upload-completed-icon">.</div>

                    <div className="certificate-icon-wrapper">
                      <img
                        src={certificateIcon}
                        alt="upload-icon"
                        className="certificate-icon"
                      />
                    </div>
                    <div className="upload-completed-icon">.</div>
                    <div className="certificate-name">
                      Senior Secondary School Certificate
                    </div>
                  </div>
                  <div
                    className="certificates-array-item"
                    style={{ border: '3px solid #22c322' }}
                  >
                    <div className="certificate-icon-wrapper">
                      <img
                        src={certificateIcon}
                        alt="upload-icon"
                        className="certificate-icon"
                      />
                    </div>
                    <div className="upload-completed-icon">.</div>
                    <div className="certificate-name">NYSC certificate</div>
                  </div>
                  <div
                    className="certificates-array-item"
                    style={{ border: '3px solid #22c322' }}
                  >
                    <div className="certificate-icon-wrapper">
                      <img
                        src={certificateIcon}
                        alt="upload-icon"
                        className="certificate-icon"
                      />
                    </div>
                    <div className="upload-completed-icon">.</div>
                    <div className="certificate-name">Practicing License</div>
                  </div>
                  <div
                    className="certificates-array-item"
                    style={{ border: '3px solid #22c322' }}
                  >
                    <div className="certificate-icon-wrapper">
                      <img
                        src={certificateIcon}
                        alt="upload-icon"
                        className="certificate-icon"
                      />
                    </div>
                    <div className="upload-completed-icon">.</div>
                    <div className="certificate-name">
                      Specialization Certificate
                    </div>
                  </div>
                </div>
              </section>
              <section className="profile-array-item">
                <div className="section-header">Medical Information:</div>
                <div className="item-group">
                  <div className="label">Allegies :</div>
                  <span>None</span>
                </div>
                <div className="item-group">
                  <div className="label">Blood Group :</div>
                  <span>A+</span>
                </div>
                <div className="item-group">
                  <div className="label">Genotype :</div>
                  <span>AA</span>
                </div>
              </section>
            </section>
          </section>
          <section className="btn-wrapper">
            <Link to="/profile-setup-complete" className="btn custom-button">
              Submit Profile
            </Link>
          </section>
        </section>
      </main>
    </>
  );
}

export default ProfileSummaryPage;
