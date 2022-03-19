import React from "react";
import { useState } from "react";
import "../../../assets/styles/css/hospital-dashboard.css";
import HospitalDashboardContainer from "../components/HospitalDashboardContainer";

function CreateJobsPage() {
  let [count, setCount] = useState(1);

  function incrementCount() {
    return setCount((prevState) => prevState + 1);
  }

  function decrementCount() {
    return setCount((prevState) => prevState - 1);
  }

  return (
    <HospitalDashboardContainer>
      <section>
        <div className="jobs_plain-wrapper shadow">
          <div className="create-jobs-header">
            <h4 className="open-sans">Find A Specialist</h4>
            <span>LETS HELP YOU FIND A SPECIALIST</span>
          </div>
          <div className="create-jobs-main-content">
            <div className="invite-type-wrapper">
              <h5>What type of invite ?</h5>
              <div className="container-fluid invite-item-case d-flex flex-row">
                <div className="invite-item">
                  <div>Open Invite</div>
                  <i className="bi bi-check-circle tick-icon"></i>
                </div>
                <div className="invite-item">
                  <div>Closed Invite</div>
                  <i className="bi bi-check-circle tick-icon"></i>
                </div>
              </div>
            </div>
            <div className="specialist-count-wrapper">
              <h5>How many specialist do you need ?</h5>
              <div className="counter d-flex flex-row">
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount}>+</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HospitalDashboardContainer>
  );
}

export default CreateJobsPage;
