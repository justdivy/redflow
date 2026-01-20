// src/pages/Donate.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaHospitalAlt, FaMapMarkerAlt } from "react-icons/fa";
import healthcare from "../assets/healthcare.svg";
import LocationMap from "../components/LocationMap"; // Assuming LocationMap is a separate component
import axios from "axios";
import Swal from "sweetalert2";

const hospitals = [
  {
    id: 1,
    name: "City Health Hospital",
    location: "Downtown, Mumbai",
    bloodNeeded: ["A+", "O-"],
  },
  {
    id: 2,
    name: "Red Cross Blood Center",
    location: "Andheri, Mumbai",
    bloodNeeded: ["B+", "AB-"],
  },
  {
    id: 3,
    name: "Hope Care Clinic",
    location: "Bandra, Mumbai",
    bloodNeeded: ["O+", "A-"],
  },
];

const Donate = () => {
  const [coordinates, setCoordinates] = useState(null); // Store selected coordinates
  const [bloodType, setBloodType] = useState("A+"); // Default blood type

  const handleDonate = async () => {
    if (!coordinates) {
      Swal.fire({
        icon: "warning",
        title: "Location Needed",
        text: "Please select a location before donating.",
      });
      return;
    }

    try {
      // Send donation data to the backend
      const response = await axios.post("http://localhost:5000/api/donations", {
        bloodType,
        coordinates,
      });

      Swal.fire({
        icon: "success",
        title: "Donation Successful!",
        text: `You are donating ${bloodType} blood at location (${coordinates.lat}, ${coordinates.lng}).`,
      });

      // Reset after successful donation
      setCoordinates(null);
      setBloodType("A+"); // Reset blood type
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Donation Failed",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white px-6 py-10">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-14">
        {/* Illustration */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <img
            src={healthcare}
            alt="Donate Blood"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-4xl font-bold text-red-600 mb-4 flex items-center gap-2">
            <FaHeartbeat className="text-red-500" /> Donate & Save Lives
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Every drop counts. Use this page to find nearby hospitals that need your blood, or get alerts when a patient near you needs help.
          </p>
        </motion.div>
      </div>

      {/* Location Selection (Map) */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Choose Your Donation Location</h2>
        <div className="w-full md:w-3/4 h-80 mb-8 mx-auto">
          <LocationMap setCoordinates={setCoordinates} />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-red-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-600"
          onClick={handleDonate}
        >
          Confirm Donation
        </motion.button>
      </div>

      {/* Nearby Hospitals Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🏥 Nearby Hospitals Needing Blood</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hospitals.map((hospital) => (
            <motion.div
              key={hospital.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-red-200 rounded-2xl p-5 shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaHospitalAlt className="text-red-400 text-xl" />
                <h3 className="text-xl font-semibold text-red-600">{hospital.name}</h3>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaMapMarkerAlt className="mr-2 text-red-400" />
                {hospital.location}
              </div>
              <p className="text-gray-600 mb-2">Blood Needed:</p>
              <div className="flex flex-wrap gap-2">
                {hospital.bloodNeeded.map((type, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full font-semibold"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
              >
                Donate Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donate;
