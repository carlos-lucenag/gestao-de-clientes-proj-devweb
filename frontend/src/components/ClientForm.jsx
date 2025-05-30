import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ClientForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    cpf: "",
    phone: "",
    city: "",
  });

  useEffect(() => {
    if (isEditing) {
      const fetchClient = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/clients/${id}`
          );
          setFormData(response.data);
        } catch (error) {
          console.error("Erro ao buscar cliente:", error);
          navigate("/");
        }
      };
      fetchClient();
    }
  }, [id, isEditing, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:3000/api/clients/${id}`, formData);
      } else {
        await axios.post("http://localhost:3000/api/clients", formData);
      }
      navigate("/");
    } catch (error) {
      console.error("Erro ao salvar cliente:", error);
    }
  };

  return (
    <div className="card form-card">
      <h2>{isEditing ? "Edit Client" : "New Client"}</h2>
      <form onSubmit={handleSubmit} className="client-form">
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="btn-secondary"
          >
            Cancel
          </button>
          <button type="submit" className="btn-primary">
            {isEditing ? "Atualizar" : "Cadastrar"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClientForm;
