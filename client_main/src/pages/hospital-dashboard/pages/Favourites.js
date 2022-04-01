import HospitalDashboardContainer from "../components/HospitalDashboardContainer";
import ProfileListing from "../components/ProfileListing";

const Favourites = () => {
  return (
    <HospitalDashboardContainer>
      <section className="favourites d-flex justify-content-center align-items-center flex-column">
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
          <ul className="pt-5">
            <ProfileListing />
          </ul>
        </div>
      </section>
    </HospitalDashboardContainer>
  );
};
export default Favourites;
