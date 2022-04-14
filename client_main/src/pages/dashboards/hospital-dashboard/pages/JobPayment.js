import DashboardContainer from "../../../../components/DashboardContainer";
import PageNavigator from "../../components/PageNavigator";

const JobPayment = () => {
  return (
    <DashboardContainer navType="hospital">
      <section className="dashboard-payment-section">
        <div className="dashboard-payment custom_plain-wrapper shadow">
          <header className="dashboard-payment-header">
            <h2 className="montserrat dashboard-payment-title">Payment</h2>
            <p>Tell us about your budget</p>
          </header>

          <div className="dashboard-payment-form-section">
            <form className="d-flex flex-row align-items-center gap-2 dashboard-form">
              <span className="fs-4">&#8358;</span>
              <input
                type="number"
                placeholder="Enter Amount"
                className="dashboard-form-input form-control position-relative pl-5"
              />
            </form>
            <span>Per session</span>
          </div>

          <div className="dashboard-payment-payment">
            <h3>Total</h3>
            <p>20,000 x 2 sessions</p>
            <p className="payment-calulations">
              &#8358;40,000 + 2,000 (platform fee)
            </p>
            <p className="payment-total"> = N42,000 </p>
          </div>
        </div>

        <PageNavigator
          previousPage="/hospital/jobs/treatment-details"
          nextPage="/hospital/jobs/find-specialist"
        />
      </section>
    </DashboardContainer>
  );
};
export default JobPayment;