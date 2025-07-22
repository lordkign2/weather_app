import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query.trim());
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-2 max-w-xl mx-auto"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a city (e.g. London)"
        className="flex-1 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
      >
        Search
      </button>
    </form>
  );
}
