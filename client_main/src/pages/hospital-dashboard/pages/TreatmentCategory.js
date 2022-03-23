import PageNavigator from "../components/PageNavigator";

const TreatmentCategory = () => {
  return (
    <>
      <section className="treatment-category">
        <div className="jobs_plain-wrapper mt-5 shadow">
          <section className="d-flex align-items-center gap-5 pb-4">
            <div className="flex-fill">
              <h3 className="fs-6 fw-bolder">Treatment Category</h3>
              <select className="form-select">
                <option>Click to select category</option>
              </select>
            </div>
            <div className="flex-fill">
              <h3 className="fs-6 fw-bolder">How many sessions is needed?</h3>
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
            <h2 className="fs-5 text-uppercase">First Session</h2>

            <div className="pt-3 d-flex align-items-center gap-5">
              <div>
                <h3 className="fs-6">Date of appointment</h3>
                <input type="date" className="form-control" />
              </div>
              <div>
                <h3 className="fs-6">Time of appointment</h3>
                <input type="time" className="form-control" />
              </div>
            </div>
          </section>

          <section className="py-4 border-top">
            <h2 className="fs-5 text-uppercase">Second Session</h2>

            <div className="pt-3 d-flex align-items-center gap-5">
              <div>
                <h3 className="fs-6">Date of appointment</h3>
                <input type="date" className="form-control" />
              </div>
              <div>
                <h3 className="fs-6">Time of appointment</h3>
                <input type="time" className="form-control" />
              </div>
            </div>
          </section>
        </div>
      </section>
      <PageNavigator previousPage="/jobs" nextPage="/jobs" />
    </>
  );
};
export default TreatmentCategory;
