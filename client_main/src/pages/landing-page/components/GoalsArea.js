import React from 'react';
import '../../../assets/styles/css/landing-page.css';

const GoalsArea = () => {
  return (
    <section className="goals-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="downloads-area">
              <div className="app-download-links-case">
                <a href="google.com">
                  <img
                    src="./assets/images/IOS-app-download.png"
                    alt="IOS-app-download-link"
                  />
                </a>
                <a href="google.com">
                  <img
                    src="./assets/images/android-app-download.png"
                    alt="android-app-download-link"
                  />
                </a>
              </div>
              <div className="our-capacity-container">
                <div className="our-capacity-child">
                  <div className="blurry-overlay">
                    <div className="capacity-figure-container">
                      <img
                        src="./assets/images/Polygon.png"
                        alt="specialist-number-icon"
                      />
                      <div className="specialist-number open-sans">183</div>
                    </div>
                    <div className="capacity-description">
                      elit. Error perferendis consectetur cupiditate, sequi eum
                      culpa molestias possimus fugit enim aperiam itaque
                      blanditiis labore nam odit? Culpa tenetur harum rerum
                      esse.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="goals-container">
              <h1 className="goals-header montserrat">OUR GOALS</h1>
              <div className="goals-list">
                <div className="goals-item">
                  <div className="goals-item-list-number-bg">1</div>
                  <span className="goals-definition">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias facere sequi est aliquid rerum. Quasi, rem iste hic
                    nobis odio dolor eaque omnis!
                  </span>
                </div>
                <div className="goals-item">
                  <div className="goals-item-list-number-bg">2</div>
                  <span className="goals-definition">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias facere sequi est aliquid rerum. Quasi, rem iste hic
                    nobis odio dolor eaque omnis!
                  </span>
                </div>
                <div className="goals-item">
                  <div className="goals-item-list-number-bg">3</div>
                  <span className="goals-definition">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias facere sequi est aliquid rerum. Quasi, rem iste hic
                    nobis odio dolor eaque omnis!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsArea;
