import HospitalDashboardContainer from "../components/HospitalDashboardContainer";
import mastercardLogo from "../../../assets/images/mastercard.png";

const Wallet = () => {
  return (
    <HospitalDashboardContainer>
      <section className="wallet-page my-5">
        <div className="wallet-page-header d-flex align-items-end justify-content-between mx-auto">
          <h2 className="fw-bold open-sans mb-0">My Wallet</h2>
          {/* <p className="text-uppercase fw-bolder">Payment info</p> */}
        </div>
        <div className="custom_plain-wrapper row overflow-hidden">
          <section className="banking-details col-5 px-4 pt-4 pb-5">
            <div>
              <h3 className="fs-4">Bank Account</h3>
              <div className="d-flex flex-column gap-3 pt-2 bank-accounts">
                <div className="py-2 px-4 bg-white bank-account-item">
                  <p className="fw-bolder">Guaranty Trust Bank (0562)</p>
                </div>
                <div className="py-2 px-4 bank-account-item bg-white">
                  <p className="fw-bolder">First Bank (4661)</p>
                </div>
                <div className="py-2 px-4 bank-account-item bg-white">
                  <p className="fw-bolder">Sterling Bank (1362)</p>
                </div>
                <div className="py-2 px-4 bank-account-item bg-white d-flex align-items-center gap-2">
                  <button className="rounded-circle btn btn-primary btn-sm">
                    <i class="bi bi-plus-lg"></i>
                  </button>
                  <p style={{ fontSize: "0.85rem" }} className="fw-bold">
                    Add an account
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="fs-4">Debit Cards</h3>
              <div className="d-flex flex-column gap-3 cards-wrapper">
                <div
                  className="py-4 px-4 d-flex shadow align-items-center gap-3 mt-2 cards-wrapper-item"
                  style={{ backgroundColor: "#c3c5c7" }}>
                  <button className="btn btn-primary btn-sm">
                    <i class="bi bi-plus-lg"></i>
                  </button>
                  <p className="text-white fw-bolder fs-5">New Card</p>
                </div>
                <div className="bg-white py-2 px-4 shadow active-card cards-wrapper-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <img src={mastercardLogo} alt="mastercard logo" />
                    <p>Debit</p>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <p>****</p>
                    <p>****</p>
                    <p>****</p>
                    <p>1234</p>
                  </div>
                </div>
                <div className="bg-white py-2 px-4 shadow cards-wrapper-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <img src={mastercardLogo} alt="mastercard logo" />
                    <p>Debit</p>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <p>****</p>
                    <p>****</p>
                    <p>****</p>
                    <p>1234</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* balance section */}
          <section className="transactions col px-4 py-4 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="fw-bold fs-4">Balance</h3>
              <p className="fs-4 fw-bold" style={{ color: "#2387d4" }}>
                &#8358;30,561.12
              </p>
            </div>
            <div className="pt-3">
              <h4 className="fs-5 fw-bold">Transactions</h4>
              <div className="pt-2 d-flex flex-column gap-2">
                <div className="d-flex align-items-center justify-content-between border-top pt-2">
                  <div className="d-flex align-items-start gap-3">
                    <div className="transaction-type funded">
                      <i class="bi bi-plus-lg" role="img" aria-label="Plus"></i>
                    </div>
                    <div>
                      <p className="fs-6">Maitama General Hospital</p>
                      <p>12-10-20 14:15</p>
                    </div>
                  </div>

                  <div className="text-end">
                    <p className="fs-5 funded" style={{ color: "#2387d4" }}>
                      &#8358;2,480.00
                    </p>
                    <p>Funded</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between border-top pt-2">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="transaction-type withdraw"
                      role="img"
                      aria-label="Dash">
                      <i class="bi bi-dash-lg"></i>
                    </div>
                    <div>
                      <p className="fs-6">Maitama General Hospital</p>
                      <p>12-10-20 14:15</p>
                    </div>
                  </div>
                  <div className="text-end">
                    <p className="fs-5 withdraw">&#8358;2,480.00</p>
                    <p>Withdrawn</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between border-top pt-2">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="transaction-type withdraw"
                      role="img"
                      aria-label="Dash">
                      <i class="bi bi-dash-lg"></i>
                    </div>
                    <div>
                      <p className="fs-6">Maitama General Hospital</p>
                      <p>12-10-20 14:15</p>
                    </div>
                  </div>
                  <div className="text-end">
                    <p className="fs-5 withdraw">&#8358;2,480.00</p>
                    <p>Withdrawn</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between border-top border-bottom pt-2 pb-2">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="transaction-type funded"
                      role="img"
                      aria-label="Plus">
                      <i class="bi bi-plus-lg"></i>
                    </div>
                    <div>
                      <p className="fs-6">Maitama General Hospital</p>
                      <p>12-10-20 14:15</p>
                    </div>
                  </div>

                  <div className="text-end">
                    <p className="fs-5 funded">&#8358;2,480.00</p>
                    <p>Funded</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-auto mb-4">
              <button className="btn btn-primary btn-lg px-5">
                Fund Wallet
              </button>
              <button className="btn btn-success btn-lg px-5">Withdraw</button>
            </div>
          </section>
        </div>
      </section>
    </HospitalDashboardContainer>
  );
};
export default Wallet;
