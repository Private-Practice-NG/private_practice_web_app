import userImage from '../../../assets/images/avatar/avatar-2.png';

const MainHeader = () => {
  return (
    <header className="dashboard-main-header">
      <form className="dashboard-form">
        <label>
          <input
            type="search"
            placeholder="Search"
            className="dashboard-form-input"
          />
          <i className="bi bi-search"></i>
        </label>
      </form>

      <div className="dashboard-user-details">
        <div className="dashboard-user">
          <img src={userImage} alt="user" />
          <div className="user">
            <p>Maitama General Hospital</p>
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
        <i className="bi bi-envelope"></i>
        <i className="bi bi-bell"></i>
        <i className="bi bi-gear"></i>
      </div>
    </header>
  );
};
export default MainHeader;
