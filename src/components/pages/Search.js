import React from "react";

function Search(props) {
  return (
    <div>
      <h1>Search Pupper By Breed!</h1>
      <p>
      search a pupper here!
      </p>
      <form className="form-inline my-2 my-md-0 searchForm">
      <label>Breed Name:  </label>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
  );
}

export default Search;
