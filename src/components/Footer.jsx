import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">NewsBlog</h2>
          <p className="text-gray-400 mt-2">
            Stay updated with the latest news from around the world.  
            Trusted news, unbiased reporting.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <a href="#" className="text-gray-400 hover:text-white transition">Home</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Categories</a>
          <a href="#" className="text-gray-400 hover:text-white transition">About Us</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
        </div>

        {/* Right Section - Newsletter & Social Links */}
        <div>
          <h3 className="text-lg font-semibold">Subscribe to our Newsletter</h3>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l bg-gray-800 text-white outline-none border-none"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 text-sm">
        © {new Date().getFullYear()} NewsBlog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
