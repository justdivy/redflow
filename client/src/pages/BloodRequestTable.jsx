import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import Swal from "sweetalert2";
import donor from "../assets/donor.png";

const requestStats = [
  { day: "Mon", requests: 14 },
  { day: "Tue", requests: 20 },
  { day: "Wed", requests: 11 },
  { day: "Thu", requests: 17 },
  { day: "Fri", requests: 25 },
  { day: "Sat", requests: 9 },
  { day: "Sun", requests: 15 },
];

const BloodRequestPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    hospitalName: "",
    city: "",
    bloodGroup: "",
    units: "",
    requiredDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return Swal.fire("Login Required", "Please login first", "warning");
      }

      await axios.post(
        "http://localhost:5000/api/blood-requests",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire("Success", "Blood request submitted successfully", "success");

      setFormData({
        fullName: "",
        hospitalName: "",
        city: "",
        bloodGroup: "",
        units: "",
        requiredDate: "",
        notes: "",
      });
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.message || "Something went wrong",
        "error"
      );
    }
  };

  return (
    <div className="min-h-screen px-6 pt-28 pb-10 bg-gradient-to-br from-red-50 via-white to-pink-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-red-600 mb-3">
          Request Blood & Save Lives
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Fill out the form below to get blood from the nearest blood bank.
        </p>
        <img src={donor} className="mx-auto mt-6 w-48" />
      </motion.div>

      {/* FORM */}
      <motion.div
        className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold text-red-600 text-center mb-6">
          🩸 Blood Request Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="input-style"
              required
            />
            <input
              name="hospitalName"
              value={formData.hospitalName}
              onChange={handleChange}
              placeholder="Hospital Name"
              className="input-style"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="input-style"
              required
            />
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="input-style"
              required
            >
              <option value="">Select Blood Group</option>
              {["A+","A-","B+","B-","O+","O-","AB+","AB-"].map(bg=>(
                <option key={bg} value={bg}>{bg}</option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="number"
              name="units"
              value={formData.units}
              onChange={handleChange}
              placeholder="Units Required"
              className="input-style"
              required
            />
            <input
              type="date"
              name="requiredDate"
              value={formData.requiredDate}
              onChange={handleChange}
              className="input-style"
              required
            />
          </div>

          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Additional Notes"
            className="input-style"
            rows="3"
          />

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold"
          >
            🚑 Submit Blood Request
          </button>
        </form>
      </motion.div>

      {/* CHART */}
      <motion.div className="mt-16 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
        <h2 className="font-bold mb-4">Weekly Blood Request Stats</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={requestStats}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line dataKey="requests" stroke="#ef4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default BloodRequestPage;
