import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/search.css';

const Search = () => (
  <div className="searchBar">
    <input type="text" placeholder="Search..." />
    <FaSearch className="search" />
  </div>
);

export default Search;
