import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const ContactSection = () => {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_bzie3sm", // ← Replace
        "template_85a2y3a", // ← Replace
        form.current,
        "f8y0FyQ0P63ZWmKB_", // ← Replace
      );
      
      toast("✅ Message sent successfully!",result.text);
      form.current.reset();
    } catch (error) {
      
      toast("❌ Failed to send message.", error.text);
    }
  };

  return (
    <section id="contact" className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-500 mb-10 text-center">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-gray-900 p-6 rounded-lg text-white space-y-3">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Contact Information</h3>
            <p>📧 Email: <span className="text-orange-300">omarnayeem32@gmail.com</span></p>
            <p>📞 Phone/💬 WhatsApp:: <span className="text-orange-300">+8801575162723</span></p>
           
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="" />
              <span className="text-orange-300">Cumilla, Bangladesh</span>
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-6 rounded-lg text-white">
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-orange-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-orange-400"
              />
              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-orange-400"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-orange-400"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-2 px-4 rounded w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

