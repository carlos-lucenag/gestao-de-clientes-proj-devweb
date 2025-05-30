import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ClientList() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/clients');
      setClients(response.data);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/clients/search?name=${searchTerm}`);
      setClients(response.data);
    } catch (error) {
      console.error('Erro na busca:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este cliente?')) {
      try {
        await axios.delete(`http://localhost:3000/api/clients/${id}`);
        fetchClients();
      } catch (error) {
        console.error('Erro ao excluir cliente:', error);
      }
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="client-list">
      <div className="card search-card">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar clientes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search-buttons">
            <button onClick={handleSearch} className="btn-primary">
              Buscar
            </button>
            <button
              onClick={() => {
                setSearchTerm('');
                fetchClients();
              }}
              className="btn-secondary"
            >
              Limpar
            </button>
          </div>
        </div>
      </div>

      <div className="card table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>CPF</th>
              <th>Phone</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.first_name}</td>
                <td>{client.last_name}</td>
                <td>{client.email}</td>
                <td>{client.cpf}</td>
                <td>{client.phone}</td>
                <td>{client.city}</td>
                <td className="actions-cell">
                  <button
                    onClick={() => navigate(`/edit/${client.id}`)}
                    className="btn-icon"
                    aria-label="Editar"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDelete(client.id)}
                    className="btn-icon btn-danger"
                    aria-label="Excluir"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientList; 