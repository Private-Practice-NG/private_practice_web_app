import HospitalDashboardContainer from "../components/HospitalDashboardContainer";
import specialist from "../../../assets/images/avatar/avatar-6.jpg";

const SpecialistNearYou = () => {
  return (
    <HospitalDashboardContainer>
      <section className="specialist-near-you">
        <div className="custom_plain-wrapper mt-5 shadow">
          <header className="d-flex align-items-center justify-content-between">
            <div>
              <h2 className="montserrat fw-bolder fs-3 mb-0">
                Specialist Near You
              </h2>
              <p>Here is a list of specialist near you</p>
            </div>

            <form className="d-flex flex-row dashboard-form">
              <input
                type="search"
                placeholder="Search specialist"
                className="dashboard-form-input form-control"
              />
              <i className="bi bi-search"></i>
            </form>
          </header>

          <section className="pt-5">
            {/* <img src="" alt="" /> */}

            {/* specialist selected */}
            <div>
              <h3 className="fs-6 text-uppercase">Selected</h3>

              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3 shadow selected-specialist">
                  <img src={specialist} alt="" />

                  <div>
                    <p>
                      <strong>Name:</strong> Collins Allen
                    </p>
                    <p>
                      <strong>Specialist:</strong> Optician
                    </p>
                    <p>
                      <strong>Jobs Completed:</strong> (6)
                    </p>
                    <p>
                      <strong>Ratings:</strong> 4.5 stars
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 shadow selected-specialist">
                  <img src={specialist} alt="" />

                  <div>
                    <p>
                      <strong>Name:</strong> Collins Allen
                    </p>
                    <p>
                      <strong>Specialist:</strong> Optician
                    </p>
                    <p>
                      <strong>Jobs Completed:</strong> (6)
                    </p>
                    <p>
                      <strong>Ratings:</strong> 4.5 stars
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-5">
            <h3 className="text-center fs-6 text-uppercase">Featured</h3>

            <div className="d-flex align-items-center justify-content-between gap-3">
              <button>
                <i class="bi bi-chevron-left"></i>
              </button>

              <div className="d-flex align-items-center gap-3 specialists">
                {/* specialist */}
                <div className="specialist">
                  <img src={specialist} alt="" />

                  <ul>
                    <li>
                      <strong>Name:</strong> Collins Allen
                    </li>
                    <li>
                      <strong>Specialist:</strong> Optician
                    </li>
                    <li>
                      <strong>Jobs Completed:</strong> 6
                    </li>
                    <li>
                      <strong>Ratings:</strong> 4.5 stars
                    </li>
                    <li>
                      <strong>Location:</strong> Gwarimpa
                    </li>
                    <li>
                      <strong>E.T.A:</strong> 1hr
                    </li>
                  </ul>
                </div>

                <div className="specialist bg-white shadow">
                  <img src={specialist} alt="" />

                  <ul>
                    <li>
                      <strong>Name:</strong> Collins Allen
                    </li>
                    <li>
                      <strong>Specialist:</strong> Optician
                    </li>
                    <li>
                      <strong>Jobs Completed:</strong> 6
                    </li>
                    <li>
                      <strong>Ratings:</strong> 4.5 stars
                    </li>
                    <li>
                      <strong>Location:</strong> Gwarimpa
                    </li>
                    <li>
                      <strong>E.T.A:</strong> 1hr
                    </li>
                  </ul>
                </div>

                <div className="specialist">
                  <img src={specialist} alt="" />

                  <ul>
                    <li>
                      <strong>Name:</strong> Collins Allen
                    </li>
                    <li>
                      <strong>Specialist:</strong> Optician
                    </li>
                    <li>
                      <strong>Jobs Completed:</strong> 6
                    </li>
                    <li>
                      <strong>Ratings:</strong> 4.5 stars
                    </li>
                    <li>
                      <strong>Location:</strong> Gwarimpa
                    </li>
                    <li>
                      <strong>E.T.A:</strong> 1hr
                    </li>
                  </ul>
                </div>
              </div>

              <button>
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </section>
        </div>
      </section>
    </HospitalDashboardContainer>
  );
};
export default SpecialistNearYou;
