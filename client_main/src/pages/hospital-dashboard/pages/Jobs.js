import hospitalIcon from "assets/images/icons/hospital-icon.png";
import HospitalDashboardContainer from "../components/HospitalDashboardContainer";
import Payment from "../components/Payment";

const Jobs = () => {
  return (
    <HospitalDashboardContainer>
      {/* <section>
        <div
          className="bg-image"
          style={{
            background:
              "url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg') no-repeat center/cover",
            height: "275px",
          }}></div>

        <div className="dashboard-jobs">
          <div className="dashboard-job">
            <img src={hospitalIcon} alt="" />
          </div>
          <h2>Jobs Page</h2>
        </div>

        <div className="d-flex justify-content-center justify-content-center gap-5 pt-10">
          <button className="btn btn-primary d-flex align-items-center gap-3 px-10">
            <i class="bi bi-plus-circle"></i>
            <span>Create Job</span>
          </button>
          <button className="btn btn-primary d-flex align-items-center gap-3 px-10">
            <i class="bi bi-chat-square-text"></i>
            <span>Job Outbox</span>
          </button>
          <button className="btn btn-primary d-flex align-items-center gap-3 px-10">
            <i class="bi bi-chat-square-text"></i>
            <span>Emergency</span>
          </button>
        </div>
      </section> */}
      <Payment />
    </HospitalDashboardContainer>
  );
};
export default Jobs;
