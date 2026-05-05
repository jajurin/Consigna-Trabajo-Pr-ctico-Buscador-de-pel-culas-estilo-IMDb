import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ setBusqueda }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBusqueda(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar pelicula"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;