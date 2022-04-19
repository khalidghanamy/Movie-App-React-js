import React ,{useState,useEffect, createFactory} from "react";
import ReactPaginate from "react-paginate";
import Movie from '../pages/movies'
import App from '../App'
function PagePaginate() {

    const [currentPage,setCurrentPage] = useState(1)
  
    let handlePageChange =(e)=>{
    
    setCurrentPage(e.selected+1)
    

  }
    return ( <>
    
    
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
    
        
    
    
    </> );
}

export default PagePaginate;