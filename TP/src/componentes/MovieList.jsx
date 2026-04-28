import React, { useEffect, useState } from "react";
import api from "./api";
import Loading from "./Loader";
function MovieList(){
    const [peliculas, setPeliculas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
         api.get(`?apikey=861cbfa7&s=batman`).then((response)=>{
            setPeliculas(response.data.Search)
            setLoading(false)
        })
        .catch((error) =>{
            console.error('error al cargar los usuarios: ', error)
            setLoading(false)
        })
    }, [])

    if (loading) return <Loading />

    return(
        <div>
            <h2>Peliculas</h2>
            <ul>
                {
                      peliculas.map((pelicula)=> (
                        <li key={pelicula.imdbID}>
                            <strong>
                                {pelicula.Title} ({pelicula.Year}) ({pelicula.Type})
                            </strong>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}   
export default MovieList