import HospitalDashboardContainer from "../components/HospitalDashboardContainer";
import specialist from "../../../assets/images/avatar/avatar-6.jpg";
import nearPeople from "../../../assets/images/near-people.png";
import PageNavigator from "../components/PageNavigator";
import SelectedSpecialist from "../components/SelectedSpecialist";

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

          <section className="pt-5 d-flex justify-content-between">
            <img
              src={nearPeople}
              alt="the globe with people"
              className="globe"
            />

            {/* specialist selected */}
            <SelectedSpecialist />
          </section>

          <section className="pt-5">
            <h3 className="text-center fs-6 text-uppercase">Featured</h3>

            <div className="d-flex align-items-center justify-content-between gap-3 pt-2">
              <button>
                <i class="bi bi-chevron-left"></i>
              </button>

              {/* specialists */}
              <div className="d-flex align-items-center gap-4 specialists">
                <div className="specialist">
                  <img src={specialist} alt="specialist" />

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
                  <img src={specialist} alt="specialist" />

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
                  <img src={specialist} alt="specialist" />

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

        <PageNavigator
          nextPage="/hospital-dashboard"
          previousPage="/jobs/find-specialist"
        />
      </section>
    </HospitalDashboardContainer>
  );
};
export default SpecialistNearYou;
