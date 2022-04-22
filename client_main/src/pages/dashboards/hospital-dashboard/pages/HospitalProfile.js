import HospitalProfileRatings from "../components/HospitalProfileRatings";
import HospitalProfileHeading from "../components/HospitalProfileHeading";
import HospitalProfileFooter from "../components/HospitalProfileFooter";
import DashboardContainer from "../../../../components/DashboardContainer";

const HospitalProfile = () => {
  return (
    <DashboardContainer isHospital>
      <section className="hospital-profile">
        {/* <i class="bi bi-chevron-left mx-5 mt-5"></i> */}
        <div className="custom_plain-wrapper mt-5 shadow">
          <HospitalProfileHeading />
          <HospitalProfileRatings />
          {/* hospital services */}
          <HospitalProfileFooter />
        </div>
      </section>
    </DashboardContainer>
  );
};

export default HospitalProfile;
