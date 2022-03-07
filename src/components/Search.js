import React from "react";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search..." />
      <FaSearch />
    </div>
  );
};

export default Search;
