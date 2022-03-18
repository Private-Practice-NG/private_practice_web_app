import Buttons from "../components/Buttons";
import eyeIcon from "assets/images/icons/eye_d.png";
import heartIcon from "assets/images/icons/heart_d.png";

const Emergency = () => {
  return (
    <section className="row emergency-section">
      <div className="col">
        <section className="emergency-one">
          <div>
            <h3 className="montserrat">
              Enter a short title description of the job
            </h3>
            <textarea
              placeholder="No more than 60 words"
              className="form-control"></textarea>
          </div>

          <div>
            <h3>What Specialist do you need?</h3>
            <form className="dashboard-form">
              <label>
                <input
                  type="search"
                  placeholder="Search specialist"
                  className="dashboard-form-input"
                />
                <i className="bi bi-search"></i>
              </label>
            </form>
          </div>

          <div className="specalists-section">
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

          <div>
            <h3>Treatment Category</h3>
            <select className="form-select">
              <option>Click to select category</option>
            </select>
          </div>
        </section>

        <Buttons iconB="bi-arrow-right" iconA="bi-arrow-left" />
      </div>

      <section className="col-6 emergency-hero">
        <h2>Emergency</h2>
      </section>
    </section>
  );
};
export default Emergency;
