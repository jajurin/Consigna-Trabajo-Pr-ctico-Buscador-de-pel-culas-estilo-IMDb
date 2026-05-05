import MovieCard from "../MovieCard/MovieCard"
import "./MovieList.css";

function MovieList({ peliculas, onSelect }) {
  return (
    <ul>
      {peliculas.map((p) => (
        <MovieCard
          key={p.imdbID}
          pelicula={p}
          onClick={() => onSelect(p.imdbID)}
        />
      ))}
    </ul>
  );
}

export default MovieList;