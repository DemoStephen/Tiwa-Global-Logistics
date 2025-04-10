import { useState } from "react";

import logo from "/logo.png"; // Assuming you have a logo image in your assets folder
import { Link } from "react-router";

export default function NavContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-[5%] py-2 bg-gradient-to-r from-black via-gray-950 to-black shadow-lg backdrop-blur-md bg-opacity-80">
      <img src={logo} alt="logo" className="w-20 " />

      <button
        className="text-white text-2xl md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent flex flex-col md:flex-row items-center gap-4 text-white text-base font-semibold transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <Link
          to="/"
          className="hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
        >
          <li className="px-3 py-2">Home</li>
        </Link>
        <Link
          to="About"
          className="hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
        >
          <li className="px-3 py-2">About</li>
        </Link>
        <Link
          to="Services"
          className="hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
        >
          <li className="px-3 py-2">Services</li>
        </Link>
        <Link
          to="Contact"
          className="hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
        >
          <li className="px-3 py-2">Contact</li>
        </Link>
      </ul>

      <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-bold rounded-full shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-yellow-700 transition-transform duration-300 transform hover:scale-105">
        Book a Call
      </button>
    </nav>
  );
}
