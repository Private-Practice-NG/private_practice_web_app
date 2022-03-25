import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/styles/css/registration-section_main.css";
import Icon from "../../../assets/images/icons/file-upload.svg";
import RegistrationSectionParentWrapper from "../components/RegistrationSectionParentWrapper";

function MoreSpecialistData4() {
  return (
    <RegistrationSectionParentWrapper backlink="/more-specialist-data-3">
      <section className="registration-default" id="certification-specific">
        <div className="content-wrapper">
          <h5 className="open-sans ">Certifications</h5>
          <p className="text-center">
            Now, lets upload some documents to verify your skills, education,
            and certifications.
          </p>
          <div className="certificates-array">
            {/* restructure  certificates-array-item to a unique component and pass 
              it children as props when upload logic is clearer */}

            <div className="certificates-array-item">
              <div className="certificate-icon-wrapper">
                <img
                  src={Icon}
                  alt="upload-icon"
                  className="certificate-icon"
                />
              </div>
              <div className="certificate-name">
                Senior Secondary School Certificate
              </div>
              <div className="btn-wrapper">
                <Link to="/basic-data-2" className="btn custom-button">
                  Upload Document
                </Link>
              </div>
            </div>
            <div className="certificates-array-item">
              <div className="certificate-icon-wrapper">
                <img
                  src={Icon}
                  alt="upload-icon"
                  className="certificate-icon"
                />
              </div>
              <div className="certificate-name">NYSC Certificate</div>
              <div className="btn-wrapper">
                <Link to="/basic-data-2" className="btn custom-button">
                  Upload Document
                </Link>
              </div>
            </div>
            <div className="certificates-array-item">
              <div className="certificate-icon-wrapper">
                <img
                  src={Icon}
                  alt="upload-icon"
                  className="certificate-icon"
                />
              </div>
              <div className="certificate-name">Practicing License</div>
              <div className="btn-wrapper">
                <Link to="/basic-data-2" className="btn custom-button">
                  Upload Document
                </Link>
              </div>
            </div>
            <div
              className="certificates-array-item"
              style={{ border: "3px solid #22c322" }}>
              <div className="certificate-icon-wrapper">
                <img
                  src={Icon}
                  alt="upload-icon"
                  className="certificate-icon"
                />
              </div>
              <div className="upload-completed-icon">.</div>
              <div className="certificate-name">Specialization Certificate</div>
              <div className="btn-wrapper">
                <Link to="/basic-data-2" className="btn custom-button">
                  Upload Document
                </Link>
              </div>
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="years-in-practice">Years in Practice</label>
            <select
              type="text"
              id="years-in-practice"
              className="form-control mt-2">
              <option value="1 Year">1 Year</option>
              <option value="2 Years">2 Years </option>
              <option value="3 Years">3 Years </option>
              <option value="4 Years">4 Years </option>
              <option value="5 Years">5 Years </option>
              <option value="More than 5 Years">More than 5 Years </option>
            </select>
          </div>
          <div className="btn-wrapper mb-5">
            <Link
              to="/specialist-profile-summary"
              className="btn custom-button"
              style={{ width: "100%" }}>
              Save and Continue
            </Link>
          </div>
        </div>
      </section>
    </RegistrationSectionParentWrapper>
  );
}

export default MoreSpecialistData4;
