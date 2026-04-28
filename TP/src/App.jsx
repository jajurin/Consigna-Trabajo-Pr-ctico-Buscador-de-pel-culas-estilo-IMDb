import { useState } from "react";
import MovieList from "./componentes/MovieList";
import SearchBar from "./componentes/SearchBar";

function App() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      <MovieList busqueda={busqueda} />
    </>
  );
}

export default App;