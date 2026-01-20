import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaUsers, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-white to-red-100 min-h-screen px-6 relative overflow-hidden">

      {/* Blurred Animated Background Circles */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 -left-20 w-72 h-72 bg-red-300 opacity-20 rounded-full filter blur-3xl z-0"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-red-200 opacity-20 rounded-full filter blur-2xl z-0"
      />

      {/* Hero Section */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto z-10 relative"
      >
        <h1 className="text-5xl font-extrabold text-red-600 tracking-tight">
          About <span className="text-black">Red-Flow</span>
        </h1>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          We are a mission-driven platform revolutionizing blood donation and emergency care—connecting donors, hospitals, and patients through a smart digital ecosystem.
        </p>
      </motion.div>

      {/* Our Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 z-10 relative items-center"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
          alt="Blood Donation"
          className="w-full max-w-md mx-auto"
        />
        <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-red-500 mb-4">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Born out of compassion, Red-Flow was created to bridge the gap in emergency services. We leverage technology to ensure every blood need is fulfilled with accuracy and speed—saving lives every second.
          </p>
        </div>
      </motion.div>

      {/* Mission and Vision */}
      <div className="mt-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 z-10 relative">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white bg-opacity-90 backdrop-blur-xl p-6 rounded-3xl flex items-start gap-5 shadow-lg"
        >
          <FaBullseye className="text-red-600 text-4xl mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-red-600">Our Mission</h3>
            <p className="text-gray-700 mt-2">
              To ensure timely, safe, and accessible blood for everyone in need—anywhere, anytime.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-red-100 p-6 rounded-3xl flex items-start gap-5 shadow-lg"
        >
          <FaHeartbeat className="text-red-500 text-4xl mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-red-500">Our Vision</h3>
            <p className="text-gray-700 mt-2">
              To create India’s most trusted blood donation and ambulance service network through smart collaboration and innovation.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-28 text-center max-w-5xl mx-auto z-10 relative"
      >
        <h2 className="text-4xl font-extrabold text-red-600 mb-6">Meet the Heroes Behind Red-Flow</h2>
        <p className="text-gray-600 text-lg">
          A blend of tech minds and medical professionals building a life-saving revolution.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-5 rounded-2xl shadow-xl w-60 text-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-red-300"
            />
            <h4 className="font-semibold text-red-600 text-lg">Raj Soni</h4>
            <p className="text-sm text-gray-600">Founder & Full Stack Dev</p>
          </motion.div>
          {/* Add more team cards as needed */}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
