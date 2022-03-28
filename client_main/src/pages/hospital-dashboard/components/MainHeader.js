import userImage from "../../../assets/images/avatar/avatar-2.png";

const MainHeader = () => {
  return (
    <header className="dashboard-main-header d-flex justify-content-between">
      <form className="d-flex flex-row dashboard-form">
        <input
          type="search"
          placeholder="Search"
          className="dashboard-form-input form-control position-relative rounded-pill"
        />
        <i className="bi bi-search"></i>
      </form>

      <div className="dashboard-user-details d-flex justify-content-between ">
        <div className="dashboard-user d-flex">
          <img src={userImage} alt="user" />
          <div className="user d-flex align-items-center">
            <p>Maitama General Hospital</p>
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
        <button title="Mail">
          <i className="bi bi-envelope position-relative">
            <span
              style={{
                transform: "translate(-50%, 3px)",
                padding: "5px",
              }}
              className="position-absolute top-0 rounded-circle bg-danger">
              <span class="visually-hidden">unread messages</span>
            </span>
          </i>
        </button>
        <button title="Notification">
          <i className="bi bi-bell position-relative">
            <span
              style={{
                transform: "translate(-115%, 3px)",
                padding: "5px",
              }}
              className="position-absolute top-0 rounded-circle bg-danger">
              <span class="visually-hidden">unread messages</span>
            </span>
          </i>
        </button>
        <button title="Setting">
          <i className="bi bi-gear-fill" style={{ color: "black" }}></i>
        </button>
      </div>
    </header>
  );
};
export default MainHeader;
