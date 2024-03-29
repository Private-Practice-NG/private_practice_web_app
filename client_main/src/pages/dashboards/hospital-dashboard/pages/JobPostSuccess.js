import { Link } from "react-router-dom";
import DashboardContainer from "../../../../components/DashboardContainer";

const JobPostSuccess = () => {
  return (
    <DashboardContainer isHospital>
      <div className="d-flex align-items-center justify-content-center text-center job-post-success">
        <section
          className="custom_plain-wrapper shadow"
          style={{ marginTop: "80px" }}>
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
    </DashboardContainer>
  );
};

export default JobPostSuccess;
