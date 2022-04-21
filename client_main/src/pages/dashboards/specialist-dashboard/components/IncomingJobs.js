// import hospitalIcon from "../../../../assets/images/icons/hospital.png";
import Offers from "./Offers";

const IncomingJobs = () => {
  const offers = {
    private: [
      {
        id: 1,
        title: "Occasional Itching eyes",
        hospital: "Kings care hospital",
        address: "Wuse Zone 4, Abuja",
        date: "June 22, 2022 - June 24, 2022",
        image: require("../../../../assets/images/icons/hospital.png"),
      },
      {
        id: 2,
        title: "Occasional Itching eyes",
        hospital: "Kings care hospital",
        address: "Wuse Zone 4, Abuja",
        date: "June 22, 2022 - June 24, 2022",
        image: require("../../../../assets/images/icons/hospital.png"),
      },
      {
        id: 3,
        title: "Occasional Itching eyes",
        hospital: "Kings care hospital",
        address: "Wuse Zone 4, Abuja",
        date: "June 22, 2022 - June 24, 2022",
        image: require("../../../../assets/images/icons/hospital.png"),
      },
      {
        id: 4,
        title: "Occasional Itching eyes",
        hospital: "Kings care hospital",
        address: "Wuse Zone 4, Abuja",
        date: "June 22, 2022 - June 24, 2022",
        image: require("../../../../assets/images/icons/hospital.png"),
      },
    ],
    emergency: [
      {
        id: 1,
        title: "Occasional Itching eyes",
        hospital: "Kings care hospital",
        address: "Wuse Zone 4, Abuja",
        date: "June 22, 2022 - June 24, 2022",
        image: require("../../../../assets/images/icons/hospital.png"),
      },
    ],
  };

  return (
    <section className="inbox-container">
      <div className="inbox-header">
        <h2 className="fs-5 text-white montserrat">Incoming Jobs</h2>
      </div>

      <div
        className="bg-white row gap-3 py-4 inbox-body"
        style={{ borderRadius: "0px 20px 20px 20px" }}>
        {/* private offers */}
        <Offers privateOffer={offers.private} heading="Private offers" />

        {/* emergency offers */}
        <Offers
          privateOffer={offers.emergency}
          heading="Emergency offers"
          isEmergency
        />
        {/* <Offers /> */}
      </div>
    </section>
  );
};
export default IncomingJobs;
