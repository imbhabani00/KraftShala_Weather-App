import React, { useState } from 'react';
import useDarkMode from '../hooks/usedarkMode';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [darkMode] = useDarkMode();

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        className={`border rounded-l px-4 py-2 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'text-black'}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city name"
      />
      <button
        className={`px-4 py-2 rounded-r ${darkMode ? 'bg-gray-600 text-white' : 'bg-blue-500 text-white'}`}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
