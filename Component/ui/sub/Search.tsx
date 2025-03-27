import React from "react";
import NavbarIcons from "./NavIcons";
import SearchBar from "./searchBar";
const SearchComponent = () => {
  return (
    <div className="flex items-center shadow-sm">
      <SearchBar />
      <NavbarIcons />
    </div>
  );
};

export default SearchComponent;
