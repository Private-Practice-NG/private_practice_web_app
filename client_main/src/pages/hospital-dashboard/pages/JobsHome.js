import hospitalIcon from "assets/images/icons/hospital-icon.png";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <section>
      <div
        className="bg-image jobs-bg-image"
        style={{
          background:
            "rgb(18 17 17 / 22%)url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80') no-repeat center/cover",
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
        <button className="btn">
          <i class="bi bi-plus-circle"></i>
          <span>Create Job</span>
        </button>
        <Link className="btn" to="/jobs/job-outbox">
          <i class="bi bi-chat-square-text"></i>
          <span>Job Outbox</span>
        </Link>
        <Link className="btn" to="/jobs/emergency">
          <i class="bi bi-chat-square-text"></i>
          <span>Emergency</span>
        </Link>
      </div>
    </section>
  );
};
export default Jobs;
