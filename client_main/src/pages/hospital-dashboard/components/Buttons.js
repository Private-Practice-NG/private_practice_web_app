const Buttons = ({ textA = "Prev", textB = "Next", iconA, iconB }) => {
  return (
    <div className="d-flex justify-content-between pt-5 mx-4">
      <button className="btn btn-light d-flex align-items-center gap-1">
        <i className={`bi ${iconA}`}></i>
        <span>{textA}</span>
      </button>

      <button className="btn btn-light d-flex align-items-center gap-1">
        <span>{textB}</span>
        <i className={`bi ${iconB}`}></i>
      </button>
    </div>
  );
};
export default Buttons;
