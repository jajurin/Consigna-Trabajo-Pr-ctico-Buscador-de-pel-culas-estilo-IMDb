import { useEffect, useState } from "react"
import MovieList from "./componentes/MovieList"
import SearchBar from "./componentes/SearchBar"
import api from "./componentes/api"

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
    <>
      {!peliculaElegida && (
        <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      )}

      <MovieList
        peliculas={peliculas}
        loading={loading}
        error={error}
        peliculaElegida={peliculaElegida}
        setPeliculaElegida={setPeliculaElegida}
        onSelect={handleSelectMovie}
      />
    </>
  )
}

export default App