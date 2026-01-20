import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Bell, UserCircle } from 'lucide-react';

const Topbar = () => {
  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-4 shadow-md flex justify-between items-center"
    >
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className="hover:text-red-500"><Bell /></button>
        <button className="hover:text-red-500"><Moon /></button>
        <button className="hover:text-red-500"><UserCircle size={28} /></button>
      </div>
    </motion.header>
  );
};

export default Topbar;
