import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsDropletFill } from "react-icons/bs";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaUsersLine } from "react-icons/fa6";
import Swal from "sweetalert2";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bloodGroup: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, bloodGroup, role } = formData;

    if (!name || !email || !password || !confirmPassword || !bloodGroup || !role) {
      Swal.fire("Oops!", "Please fill in all fields", "error");
      return;
    }

    if (password.length < 6) {
      Swal.fire(
        "Weak Password",
        "Password must be at least 6 characters",
        "warning"
      );
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire("Mismatch", "Passwords do not match", "error");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        { name, email, password, bloodGroup, role },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      Swal.fire({
        icon: "success",
        title: `Welcome ${res.data?.user?.name || "User"}!`,
        text: "Registration successful 🎉",
        timer: 2000,
        showConfirmButton: false,
      });

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        bloodGroup: "",
        role: "",
      });

      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.message ||
          "Server not responding. Try again later.",
        "error"
      );
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-160px)] mt-[80px] mb-[80px] bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center px-4">
      {/* Background */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-red-400 opacity-30 rounded-full blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-red-200 opacity-20 rounded-full blur-2xl"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2 }}
      />

      {/* Card */}
      <motion.div
        className="relative z-10 bg-white/90 backdrop-blur-sm px-6 py-8 rounded-2xl shadow-xl w-full max-w-sm border border-red-200"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex justify-center mb-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="bg-red-500 p-2 rounded-full text-white text-lg shadow"
          >
            <BsDropletFill />
          </motion.div>
        </div>

        <h2 className="text-2xl font-bold text-center text-red-600">
          Join Red-Flow
        </h2>
        <p className="text-sm text-center text-gray-500 mb-5">
          Create your account and save lives ❤️
        </p>

        <form onSubmit={handleRegister} className="space-y-3">
          <Input icon={<FaUser />} name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          <Input icon={<FaEnvelope />} name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <PasswordInput
            icon={<FaLock />}
            name="password"
            placeholder="Password"
            value={formData.password}
            show={showPassword}
            toggle={() => setShowPassword(!showPassword)}
            onChange={handleChange}
          />
          <PasswordInput
            icon={<FaLock />}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            show={showConfirmPassword}
            toggle={() => setShowConfirmPassword(!showConfirmPassword)}
            onChange={handleChange}
          />
          <Input icon={<BiSolidDonateBlood />} name="bloodGroup" placeholder="Blood Group" value={formData.bloodGroup} onChange={handleChange} />
          <Input icon={<FaUsersLine />} name="role" placeholder="Role (patient / donor / hospital)" value={formData.role} onChange={handleChange} />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg mt-2 shadow"
          >
            Register
          </motion.button>
        </form>

        <p className="text-center text-xs text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-red-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

/* Reusable Inputs */
const Input = ({ icon, ...props }) => (
  <div className="flex items-center border border-red-300 bg-red-50 rounded-lg px-3 py-2">
    <span className="text-red-500 mr-2 text-sm">{icon}</span>
    <input {...props} className="w-full bg-transparent outline-none text-sm" required />
  </div>
);

const PasswordInput = ({ icon, show, toggle, ...props }) => (
  <div className="flex items-center border border-red-300 bg-red-50 rounded-lg px-3 py-2">
    <span className="text-red-500 mr-2 text-sm">{icon}</span>
    <input
      {...props}
      type={show ? "text" : "password"}
      className="w-full bg-transparent outline-none text-sm"
      required
    />
    <span onClick={toggle} className="ml-2 text-red-400 cursor-pointer text-sm">
      {show ? <AiFillEyeInvisible /> : <AiFillEye />}
    </span>
  </div>
);

export default Register;
