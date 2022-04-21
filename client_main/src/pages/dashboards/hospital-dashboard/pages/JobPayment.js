import DashboardContainer from "../../../../components/DashboardContainer";
import PageNavigator from "../../components/PageNavigator";

const JobPayment = () => {
  return (
    <DashboardContainer isHospital>
      <section className="dashboard-payment-section">
        <div className="dashboard-payment custom_plain-wrapper shadow">
          <header className="dashboard-payment-header">
            <h2 className="open-sans dashboard-payment-title">Payment</h2>
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
          <div className="dashboard-payment-total">
            <h3 className="open-sans">Total</h3>
            <p>
              20,000 x <span>2 sessions</span>
            </p>
            <p className="payment-calulations px-3 py-2 mt-2">
              &#8358; 40,000 + 2,000{" "}
              <span className="fs-6">(platform fee)</span>
            </p>
            <p className="payment-total"> = &#8358; 42,000 </p>
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
