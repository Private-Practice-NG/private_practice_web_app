// import hospitalIcon from "../../../../assets/images/icons/outline.png";
import emergencyIcon from "../../../../assets/images/icons/siren.png";
import { Link } from "react-router-dom";
import DashboardContainer from "../../../../components/DashboardContainer";
// import { Outlet } from "react-router-dom";

const Jobs = () => {
  return (
    <DashboardContainer isHospital>
      <section className="main_bg text-white">
        <h1 className="open-sans fw-bold w-75 mx-auto ps-5">Jobs Page</h1>
        <div className="btn-container  mt-5 w-75 mx-auto">
          <Link className="btn shadow" to="/hospital/jobs/create-job">
            <i className="bi bi-plus-circle"></i>
            <span>Create Job</span>
          </Link>
          <Link className="btn shadow" to="/hospital/jobs/job-outbox/open-jobs">
            <i className="bi bi-chat-square-text"></i>
            <span>Job Outbox</span>
          </Link>
          <Link className="btn shadow" to="/hospital/jobs/emergency">
            <img src={emergencyIcon} alt="emergency-icon" />
            <span>Emergency</span>
          </Link>
        </div>
        <div className="ongoing-jobs w-75 mx-auto mt-4">Ongoing Jobs (24)</div>
      </section>
    </DashboardContainer>
  );
};
export default Jobs;
