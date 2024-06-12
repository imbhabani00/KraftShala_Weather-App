import React from 'react';
import { motion } from 'framer-motion';
import useDarkMode from '../hooks/usedarkMode';

const Header = () => {
  const [darkMode] = useDarkMode();

  return (
    <div>
      <motion.header
        className={`p-6 ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-900' : 'bg-gradient-to-r from-blue-500 to-purple-600'} text-white text-center shadow-lg`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl font-bold tracking-wide"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Weather App
        </motion.h1>
      </motion.header>
      <motion.div
        className="flex justify-center mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
       
      </motion.div>
    </div>
  );
};

export default Header;
