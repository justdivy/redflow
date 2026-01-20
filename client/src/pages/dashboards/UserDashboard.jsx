import React from "react";
import { motion } from "framer-motion";
import donor from "../../assets/donor.png";
import { CalendarCheck, MapPin, BellRing, Users } from "lucide-react";

const UserDashboard = () => {
  return (
    <>
      {/* Header Card */}
      <motion.div
        className="bg-gradient-to-r from-red-100 to-red-50 dark:from-red-800/20 dark:to-red-600/10 p-6 rounded-xl flex justify-between items-center mb-8 shadow"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-3xl font-bold text-red-700 dark:text-white mb-1">
            Welcome to RedFlow 🌟
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Stay connected. Find, donate & save lives.
          </p>
        </div>

        <motion.img
          src={donor}
          alt="User Dashboard Art"
          className="w-36 h-36 object-contain"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Nearby Blood Banks",
            desc: "5 Available",
            icon: <MapPin size={26} className="text-red-500" />,
          },
          {
            title: "Blood Requests",
            desc: "3 Pending",
            icon: <BellRing size={26} className="text-yellow-500" />,
          },
          {
            title: "Upcoming Camps",
            desc: "2 This Month",
            icon: <CalendarCheck size={26} className="text-green-500" />,
          },
          {
            title: "Community",
            desc: "1200+ Users",
            icon: <Users size={26} className="text-blue-500" />,
          },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow flex items-center justify-between"
          >
            <div>
              <h4 className="text-gray-500 dark:text-gray-300 text-sm">
                {card.title}
              </h4>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {card.desc}
              </p>
            </div>
            {card.icon}
          </motion.div>
        ))}
      </div>

      {/* Suggestions */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-semibold text-red-700 dark:text-white mb-4">
          Suggestions For You
        </h3>

        <div className="space-y-4">
          {[
            "Check your next donation eligibility date.",
            "Enable location to find nearest blood banks.",
            "Join community campaigns and earn badges!",
          ].map((tip, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.01 }}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white p-4 rounded-lg shadow-sm"
            >
              {tip}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default UserDashboard;
