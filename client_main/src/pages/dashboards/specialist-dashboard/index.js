import "../../../assets/styles/css/specialist-dashboard.css";
import DashboardContainer from "../../../components/DashboardContainer";
import ProfileAvatar from "../../../assets/images/avatar/avatar-4.png";

const SpecialistDashboard = () => {
  return (
    <DashboardContainer>
      <main className="specialist-home-wrapper">
        <section className="first-grid d-flex justify-content-between">
          <div className="basic-profile-card shadow d-flex justify-content-between">
            <div>
              <div className="specialist-avatar-area me-3">
                <img
                  src={ProfileAvatar}
                  alt="specialist-avatar"
                  className="rounded-circle"
                />
              </div>
              <button className="mt-3 btn text-white rounded-pill">
                View Profile
              </button>
            </div>
            <div className="profile-details">
              <h5 className="fw-bold specialist-name m-0">Precious Chikezie</h5>
              <span>Cardiologist</span>
              <ul className="other-details mt-3 mb-0">
                <li>
                  <span className="fw-bold">Age: </span>
                  <span className="detail">24</span>
                </li>
                <li>
                  <span className="fw-bold">Location: </span>
                  <span className="detail">Abuja</span>
                </li>
                <li>
                  <span className="fw-bold">Affiliation: </span>
                  <span className="detail">Maitama Hospital</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="weekly-stats shadow">
            <h5>Weekly Stats</h5>
          </div>
          <div className="profile-completion-section shadow">
            <h5>Profile Completion</h5>
          </div>
        </section>
      </main>
    </DashboardContainer>
  );
};
export default SpecialistDashboard;
