import React from "react";

function SearchBar({ busqueda, setBusqueda }) {
    return (
        <input
            type="text" placeholder="Buscar pelicula" value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
        />
    )
}

export default SearchBar;