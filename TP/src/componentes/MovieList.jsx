import MovieCard from "./MovieCard"
import MovieDetails from "./MovieDetails"
import Loading from "./Loader"
import ErrorMessage from "./ErrorMessage"

function MovieList({
  peliculas,
  loading,
  error,
  peliculaElegida,
  setPeliculaElegida,
  onSelect
}) {
  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} />

  return (
    <div>
      <h2>Películas</h2>

      {peliculaElegida ? (
        <MovieDetails
          pelicula={peliculaElegida}
          setPeliculaElegida={setPeliculaElegida}
        />
      ) : (
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
      )}
    </div>
  )
}

export default MovieList