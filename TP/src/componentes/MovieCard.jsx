import MovieDeatils from "./MovieDetails";
function MovieCard({ pelicula }) {
    return (
        <li key={pelicula.imdbID} onClick={<MovieDeatils />}>
            <strong>
                {pelicula.Title} ({pelicula.Year}) ({pelicula.Type})
            </strong>
            <br />
            <img src={pelicula.Poster} alt={pelicula.Title} />
        </li>
    );
}   
export default MovieCard