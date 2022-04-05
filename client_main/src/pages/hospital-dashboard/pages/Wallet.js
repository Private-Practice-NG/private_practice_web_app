import HospitalDashboardContainer from "../components/HospitalDashboardContainer";
import mastercardLogo from "../../../assets/images/mastercard.png";

const Wallet = () => {
  return (
    <HospitalDashboardContainer>
      <section className="wallet-page my-5">
        <div className="d-flex align-items-end justify-content-between mx-auto w-75">
          <h2>My Wallet</h2>
          <p className="text-uppercase fw-bolder">Payment info</p>
        </div>
        <div className="custom_plain-wrapper row overflow-hidden">
          {/* bank details section */}
          <section className="banking-details col-5 px-4 py-5">
            {/* bank accounts */}
            <div>
              <h3 className="fs-6">Bank Account</h3>

              <div className="d-flex flex-column gap-2 pt-2">
                <div className="py-2 px-4 rounded-pill bg-white">
                  <p className="fw-bolder">Guaranty Trust Bank (0562)</p>
                </div>
                <div className="py-2 px-4 rounded-pill bg-white">
                  <p className="fw-bolder">First Bank (4661)</p>
                </div>
                <div className="py-2 px-4 rounded-pill bg-white">
                  <p className="fw-bolder">Sterling Bank (1362)</p>
                </div>
                <div className="py-2 px-4 rounded-pill bg-white d-flex align-items-center gap-2">
                  <button className="rounded-circle btn btn-primary btn-sm">
                    <i class="bi bi-plus-lg"></i>
                  </button>
                  <p style={{ fontSize: "0.85rem" }}>Add an account</p>
                </div>
              </div>
            </div>

            {/* debit cards */}
            <div className="mt-4">
              <h3 className="fs-6">Debit Cards</h3>

              <div className="d-flex flex-column gap-3">
                <div
                  className="py-4 px-4 d-flex align-items-center gap-3"
                  style={{ borderRadius: "20px", backgroundColor: "#c3c5c7" }}>
                  <button className="rounded-pill btn btn-primary btn-sm">
                    <i class="bi bi-plus-lg"></i>
                  </button>
                  <p className="text-white fw-bolder fs-5">New Card</p>
                </div>

                <div
                  className="bg-white py-2 px-4 active-card"
                  style={{ borderRadius: "20px" }}>
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
                <div
                  className="bg-white py-2 px-4"
                  style={{ borderRadius: "20px" }}>
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
          <section className="transactions col px-4 py-5 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="fw-normal">Balance</h3>
              <p className="fs-2" style={{ color: "#2387d4" }}>
                &#8358;30,561.12
              </p>
            </div>

            <div className="pt-3">
              <h4 className="fs-6">Transactions</h4>

              <div className="pt-2 d-flex flex-column gap-3">
                <div className="d-flex align-items-start justify-content-between border-top border-2 pt-3">
                  <div className="d-flex align-items-start gap-3">
                    <div className="transaction-type funded">
                      <i class="bi bi-plus-lg" role="img" aria-label="Plus"></i>
                    </div>
                    <div>
                      <p className="fs-5">Maitama General Hospital</p>
                      <p>12-10-20 14:15</p>
                    </div>
                  </div>

                  <div className="text-end">
                    <p className="fs-4 funded" style={{ color: "#2387d4" }}>
                      &#8358;2,480.00
                    </p>
                    <p>Funded</p>
                  </div>
                </div>
                <div className="d-flex align-items-start justify-content-between border-top border-2 pt-3">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="transaction-type withdraw"
                      role="img"
                      aria-label="Dash">
                      <i class="bi bi-dash-lg"></i>
                    </div>
                    <div>
                      <p className="fs-5">Maitama General Hospital</p>
                      <p>12-10-20 14:15</p>
                    </div>
                  </div>

                  <div className="text-end">
                    <p className="fs-4 withdraw">&#8358;2,480.00</p>
                    <p>Withdrawn</p>
                  </div>
                </div>
                <div className="d-flex align-items-start justify-content-between border-top border-2 pt-3">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="transaction-type withdraw"
                      role="img"
                      aria-label="Dash">
                      <i class="bi bi-dash-lg"></i>
                    </div>
                    <div>
                      <p className="fs-5">Maitama General Hospital</p>
                      <p>12-10-20 14:15</p>
                    </div>
                  </div>

                  <div className="text-end">
                    <p className="fs-4 withdraw">&#8358;2,480.00</p>
                    <p>Withdrawn</p>
                  </div>
                </div>
                <div className="d-flex align-items-start justify-content-between border-top border-2 pt-3">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="transaction-type funded"
                      role="img"
                      aria-label="Plus">
                      <i class="bi bi-plus-lg"></i>
                    </div>
                    <div>
                      <p className="fs-5">Maitama General Hospital</p>
                      <p>12-10-20 14:15</p>
                    </div>
                  </div>

                  <div className="text-end">
                    <p className="fs-4 funded">&#8358;2,480.00</p>
                    <p>Funded</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between mt-5">
              <button className="btn btn-primary btn-lg px-5 rounded-pill">
                Fund Wallet
              </button>
              <button className="btn btn-success btn-lg px-5 rounded-pill">
                Withdraw
              </button>
            </div>
          </section>
        </div>
      </section>
    </HospitalDashboardContainer>
  );
};
export default Wallet;
