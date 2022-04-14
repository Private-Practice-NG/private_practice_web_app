import specialist from "../../../../assets/images/avatar/avatar-6.jpg";

const SelectedSpecialist = () => {
  return (
    <div>
      <h3 className="fs-6 text-uppercase">Selected</h3>

      <div className="d-flex flex-column gap-3">
        <div className="d-flex align-items-center gap-3 shadow selected-specialist">
          <div className="check">
            <i class="bi bi-check2"></i>
          </div>
          <img src={specialist} alt="specialist" />

          <div>
            <p>
              <strong>Name:</strong> Collins Allen
            </p>
            <p>
              <strong>Specialist:</strong> Optician
            </p>
            <p>
              <strong>Jobs Completed:</strong> (6)
            </p>
            <p>
              <strong>Ratings:</strong> 4.5 stars
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3 shadow selected-specialist">
          <div className="check">
            <i class="bi bi-check2"></i>
          </div>
          <img src={specialist} alt="specialist" />

          <div>
            <p>
              <strong>Name:</strong> Collins Allen
            </p>
            <p>
              <strong>Specialist:</strong> Optician
            </p>
            <p>
              <strong>Jobs Completed:</strong> (6)
            </p>
            <p>
              <strong>Ratings:</strong> 4.5 stars
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectedSpecialist;
