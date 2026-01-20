import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTachometerAlt, FaUsers, FaHospital, FaAmbulance, FaCog } from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-gray-900 text-white min-h-screen p-6 space-y-8"
    >
      <h2 className="text-2xl font-semibold text-center">Red-Flow Admin</h2>
      <ul className="space-y-5 mt-8">
        <li>
          <Link to="/admin/dashboard" className="flex items-center gap-4 text-lg hover:text-gray-400">
            <FaTachometerAlt />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/manage-users" className="flex items-center gap-4 text-lg hover:text-gray-400">
            <FaUsers />
            Manage Users
          </Link>
        </li>
        <li>
          <Link to="/admin/manage-hospitals" className="flex items-center gap-4 text-lg hover:text-gray-400">
            <FaHospital />
            Manage Hospitals
          </Link>
        </li>
        <li>
          <Link to="/admin/manage-requests" className="flex items-center gap-4 text-lg hover:text-gray-400">
            <FaAmbulance />
            Manage Blood Requests
          </Link>
        </li>
        <li>
          <Link to="/admin/settings" className="flex items-center gap-4 text-lg hover:text-gray-400">
            <FaCog />
            Settings
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default AdminSidebar;
