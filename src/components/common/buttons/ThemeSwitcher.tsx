import { useEffect, useRef, useState } from "react";
import { Palette } from "lucide-react";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "retro",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
];

function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "corporate"
  );

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const isDarkTheme = [
      "dracula",
      "night",
      "luxury",
      "halloween",
      "forest",
      "coffee",
      "dim",
      "black",
      "dark",
      "aqua",
      "business",
    ].includes(theme);

    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.setProperty(
      "--hover-text-color",
      isDarkTheme ? "white" : "black"
    );
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="btn btn-ghost text-primary-content normal-case hover:text-[var(--hover-text-color)]"
      >
        <Palette size={20} className="mr-2" />
        <span className="text-sm font-medium">Theme</span>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 p-4 shadow-xl bg-base-100 rounded-2xl w-64 border border-base-300 z-[60]">
          <h3 className="font-semibold text-base-content mb-3 text-center">
            Choose Theme
          </h3>
          <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
            {themes.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTheme(t);
                  setIsDropdownOpen(false);
                }}
                className={`btn btn-sm capitalize ${
                  theme === t
                    ? "btn-primary"
                    : "btn-outline btn-ghost hover:btn-outline"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;
