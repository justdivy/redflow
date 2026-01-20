import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  ShieldCheck,
  HeartPulse,
  Hospital,
  Droplet,
} from "lucide-react";
import { Navigate } from "react-router-dom";

const roleIcons = {
  user: <User className="text-blue-500" />,
  donor: <Droplet className="text-red-500" />,
  patient: <HeartPulse className="text-green-500" />,
  hospital: <Hospital className="text-purple-500" />,
};

const Profile = () => {
  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch {
    user = null;
  }

  const role = localStorage.getItem("role");

  // 🔒 Protect page
  if (!user || !role) {
    return <Navigate to="/login" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6"
    >
      {/* Header */}
      <motion.div
        className="bg-gradient-to-r from-red-500 to-red-700 text-white rounded-xl p-6 shadow mb-8 flex justify-between items-center"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
      >
        <div>
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-red-100">Manage your account information</p>
        </div>

        <div className="flex items-center gap-3 bg-white text-red-600 px-4 py-2 rounded-full font-semibold shadow">
          {roleIcons[role] || <User />}
          <span className="capitalize">{role}</span>
        </div>
      </motion.div>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Info */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <User className="text-red-500" />
            Basic Information
          </h2>

          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {user.email}
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Role: <span className="capitalize">{role}</span>
            </p>
          </div>
        </motion.div>

        {/* Role Specific Info */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow"
        >
          <h2 className="text-xl font-semibold mb-4">
            {role === "donor" && "Donation Stats"}
            {role === "patient" && "Health Info"}
            {role === "hospital" && "Hospital Details"}
            {role === "user" && "Account Info"}
          </h2>

          <div className="text-gray-600 dark:text-gray-300 space-y-2">
            {role === "donor" && (
              <>
                <p>Total Donations: 8</p>
                <p>Last Donation: March 22, 2025</p>
              </>
            )}

            {role === "patient" && (
              <>
                <p>Blood Requests: 2 Pending</p>
                <p>Appointments: 3 Upcoming</p>
              </>
            )}

            {role === "hospital" && (
              <>
                <p>Patients Admitted Today: 45</p>
                <p>Blood Units Available: 120</p>
              </>
            )}

            {role === "user" && (
              <>
                <p>Community Member</p>
                <p>Joined Campaigns: 4</p>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* Actions */}
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
          Edit Profile
        </button>

        <button className="px-6 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition">
          Change Password
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
