import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/styles/css/registration-section_main.css";
import Icon from "../../../assets/images/icons/hospital-icon.png";
import RegistrationSectionParentWrapper from "../components/RegistrationSectionParentWrapper";

function HospitalFinish() {
  return (
    <RegistrationSectionParentWrapper backlink="/start-signup">
      <section className="registration-default">
        <div className="content-wrapper" id="hospitals-finish-specific">
          <h3 className="open-sans text-center">Request Submitted</h3>
          <div className="account-type-icon-background">
            <img src={Icon} alt="specialist-icon" />
          </div>
          <div className="section-text">
            <p className="mb-3">Thanks for your interest in our platform </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
              ad deserunt obcaecati maiores quas, possimus quo ipsum ab eius
              voluptatem dolor nisi, reiciendis error nulla dignissimos adipisci
              enim atque eum?
            </p>
          </div>
          <div className="btn-wrapper">
            <Link to="/" className="btn custom-button">
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </RegistrationSectionParentWrapper>
  );
}

export default HospitalFinish;
