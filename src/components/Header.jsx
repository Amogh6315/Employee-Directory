import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Header({ onSearch, toggleDarkMode }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value) => {
    setSearchValue(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchValue("");
    onSearch("");
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow mx-4 mt-4 px-6 py-4 rounded-md flex items-center justify-between">
      {/* Search bar */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search employees..."
            value={searchValue}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full px-4 py-2 pr-8 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchValue && (
            <button
              onClick={clearSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <IoMdClose size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Dark mode button */}
      {/* <button
        onClick={toggleDarkMode}
        className="ml-4 px-3 py-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
      >
        🌙
      </button> */}
    </header>
  );
}
