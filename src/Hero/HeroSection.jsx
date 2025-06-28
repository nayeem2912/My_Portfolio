// components/HeroSection.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center pt-20 pb-10"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content with animation */}
        <div className="flex-1 space-y-4" data-aos="fade-up" data-aos-delay="100">
          <p className=" text-lg">Hi I am</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-orange-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            MD Omar Faruk Nayeem
          </h1>
          <h2
            className="text-2xl md:text-3xl font-semibold"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Full Stack Developer
          </h2>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-4" data-aos="fade-up" data-aos-delay="400">
            <a href="https://github.com/nayeem2912" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl hover:text-orange-500" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl hover:text-orange-500" />
            </a>
            <a href="mailto:omarnayeem32@gmail.com">
              <FaEnvelope className="text-2xl hover:text-orange-500" />
            </a>
          </div>

          {/* Buttons */}
          <div className="mt-6" data-aos="fade-up" data-aos-delay="500">
  <a
    href="/resume.pdf"
    download
    className="inline-flex items-center gap-2 px-6 py-2 border border-orange-500 rounded-md text-white hover:bg-orange-600 hover:text-white transition duration-300 w-auto"
  >
    <FaDownload />
    Resume
  </a>
</div>

        </div>

       
        {/* Right Image with background blob */}
<div
  className="relative flex-1 flex justify-center items-center"
  data-aos="zoom-in"
  data-aos-delay="300"
>
  {/* Soft Background Circle */}
  <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-orange-500 rounded-full blur-2xl  z-0"></div>

  {/* Main Image */}
  <img
    src="https://i.ibb.co/WvDmQ6Kp/rsz-09-pp-1-Photoroom.png"
    alt="My Profile"
    className="w-[300px] md:w-[400px] rounded-full object-cover  relative z-10"
  />
</div>

      </div>
    </section>
  );
};

export default HeroSection;
