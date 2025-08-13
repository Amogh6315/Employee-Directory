import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const getInitial = () => {
    if (typeof localStorage !== "undefined" && localStorage.theme) {
      return localStorage.theme;
    }
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      onClick={toggle}
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
      className="cursor-pointer ml-4 inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
    >
      {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
      <span className="text-sm select-none">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
