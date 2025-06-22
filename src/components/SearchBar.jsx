import React from "react";
import { FaSearch } from "react-icons/fa";
import "../assets/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="게임을 검색하세요..." />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;
