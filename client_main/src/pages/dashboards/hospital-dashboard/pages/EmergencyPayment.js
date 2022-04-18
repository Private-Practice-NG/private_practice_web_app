import DashboardContainer from "../../../../components/DashboardContainer";
import PageNavigator from "../../components/PageNavigator";
import SelectedSpecialist from "../components/SelectedSpecialist";
import SessionAppointment from "../components/SessionAppointment";

const EmergencyPayment = () => {
  return (
    <DashboardContainer isHospital>
      <section className="emergency-payment-section">
        <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 mx-auto mt-5">
          <section className="bg-white p-5">
            <header className="dashboard-payment-header">
              <h2 className="montserrat fw-bolder">Payment</h2>
              <p className="text-uppercase">Tell us about your budget</p>
            </header>

            <form className="d-flex flex-row align-items-center gap-2 pt-5">
              <span className="fs-4">&#8358;</span>
              <input
                type="number"
                placeholder="Enter Amount"
                className="dashboard-form-input form-control position-relative pl-5"
              />
            </form>

            <div className="dashboard-payment-payment pt-5 border-0">
              <h3>Total</h3>
              <p>20,000 x 2 sessions</p>
              <p className="payment-calulations">
                &#8358;40,000 + 2,000 (platform fee)
              </p>
              <p className="payment-total"> = N42,000 </p>
            </div>
          </section>

          {/* session */}
          <section className="bg-white p-5">
            <SessionAppointment />
            <form className="mt-4 d-flex flex-row dashboard-form">
              <input
                type="search"
                placeholder="Search Specialist"
                className="dashboard-form-input flex-fill form-control"
              />
              <i className="bi bi-search"></i>
            </form>

            <div className="mt-5">
              <SelectedSpecialist />
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
