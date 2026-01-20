import { useState } from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const AdminTopbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`flex justify-between items-center p-4 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-900"}`}>
      {/* Search bar */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 px-4 py-2 rounded-lg w-64 text-white"
        />
        <FaSearch className="text-gray-500" />
      </div>

      {/* Icons and Profile */}
      <div className="flex items-center gap-6">
        <button onClick={() => setDarkMode(!darkMode)} className="text-lg">
          {darkMode ? "🌙" : "☀️"}
        </button>
        <FaBell className="text-xl cursor-pointer" />
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-2xl" />
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;
