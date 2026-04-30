  import { useState } from "react";
  import MovieList from "./componentes/MovieList";
  import SearchBar from "./componentes/SearchBar";

  function App() {
    const [busqueda, setBusqueda] = useState("");
    const [peliculaElegida, setPeliculaElegida] = useState(null);

    return (
      <>
        <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
        <MovieList busqueda={busqueda} peliculaElegida={peliculaElegida} setPeliculaElegida={setPeliculaElegida} />
      </>
    );
  }

  export default App;