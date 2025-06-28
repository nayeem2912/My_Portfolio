import { useState } from "react";
import toast from "react-hot-toast";


const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !message) {
      toast("📩 Please fill in both fields.");
      return;
    }

    toast("✅ Thank you! We’ll contact you soon.");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-500 mb-10 text-center">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white space-y-3">
            <h3 className="text-xl font-semibold text-orange-400">
              Contact Information
            </h3>
            <p>📧 Email: <span className="text-orange-300">omarnayeem32@gmail.com</span></p>
            <p>📞 Phone / 💬 WhatsApp: <span className="text-orange-300">+8801575162723</span></p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-orange-400"
              />
              <textarea
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-orange-400"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition duration-200 text-black font-semibold py-2 px-4 rounded w-full"
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
