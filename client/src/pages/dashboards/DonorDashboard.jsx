import React from "react";
import { motion } from "framer-motion";
import { Droplet, Activity, CalendarDays, Heart } from "lucide-react";
import donor from "../../assets/donor.png";

const DonorDashboard = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="bg-red-100 dark:bg-red-800 rounded-xl p-6 mb-8 flex items-center justify-between"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-3xl font-bold text-red-700 dark:text-white mb-2">
            Welcome, Lifesaver! 🩸
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Here's a quick overview of your recent activities and stats.
          </p>
        </div>

        <motion.img
          src={donor}
          alt="Blood Donation Art"
          className="w-40 h-40 object-contain"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        />
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Total Donations",
            value: "08",
            icon: <Droplet className="text-red-600" size={28} />,
          },
          {
            title: "Last Donation",
            value: "March 22, 2025",
            icon: <CalendarDays className="text-yellow-500" size={28} />,
          },
          {
            title: "Next Eligible",
            value: "May 20, 2025",
            icon: <Heart className="text-green-500" size={28} />,
          },
          {
            title: "Lives Impacted",
            value: "24+",
            icon: <Activity className="text-purple-600" size={28} />,
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md flex items-center justify-between"
          >
            <div>
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                {card.title}
              </p>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {card.value}
              </h3>
            </div>
            {card.icon}
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold mb-4 text-red-700 dark:text-white">
          Recent Donation Activity
        </h3>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md space-y-4">
          {[
            "Donated blood at City Hospital - March 22, 2025",
            "Received Thank You badge from RedFlow - March 23, 2025",
            "Next donation reminder set for May 20, 2025",
          ].map((activity, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.01 }}
              className="p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
            >
              {activity}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default DonorDashboard;
