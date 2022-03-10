import Buttons from "./Buttons";

const Payment = () => {
  return (
    <section className="dashboard-payment-section">
      <div className="dashboard-payment">
        <header className="dashboard-payment-header">
          <h2 className="open-sans dashboard-payment-title">Payment</h2>
          <p>Tell us about your budget</p>
        </header>

        <div className="dashboard-payment-form-section">
          <form className="dashboard-payment-form">
            <label>
              <span>&#8358;</span>
              <input type="number" placeholder="Enter Amount" />
            </label>
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

      <Buttons iconB="bi-arrow-right" iconA="bi-arrow-left" />
    </section>
  );
};
export default Payment;
