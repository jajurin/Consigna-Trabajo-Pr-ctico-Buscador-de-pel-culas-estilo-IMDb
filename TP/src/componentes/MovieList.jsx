import MovieCard from "./MovieCard"

function MovieList({ peliculas, onSelect }) {
  return (
    <ul>
      {peliculas.length === 0 ? (
        <p>No se encontraron películas</p>
      ) : (
        peliculas.map((p) => (
          <MovieCard
            key={p.imdbID}
            pelicula={p}
            onClick={() => onSelect(p.imdbID)}
          />
        ))
      )}
    </ul>
  )
}

export default MovieList