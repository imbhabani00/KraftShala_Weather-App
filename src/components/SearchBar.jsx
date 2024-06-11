import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        className="border rounded-l px-4 py-2 text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city name"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
