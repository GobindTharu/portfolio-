import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-2  rounded-full border border-purple-900 dark:border-gray-600 shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="hidden xs:hidden bg-transparent xs:hidden focus:outline-none px-2 text-sm w-40 md:w-64 text-gray-900 dark:text-gray-100"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <kbd className="hidden xs:hidden md:inline bg-gray-200 dark:bg-gray-700 px-2 py-1 text-xs rounded text-gray-600 dark:text-gray-300 border border-gray-400 dark:border-gray-500">
        Ctrl+K
      </kbd>
      <Search className=" text-gray-500 dark:text-gray-300 ml-2" size={20} />
    </div>
  );
};

export default SearchBar;
