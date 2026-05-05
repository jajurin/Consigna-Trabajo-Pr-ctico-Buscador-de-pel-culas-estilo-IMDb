import { useEffect, useState } from "react"
import MovieList from "./componentes/MovieList/MovieList"
import SearchBar from "./componentes/SearchBar"
import api from "./componentes/api"
import MovieDetails from "./componentes/MovieDetails"
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

    const busquedaRealizada = busqueda && busqueda.length > 2 ? busqueda : "spiderman"

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
  <main>

    {!peliculaElegida && (
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
    )}

    {loading && <p>Cargando...</p>}
    {error && <p>{error}</p>}

    {!peliculaElegida ? (
      <MovieList
        peliculas={peliculas}
        onSelect={handleSelectMovie}
      />
    ) : (
      <MovieDetails
        pelicula={peliculaElegida}
        setPeliculaElegida={setPeliculaElegida}
      />
    )}

  </main>
)
}

export default App