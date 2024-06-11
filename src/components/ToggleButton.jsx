import React from 'react';

const ToggleButton = ({ onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
    >
      Toggle Dark Mode
    </button>
  );
};

export default ToggleButton;
