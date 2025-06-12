import React, { useState } from "react";

function SearchClients({ onSearch }) {
  // Recebe a prop onSearch
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue); // Chama a função onSearch passada pelo componente pai
  };

  return (
    <div className="search-clients">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search clients"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchClients;
