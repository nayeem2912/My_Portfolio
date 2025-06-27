import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu after click
  };

  return (
    <div className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-black">Logo</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-black font-medium">
          <a href="#home" className="hover:text-black" onClick={handleLinkClick}>Home</a>
          <a href="#about" className="hover:text-black" onClick={handleLinkClick}>About</a>
          <a href="#projects" className="hover:text-black" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" className="hover:text-black" onClick={handleLinkClick}>Contact</a>
        </div>

        {/* Resume Button - Desktop Only */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition-all duration-300"
        >
          Resume
        </a>

        {/* Hamburger Menu Icon - Mobile */}
        <div className="md:hidden text-2xl text-black cursor-pointer" onClick={handleToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full px-6 pb-4 flex flex-col gap-4 text-black font-medium">
          <a href="#home" onClick={handleLinkClick} className="hover:text-black">Home</a>
          <a href="#about" onClick={handleLinkClick} className="hover:text-black">About</a>
          <a href="#projects" onClick={handleLinkClick} className="hover:text-black">Projects</a>
          <a href="#contact" onClick={handleLinkClick} className="hover:text-black">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
