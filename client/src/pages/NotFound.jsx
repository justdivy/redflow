// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdErrorOutline } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 px-6">
      <motion.div
        className="text-center max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <MdErrorOutline className="text-red-500 text-7xl mx-auto animate-bounce mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
