import React from "react";
import { Link } from "react-router-dom";


function MovieCard({ data: { poster_path, id, title, release_date } }) {

  const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  console.log(poster_path);
  return (
    <>
      <img className="card-img m-0 p-0" src={img} alt={title} />
      <div className="card-body card-img-overlay m-0 p-0 d-flex justify-content-center">
    
        <ul className="movie-list row d-flex align-items-center m-0 p-0">
          <li className="item col-12 p-0 my-4  ">{title}</li>
          <li className="item col-12">{release_date}</li>
          <li className="item col-12"> <Link to={`/${id}`} className="movie-button">
            Movie Details
          </Link></li>
        </ul>

      </div>
    </>
  );
}

export default MovieCard;
