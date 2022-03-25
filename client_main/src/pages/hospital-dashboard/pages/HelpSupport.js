import HospitalDashboardContainer from "../components/HospitalDashboardContainer";
import specialistIcon from "../../../assets/images/icons/specialist-icon.png";
import hospitalIcon from "../../../assets/images/icons/hospital-outline.png";
import patientIcon from "../../../assets/images/icons/patient-icon.png";
import Faqs from "../components/Faqs";

const HelpSupport = () => {
  const otherLinks = [
    {
      id: 1,
      image: require("../../../assets/images/icons/account.png"),
      name: "My Account",
    },
    {
      id: 2,
      image: require("../../../assets/images/icons/refund.png"),
      name: "Charges and Refund",
    },
    {
      id: 3,
      image: require("../../../assets/images/icons/payment.png"),
      name: "Payouts",
    },
    {
      id: 4,
      image: require("../../../assets/images/icons/share.png"),
      name: "Connect",
    },
    {
      id: 5,
      image: require("../../../assets/images/icons/letter.png"),
      name: "Subscription",
    },
    {
      id: 6,
      image: require("../../../assets/images/icons/world.png"),
      name: "Travels",
    },
    {
      id: 7,
      image: require("../../../assets/images/icons/fraud.png"),
      name: "Fraud",
    },
    {
      id: 8,
      image: require("../../../assets/images/icons/file.png"),
      name: "Others",
    },
  ];

  return (
    <HospitalDashboardContainer>
      <section className="help-support-section">
        <div className="jobs_plain-wrapper">
          <header className="d-flex align-items-center justify-content-center flex-column text-center px-5 py-5 text-white">
            <div className="roboto-slab">
              <p>Self service help centre</p>
              <h2 className="fw-bolder fs-1">How can we help today?</h2>
            </div>

            <p className="pt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              magni odit tempore explicabo veritatis quaerat, quam consectetur,
              ea ipsam itaque eveniet perferendis iure aliquam soluta deserunt
              et corrupti ab ducimus architecto totam iusto quae sunt possimus
              nam. Adipisci, optio porro?
            </p>

            <form className="d-flex flex-row gap-3 pt-4 position-relative dashboard-form">
              <input
                type="search"
                placeholder="Find through our full database full of answers"
                className="dashboard-form-input form-control"
              />
              <button className="search-btn">Search</button>
            </form>
          </header>

          <section className="py-5 px-4 row gap-3">
            {/* faq's */}
            <div className="col-4">
              <Faqs />
            </div>

            <div className="col d-flex flex-column align-items-center gap-5">
              <div className="rounded-circle shadow p-4 border">
                <img src={specialistIcon} alt="specialist" />
              </div>
              <div className="rounded-circle shadow p-4 border">
                <img src={patientIcon} alt="specialist" />
              </div>
              <div className="rounded-circle shadow p-4 border">
                <img src={hospitalIcon} alt="specialist" />
              </div>
            </div>

            {/* others */}
            <ul className="col other-info-section">
              {otherLinks?.map(({ name, image, id }) => (
                <li
                  className="d-flex flex-column align-items-center text-center"
                  key={id}>
                  <img src={image} alt="" />
                  <p className="pt-1">{name}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </HospitalDashboardContainer>
  );
};
export default HelpSupport;
