import { useEffect, useState } from "react"
import MovieList from "./componentes/MovieList/MovieList"
import SearchBar from "./componentes/SearchBar/SearchBar"
import api from "./componentes/api"
import MovieDetails from "./componentes/movieDetails/MovieDetails"
import Loading from "./componentes/Loader/Loader"
import ErrorMessage from "./componentes/ErrorMessage"
import "./App.css";

function App() {
  const [busqueda, setBusqueda] = useState("")
  const [peliculas, setPeliculas] = useState([])
  const [peliculaElegida, setPeliculaElegida] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const busquedaRealizada =
      busqueda  ? busqueda : "spiderman"

    api.get(`&s=${busquedaRealizada}`)
      .then((res) => {
        setPeliculas(res.data.Search || [])
        setLoading(false)
      })
      .catch(() => {
        setError("Error al cargar películas")
        setLoading(false)
      })
  }, [busqueda])

  const handleSelectMovie = (id) => {
    api.get(`&i=${id}`)
      .then((res) => setPeliculaElegida(res.data))
  }

  return (
    <>
      {!peliculaElegida && (
        <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      )}

      {loading && <Loading />}
    {error && <ErrorMessage mensaje={error} />}

   {!peliculaElegida && !loading && (
  <MovieList
    peliculas={peliculas}
    onSelect={handleSelectMovie}
  />
)}

{peliculaElegida && (
  <MovieDetails
    pelicula={peliculaElegida}
    setPeliculaElegida={setPeliculaElegida}
  />
)}
    </>
  )
}

export default App