import React from "react";
import SearchBar from "../sub/searchBar";
import NavbarIcons from "../sub/NavIcons";
const SearchComponent = () => {
  return (
    <div className="flex items-center space-x-4  shadow-sm">
      <SearchBar />
      <NavbarIcons />
    </div>
  );
};

export default SearchComponent;
