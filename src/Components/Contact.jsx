import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  PhoneCall,
  MapPin,
  Handshake,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

const Contact = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-6 md:p-12 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-pink-700">📞 Contact Us</h1>
          <p className="text-center mb-10 text-lg text-gray-700">
            We're always here for you. Feel free to connect with us anytime — your safety is our commitment.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-purple-700">📬 Get in Touch</h2>
                <p className="flex items-center gap-2"><Mail size={20} className="text-pink-600" /> support@wsafe.org</p>
                <p className="flex items-center gap-2"><PhoneCall size={20} className="text-pink-600" /> +91-98765-43210 (24/7)</p>
                <p className="flex items-center gap-2"><MapPin size={20} className="text-pink-600" /> 123 Safe Street, New Delhi, India – 110001</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-purple-700">🤝 Partner With Us</h2>
                <p className="flex items-center gap-2"><Handshake size={20} className="text-pink-600" /> partnerships@wsafe.org</p>
                <p>We welcome collaborations with NGOs, developers & local networks for safety.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-purple-700">💬 Follow Us</h2>
                <div className="flex gap-4 text-pink-600 mt-2">
                  <a href="#" title="Facebook"><Facebook /></a>
                  <a href="#" title="Twitter"><Twitter /></a>
                  <a href="#" title="Instagram"><Instagram /></a>
                  <a href="#" title="LinkedIn"><Linkedin /></a>
                </div>
              </div>

              {/* Optional Map Embed */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-purple-200">
                <iframe
                  title="W-Safe Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83808741355!2d77.0688998395096!3d28.527280343174712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a41c6f5ad5%3A0x2486c7998f14b3fc!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1689423837814!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6 bg-white p-6 rounded-2xl shadow-2xl border"
            >
              <h2 className="text-2xl font-semibold text-pink-600">📝 Send Us a Message</h2>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-pink-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-pink-500"
              />
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-pink-500"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-pink-500"
              ></textarea>
              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition duration-300"
              >
                🚀 Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-pink-600 text-white text-center py-5 mt-10">
        <p className="font-semibold text-lg">&copy; {new Date().getFullYear()} W-Safe</p>
        <p className="text-sm">Empowering Women with Safety, Support & Strength ❤️</p>
      </footer>
    </>
  );
};

export default Contact;
