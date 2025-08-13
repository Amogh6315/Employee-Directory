import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ onSearch }) {
  const [q, setQ] = useState("");

  const clearSearch = () => {
    setQ("");
    onSearch?.("");
  };

  return (
    <header className="sticky top-0 z-30 bg-white/70 dark:bg-gray-800/70 backdrop-blur shadow mx-4 mt-4 px-6 py-4 rounded-md flex items-center justify-between">
      <div className="w-16" />
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search employees..."
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              onSearch?.(e.target.value);
            }}
            className="w-full pl-4 pr-10 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {q && (
            <button
              onClick={clearSearch}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded px-1"
            >
              ×
            </button>
          )}
        </div>
      </div>

      <ThemeToggle />
    </header>
  );
}
