import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [setClients] = useState([]);

  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/clients");
      setClients(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/clients/search?name=${searchTerm}`
      );
      setClients(response.data);
    } catch (error) {
      console.error("Erro na busca:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <h1>Client Management</h1>
        </Link>
        <div className="card search-card">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search clients by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="search-buttons">
              <button onClick={handleSearch} className="btn-primary">
                Search
              </button>
              <button
                onClick={() => {
                  setSearchTerm("");
                  fetchClients();
                }}
                className="btn-secondary"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Clients
          </Link>
          <Link to="/new" className="navbar-link">
            New Client
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
