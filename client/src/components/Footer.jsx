import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaHeartbeat } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-8 text-sm">
          {/* Logo & Mission */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaHeartbeat className="text-red-500 text-3xl" />
              <span className="text-xl font-bold tracking-wide">Red-Flow</span>
            </div>
            <p className="text-gray-400">
              Connecting lives through blood. We empower hospitals, donors, and patients with a seamless experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-red-500 font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-red-400">Home</a></li>
              <li><a href="/donate" className="hover:text-red-400">Donate</a></li>
              <li><a href="/request" className="hover:text-red-400">Request Blood</a></li>
              <li><a href="/contact" className="hover:text-red-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-red-500 font-semibold mb-3">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Blood Bank Management</li>
              <li>Online Blood Request</li>
              <li>Ambulance Booking</li>
              <li>Donor Alerts</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-red-500 font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/16FWwDwa6G/" className="hover:text-red-400"><FaFacebookF size={20} /></a>
              <a href="https://www.linkedin.com/in/divyansh-verma-aa0272285/" className="hover:text-red-400"><FaTwitter size={20} /></a>
              <a href="https://www.instagram.com/_divyansh.?igsh=MXc5czdzeGhhY2dyOA==" className="hover:text-red-400"><FaInstagram size={20} /></a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Stay connected with our community to save more lives.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Red-Flow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
