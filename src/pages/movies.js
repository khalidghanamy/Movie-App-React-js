
import React, { useState,useEffect } from 'react';
import {axiosInstance} from '../network/axiosinstant';
import MovieCard from '../components/movieCard'
import PagePaginate from '../components/pagesPaggination';

function Movie({data}) {

const [movies, setMovies] = useState([]);

useEffect(() => {

    axiosInstance.get(`/popular?page=${data}`)

    .then((response) => {
        setMovies(response.data.results)
    })
    .catch((error) => {console.log(error);})
}, [data]);



const movie = movies.map((movie) => {

    return (
       
    
    <div className="card  col-lg-3 col-md-4 col-sm-6 m-1 d-flex text-center p-0 " key={movie.id}>
        <MovieCard  data={movie} />
        </div>
      
    )
})
    return ( <>
    
    <div className="row d-flex justify-content-center m-4">
        
        {movie}
       {/* <PagePaginate /> */}
    </div>
    
    </> );
}

export default Movie;