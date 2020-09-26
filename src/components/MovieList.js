import React from "react";
import Movie from "./Movie";

const MovieList = ({movies}) => {
    return (
        <div>
            {movies.map((movie) => {
                return (
                    <Movie name={movie.name} price={movie.price} key={movie.id}/>
                )
            })}
        </div>
    )
}


export default MovieList