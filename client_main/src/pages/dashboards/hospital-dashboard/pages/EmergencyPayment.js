import DashboardContainer from "../../../../components/DashboardContainer";
import PageNavigator from "../../components/PageNavigator";
// import SelectedSpecialist from "../components/SelectedSpecialist";
import SessionAppointment from "../components/SessionAppointment";
import specialist from "../../../assets/images/avatar/avatar-6.jpg";
import { Link } from "react-router-dom";

const EmergencyPayment = () => {
  return (
    <DashboardContainer isHospital>
      <section className="emergency-payment-section">
        <div className="d-flex flex-wrap align-items-center justify-content-center gap-5 mx-5 mt-5">
          <section className="bg-white px-4 py-4">
            <header className="dashboard-payment-header">
              <h3 className="montserrat fw-bolder">Payment</h3>
              <p className="text-uppercase">Tell us about your budget</p>
            </header>
            <form className="d-flex flex-row align-items-center gap-2 pt-4">
              <span className="fs-4">&#8358;</span>
              <input
                type="number"
                placeholder="Enter Amount"
                className="dashboard-form-input form-control position-relative pl-5"
              />
            </form>
            <div className="dashboard-payment-total pt-4 border-0">
              <h3 className="montserrat">Total</h3>
              <p>20,000 x 2 sessions</p>
              <p
                className="payment-calulations px-3 py-2 mt-2"
                style={{
                  fontSize: "15px",
                }}>
                &#8358;40,000 + 2,000 (platform fee)
              </p>
              <p className="payment-total fw-bold fs-3"> = N42,000 </p>
            </div>
          </section>
          <section className="bg-white p-4">
            <SessionAppointment />
            <form className="mt-4 dashboard-form">
              <input
                type="search"
                placeholder="Search Specialist"
                className="dashboard-form-input flex-fill form-control"
              />
              <i className="bi bi-search"></i>
            </form>
            <div className="mt-4 emergency-specialist-selection">
              <h5 className="fw-bold mb-2 montserrat">Selected Specialists</h5>
              <div
                className="selected w-100 d-flex gap-3 flex-column px-3 py-2"
                style={{
                  height: "250px",
                  overflowY: "auto",
                }}>
                <Link
                  to="/"
                  className="selected-specialists-item d-flex align-items-center">
                  <div className="avatar-area position-relative align-items-center d-flex flex-column justify-content-center">
                    <img
                      src={specialist}
                      className="specialist-avatar rounded-circle"
                      alt="specialist-avatar"
                    />
                  </div>
                  <div className="details-area position-relative d-flex flex-column ps-4 py-2 pe-2">
                    <ul className="m-0" style={{ fontSize: "12px" }}>
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
                    </ul>
                  </div>
                </Link>
                <Link
                  to="/"
                  className="selected-specialists-item d-flex align-items-center">
                  <div className="avatar-area position-relative align-items-center d-flex flex-column justify-content-center">
                    <img
                      src={specialist}
                      className="specialist-avatar rounded-circle"
                      alt="specialist-avatar"
                    />
                  </div>
                  <div className="details-area position-relative d-flex flex-column ps-4 py-2 pe-2">
                    <ul className="m-0" style={{ fontSize: "12px" }}>
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
                    </ul>
                  </div>
                </Link>
                <Link
                  to="/"
                  className="selected-specialists-item d-flex align-items-center">
                  <div className="avatar-area position-relative align-items-center d-flex flex-column justify-content-center">
                    <img
                      src={specialist}
                      className="specialist-avatar rounded-circle"
                      alt="specialist-avatar"
                    />
                  </div>
                  <div className="details-area position-relative d-flex flex-column ps-4 py-2 pe-2">
                    <ul className="m-0" style={{ fontSize: "12px" }}>
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
                    </ul>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <PageNavigator
          previousPage="/hospital/jobs/emergency"
          nextPage="/hospital/jobs"
        />
      </section>
    </DashboardContainer>
  );
};
export default EmergencyPayment;
