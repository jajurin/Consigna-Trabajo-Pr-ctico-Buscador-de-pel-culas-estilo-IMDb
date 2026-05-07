import MovieCard from "../MovieCard/MovieCard"
import "./MovieList.css";

function MovieList({ peliculas, onSelect ,  setBusqueda}) {
  
  return (
    <div>
     <button className="volver"
        onClick={() => setBusqueda("")}
      >
        HOME
      </button>
    <ul>
      {peliculas.map((p) => (
        <MovieCard
          key={p.imdbID}
          pelicula={p}
          onClick={() => onSelect(p.imdbID)}
        />
      ))}
    </ul>
    </div>
  );
}

export default MovieList;