// components/Autocomplete/Autocomplete.jsx
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { autocompleteThunk } from "../redux/autocomplete";
import { setCurrentPage, searchThunk } from "../redux/search";

export const Autocomplete = ({
  placeholder = "Search recipes...",
  className = "",
}) => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.autocomplete);
  const search = useSelector((state) => state.search);

  const timerRef = useRef(null);
  const inputRef = useRef(null);
  const onSelect = (searchTerm) => {
    dispatch(searchThunk(searchTerm));
    dispatch(setCurrentPage(1));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Clear previous timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Only search if user typed 2+ letters
    if (value.length >= 2) {
      // Wait 300ms after typing stops before searching
      timerRef.current = setTimeout(() => {
        dispatch(autocompleteThunk(value));
        setShowSuggestions(true);
      }, 300);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const displayText =
      suggestion.display || suggestion.search_value || suggestion;
    setQuery(displayText);
    setShowSuggestions(false);

    if (onSelect) {
      onSelect(displayText);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    setQuery("");

    if (onSelect && query.trim()) {
      onSelect(query.trim());
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Get suggestions from data
  const suggestions = data?.results || data || [];

  return (
    <div className={`search-container ${className}`} ref={inputRef}>
      <form onSubmit={handleSubmit} className="autocomplete-form">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.length >= 2 && setShowSuggestions(true)}
          placeholder={placeholder}
          className="autocomplete-input"
          autoComplete="off"
        />
        <button
          type="submit"
          className="autocomplete-button"
          disabled={search.loading}
        >
          {search.loading ? "searching..." : "search"}
        </button>
      </form>

      {showSuggestions && (
        <div className="suggestions-dropdown">
          {loading ? (
            <div className="suggestion-item loading">Searching...</div>
          ) : error ? (
            <div className="suggestion-item error">Error: {error}</div>
          ) : suggestions.length > 0 ? (
            suggestions.map((suggestion, index) => {
              // Get text to display
              const displayText = suggestion.display || suggestion.search_value;

              return (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {displayText}
                </div>
              );
            })
          ) : query.length >= 2 ? (
            <div className="suggestion-item no-results">No results found</div>
          ) : null}
        </div>
      )}
    </div>
  );
};
