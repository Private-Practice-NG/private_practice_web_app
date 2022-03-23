const SpecialistNearYou = () => {
  return (
    <section>
      <div className="jobs_plain-wrapper mt-5 shadow">
        <header>
          <div>
            <h2>Specialist Near You</h2>
            <p>Here is a list of specialist near you</p>
          </div>

          <form className="d-flex flex-row dashboard-form">
            <input
              type="search"
              placeholder="Search specialist"
              className="dashboard-form-input form-control"
            />
            <i className="bi bi-search"></i>
          </form>
        </header>

        <section>
          {/* <img src="" alt="" /> */}

          {/* specialist selected */}
          <div>
            <h3>Selected</h3>
          </div>
        </section>
      </div>
    </section>
  );
};
export default SpecialistNearYou;
