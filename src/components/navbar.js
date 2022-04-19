import React from "react";
import { Link, NavLink } from "react-router-dom";
import {Search} from './search'
function Navbar() {
  return (
    <>
      <nav className="d-flex  justify-content-center navbar  bd-navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="row ">
        <NavLink className="nav-link nav-item col-sm-4 col-md-4 col-lg-4 text-center" to="/" >Home</NavLink>
        <NavLink className="nav-link nav-item col-sm-4 col-md-4 col-lg-4 text-center" to="/movies" >Movie</NavLink>
        <NavLink className="nav-link nav-item col-sm-4 col-md-4 col-lg-4 text-center" to="/favorite" >Favorite</NavLink>
           
        </div>

       

      </nav>
    </>
  );
}

export default Navbar;
