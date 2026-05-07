import { useEffect, useState } from "react"
import MovieList from "./componentes/MovieList/MovieList"
import SearchBar from "./componentes/SearchBar/SearchBar"
import api from "./componentes/api"
import MovieDetails from "./componentes/movieDetails/MovieDetails"
import Loading from "./componentes/Loader/Loader"
import ErrorMessage from "./componentes/ErrorMessage/ErrorMessage"
import Header from "./componentes/Header/Header"
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
  <>
    <SearchBar setBusqueda={setBusqueda} />

  </>
)}
 {!peliculaElegida && !busqueda && !error && (
  <>
    <Header />

  </>
)}
    {loading && <Loading />}

    {error && <ErrorMessage mensaje={error} />}

    { !loading &&   peliculas.length === 0 && (
    <ErrorMessage mensjae="No se encontraron peliculas" setBusqueda={setBusqueda}/> //no lo podemos setear aca
    )}

    {!peliculaElegida && !loading && !error && peliculas.length > 0 && (
      <MovieList
        peliculas={peliculas}
        onSelect={handleSelectMovie}
        setPeliculaElegida={setPeliculaElegida}
       setBusqueda={setBusqueda}
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