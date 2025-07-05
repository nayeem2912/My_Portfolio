import React from 'react';
import { FaDownload } from "react-icons/fa";

const Navbar2 = () => {
    const navItems = [
    { id:1,name: "Home", link: "#home" },
    { id:2, name: "About", link: "#about" },
    { id:3, name: "Projects", link: "#projects" },
    { id:4, name: "Contact", link: "#contact" },
  ];

    return (
        <div className=' bg-black sticky top-0 z-50 text-white shadow-sm'>
            <div className="navbar max-w-7xl   mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="mr-2.5 md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 text-white hover:text-orange-500 w-25 border border-orange-500 p-2 shadow">
        {navItems.map((item) => (<li key={item.id}>
            <a
              
              href={item.link}
              className="hover:text-orange-500 transition-all duration-300"
            >
              {item.name}
            </a></li>
          ))}
      </ul>
    </div>
    <h1 className="text-2xl font-bold text-orange-500">NAYEEM</h1>
  </div>
  <div className="navbar-center max-md:hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems.map((item) => ( <li key={item.id}>
            <a
              
              href={item.link}
              className="hover:text-orange-500 transition-all duration-300"
            >
              {item.name}
            </a></li>
          ))}
    </ul>
  </div>
  <div className="navbar-end">
    <a
                href="https://drive.google.com/file/d/1PTrkzbZ07xjsTkDDHak6DLalMUvJcvTj/view?usp=drive_link"
                download
                className="inline-flex items-center gap-2 btn btn-xs sm:btn-sm md:btn-md  bg-orange-500 border-none text-black rounded-md hover:bg-orange-600 transition"
              >
                <FaDownload />
                Resume
              </a>
  </div>
</div>
        </div>
    );
};

export default Navbar2;