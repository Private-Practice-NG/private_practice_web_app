import React from "react";
import { Link } from "react-router-dom";
import "assets/styles/css/landing-page.css";
import searchIcon from "assets/images/icons/seach-icon.png";
import locationIcon from "assets/images/icons/location-icon.png";
import handsOnIcon from "assets/images/icons/hands-on.png";
import payCardIcon from "assets/images/icons/card.png";

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section">
      <div className="container-fluid about-service">
        <div className="row">
          <div className="col-lg-3 process-title open-sans">HOW IT WORKS</div>
          <div className="service-process container-fluid col">
            <div className="row">
              <div className="col-lg-3 process-item">
                <div className="icon-wrapper">
                  <img src={searchIcon} alt="find-a-specialist" />
                </div>
                <h5 className="process-item-title">1. Find a specialist</h5>
                <div className="process-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  amet eligendi qui earum illo molestias?
                </div>
              </div>
              <div className="col-lg-3 process-item">
                <div className="icon-wrapper">
                  <img src={locationIcon} alt="meet-specialist" />
                </div>
                <h5 className="process-item-title">2. Meet your specialist</h5>
                <div className="process-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  amet eligendi qui earum illo molestias?
                </div>
              </div>
              <div className="col-lg-3 process-item">
                <div className="icon-wrapper">
                  <img src={handsOnIcon} alt="get-service" />
                </div>
                <h5 className="process-item-title">3. Recieve Service</h5>
                <div className="process-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  amet eligendi qui earum illo molestias?
                </div>
              </div>
              <div className="col-lg-3 process-item">
                <div className="icon-wrapper">
                  <img src={payCardIcon} alt="pay-for-service" />
                </div>
                <h5 className="process-item-title">4. Service Payment</h5>
                <div className="process-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  amet eligendi qui earum illo molestias?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid call-for-signup">
        <div className="call-item lg-1">
          <div className="text-area">
            <h2 className="call-item-title">Are you a health professional?</h2>
            <span className="follow-up-text">
              sign up today and start working as a freelance specialist
            </span>
          </div>
          <Link to="/start-signup" className="btn btn-aside">
            Sign up Now
          </Link>
        </div>
        <div className="call-item lg-2">
          <div className="text-area">
            <h2 className="call-item-title">
              Do you need more specialists in your hospital?
            </h2>
            <span className="follow-up-text">
              sign up now to get access to all the specialists you need
            </span>
          </div>
          <Link to="/start-signup" className="btn btn-aside">
            Sign up Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
