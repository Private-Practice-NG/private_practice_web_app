import HospitalRatings from "../components/HospitalProfileRatings";
import hospitalLogo from "../../../assets/images/hospital-logo.jpg";

const HospitalProfileHeading = () => {
  return (
    <section className="row gap-5 pb-4">
      {/* hospital name and image */}
      <div className="col-6 d-flex align-items-center gap-4">
        <img
          src={hospitalLogo}
          width="120"
          alt="people walking sitting hospital building city clinic glass exterior flat vector illustration"
          className="shadow rounded-circle"
        />
        <div>
          <h2 className="fs-3 fw-bolder">Maitama General Hospital</h2>
          <p className="text-uppercase fs-6" style={{ color: "#FB7272" }}>
            Private
          </p>
        </div>
      </div>

      <div className="vr"></div>

      {/* hospital details like address, social links etc */}
      <div className="col">
        <div>
          <div>
            <p>
              <strong>Age:</strong> <span className="text-end">Since 1992</span>
            </p>
            <p>
              <strong>Hospital ID:</strong> ABC123456789#
            </p>
            <p>
              <strong>Address:</strong> Plot 48, Cinazam Crescent, Wuse, Abuja
            </p>
            <p>
              <strong>Email:</strong> info@maitamageneralhospital.com
            </p>
          </div>

          {/* hospital socials */}
          <ul
            className="d-flex align-items-center justify-content-between pt-3"
            style={{ color: "#10ACF5" }}>
            <li>
              <a href="https://facebook.com" title="facebook">
                <i class="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" title="linkedin">
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" title="twitter">
                <i class="bi bi-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" title="instagram">
                <i class="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" title="website">
                <i class="bi bi-globe2"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default HospitalProfileHeading;
