import React from "react";
import { Link } from "react-router-dom";
// import HospitalDashboardContainer from "../components/HospitalDashboardContainer";
import DashboardContainer from "../../../../components/DashboardContainer";

function JobPreview() {
  return (
    <DashboardContainer isHospital>
      <section className="jobs-preview-wrapper custom_plain-wrapper shadow">
        <section className="px-2 d-flex text-center align-items-center justify-content-between">
          <h3 className="montserrat fw-bold mb-0">Job Preview</h3>
          <button className="fs-5">
            <span>Edit </span>
            <i class="bi bi-pencil-square fs-4"></i>
          </button>
        </section>
        <section className="px-2 preview-listings d-flex flex-column">
          <div className="preview-item rounded py-3 px-4">
            <div className="preview-item-child d-flex flex-row gap-4">
              <div className="preview-item-child-title fw-bold">Title:</div>
              <div className="preview-item-child-detail">
                Looking for an optician
              </div>
            </div>
            <div className="preview-item-child d-flex flex-row gap-4">
              <div className="preview-item-child-title fw-bold">
                Booking Type:
              </div>
              <div className="preview-item-child-detail">Normal booking</div>
            </div>
          </div>
          <div className="preview-item rounded py-3 px-4">
            <div className="preview-item-child d-flex flex-row gap-4">
              <div className="preview-item-child-title fw-bold">
                Specialist Type:
              </div>
              <div className="preview-item-child-detail">Optician</div>
            </div>
            <div className="preview-item-child d-flex flex-row gap-4">
              <div className="preview-item-child-title fw-bold">Sessions:</div>
              <div className="preview-item-child-detail">
                2 sessions <br />
                <span className="session-one"></span>SESSION 1 - (11th October,
                2022) / 10:00AM <br />
                <span className="session-two">
                  SESSION 2 - (19th October, 2022) / 10:00AM
                </span>
              </div>
            </div>
          </div>
          <div className="preview-item rounded py-3 px-4">
            <div className="preview-item-child d-flex flex-row gap-4">
              <div className="preview-item-child-title fw-bold">Payment:</div>
              <div className="preview-item-child-detail">
                <span className="payment">N 40,000 + platform fee</span> <br />
                <span className="fw-bold">Total: 42,000</span>
              </div>
            </div>
            <div className="preview-item-child d-flex flex-row gap-4"></div>
          </div>
          <div className="preview-item rounded py-3 px-4">
            <div className="preview-item-child d-flex flex-row gap-4">
              <div className="preview-item-child-title fw-bold">
                Closed Invite:
              </div>
              <div className="preview-item-child-detail d-flex flex-column gap-2">
                <span className="px-3">Specialist 1</span>
                <span className="px-3">Specialist 1</span>
              </div>
            </div>
            <div className="preview-item-child d-flex flex-row gap-4"></div>
          </div>
        </section>
        <div className="px-2 post-btn-wrapper">
          <Link
            to="/hospital/jobs/job-posted-successfully"
            className="post-btn btn mt-4 text-white w-100 fs-5">
            Post Job
          </Link>
        </div>
      </section>
    </DashboardContainer>
  );
}

export default JobPreview;
