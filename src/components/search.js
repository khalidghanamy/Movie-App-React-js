import React, { useEffect, useState } from "react";
import { axiosInstanceSearch } from ".././network/axiosinstant";
import MovieCard from "./movieCard";
import SearchResult from "./searchResult";
import { Link } from "react-router-dom";

export function Search() {
  const [movieName, setMovieName] = useState([]);
  const [moviesearchName, setmovieSearchName] = useState("");

  const  handleChange = (e) => {
    setmovieSearchName(e.target.value);
}

const getData =() => {
    axiosInstanceSearch
    .get(`?query=${moviesearchName}`)
    .then((response) => {
      response.data.results.length > 0 &&
      setMovieName(response.data.results)

    })
    .catch((error) => {
        console.log(error);
      });
}
  const handleSubmitClick = (e) => {
      e.preventDefault();
      getData()

      // return (
      //     <>
      //     {/* <Link
      //   to={{
      //     pathname: "/search",
      //     state: { movie },
      //   }}
      // >
      //   Go to courses
      // </Link> */}

      //     </>
      // )
     
  };



  const movie = movieName.map((res) => {
    return (
        <div
          className="card  col-lg-3 col-md-4 col-sm-6 m-1 d-flex text-center p-0 "
          key={res.id}
        >
          <MovieCard data={res} />
         
        </div>
    );
  });


  return (
    <>
      <form
        className="row d-flex justify-content-center"
        action="action_page.php"
        onSubmit={(e) => handleSubmitClick(e)}
      >
        <input type="text" className='col-6 navbar-search-autocomplete'  style={{ background:'lightblue'}} placeholder="Search.." id="search" onChange={(e) => handleChange(e)}/>
        <button type="submit" className='col-1 btn-danger d-flex justify-content-center'>
          <i className=" fa fa-search "></i>
        </button>
   
      </form>
      <div className="row d-flex justify-content-center mt-5">
      {movie}
      </div>
    </>
  );
}

export default SearchResult(Search);
