import DashboardContainer from "../../../../components/DashboardContainer";
import PageNavigator from "../../components/PageNavigator";
import SpecializationItem from "../components/SpecializationItem";

const Emergency = () => {
  return (
    <DashboardContainer navType="hospital">
      <section className="row emergency-section">
        <div className="col">
          <section className="custom_plain-wrapper mt-5">
            <div>
              <h3 className="montserrat">
                Enter a short title description of the job
              </h3>
              <textarea
                placeholder="No more than 60 words"
                className="form-control"></textarea>
            </div>
            <div className="mt-4">
              <h3>What Specialist do you need?</h3>
              <form className="mt-3 d-flex flex-row dashboard-form">
                <input
                  type="search"
                  placeholder="Search Specialist"
                  className="dashboard-form-input form-control"
                />
                <i className="bi bi-search"></i>
              </form>
            </div>

            <div className="specializations-section mt-4">
              <ul className="specializations-array">
                <SpecializationItem />
                <SpecializationItem />
                <SpecializationItem />
              </ul>
            </div>

            <div className="mt-4">
              <h3>Treatment Category</h3>
              <select className="form-select">
                <option>Click to select category</option>
              </select>
            </div>
          </section>
          <PageNavigator
            previousPage="/hospital/jobs"
            nextPage="/hospital/jobs/emergency-payment"
          />
        </div>
      </section>
    </DashboardContainer>
  );
};
export default Emergency;
