import React from 'react';
import { motion } from 'framer-motion';
import { FaUserEdit } from 'react-icons/fa';

const ProfileSection = () => {
  const user = {
    name: 'Rahul Sharma',
    role: 'Donor',
    email: 'rahul.sharma@example.com',
    phone: '+91 9876543210',
    joined: 'Jan 5, 2024',
    donations: 14,
    requests: 5,
    status: 'Active'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 max-w-4xl mx-auto"
    >
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-red-500"
        />
        <div className="flex-1 space-y-2">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{user.name}</h2>
          <p className="text-red-500 font-semibold">{user.role}</p>
          <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
          <p className="text-gray-600 dark:text-gray-300">{user.phone}</p>
          <p className="text-sm text-gray-400 dark:text-gray-500">Joined: {user.joined}</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl">
          <FaUserEdit /> Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-gradient-to-r from-red-400 to-red-500 p-4 rounded-xl text-white shadow">
          <h4>Donations</h4>
          <p className="text-3xl font-bold">{user.donations}</p>
        </div>
        <div className="bg-gradient-to-r from-pink-400 to-pink-500 p-4 rounded-xl text-white shadow">
          <h4>Requests Made</h4>
          <p className="text-3xl font-bold">{user.requests}</p>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-green-500 p-4 rounded-xl text-white shadow">
          <h4>Status</h4>
          <p className="text-2xl font-semibold">{user.status}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileSection;
