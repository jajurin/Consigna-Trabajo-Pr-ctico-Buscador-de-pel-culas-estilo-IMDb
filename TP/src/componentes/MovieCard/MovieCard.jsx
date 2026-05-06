import "./MovieCard.css";
import imagen from "../../assets/6605525.jpg"; //Alfianl la forma de hacer lo de falta de imagen es importando

function MovieCard({ pelicula, onClick }) {
  let img = pelicula.Poster;

  if (!pelicula.Poster || pelicula.Poster === "N/A") {
    img = imagen;
  }

  return (
    <li onClick={onClick}>
      <strong>{pelicula.Title}</strong>
     <img
        src={img}
        alt={pelicula.Title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = imagen;  //usamos on error por si no carga, algunas pelis no cargaban pero otras no agarrabn la url
        }}
      />
    </li>
  );
}

export default MovieCard;