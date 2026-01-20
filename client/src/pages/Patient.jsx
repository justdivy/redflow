import { motion } from "framer-motion";
import {
  FaUserInjured,
  FaTint,
  FaHospital,
  FaHistory,
} from "react-icons/fa";

const cards = [
  {
    title: "Request Blood",
    desc: "Send blood request to nearby hospitals & donors",
    icon: <FaTint />,
    path: "/request",
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Nearby Hospitals",
    desc: "View hospitals and blood banks near you",
    icon: <FaHospital />,
    path: "/hospitals",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Request History",
    desc: "Track your past blood requests",
    icon: <FaHistory />,
    path: "/patient/history",
    color: "bg-green-100 text-green-600",
  },
];

const Patient = () => {
  return (
    <div className="pt-28 px-4 min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 flex items-center gap-3">
          <FaUserInjured className="text-red-600" />
          Patient Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Manage blood requests and track your medical needs easily
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer p-6 group"
            onClick={() => (window.location.href = card.path)}
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-xl text-2xl ${card.color}`}
            >
              {card.icon}
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {card.title}
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              {card.desc}
            </p>

            <span className="inline-block mt-4 text-sm text-red-600 font-medium group-hover:underline">
              Explore →
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-6xl mx-auto mt-14 bg-white rounded-2xl shadow p-6 border-l-4 border-red-500"
      >
        <h3 className="font-semibold text-gray-800">
          ❤️ Why Red-Flow for Patients?
        </h3>
        <p className="text-gray-600 mt-2 text-sm">
          Red-Flow connects patients with hospitals and donors in real-time,
          ensuring fast and reliable access to blood during emergencies.
        </p>
      </motion.div>
    </div>
  );
};

export default Patient;
