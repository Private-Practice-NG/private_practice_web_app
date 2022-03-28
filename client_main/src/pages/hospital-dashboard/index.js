import "../../assets/styles/css/hospital-dashboard.css";
import HospitalDashboardContainer from "./components/HospitalDashboardContainer";
import avatar from "../../assets/images/avatar/avatar-2.png";

const HospitalDashboard = () => {
  return (
    <HospitalDashboardContainer>
      <main className="hospitals-dashboard-home-wrapper d-flex justify-content-center">
        <section className="main-section">
          <section className="top-rated p-4">
            <h5 className="fw-bold">Top Rated</h5>
            <div className="top-rated-array d-flex justify-content-between pt-3">
              <div className="top-rated-array-item d-flex align-items-center">
                <div className="avatar-area position-relative align-items-center d-flex flex-column justify-content-center">
                  <img
                    src={avatar}
                    className="specialist-avatar rounded-circle"
                    alt="specialist-avatar"
                  />
                </div>
                <div className="details-area position-relative d-flex flex-column ps-3 py-3 pe-2">
                  <p className="fw-bold">Dr Joshua Anthony</p>
                  <span>General Medicine</span>
                </div>
              </div>
              <div className="top-rated-array-item d-flex align-items-center">
                <div className="avatar-area position-relative align-items-center d-flex flex-column justify-content-center">
                  <img
                    src={avatar}
                    className="specialist-avatar rounded-circle"
                    alt="specialist-avatar"
                  />
                </div>
                <div className="details-area position-relative flex-column d-flex ps-3 py-3 pe-2">
                  <p className="fw-bold">Dr Ray Matthews</p>
                  <span>General Medicine</span>
                </div>
              </div>
              <div className="top-rated-array-item d-flex align-items-center">
                <div className="avatar-area position-relative align-items-center d-flex justify-content-center">
                  <img
                    src={avatar}
                    className="specialist-avatar rounded-circle"
                    alt="specialist-avatar"
                  />
                </div>
                <div className="details-area position-relative flex-column d-flex ps-3 py-3 pe-2">
                  <p className="fw-bold">Dr Esther Fish</p>
                  <span>General Medicine</span>
                </div>
              </div>
            </div>
          </section>
        </section>
        <aside></aside>
      </main>
    </HospitalDashboardContainer>
  );
};

export default HospitalDashboard;
