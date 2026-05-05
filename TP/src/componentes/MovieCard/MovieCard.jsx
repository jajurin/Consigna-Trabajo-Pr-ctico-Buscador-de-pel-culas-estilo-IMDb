import "./MovieCard.css";

function MovieCard({ pelicula, onClick }) {
  let img = pelicula.Poster;

  if (!pelicula.Poster || pelicula.Poster === "N/A") {
    img = "../../assets/6605525.jpg";
  }

  return (
    <li onClick={onClick}>
      <strong>{pelicula.Title}</strong>
      <img src={img} alt={pelicula.Title} />
    </li>
  );
}

export default MovieCard;