import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";
import { BsDropletFill } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "../contexts/AuthContext.jsx";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      const { user, token } = res.data;

      if (!user || !token) {
        throw new Error("Invalid login response");
      }

    
      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role); // 🔥 MOST IMPORTANT
      localStorage.setItem("user", JSON.stringify(user));

      // save in context
      login(user);

      Swal.fire({
        icon: "success",
        title: `Welcome ${user.name}!`,
        text: `Logged in as ${user.role}`,
        showConfirmButton: false,
        timer: 1500,
      });

      // ✅ ROLE-BASED DASHBOARD REDIRECT
      setTimeout(() => {
        navigate(`/dashboard/${user.role}`);
      }, 1500);

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "Something went wrong",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 bg-red-400 opacity-30 rounded-full blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-red-200 opacity-20 rounded-full blur-2xl"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2 }}
      />

      {/* Login Card */}
      <motion.div
        className="relative z-10 bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-sm border border-red-200"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="bg-red-500 p-3 rounded-full text-white text-xl shadow-lg"
          >
            <BsDropletFill />
          </motion.div>
        </div>

        <h2 className="text-2xl font-extrabold text-center text-red-600 mb-2">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-500 mb-4 text-sm">
          Login to continue saving lives ❤️
        </p>

        {/* Login Form */}
        <form className="space-y-3" onSubmit={handleLogin}>
          <div className="flex items-center border-2 border-red-300 bg-red-50 rounded-xl px-3 py-2">
            <FaUser className="text-red-500 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-sm"
              required
            />
          </div>

          <div className="flex items-center border-2 border-red-300 bg-red-50 rounded-xl px-3 py-2">
            <FaLock className="text-red-500 mr-3" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-sm"
              required
            />
            <span
              className="ml-2 text-red-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-xl mt-1 text-sm shadow-md"
          >
            Login
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-red-600 hover:underline font-medium">
            Register now
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
