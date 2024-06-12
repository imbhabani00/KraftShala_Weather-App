import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = ({ darkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`p-2 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'} rounded-full focus:outline-none`}
      aria-label="Toggle Dark Mode"
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
    </button>
  );
};

export default ToggleButton;
