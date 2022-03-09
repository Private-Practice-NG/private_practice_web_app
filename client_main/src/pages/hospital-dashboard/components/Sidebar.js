import NavLinks from './NavLinks';

const Sidebar = () => {
  return (
    <header className="dashboard-header">
      <h1 className="dashboard-title">Private Practice</h1>

      <nav className="dashboard-nav">
        <NavLinks />
      </nav>
    </header>
  );
};
export default Sidebar;
