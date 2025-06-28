import { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";


const ContactSection = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bzie3sm", // 🔁 Replace this
        "template_85a2y3a", // 🔁 Replace this
        form.current,
        "f8y0FyQ0P63ZWmKB_" // 🔁 Replace this
      )
      .then(
        (result) => {
          toast("✅ Message sent successfully!", result.text);
          form.current.reset();
         
        },
        (error) => {
          toast("❌ Failed to send message.", error.text);
          
        }
      );
  };

  return (
    <section id="contact" className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-500 mb-10 text-center">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left - Contact Information */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">
              Contact Information
            </h3>
            <p className="mb-2">
              📧 Email:{" "}
              <span className="text-orange-300">omarnayeem32@gmail.com</span>
            </p>
            <p className="mb-2">
              📞 Phone/💬 WhatsApp: <span className="text-orange-300">01575162723</span>
            </p>
            
          </div>

          {/* Right - Contact Form */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-orange-400"
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-orange-400"
              ></textarea>
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
