import { Link } from "react-router-dom";
import HospitalDashboardContainer from "../components/HospitalDashboardContainer";

const JobPostSuccess = () => {
  return (
    <HospitalDashboardContainer>
      <div className="d-flex align-items-center justify-content-center text-center job-post-success">
        <section className="jobs_plain-wrapper shadow">
          <div className="check-icon-wrapper">
            <i className="bi bi-check-circle"></i>
          </div>
          <h2 className="montserrat">Job posted succesfully!</h2>
          <p>You'll be notified when there is a response regarding this job</p>
          <Link to="/hospital-dashboard" className="btn">
            Goto Dashboard
          </Link>
        </section>
      </div>
    </HospitalDashboardContainer>
  );
};

export default JobPostSuccess;
