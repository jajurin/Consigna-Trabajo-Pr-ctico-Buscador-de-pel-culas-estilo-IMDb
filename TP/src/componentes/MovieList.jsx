import React, { useEffect, useState } from "react";
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
            console.error('error al cargar los peliculas: ', error)
            setLoading(false)
        })
    }else{
    

    api.get(busqueda).then((response) => {
        setPeliculas(response.data.Search || [])
        setLoading(false)
    })
    .catch((error) => {
        console.error('error al cargar las peliculas: ', error)
        setLoading(false)
    })}
}, [busqueda])
    if (loading) return <Loading />

    return(
        <div>
            <h2>Peliculas</h2>
            <ul>
                {             
                  (peliculas.length === 0) ? <p>No se encontraron peliculas</p> :
                      peliculas.map((pelicula)=> (
                        <li key={pelicula.imdbID}>
                            <strong>
                                {pelicula.Title} ({pelicula.Year}) ({pelicula.Type})
                            </strong>
                               <br />
        <img src={pelicula.Poster} alt={pelicula.Title} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}   
export default MovieList