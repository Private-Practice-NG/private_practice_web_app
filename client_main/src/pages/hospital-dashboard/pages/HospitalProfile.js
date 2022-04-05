import HospitalDashboardContainer from "../components/HospitalDashboardContainer";
import hospitalLogo from "../../../assets/images/hospital-logo.jpg";
import avatar from "../../../assets/images/avatar/avatar-7.jpg";

const HospitalProfile = () => {
  return (
    <HospitalDashboardContainer>
      <section className="hospital-profile">
        {/* <i class="bi bi-chevron-left mx-5 mt-5"></i> */}
        <div className="custom_plain-wrapper mt-5 shadow">
          <section className="row gap-5 pb-4">
            {/* hospital name and image */}
            <div className="col-6 d-flex align-items-center gap-4">
              <img
                src={hospitalLogo}
                width="120"
                alt="people walking sitting hospital building city clinic glass exterior flat vector illustration"
                className="shadow rounded-circle"
              />
              <div>
                <h2 className="fs-3 fw-bolder">Maitama General Hospital</h2>
                <p className="text-uppercase fs-6" style={{ color: "#FB7272" }}>
                  Private
                </p>
              </div>
            </div>

            <div className="vr"></div>

            {/* hospital details like address, social links etc */}
            <div className="col">
              <div>
                <div>
                  <p>
                    <strong>Age:</strong>{" "}
                    <span className="text-end">Since 1992</span>
                  </p>
                  <p>
                    <strong>Hospital ID:</strong> ABC123456789#
                  </p>
                  <p>
                    <strong>Address:</strong> Plot 48, Cinazam Crescent, Wuse,
                    Abuja
                  </p>
                  <p>
                    <strong>Email:</strong> info@maitamageneralhospital.com
                  </p>
                </div>

                {/* hospital socials */}
                <ul
                  className="d-flex align-items-center justify-content-between pt-3"
                  style={{ color: "#10ACF5" }}>
                  <li>
                    <a href="https://facebook.com" title="facebook">
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" title="linkedin">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" title="twitter">
                      <i class="bi bi-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com" title="instagram">
                      <i class="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="website">
                      <i class="bi bi-globe2"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <hr />

            <section className="row gap-5 mt-5">
              {/* hospital ratings */}
              <div className="col d-flex flex-column hospital-rating">
                <div
                  className="d-flex align-items-center justify-content-center py-3 gap-3"
                  style={{ backgroundColor: "#5EBBF4", borderRadius: "40px" }}>
                  <div>
                    <h2 className="fw-bolder fs-1">
                      5.0 <span className="fw-normal">Overall Rating</span>
                    </h2>
                    <p className="subtitle">
                      Joined Private Pratice on 13 May, 2022
                    </p>
                  </div>
                  <div class="vr"></div>
                  <div className="text-center">
                    <div>
                      <p>Services</p>
                      <div className="d-flex align-items-center gap-1">
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                      </div>
                    </div>

                    <div className="pt-2">
                      <p>Facilities</p>
                      <div className="d-flex align-items-center gap-1">
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                {/* comments */}
                <div className="p-4 d-flex flex-column gap-3">
                  <div className="d-flex align-items-center gap-3 comment">
                    <img
                      src={avatar}
                      alt="user"
                      width="75"
                      className="rounded-circle border border-3"
                    />

                    <div>
                      <h3>Joel Chinaza</h3>
                      <p>
                        Their services were perfect, they kept to time as
                        scheduled. I would recommend them to friends.
                      </p>
                      <div className="d-flex align-items-center gap-1">
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3 comment">
                    <img
                      src={avatar}
                      alt="user"
                      width="75"
                      className="rounded-circle border border-3"
                    />

                    <div>
                      <h3>Joel Chinaza</h3>
                      <p>
                        Their services were perfect, they kept to time as
                        scheduled. I would recommend them to friends.
                      </p>
                      <div className="d-flex align-items-center gap-1">
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                        <i
                          class="bi bi-star-fill"
                          role="img"
                          aria-label="Star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="align-self-center p-2 fst-italic"
                  style={{ fontSize: "12px" }}>
                  View more
                </button>
              </div>

              {/* second column */}
              <div className="col row gap-4">
                {/* success rates */}
                <div className="col d-flex flex-column justify-content-center align-items-center gap-4 text-center second-column">
                  <div className="job-posted">
                    <h3 className="text-white fs-1">129</h3>
                    <p className="text-uppercase">Total</p>
                  </div>
                  <div>
                    <h3 className="fs-6 text-white">125 Completed postings</h3>

                    <div className="pt-3">
                      <h4 className="fs-1 fw-bolder">94%</h4>
                      <p className="fw-bolder">Success Rate</p>
                    </div>
                  </div>
                </div>

                {/* job posted */}
                <div className="col d-flex flex-column justify-content-between align-items-center py-4 text-center second-column">
                  <h3 className="fs-6 text-white">Active Job Postings</h3>

                  <div className="active-post">
                    <h3 className="text-white fs-1">13</h3>
                    <p>Active</p>
                  </div>

                  <div>
                    <button
                      className="btn btn-primary"
                      style={{ backgroundColor: "#5EBBF4", border: "0" }}>
                      View Active Jobs
                    </button>
                    <button
                      className="btn btn-primary mt-3"
                      style={{ backgroundColor: "#5EBBF4", border: "0" }}>
                      View All Posting
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section className="row gap-5 mt-5">
            <div className="col d-flex justify-content-center gap-4 py-5 px-3 second-column">
              <div>
                <h3 className="fs-6 text-white">Services</h3>

                <ul className="pt-4 d-flex flex-column gap-1">
                  <li>Optology</li>
                  <li>General Medicine</li>
                  <li>X-Ray Analysis</li>
                  <li>Dentistry</li>
                </ul>
              </div>
              <div class="vr"></div>
              <div>
                <h3 className="fs-6 text-white">Facilities</h3>

                <ul className="pt-4 d-flex flex-column gap-1">
                  <li>10 Operation beds</li>
                  <li>X-ray machines</li>
                  <li>Urine analyser</li>
                </ul>
              </div>
            </div>

            <div className="col d-flex flex-column align-items-center overflow-hidden second-column">
              <button
                className="mt-auto py-3 w-100 text-center"
                style={{ backgroundColor: "#5EBBF4" }}>
                open map
              </button>
            </div>
          </section>
        </div>
      </section>
    </HospitalDashboardContainer>
  );
};

export default HospitalProfile;
