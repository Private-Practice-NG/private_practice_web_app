import hospitalIcon from "../../../assets/images/icons/outline.png";
import emergencyIcon from "../../../assets/images/icons/siren.png";
import { Link } from "react-router-dom";
import HospitalDashboardContainer from "../components/HospitalDashboardContainer";

const Jobs = () => {
  return (
    <HospitalDashboardContainer>
      <section>
        <div
          className="bg-image"
          style={{
            background:
              "rgba(10, 48, 78, 0.35)url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80') no-repeat center/cover",
            height: "300px",
            backgroundBlendMode: "overlay",
          }}></div>
        <div className="dashboard-jobs">
          <div className="dashboard-job">
            <img src={hospitalIcon} alt="" />
          </div>
          <h2>Jobs Page</h2>
        </div>
        <div className="btn-container">
          <Link className="btn shadow" to="/jobs/create-job">
            <i className="bi bi-plus-circle"></i>
            <span>Create Job</span>
          </Link>
          <Link className="btn shadow" to="/jobs/job-outbox/open-jobs">
            <i className="bi bi-chat-square-text"></i>
            <span>Job Outbox</span>
          </Link>
          <Link className="btn shadow" to="/jobs/emergency">
            <img src={emergencyIcon} alt="emergency-icon" />
            <span>Emergency</span>
          </Link>
        </div>
      </section>
    </HospitalDashboardContainer>
  );
};
export default Jobs;
