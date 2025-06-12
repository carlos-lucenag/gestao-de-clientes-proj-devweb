import SearchClients from "./SearchClients";

function Navbar() {
  return (
    <nav>
      <h1>Client Management</h1>
      <SearchClients />
      <div className="nav-actions">
        <a href="http://localhost:5173/">Clients</a>
        <a href="http://localhost:5173/new">New Client</a>
      </div>
    </nav>
  );
}

export default Navbar;
