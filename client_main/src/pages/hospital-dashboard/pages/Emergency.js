import eyeIcon from "../../../assets/images/icons/eye_d.png";
import heartIcon from "../../../assets/images/icons/heart_d.png";
import Buttons from "../components/Buttons";
import HospitalDashboardContainer from "../components/HospitalDashboardContainer";

const Emergency = () => {
  return (
    <HospitalDashboardContainer>
      <section className="row emergency-section">
        <div className="col">
          <section className="jobs_plain-wrapper">
            <div>
              <h3 className="montserrat">
                Enter a short title description of the job
              </h3>
              <textarea
                placeholder="No more than 60 words"
                className="form-control"></textarea>
            </div>
            <div className="mt-4">
              <h3>What Specialist do you need?</h3>
              <form className="mt-3 d-flex flex-row specialist-search">
                <input
                  type="search"
                  placeholder="Search Specialist"
                  className="dashboard-form-input form-control"
                />
                <i className="bi bi-search"></i>
              </form>
            </div>

            <div className="specalists-section mt-4">
              <ul className="specialists">
                <li className="specialist">
                  <img src={eyeIcon} alt="" width={22} />
                  <h4>Eye</h4>
                  <p>Specialist</p>
                </li>
                <li className="specialist">
                  <img src={heartIcon} alt="" width={22} />
                  <h4>Heart</h4>
                  <p>Specialist</p>
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3>Treatment Category</h3>
              <select className="form-select">
                <option>Click to select category</option>
              </select>
            </div>
          </section>

          <Buttons iconB="bi-arrow-right" iconA="bi-arrow-left" />
        </div>
      </section>
    </HospitalDashboardContainer>
  );
};
export default Emergency;
