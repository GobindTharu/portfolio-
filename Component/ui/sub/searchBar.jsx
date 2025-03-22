"use client"
import { useState } from "react";
import { Search } from "lucide-react";
import { toast } from "react-toastify";
import { data } from "@/Constants/constants";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();

  const handleSearch = (query) => {
    setSearch(query);
    setResults(
      data.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const handleSelectResult = (result) => {
    setSearch(result);
    setResults([]);

    toast.success("Search successful!");

  };

  const handleClickSearchIcon = () => {
    toast.success("Search successful!");

    router.push("/target-page"); 
  };

  return (
    <div className="relative flex items-center space-x-2 p-2 rounded-full shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 text-md rounded-full text-gray-100 bg-gray-500 focus:outline-none"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Search
        className="absolute right-7 text-gray-100 cursor-pointer"
        size={20}
        onClick={handleClickSearchIcon}
      />
      {search && results.length > 0 && (
        <ul className="absolute top-full left-0 mt-2 w-full bg-gray-700 text-white rounded-md shadow-lg z-10">
          {results.map((result, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
              onClick={() => handleSelectResult(result)}
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
