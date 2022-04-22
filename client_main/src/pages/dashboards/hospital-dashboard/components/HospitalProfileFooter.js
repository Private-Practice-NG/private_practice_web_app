const HospitalProfileFooter = () => {
  return (
    <section className="row gap-5 mt-5">
      <div className="col d-flex justify-content-center gap-4 py-4 px-3 second-column">
        <div>
          <h5 className="text-white fw-bold">Services</h5>
          <ul
            className="pt-2 d-flex flex-column gap-1"
            style={{ listStylePosition: "inside", listStyleType: "disc" }}>
            <li>Optology</li>
            <li>General Medicine</li>
            <li>X-Ray Analysis</li>
            <li>Dentistry</li>
          </ul>
        </div>
        <div class="vr"></div>
        <div>
          <h5 className="text-white fw-bold">Facilities</h5>
          <ul
            className="pt-2 d-flex flex-column gap-1"
            style={{ listStylePosition: "inside", listStyleType: "disc" }}>
            <li>10 Operation beds</li>
            <li>X-ray machines</li>
            <li>Urine analyser</li>
          </ul>
        </div>
      </div>

      <div className="col d-flex flex-column align-items-center overflow-hidden second-column">
        <button
          className="mt-auto py-3 w-100 text-center"
          style={{ backgroundColor: "#5EBBF4" }}>
          open map
        </button>
      </div>
    </section>
  );
};
export default HospitalProfileFooter;
