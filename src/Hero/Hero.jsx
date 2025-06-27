import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";


const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-20">
        {/* Left: Text */}
        <div data-aos="fade-up" className="text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black">MD Omar Faruk Nayeem</h1>
          <h2 className="text-2xl font-semibold text-gray-700">Full Stack Web Developer</h2>
          <p className="text-gray-600">
            Hello! I am from Bangladesh, I love building full-stack applications with React and Node.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition"

            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
             className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition"

            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition"

            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* Resume Button */}
          <div className="mt-5">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded font-semibold  transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div data-aos="fade-up">
          <div className="w-72 h-72 rounded-full bg-primary border-4 border-black"></div>
          {/* Replace above div with actual <img> tag when you add image */}
          {/* Example: 
              <img src="/my-photo.png" alt="Profile" className="w-72 h-72 rounded-full object-cover border-4 border-black" />
          */}
        </div>
      </div>
    </section>
    );
};

export default Hero;