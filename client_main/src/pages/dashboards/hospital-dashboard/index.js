import "../../../assets/styles/css/hospital-dashboard.css";
import { Link } from "react-router-dom";
import avatar from "../../../assets/images/avatar/avatar-2.png";
import SpecialistIcon from "../../../assets/images/icons/specialist-icon.png";
import DashboardContainer from "../../../components/DashboardContainer";
import ProfileListing from "./components/ProfileListing";
import SpecializationItem from "./components/SpecializationItem";

const HospitalDashboard = () => {
  // design incomplete -- -- -- add chart and calender after library selection/app development.

  return (
    <DashboardContainer isHospital>
      <main className="hospitals-dashboard-home-wrapper d-flex justify-content-center">
        <section className="main-section">
          <section className="top-rated pb-3">
            <h5 className="fw-bold">Top Rated</h5>
            <div className="top-rated-array d-flex justify-content-between pt-3">
              <Link
                to="/"
                className="top-rated-array-item d-flex align-items-center">
                <div className="avatar-area position-relative align-items-center d-flex flex-column justify-content-center">
                  <img
                    src={avatar}
                    className="specialist-avatar rounded-circle"
                    alt="specialist-avatar"
                  />
                </div>
                <div className="details-area position-relative d-flex flex-column ps-3 py-3 pe-2">
                  <p className="fw-bold">Dr Gift Tobe</p>
                  <span>General Medicine</span>
                </div>
              </Link>
              <Link
                to="/"
                className="top-rated-array-item d-flex align-items-center">
                <div className="avatar-area position-relative align-items-center d-flex flex-column justify-content-center">
                  <img
                    src={avatar}
                    className="specialist-avatar rounded-circle"
                    alt="specialist-avatar"
                  />
                </div>
                <div className="details-area position-relative d-flex flex-column ps-3 py-3 pe-2">
                  <p className="fw-bold">Dr Mark Raddish</p>
                  <span>General Medicine</span>
                </div>
              </Link>
              <Link
                to="/"
                className="top-rated-array-item d-flex align-items-center">
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
              </Link>
            </div>
          </section>
          <section className="recent-specialist-section">
            <div
              className="custom_plain-wrapper mt-5"
              style={{ width: "100%", padding: "0" }}>
              <div className="section-header px-3 py-3 border-bottom">
                <h5 className="m-0 fw-bold">Recent Specialists</h5>
              </div>
              <ul>
                <ProfileListing />
                <ProfileListing />
                <ProfileListing />
              </ul>
            </div>
          </section>
        </section>
        <aside>
          <div className="section-header mt-4 mb-3">
            <h6 className="fw-bold text-end pe-3">Categories</h6>
          </div>
          <div className="specialization-array bg-white gap-3 ms-5 pt-4 ps-4 pb-4 pe-3 d-flex flex-wrap justify-content-around">
            <SpecializationItem />
            <SpecializationItem />
            <SpecializationItem />
            <SpecializationItem />
            <SpecializationItem />
            <SpecializationItem />
            <SpecializationItem />
            <SpecializationItem />
            <SpecializationItem />
            <SpecializationItem />
            <SpecializationItem />
            <SpecializationItem />
          </div>
          <div className="online-status-wrapper ms-5 mt-5 mb-3">
            <div className="section-header d-flex gap-3 position-relative align-items-center p-2 shadow bg-white">
              <img
                className="rounded-circle shadow"
                src={SpecialistIcon}
                alt="specialist-icon"
              />
              <h5 className="m-0 fw-bold">Specialists (12)</h5>
            </div>
            <div className="section-main shadow px-4 py-4 position-relative justify-content-between text-white ms-5 bg-white d-flex">
              <div className="statistics-wrapper d-flex flex-column">
                <div className="figure-wrapper rounded-circle position-relative online">
                  <span className="open-sans fs-3">5</span>
                </div>
                <p
                  className="text-center mt-2"
                  style={{ color: "var(--default-grey)" }}>
                  online
                </p>
              </div>
              <div className="statistics-wrapper d-flex flex-column">
                <div className="figure-wrapper rounded-circle offline">
                  <span className="open-sans fs-3">7</span>
                </div>
                <p
                  className="text-center mt-2"
                  style={{ color: "var(--default-grey)" }}>
                  offline
                </p>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </DashboardContainer>
  );
};

export default HospitalDashboard;
