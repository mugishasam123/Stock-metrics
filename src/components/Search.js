import React from "react";
import { FaSearch } from "react-icons/fa";
import '../styles/search.css'
const Search = () => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search..." />
      <FaSearch className="search" />
    </div>
  );
};

export default Search;
