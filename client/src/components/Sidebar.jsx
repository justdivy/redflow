import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { User, Droplet, Hospital, Shield } from "lucide-react";

/* Role-based menu config */
const sidebarConfig = {
  user: [
    { label: "Dashboard", icon: <User />, path: "/dashboard/user" },
    { label: "Profile", icon: <User />, path: "/dashboard/profile" },
  ],
  donor: [
    { label: "Dashboard", icon: <Droplet />, path: "/dashboard/donor" },
    { label: "Profile", icon: <User />, path: "/dashboard/profile" },
  ],
  patient: [
    { label: "Dashboard", icon: <Shield />, path: "/dashboard/patient" },
    { label: "Profile", icon: <User />, path: "/dashboard/profile" },
  ],
  hospital: [
    { label: "Dashboard", icon: <Hospital />, path: "/dashboard/hospital" },
    { label: "Profile", icon: <User />, path: "/dashboard/profile" },
  ],
};

const Sidebar = () => {
  const location = useLocation();
  const role = localStorage.getItem("role");

  const navItems = sidebarConfig[role] || [];

  return (
    <motion.aside
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-red-600 text-white flex flex-col p-6 shadow-lg"
    >
      {/* Logo */}
      <h2 className="text-3xl font-bold mb-10">RedFlow</h2>

      {/* Menu */}
      <nav className="space-y-3">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 text-lg px-3 py-2 rounded-lg transition
                  ${
                    isActive
                      ? "bg-white text-red-600 font-semibold"
                      : "hover:bg-red-500"
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
