import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  return (
    <button
      onClick={toggle}
      className="relative w-14 h-7 rounded-full glass border border-border transition-all duration-300 flex items-center px-1"
      aria-label="Toggle theme"
    >
      <span
        className={`w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center text-xs ${dark
          ? "translate-x-7 bg-foreground text-background"
          : "translate-x-0 bg-foreground text-background"
          }`}
      >
        {dark ? "☾" : "☀"}
      </span>
    </button>
  );
};

export default ThemeToggle;