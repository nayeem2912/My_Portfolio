import { FaGithub, FaLinkedin, FaArrowUp, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-4 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Name & Year */}
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-xl font-bold text-orange-500">MD Omar Faruk Nayeem</h3>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Middle: Social Links */}
        <div className="flex gap-4 text-xl text-orange-400">
          <a
            href="https://github.com/nayeem2912"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-omar-faruk-nayeem-489a11372/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/8801575162723"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:omarnayeem32@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-full flex items-center gap-2 text-sm"
        >
          <FaArrowUp />
          Top
        </button>
      </div>
    </footer>
  );
};

export default FooterSection;
