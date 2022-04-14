import React from "react";
import { useState } from "react";
import PageNavigator from "../../components/PageNavigator";
import DashboardContainer from "../../../../components/DashboardContainer";

function FindASpecialist() {
  let [count, setCount] = useState(1);

  function incrementCount() {
    return setCount((prevState) => prevState + 1);
  }

  function decrementCount() {
    return setCount((prevState) => prevState - 1);
  }

  return (
    <DashboardContainer navType="hospital">
      <section>
        <div className="custom_plain-wrapper mt-5 shadow">
          <div className="find-specialist-header">
            <h2 className="open-sans">Find A Specialist</h2>
            <span>LETS HELP YOU FIND A SPECIALIST</span>
          </div>
          <div className="find-specialist-main-content">
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
      <PageNavigator
        previousPage="/hospital/jobs/payment"
        nextPage="/hospital/jobs/specialist-near-you"
      />
    </DashboardContainer>
  );
}

export default FindASpecialist;