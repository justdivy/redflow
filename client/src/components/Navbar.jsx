import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsDropletHalf,
  BsHouseDoor,
  BsFillPersonPlusFill,
} from "react-icons/bs";
import { MdOutlineBloodtype, MdOutlineRequestPage } from "react-icons/md";
import {
  FaUser,
  FaSignOutAlt,
  FaTachometerAlt,
  FaBars,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/", icon: <BsHouseDoor /> },
  { name: "Donate", path: "/donate", icon: <MdOutlineBloodtype /> },
  { name: "Request", path: "/request", icon: <MdOutlineRequestPage /> },
];

const Navbar = () => {
const location = useLocation();
const navigate = useNavigate();

const [isOpen, setIsOpen] = useState(false);
const [showProfile, setShowProfile] = useState(false);

const dropdownRef = useRef(null);
const mobileMenuRef = useRef(null);

const token = localStorage.getItem("token");
const isLoggedIn = Boolean(token);

// Role-based redirect will be handled by routing
const dashboardPath = "/dashboard";


  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowProfile(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md fixed top-0 left-0 w-full z-[1000]"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-red-600 text-2xl font-extrabold"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <BsDropletHalf className="text-3xl" />
          </motion.div>
          Red<span className="text-black">-Flow</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <ul className="flex items-center gap-6">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 ${
                    location.pathname === item.path
                      ? "text-red-600 font-semibold"
                      : "hover:text-red-500"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}

            {isLoggedIn && (
              <li>
                <Link
                  to={dashboardPath}
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <FaTachometerAlt />
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          {/* Profile / Login */}
          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setShowProfile(!showProfile)}>
                <FaUserCircle className="text-3xl text-red-600" />
              </button>

              <AnimatePresence>
                {showProfile && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow border"
                  >
                    <Link
                      to="/dashboard/profile"
                      onClick={() => setShowProfile(false)}
                      className="block px-4 py-2 hover:bg-red-50"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="flex items-center gap-1">
                <FaUser />
                Login
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-1 bg-red-600 text-white px-4 py-1.5 rounded-full"
              >
                <BsFillPersonPlusFill />
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-red-600">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            ref={mobileMenuRef}
            className="md:hidden bg-white px-4 py-4 space-y-3"
          >
            {navItems.map((item, i) => (
              <li key={i}>
                <Link to={item.path} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}

            {isLoggedIn && (
              <>
                <li>
                  <Link to={dashboardPath} onClick={() => setIsOpen(false)}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/profile" onClick={() => setIsOpen(false)}>
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
