import "./MovieDetails.css";
import placeholder from "../../assets/6605525.jpg";

function MovieDetails({ pelicula, setPeliculaElegida }) {

  let img = pelicula.Poster;

  if (!pelicula.Poster || pelicula.Poster === "N/A") {
    img = placeholder;
  }

  return (
    <div className="details">

      <button className="volver"
        onClick={() => setPeliculaElegida(null)}
      >
        Volver
      </button>

      <li className="details-card">

        <strong>
          {pelicula.Title} ({pelicula.Year})
        </strong>

        <img
          src={img}
          alt={pelicula.Title}
          onError={(e) => (e.target.src = placeholder)}
        />

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

    </div>
  );
}

export default MovieDetails;