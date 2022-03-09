import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import '../styles/search.css';

const Search = ({ handleSearch, data }) => (
  <div className="searchBar">
    <input type="text" onChange={handleSearch} value={data} placeholder="Search..." />
    <FaSearch className="search" />
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,

};
export default Search;
