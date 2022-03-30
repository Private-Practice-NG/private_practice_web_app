import HospitalDashboardContainer from "../components/HospitalDashboardContainer";
import PageNavigator from "../components/PageNavigator";
import SelectedSpecialist from "../components/SelectedSpecialist";

const EmergencyPayment = () => {
  return (
    <HospitalDashboardContainer>
      <section>
        <div className="d-flex align-items-center justify-content-center gap-3 mx-auto">
          <section className="bg-white p-4">
            <header className="dashboard-payment-header">
              <h2 className="open-sans fw-bolder">Payment</h2>
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

          <section className="bg-white p-4">
            <div className="pt-3 d-flex align-items-center gap-5">
              <div>
                <label className="fs-6 fw-bold">Date of appointment</label>
                <input type="date" className="form-control" />
              </div>
              <div>
                <label className="fs-6 fw-bold">Time of appointment</label>
                <input type="time" className="form-control" />
              </div>
            </div>

            <form className="mt-3 d-flex flex-row dashboard-form">
              <input
                type="search"
                placeholder="Search Specialist"
                className="dashboard-form-input form-control"
              />
              <i className="bi bi-search"></i>
            </form>

            <SelectedSpecialist />
          </section>
        </div>

        <PageNavigator previousPage="/jobs/emergency" nextPage="/jobs" />
      </section>
    </HospitalDashboardContainer>
  );
};
export default EmergencyPayment;
