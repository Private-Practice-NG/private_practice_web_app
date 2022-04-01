import specialist from "../../../assets/images/avatar/avatar-6.jpg";

const FeaturedSpecialists = () => {
  return (
    <section className="pt-5">
      <h3 className="text-center fs-6 text-uppercase">Featured</h3>

      <div className="d-flex align-items-center justify-content-between gap-3 pt-2">
        <button>
          <i class="bi bi-chevron-left"></i>
        </button>

        {/* specialists */}
        <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 specialists">
          <div className="specialist">
            <img src={specialist} alt="specialist" />

            <ul>
              <li>
                <strong>Name:</strong> Collins Allen
              </li>
              <li>
                <strong>Specialist:</strong> Optician
              </li>
              <li>
                <strong>Jobs Completed:</strong> 6
              </li>
              <li>
                <strong>Ratings:</strong> 4.5 stars
              </li>
              <li>
                <strong>Location:</strong> Gwarimpa
              </li>
              <li>
                <strong>E.T.A:</strong> 1hr
              </li>
            </ul>
          </div>

          <div className="specialist active-specialist">
            <img src={specialist} alt="specialist" />

            <ul>
              <li>
                <strong>Name:</strong> Collins Allen
              </li>
              <li>
                <strong>Specialist:</strong> Optician
              </li>
              <li>
                <strong>Jobs Completed:</strong> 6
              </li>
              <li>
                <strong>Ratings:</strong> 4.5 stars
              </li>
              <li>
                <strong>Location:</strong> Gwarimpa
              </li>
              <li>
                <strong>E.T.A:</strong> 1hr
              </li>
            </ul>
          </div>

          <div className="specialist">
            <img src={specialist} alt="specialist" />

            <ul>
              <li>
                <strong>Name:</strong> Collins Allen
              </li>
              <li>
                <strong>Specialist:</strong> Optician
              </li>
              <li>
                <strong>Jobs Completed:</strong> 6
              </li>
              <li>
                <strong>Ratings:</strong> 4.5 stars
              </li>
              <li>
                <strong>Location:</strong> Gwarimpa
              </li>
              <li>
                <strong>E.T.A:</strong> 1hr
              </li>
            </ul>
          </div>
        </div>

        <button>
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};
export default FeaturedSpecialists;
