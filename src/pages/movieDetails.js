import React ,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import {axiosInstance} from '../network/axiosinstant'
import MovieCardDetails from '../components/movieCardDetails'


function MovieDetails() {

     const {id} = useParams()
     const [movie, setMovie] = useState({})
    useEffect(() => {
       
        axiosInstance.get(`/${id}`)
        .then(response =>
             setMovie(response.data)
             )
        .catch(error => console.log(error))
    
    }, [id]);
    
    
    return (<>
    <div className="movie mt-5">
    <MovieCardDetails data={movie}/>
    </div>
    
    </>  );
}

export default MovieDetails;