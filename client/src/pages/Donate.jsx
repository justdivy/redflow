// src/pages/Donate.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaHospitalAlt, FaMapMarkerAlt } from "react-icons/fa";
import healthcare from "../assets/healthcare.svg";
import LocationMap from "../components/LocationMap";
// import axios from "axios";
import Swal from "sweetalert2";
import API_BASE_URL from "../config/api";
import api from "../config/api";

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
  const [coordinates, setCoordinates] = useState(null);
  const [bloodType, setBloodType] = useState("A+");

  const handleDonate = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      Swal.fire("Login Required", "Please login to donate blood", "warning");
      return;
    }

    if (!coordinates) {
      Swal.fire("Location Needed", "Please select a location first", "warning");
      return;
    }

    try {
      await api.post(
        "/api/donations",
        { bloodType, coordinates },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      Swal.fire(
        "Donation Successful 🩸",
        `You donated ${bloodType} blood successfully!`,
        "success",
      );

      setCoordinates(null);
      setBloodType("A+");
    } catch (error) {
      Swal.fire(
        "Donation Failed",
        error.response?.data?.message || "Something went wrong",
        "error",
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white px-6 py-10">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-14">
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

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-4xl font-bold text-red-600 mb-4 flex items-center gap-2">
            <FaHeartbeat /> Donate & Save Lives
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Every drop counts. Choose your location and help someone in need.
          </p>

          {/* Blood Type Selector */}
          <select
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            className="border border-red-300 rounded-lg px-4 py-2 mb-4"
          >
            {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((bg) => (
              <option key={bg} value={bg}>
                {bg}
              </option>
            ))}
          </select>
        </motion.div>
      </div>

      {/* Map */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Choose Your Donation Location
        </h2>

        <div className="w-full md:w-3/4 h-80 mb-6 mx-auto">
          <LocationMap setCoordinates={setCoordinates} />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={handleDonate}
          className="bg-red-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-600"
        >
          Confirm Donation
        </motion.button>
      </div>

      {/* Nearby Hospitals */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🏥 Nearby Hospitals Needing Blood
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hospitals.map((hospital) => (
            <motion.div
              key={hospital.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-red-200 rounded-2xl p-5 shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaHospitalAlt className="text-red-400 text-xl" />
                <h3 className="text-xl font-semibold text-red-600">
                  {hospital.name}
                </h3>
              </div>

              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaMapMarkerAlt className="mr-2 text-red-400" />
                {hospital.location}
              </div>

              <p className="text-gray-600 mb-2">Blood Needed:</p>
              <div className="flex flex-wrap gap-2">
                {hospital.bloodNeeded.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full font-semibold"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donate;
