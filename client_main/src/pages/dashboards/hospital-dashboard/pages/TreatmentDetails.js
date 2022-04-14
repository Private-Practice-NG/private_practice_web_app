import DashboardContainer from "../../../../components/DashboardContainer";
import PageNavigator from "../../components/PageNavigator";
import SessionAppointment from "../components/SessionAppointment";

const TreatmentDetails = () => {
  return (
    <DashboardContainer navType="hospital">
      <section className="treatment-category">
        <div className="custom_plain-wrapper mt-5 shadow">
          <section className="d-flex align-items-center gap-5 pb-4">
            <div className="flex-fill">
              <label className="fs-6 fw-bold mb-2">Treatment Category</label>
              <select className="form-select">
                <option>Click to select category</option>
              </select>
            </div>
            <div className="flex-fill">
              <label className="fs-6 fw-bold mb-2">
                How many sessions is needed?
              </label>
              <select className="form-select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </section>

          {/* this section depends on how many sessions was selected */}
          <section className="py-4 border-top">
            <h2
              className="text-uppercase text-white rounded-pill px-5"
              style={{ fontSize: "15px" }}>
              First Session
            </h2>

            <SessionAppointment />
          </section>

          <section className="py-4 border-top">
            <h2
              className="text-uppercase text-white rounded-pill px-5"
              style={{ fontSize: "15px" }}>
              Second Session
            </h2>

            <SessionAppointment />
          </section>
        </div>
      </section>
      <PageNavigator
        previousPage="/hospital/jobs/create-job"
        nextPage="/hospital/jobs/payment"
      />
    </DashboardContainer>
  );
};
export default TreatmentDetails;
