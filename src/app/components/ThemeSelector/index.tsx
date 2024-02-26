"use client";
import { SunMoon } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeSelector() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-lime-400 hover:scale-110 dark:bg-lime-400 dark:text-slate-800"
      >
        <SunMoon />
      </button>
    </div>
  );
}

export default ThemeSelector;
