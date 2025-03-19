import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className=" relative flex items-center space-x-2  p-2 rounded-full  shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="hidden xs:hidden md:inline bg-opacity-0  px-2 py-1 text-md rounded-full text-gray-100 bg-gray-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
     
      <Search className="absolute right-7 text-gray-300" size={20} />
    </div>
  );
};

export default SearchBar;
