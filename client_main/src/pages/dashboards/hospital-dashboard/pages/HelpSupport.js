import specialistIcon from "../../../../assets/images/icons/specialist-icon.png";
import hospitalIcon from "../../../../assets/images/icons/hospital-outline.png";
import patientIcon from "../../../../assets/images/icons/patient-icon.png";
import Faqs from "../../components/Faqs";
import DashboardContainer from "../../../../components/DashboardContainer";

const HelpSupport = () => {
  const otherLinks = [
    {
      id: 1,
      image: require("../../../../assets/images/icons/account.png"),
      name: "My Account",
    },
    {
      id: 2,
      image: require("../../../../assets/images/icons/refund.png"),
      name: "Charges and Refund",
    },
    {
      id: 3,
      image: require("../../../../assets/images/icons/payment.png"),
      name: "Payouts",
    },
    {
      id: 4,
      image: require("../../../../assets/images/icons/share.png"),
      name: "Connect",
    },
    {
      id: 5,
      image: require("../../../../assets/images/icons/letter.png"),
      name: "Subscription",
    },
    {
      id: 6,
      image: require("../../../../assets/images/icons/world.png"),
      name: "Travels",
    },
    {
      id: 7,
      image: require("../../../../assets/images/icons/fraud.png"),
      name: "Fraud",
    },
    {
      id: 8,
      image: require("../../../../assets/images/icons/file.png"),
      name: "Others",
    },
  ];

  return (
    <DashboardContainer isHospital>
      <section className="help-support-section">
        <div className="custom_plain-wrapper">
          <header className="d-flex align-items-center justify-content-center flex-column text-center px-5 py-5 text-white">
            <div className="roboto-slab">
              <p className="montserrat fs-5">Self service help centre</p>
              <h2 className="fw-bolder fs-1">How can we help today?</h2>
            </div>
            <p className="pt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              magni odit tempore explicabo veritatis quaerat, quam consectetur,
              ea ipsam itaque eveniet perferendis iure aliquam soluta deserunt
              et corrupti ab ducimus architecto totam iusto quae sunt possimus
              nam. Adipisci, optio porro?
            </p>
            <form className="d-flex flex-row gap-2 pt-4 position-relative dashboard-form">
              <input
                type="search"
                placeholder="Find through our full database full of answers"
                className="dashboard-form-input form-control"
              />
              <button className="search-btn btn btn-secondary">Search</button>
            </form>
          </header>
          <section className="py-5 px-4 d-flex flex-column gap-3">
            <section style={{ width: "80%" }} className="mx-auto">
              <Faqs />
            </section>
            <section className="topical-help mx-auto" style={{ width: "80%" }}>
              <h2 className="fs-5 text-center mt-4 mb-5 text-uppercase fw-bolder">
                Find Help By Topics
              </h2>
              <ul className="other-info-section d-flex flex-wrap justify-content-center gap-4">
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
            <section
              className="user-type-help mx-auto mt-4 mb-4"
              style={{ width: "80%" }}>
              <h2 className="fs-5 text-center mb-5 text-uppercase fw-bolder">
                Find Help By User Category
              </h2>
              <div className="d-flex flex-row align-items-center justify-content-around">
                <div className="user-group d-flex flex-column gap-2">
                  <div className="rounded-circle shadow p-4 border">
                    <img src={specialistIcon} alt="specialist" />
                  </div>
                  <p className="text-center fs-6 fw-bold">Specialist</p>
                </div>
                <div className="user-group d-flex flex-column gap-2">
                  <div className="rounded-circle shadow p-4 border">
                    <img src={patientIcon} alt="patient" />
                  </div>
                  <p className="text-center fs-6 fw-bold">User</p>
                </div>
                <div className="user-group d-flex flex-column gap-2">
                  <div className="rounded-circle shadow p-4 border">
                    <img src={hospitalIcon} alt="Hospital" />
                  </div>
                  <p className="text-center fs-6 fw-bold">Hospital</p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>
    </DashboardContainer>
  );
};
export default HelpSupport;
