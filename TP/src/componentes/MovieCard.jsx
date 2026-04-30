

function MovieCard({ pelicula, onClick }) {
  return (
    <li onClick={onClick}>
      <strong>{pelicula.Title}</strong>
      <img src={pelicula.Poster} alt={pelicula.Title} />
    </li>
  )
}
export default MovieCard