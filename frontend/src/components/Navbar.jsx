import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <h1>Client Management</h1>
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Clients</Link>
          <Link to="/new" className="navbar-link">New Client</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 