
    function MovieDeatils({pelicula}) {

    return (
<li>
      <strong>
        {pelicula.Title} ({pelicula.Year})
      </strong>

      <img src={pelicula.Poster} alt={pelicula.Title} />

      <p><b>Género:</b> {pelicula.Genre}</p>
      <p><b>Director:</b> {pelicula.Director}</p>
      <p><b>Actores:</b> {pelicula.Actors}</p>
      <p><b>Sinopsis:</b> {pelicula.Plot}</p>
      <p><b>Duración:</b> {pelicula.Runtime}</p>
      <p><b>Idioma:</b> {pelicula.Language}</p>
      <p><b>País:</b> {pelicula.Country}</p>
      <p><b>Premios:</b> {pelicula.Awards}</p>
      <p><b>IMDb:</b> {pelicula.imdbRating}</p>
    </li>
    )
}
export default MovieDeatils