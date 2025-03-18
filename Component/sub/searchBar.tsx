import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-full  shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="hidden xs:hidden md:inline bg-opacity-0  px-2 py-1 text-md rounded-full text-gray-100 bg-gray-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <kbd className="hidden xs:hidden md:inline bg-gray-200 dark:bg-gray-700 px-2 py-1 text-xs rounded text-gray-600 dark:text-gray-300 border border-gray-400 dark:border-gray-500">
        Ctrl+K
      </kbd>
      <Search className=" text-gray-300 dark:text-gray-300" size={20} />
    </div>
  );
};

export default SearchBar;
