import HospitalDashboardContainer from "../components/HospitalDashboardContainer";
import PageNavigator from "../components/PageNavigator";

const TreatmentDetails = () => {
  return (
    <HospitalDashboardContainer>
      <section className="treatment-category">
        <div className="custom_plain-wrapper mt-5 shadow">
          <section className="d-flex align-items-center gap-5 pb-4">
            <div className="flex-fill">
              <label className="fs-6 fw-bold">Treatment Category</label>
              <select className="form-select">
                <option>Click to select category</option>
              </select>
            </div>
            <div className="flex-fill">
              <label className="fs-6 fw-bold">
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

            <div className="pt-3 d-flex align-items-center gap-5">
              <div>
                <label className="fs-6 fw-bold">Date of appointment</label>
                <input type="date" className="form-control" />
              </div>
              <div>
                <label className="fs-6 fw-bold">Time of appointment</label>
                <input type="time" className="form-control" />
              </div>
            </div>
          </section>

          <section className="py-4 border-top">
            <h2
              className="text-uppercase text-white rounded-pill px-5"
              style={{ fontSize: "15px" }}>
              Second Session
            </h2>

            <div className="pt-3 d-flex align-items-center gap-5">
              <div>
                <label className="fs-6 fw-bold">Date of appointment</label>
                <input type="date" className="form-control" />
              </div>
              <div>
                <label className="fs-6 fw-bold">Time of appointment</label>
                <input type="time" className="form-control" />
              </div>
            </div>
          </section>
        </div>
      </section>
      <PageNavigator previousPage="/jobs" nextPage="/jobs" />
    </HospitalDashboardContainer>
  );
};
export default TreatmentDetails;
