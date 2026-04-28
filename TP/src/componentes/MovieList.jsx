import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import api from "./api";
import Loading from "./Loader";
function MovieList({busqueda}){
    const [peliculas, setPeliculas] = useState([])
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
    if (!busqueda){
           api.get(`spiderman`).then((response)=>{
          setPeliculas(response.data.Search)
            setLoading(false)
        })
        .catch((error) =>{
            console.error('error al cargar los pelis: ', error)
            setLoading(false)
        })
    }else{
    
if(busqueda.length > 2) {
    api.get(busqueda).then((response) => {
        setPeliculas(response.data.Search || [])
        setLoading(false)
    })
    .catch((error) => {
        console.error('error al cargar las pelis: ', error)
        setLoading(false)
    })}

}

}, [busqueda])
    if (loading) return <Loading />

    return(
        <div>
            <h2>Peliculas</h2>
            <ul>
                {             
                  (peliculas.length === 0) ? <p>No se encontraron peliculas</p> :
                      peliculas.map((pelicula)=> (
                        <MovieCard key={pelicula.imdbID} pelicula={pelicula} />
                      ))
                }
            </ul>
        </div>
    )
}   
export default MovieList