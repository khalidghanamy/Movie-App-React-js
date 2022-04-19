import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";

import React,{useState} from "react"
import Navbar from './components/navbar'
import Movies from './pages/movies'
import MovieDetails from './pages/movieDetails'
import ReactPaginate from "react-paginate"
import {Search} from './components/search'
import SearchResult from "./components/searchResult";


function App(data) {

  const [currentPage,setCurrentPage] = useState(1)
  
  let handlePageChange =(e)=>{
  
  setCurrentPage(e.selected+1)
}

console.log(<Search/>?0:1);

  return (
  <>
  

  
  <BrowserRouter>
{/* ==================================================== */}
    <Navbar/>
    <div className="row  mt-3 d-flex text-center mx-5 ">
     <Search/>
      </div>

{/* ==================================================== */}

    <Routes>

      {/* <Route path="/" element={< Home />}/>  */}

      <Route path="/movies" element={< Movies data={currentPage} />}/>
      <Route path="/search" element={< SearchResult />}/>
      <Route path='/:id' element={< MovieDetails />}/>
      


      

    </Routes>

  </BrowserRouter>


  <ReactPaginate  
     previousLabel={'previous'}
    nextLabel={'next'}
    breakLabel={'....'}
    pageCount={10}
    marginPagesDisplayed={3}
    pageRangeDisplayed={6}
    onPageChange={handlePageChange}
    containerClassName={'pagination justify-content-center'}    
    pageClassName={'page-item mt-3'}
    pageLinkClassName={'page-link'}
    previousLinkClassName={'page-link'}
    previousClassName={'page-item mt-3'}
    nextClassName={'page-item mt-3'}
    nextLinkClassName={'page-link'}
    breakLinkClassName={'page-link'}
    breakClassName={'page-item'}
    activeClassName={'page-item'}
    disabledClassName={"page-item"}

    /> 
  
  
  </>
  
  );}

export default App;
