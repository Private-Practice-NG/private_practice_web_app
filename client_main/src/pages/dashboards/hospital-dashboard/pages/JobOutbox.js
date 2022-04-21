import { Outlet } from "react-router-dom";
import DashboardContainer from "../../../../components/DashboardContainer";

function JobOutbox() {
  return (
    <DashboardContainer isHospital>
      <section className="jobs-outbox-wrapper">
        <section className="page-header d-flex text-center justify-content-center mt-5">
          <i className="bi bi-chat-square-text"></i>
          <h3 className="montserrat">Jobs Outbox</h3>
        </section>
        <div
          className="custom_plain-wrapper mt-4 mb-5 shadow"
          style={{ padding: "0" }}>
          <Outlet />
        </div>
      </section>
    </DashboardContainer>
  );
}

export default JobOutbox;
