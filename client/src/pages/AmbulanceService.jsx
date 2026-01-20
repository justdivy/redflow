import React from "react";
import { motion } from "framer-motion";
import { FaAmbulance, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const AmbulanceService = () => {
  const defaultLocation = [28.6139, 77.209]; // Example: Delhi coordinates

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-br from-white to-red-100 relative">
      {/* Animated Background Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-red-300 opacity-20 rounded-full z-0"
      />

      {/* Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 z-10 relative px-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600">
          Emergency Ambulance Service
        </h1>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Fast, reliable, and life-saving support at your fingertips. Request an
          ambulance instantly or call our hotline for help.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10 z-10 relative max-w-6xl mx-auto px-4">
        {/* Request Form */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white bg-opacity-60 backdrop-blur-md rounded-3xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            Request an Ambulance
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg border border-red-200 focus:ring-2 focus:ring-red-400"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full p-3 rounded-lg border border-red-200 focus:ring-2 focus:ring-red-400"
            />
            <input
              type="text"
              placeholder="Current Location"
              className="w-full p-3 rounded-lg border border-red-200 focus:ring-2 focus:ring-red-400"
            />
            <textarea
              placeholder="Any Medical Notes (Optional)"
              className="w-full p-3 rounded-lg border border-red-200 focus:ring-2 focus:ring-red-400"
              rows="3"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
              type="submit"
            >
              Send Request
            </motion.button>
          </form>
        </motion.div>

        {/* Emergency Info + Map */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="space-y-6"
        >
          <div className="bg-red-100 rounded-2xl p-6 shadow-md flex items-center gap-4">
            <FaPhoneAlt className="text-red-600 text-3xl animate-pulse" />
            <div>
              <h3 className="text-lg font-bold text-red-700">
                Emergency Hotline
              </h3>
              <p className="text-gray-700">Call us: +91 1122 3344 55</p>
            </div>
          </div>

          {/* Live Map */}
          <div className="bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-2xl shadow-md">
            <div className="flex items-center gap-3 mb-2 text-red-500">
              <FaMapMarkedAlt className="text-xl" />
              <h3 className="font-semibold text-lg">Live Location</h3>
            </div>
            <div className="w-full h-64 rounded-xl overflow-hidden z-10">
              <MapContainer
                center={defaultLocation}
                zoom={13}
                scrollWheelZoom={false}
                className="h-full w-full z-10"
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={defaultLocation}>
                  <Popup>Your Location</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ambulance SVG */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/2967/2967343.png"
        alt="ambulance"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-5 left-5 w-40 z-0"
      />
    </div>
  );
};

export default AmbulanceService;
