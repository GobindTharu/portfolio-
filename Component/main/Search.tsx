import SearchBar from "../sub/searchBar";
import NavbarIcons from "../sub/NavIcons";
import React from "react";
const SearchComponent = () => {
  return (
    <div className="flex items-center space-x-4  shadow-sm">
      <SearchBar />
      <NavbarIcons />
    </div>
  );
};

export default SearchComponent;
