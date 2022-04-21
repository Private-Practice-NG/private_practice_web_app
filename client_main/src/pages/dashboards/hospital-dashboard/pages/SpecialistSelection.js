import nearPeople from "../../../../assets/images/near-people.png";
import PageNavigator from "../../components/PageNavigator";
import SelectedSpecialist from "../components/SelectedSpecialist";
import FeaturedSpecialists from "../components/FeaturedSpecialists";
import DashboardContainer from "../../../../components/DashboardContainer";

const SpecialistSelection = () => {
  return (
    <DashboardContainer isHospital>
      <section className="specialist-near-you">
        <div className="custom_plain-wrapper mt-5 shadow">
          <header className="d-flex flex-wrap align-items-center justify-content-between">
            <div>
              <h2 className="montserrat fw-bolder fs-3 mb-0">
                Specialist Near You
              </h2>
              <p>Here is a list of specialist near you</p>
            </div>
            <form className="d-flex">
              <input
                type="search"
                placeholder="Search Specialist"
                className="form-control"
              />
              <i
                className="bi bi-search"
                style={{ transform: "translateY(-30px, 10px)" }}></i>
            </form>
          </header>
          <section className="pt-5 d-flex flex-wrap justify-content-between">
            <section className="geo-find">
              <img
                src={nearPeople}
                alt="the globe with people"
                className="globe"
              />
            </section>
            <SelectedSpecialist style={{ width: "45%" }} />
          </section>
          <FeaturedSpecialists />
        </div>
        <PageNavigator
          nextPage="/hospital/dashboard"
          previousPage="/hospital/jobs/find-specialist"
        />
      </section>
    </DashboardContainer>
  );
};
export default SpecialistSelection;
