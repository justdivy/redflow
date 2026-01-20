import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import donor from "../assets/donor.png"

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-white py-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating Background Art */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-red-200 rounded-full opacity-30 z-0"
      />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-4xl font-extrabold text-red-600 drop-shadow-md">
          Contact <span className="text-gray-800">Us</span>
        </h1>
        <p className="mt-2 text-gray-600 max-w-lg mx-auto">
          We'd love to hear from you. Reach out to us for any questions,
          feedback, or support!
        </p>
      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10 bg-white bg-opacity-60 backdrop-blur-md rounded-3xl shadow-lg p-8 max-w-3xl w-full z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-red-600">
              <FaEnvelope className="text-xl" />
              <span>redflow@support.com</span>
            </div>
            <div className="flex items-center gap-3 text-red-600">
              <FaPhoneAlt className="text-xl" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-red-600">
              <FaMapMarkerAlt className="text-xl" />
              <span>New Delhi, India</span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white bg-opacity-80"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white bg-opacity-80"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white bg-opacity-80"
            ></textarea>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold shadow hover:bg-red-600 transition cursor-pointer"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* SVG Floating Decoration */}
      <motion.div
        initial={{ x: -100, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 0.2 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="absolute bottom-0 left-0 z-0"
      >
        <img
          src={donor}
          alt="blood drop"
          className="w-32 opacity-20"
        />
      </motion.div>
    </div>
  );
};

export default ContactUs;
