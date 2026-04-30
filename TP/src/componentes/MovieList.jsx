import React, { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import api from "./api"
import Loading from "./Loader"
import MovieDetails from "./MovieDetails"

function MovieList({busqueda, peliculaElegida, setPeliculaElegida}){
    const [peliculas, setPeliculas] = useState([])
    const [loading, setLoading] = useState(true)

    const handleClick = (id) => {
  api.get(`&i=${id}`).then((response) => {
    setPeliculaElegida(response.data)
  })
}

  useEffect(() => {
    setLoading(true)
    if (!busqueda){
      api.get(`&s=spiderman`).then((response)=>{
            setPeliculas(response.data.Search || [])
            setLoading(false)
        })
        .catch((error) =>{
            console.error('error al cargar los pelis: ', error)
            setLoading(false)
        })
    } else if (busqueda.length > 2) {
        api.get(`&s=${busqueda}`)
        .then((response) => {
            setPeliculas(response.data.Search || [])
            setLoading(false)
        })
        .catch((error) => {
            console.error('error al cargar las pelis: ', error)
            setLoading(false)
        })
    } else {
        setPeliculas([]) 
        setLoading(false)
    }

}, [busqueda])
    if (loading) return <Loading />

    return(
        <div>
            <h2>Peliculas</h2>
           {peliculaElegida ? (<MovieDetails pelicula={peliculaElegida} setPeliculaElegida={setPeliculaElegida}/> //osea Alan este if nos conviene, tipo si hay una pelicula elegida que directamente muestre eso y lo demas lo saque, ahi tenemos que hacer un boton para volver con el set
        
    ) : (
            <ul>
        {peliculas.length === 0 ? (
          <p>No se encontraron peliculas</p>
           ) : (
          peliculas.map((pelicula) => (
            <MovieCard
              key={pelicula.imdbID}
              pelicula={pelicula}
              onClick={() => handleClick(pelicula.imdbID)}
            />
          ))
        )}
      </ul>
    )}
    
  </div>
)
}   
export default MovieList