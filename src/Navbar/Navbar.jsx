import { useState } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500">NAYEEM</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:text-orange-500 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-black rounded-md hover:bg-orange-600 transition"
          >
            <FaDownload />
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-orange-500 text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex justify-end px-4">
          <div className="relative mt-2">
            {/* Dropdown Arrow */}
            <div className="absolute -top-2 right-4 w-3 h-3 rotate-45 bg-black z-[-1]"></div>

            {/* Dropdown Menu */}
            <div className="bg-black py-4 space-y-3 shadow-md w-60 rounded-lg text-center border border-orange-500 z-50">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-orange-500"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
