import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const response = await fetch("http://localhost:3000/api/clients");
    const data = await response.json();
    setClients(data);
  };

  return (
    <div className="App">
      <h1>Clients</h1>
      {clients.map((client) => (
        <div key={client.id}>
          <ol>
            {client.first_name}, {client.last_name}, {client.email}, {client.phone}, {client.city}
          </ol>
        </div>
      ))}
    </div>
  );
}

export default App;
