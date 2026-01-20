import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">

      {/* Animated Background */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-red-100 dark:bg-red-900 opacity-30 rounded-full blur-3xl z-0"
        style={{ top: "-150px", right: "-150px" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] bg-pink-200 dark:bg-red-700 opacity-20 rounded-full blur-2xl z-0"
        style={{ bottom: "-150px", left: "-150px" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-20 md:w-64 bg-white dark:bg-gray-900 shadow-xl z-10"
      >
        <Sidebar />
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative z-10 overflow-auto">
        {/* Topbar */}
        <Topbar />

        {/* Role-based Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
