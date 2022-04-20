import HospitalDashboardContainer from "../components/HospitalDashboardContainer";
import PageNavigator from "../components/PageNavigator";
import eyeIcon from "../../../assets/images/icons/eye_d.png";
import heartIcon from "../../../assets/images/icons/heart_d.png";

const CreateJobsPage = () => {
  return (
    <HospitalDashboardContainer>
      <div className="create-job">
        <div className="create-job-hero">
          <h2 className="fs-1 open-sans fw-bold">Lets Create a job!</h2>
        </div>
        <section className="d-flex justify-content-between">
          <div className="d-flex align-items-center justify-content-center flex-column w-75 px-5 py-5 mx-auto">
            <div className="w-100">
              <h3 className="open-sans">
                Enter a short title description of the job
              </h3>
              <textarea
                placeholder="No more than 60 words"
                className="form-control"></textarea>
            </div>
            <PageNavigator
              nextPage="/jobs/treatment-details"
              previousPage="/jobs"
            />
          </div>
          <div className="specialist-section">
            <p className="text-end fst-italic mb-3">drafts (6)</p>
            <h3>What specialist do you need?</h3>
            <form className="mt-3 d-flex flex-row dashboard-form">
              <input
                type="search"
                placeholder="Search Specialist"
                className="dashboard-form-input form-control"
              />
              <i className="bi bi-search"></i>
            </form>
            <div className="specalists-section mt-4">
              <h4>Categories</h4>
              <ul className="d-flex align-items-center gap-3">
                <li className="specialist">
                  <img src={eyeIcon} alt="" width={22} />
                  <h4>Eye</h4>
                  <p>Specialist</p>
                </li>
                <li className="specialist">
                  <img src={heartIcon} alt="" width={22} />
                  <h4>Heart</h4>
                  <p>Specialist</p>
                </li>
                <li className="specialist">
                  <img src={heartIcon} alt="" width={22} />
                  <h4>Heart</h4>
                  <p>Specialist</p>
                </li>
                <li className="specialist">
                  <img src={eyeIcon} alt="" width={22} />
                  <h4>Eye</h4>
                  <p>Specialist</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </HospitalDashboardContainer>
  );
};

export default CreateJobsPage;