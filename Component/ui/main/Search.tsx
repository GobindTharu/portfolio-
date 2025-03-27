import React from "react";
import NavbarIcons from "../sub/NavIcons";
import SearchBar from "../sub/searchBar";
const SearchComponent = () => {
  return (
    <div className="flex items-center shadow-sm">
      <SearchBar />
      <NavbarIcons />
    </div>
  );
};

export default SearchComponent;
