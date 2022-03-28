import HospitalDashboardContainer from "../components/HospitalDashboardContainer";
import avatar from "../../../assets/images/avatar/avatar-1.png";

const Favourites = () => {
  return (
    <HospitalDashboardContainer>
      <section className="favourites">
        <h2 className="fw-bolder montserrat mb-4">Favourites</h2>
        <div className="custom_plain-wrapper shadow py-4 px-5">
          <header className="d-flex align-items-center gap-4">
            <div>
              <h3 className="fs-6 text-uppercase">Category</h3>
              <select className="form-select mt-3">
                <option>All categories </option>
              </select>
            </div>
            <div>
              <h3 className="fs-6 text-uppercase">Location</h3>
              <select className="form-select mt-3">
                <option>All location </option>
              </select>
            </div>
          </header>

          <ul>
            <li className="d-flex align-items-center justify-content-between border-bottom px-5 py-2">
              <div className="d-flex align-items-center gap-5">
                <img src={avatar} alt="doctor" />

                <div>
                  <p className="rating">
                    4.5 <i class="bi bi-star-fill"></i>
                  </p>
                  <h3 className="fs-6 fw-bolder">Maitaima Hospital</h3>
                  <p className="specialisation">General Medicine</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                {/* square */}
                <div className="square"></div>

                <p>May 03, 13:00 - 17:00</p>
              </div>

              {/* buttons */}
              <div className="d-flex align-items-center gap-3">
                <button className="btn btn rounded-pill px-3 py-1">View</button>
                <button className="btn btn rounded-pill px-3 py-1">
                  Remove
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </HospitalDashboardContainer>
  );
};
export default Favourites;
