import "../styles/SearchBar.css";
import { useState } from "react";

const CATEGORIES = ["All", "Frontend", "Backend", "DevOps"];

export default function SearchBar({
  searchTerm,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}) {
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearchChange(inputValue);
    }
  };

  const handleClear = () => {
    setInputValue("");
    onSearchChange("");
  };

  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-row">
        <div className="search-field">
          <span className="search-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar videos..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Buscar videos"
          />
          {inputValue && (
            <button
              className="search-clear"
              onClick={handleClear}
              aria-label="Limpiar búsqueda"
            >
              ×
            </button>
          )}
        </div>

        <div
          className="category-tabs"
          role="group"
          aria-label="Filtrar por categoría"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`cat-btn cat-btn--${cat.toLowerCase()} ${activeCategory === cat ? "cat-btn--active" : ""}`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat === "All" ? "# todo" : cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
