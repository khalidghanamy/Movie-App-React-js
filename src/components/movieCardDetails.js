import React from "react";

function MovieCardDetails({
  data: { poster_path, original_title, original_language, budget, overview },
}) {
  const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <>
      <div className="card-details row m-5 p-0">
        <div className="card col-lg-4 col-md-6 p-0 m-0">
          <img src={img} className="card-img "  />
        
       </div>
       <div className="col-lg-8 col-md-6 d-flex align-items-center">
          <table className="table card  table-bordered m-0 p-0">
            <tbody className="m-2 my-0">
              <tr className="row">
                <th className="col-4" scope="row">Name</th>
                <td className="col-8">{original_title}</td>
              </tr>
              <tr className="row" >
                <th className="col-4" >budget</th>
                <td className="col-8">{budget} $</td>
              </tr>
              <tr className="row">
                <th className="col-4" scope="row">language</th>
                <td className="col-8">{original_language}</td>
              </tr>
              <tr className="row">
                <th className="col-4" scope="row">overview</th>
                <td className="col-8">{overview}</td>
              </tr>
            </tbody>
          </table>
          </div>
      </div>
    </>
  );
}

export default MovieCardDetails;
