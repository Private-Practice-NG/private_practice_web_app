const SessionAppointment = () => {
  return (
    <div className="pt-3 d-flex align-items-center gap-5">
      <div>
        <label className="fw-bold">Date of appointment</label>
        <input type="date" className="form-control mt-1" />
      </div>
      <div>
        <label className="fw-bold">Time of appointment</label>
        <input type="time" className="form-control mt-1" />
      </div>
    </div>
  );
};
export default SessionAppointment;
