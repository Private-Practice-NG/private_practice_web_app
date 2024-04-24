import locationIcon from "../../../../assets/images/icons/location-icon.svg";
import hospitalIcon from "../../../../assets/images/icons/hospital-icon.svg";
import timeIcon from "../../../../assets/images/icons/carbon_time.svg";
import { Link } from "react-router-dom";

const JobsHunter = () => {
  return (
    <section className="jobs-hunter-container">
      <header>
        <form className="d-flex align-items-center">
          <input type="search" className="form-control py-2" />
          <button className="btn py-2 px-3 text-white search-btn">
            <i class="bi bi-search"></i>
          </button>
        </form>
        <p
          className="fw-bolder fs-6 pt-2"
          style={{ color: "var(--default-blue-deep)" }}>
          Advanced Search
        </p>
      </header>

      <section className="jobs-hunter bg-white">
        <h2 className="fw-bolder fs-4 px-4 py-3 montserrat">Job Feed</h2>

        <section className="border-top px-4 py-3 d-flex align-items-center justify-content-between">
          <button className="me-3 btn px-1">
            <i class="bi bi-chevron-left"></i>
          </button>

          <div className="d-flex align-items-center justify-content-between w-100 jobs-tags">
            <button className="rounded-pill active-btn">All</button>
            <button className="rounded-pill">Optician</button>
            <button className="rounded-pill">Doctor</button>
            <button className="rounded-pill">Dentist</button>
            <button className="rounded-pill">Skin care specialist</button>
            <button className="rounded-pill">Hair care specialist</button>
          </div>

          <button className="ms-3 btn px-1">
            <i class="bi bi-chevron-right"></i>
          </button>
        </section>

        <section>
          <article className="border-top px-4 py-3">
            <div className="d-flex ">
              <div className="w-75">
                <h3 className="fs-5 montserrat">Occasional Itching eyes</h3>
                <p className="pt-2" style={{ width: "500px" }}>
                  I need an optician to check on a patient’s eye, he experiences
                  blurriness after 10 hours of consistently working with his
                  computer.{" "}
                </p>
                <Link
                  to="/specialist/jobs/job-details"
                  className="pt-1 fw-bolder">
                  More &gt;
                </Link>

                <div className="d-flex align-items-center gap-4 pt-3 jobs-hunter-detail">
                  <p>Optician</p>
                  <i class="bi bi-chevron-right"></i>
                  <p>Doctor</p>
                  <i class="bi bi-chevron-right"></i>
                  <p>Eye Doctor</p>
                </div>
              </div>

              <button className="like-btn">
                <i class="bi bi-heart-fill"></i>
              </button>
            </div>

            <div className="d-flex align-items-center justify-content-between pt-3">
              <ul className="d-flex align-items-center gap-5 mb-0 jobs-hunter-detail">
                <li className="d-flex align-items-center gap-2">
                  <img src={hospitalIcon} alt="" />
                  <span>Kings Care Hospital</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <img src={locationIcon} alt="" />
                  <span>Wuse Zone 4, Abuja</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <img src={timeIcon} alt="" />
                  <span>Posted 1 hour ago</span>
                </li>
              </ul>
              <button className="btn btn-primary px-4 rounded-pill text-capitalize filled-btn">
                apply now
              </button>
            </div>
          </article>
        </section>

        <div className="border-top">
          <button className="mx-4 my-3 btn btn-outline-primary rounded-pill px-4 outline-btn">
            Load More
          </button>
        </div>
      </section>

      {/*  */}
    </section>
  );
};
export default JobsHunter;
