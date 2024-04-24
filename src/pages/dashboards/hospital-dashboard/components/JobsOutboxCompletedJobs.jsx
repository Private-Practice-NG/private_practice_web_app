import React from "react";
import { Link } from "react-router-dom";

function JobsOutboxCompletedJobs() {
  return (
    <>
      <section className="jobs-outbox-nav d-flex flex-row justify-content-between">
        <Link to="/hospital/jobs/job-outbox/open-jobs" className="header-item">
          open jobs
          <span> (6)</span>
        </Link>
        <Link
          to="/hospital/jobs/job-outbox/closed-jobs"
          className="header-item">
          closed jobs
          <span> (2)</span>
        </Link>
        <Link
          to="/hospital/jobs/job-outbox/completed-jobs"
          className="header-item"
          style={{ borderBottom: "5px solid var(--default-blue-deep)" }}>
          completed jobs
          <span> (4)</span>
        </Link>
        <Link
          to="/hospital/jobs/job-outbox/active-jobs"
          className="header-item">
          active jobs
          <span> (1)</span>
        </Link>
      </section>
      <section className="active-jobs">
        <section className="job-details-area pb-3 pt-3 pe-4 ps-4 font-bold">
          <div className="job-details-item border-bottom pb-3">
            <div className="job-title ">Looking for an optician</div>
            <div className="text-description text-muted mt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
              cupiditate repellendus qui officiis blanditiis nulla.
            </div>
            <div className="job-extras-wrapper d-flex justify-content-between mt-2">
              <Link
                to="/"
                className="text-capitalize align-self-end"
                style={{
                  color: "var(--default-blue-deep)",
                }}>
                more details {`>>`}
              </Link>
              <div className="align-self-end">Jan 15 2021 - Jan 15 2022</div>
            </div>
          </div>
          <div className="job-details-item border-bottom pb-3 mt-3">
            <div className="job-title ">Looking for an optician</div>
            <div className="text-description text-muted mt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
              cupiditate repellendus qui officiis blanditiis nulla.
            </div>
            <div className="job-extras-wrapper d-flex justify-content-between mt-2">
              <Link
                to="/"
                className="text-capitalize align-self-end"
                style={{
                  color: "var(--default-blue-deep)",
                }}>
                more details {`>>`}
              </Link>
              <div className="align-self-end">Jan 15 2021 - Jan 15 2022</div>
            </div>
          </div>
          <div className="view-all-jobs text-end pt-3 ps-4 pe-4">
            <Link to="/" style={{ color: "var(--default-blue-deep)" }}>
              View all {`>>`}
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}

export default JobsOutboxCompletedJobs;
