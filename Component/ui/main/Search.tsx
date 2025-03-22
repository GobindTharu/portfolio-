import React from "react";
import NavbarIcons from "../sub/NavIcons";
import SearchBar from "../sub/searchBar";
const SearchComponent = () => {
  return (
    <div className="flex items-center space-x-4  shadow-sm">
      <SearchBar />
      <NavbarIcons />
    </div>
  );
};

export default SearchComponent;
