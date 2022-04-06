import avatar from "../../../assets/images/avatar/avatar-7.jpg";

const HospitalProfileRatings = () => {
  return (
    <section>
      <hr />

      <section className="row gap-5 mt-5">
        {/* hospital ratings */}
        <div className="col d-flex flex-column hospital-rating">
          <div
            className="d-flex align-items-center justify-content-center py-3 gap-3"
            style={{ backgroundColor: "#5EBBF4", borderRadius: "40px" }}>
            <div>
              <h2 className="fw-bolder fs-1">
                5.0 <span className="fw-normal">Overall Rating</span>
              </h2>
              <p className="subtitle">Joined Private Pratice on 13 May, 2022</p>
            </div>
            <div class="vr"></div>
            <div className="text-center">
              <div>
                <p>Services</p>
                <div className="d-flex align-items-center gap-1">
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                </div>
              </div>

              <div className="pt-2">
                <p>Facilities</p>
                <div className="d-flex align-items-center gap-1">
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                </div>
              </div>
            </div>
          </div>
          {/* comments */}
          <div className="p-4 d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-3 comment">
              <img
                src={avatar}
                alt="user"
                width="75"
                className="rounded-circle border border-3"
              />

              <div>
                <h3>Joel Chinaza</h3>
                <p>
                  Their services were perfect, they kept to time as scheduled. I
                  would recommend them to friends.
                </p>
                <div className="d-flex align-items-center gap-1">
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 comment">
              <img
                src={avatar}
                alt="user"
                width="75"
                className="rounded-circle border border-3"
              />

              <div>
                <h3>Joel Chinaza</h3>
                <p>
                  Their services were perfect, they kept to time as scheduled. I
                  would recommend them to friends.
                </p>
                <div className="d-flex align-items-center gap-1">
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                  <i class="bi bi-star-fill" role="img" aria-label="Star"></i>
                </div>
              </div>
            </div>
          </div>
          <button
            className="align-self-center p-2 fst-italic"
            style={{ fontSize: "12px" }}>
            View more
          </button>
        </div>

        {/* second column */}
        <div className="col row gap-4">
          {/* success rates */}
          <div className="col d-flex flex-column justify-content-center align-items-center gap-4 text-center second-column">
            <div className="job-posted">
              <h3 className="text-white fs-1">129</h3>
              <p className="text-uppercase">Total</p>
            </div>
            <div>
              <h3 className="fs-6 text-white">125 Completed postings</h3>

              <div className="pt-3">
                <h4 className="fs-1 fw-bolder">94%</h4>
                <p className="fw-bolder">Success Rate</p>
              </div>
            </div>
          </div>

          {/* job posted */}
          <div className="col d-flex flex-column justify-content-between align-items-center py-4 text-center second-column">
            <h3 className="fs-6 text-white">Active Job Postings</h3>

            <div className="active-post">
              <h3 className="text-white fs-1">13</h3>
              <p>Active</p>
            </div>

            <div>
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "#5EBBF4", border: "0" }}>
                View Active Jobs
              </button>
              <button
                className="btn btn-primary mt-3"
                style={{ backgroundColor: "#5EBBF4", border: "0" }}>
                View All Posting
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default HospitalProfileRatings;
