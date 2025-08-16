"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIALS } from "@/constants";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const PUBLIC_KEY = "HRUxe_wbAfUzQPthW";
const TEMPLATE_ID = "template_mn22era";
const SERVICE_ID = "service_ti9fo3l";

export const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init({
      publicKey: PUBLIC_KEY,
    });
  }, []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          reply_to: form.email,
          to_email: "pawankumar9334vk@gmail.com"
        }
      );

      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Email Error:', error);
      toast.error("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-full blur-3xl" />
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">Let&apos;s</span>{" "}
              <span className="text-white">Connect</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-300"
              >
                Have an exciting project in mind or just want to say hi?
              </motion.p>
              <span className="h-1 w-12 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full" />
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg"
            >
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A]/50 border border-[#2A0E61]/50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A]/50 border border-[#2A0E61]/50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-colors"
                />
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A]/50 border border-[#2A0E61]/50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-colors resize-none"
              />
              <div className="flex justify-center mt-6">
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="relative px-8 py-2.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-medium text-sm transition-all disabled:opacity-50 overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={`inline-flex items-center gap-2 transition-all duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                    <span>Send Message</span>
                    <motion.span
                      className="relative inline-block"
                      animate={loading ? {
                        x: [0, 100],
                        y: [0, -50, 0],
                        rotate: [0, 45],
                        opacity: [1, 0]
                      } : {}}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                    >
                      <PaperAirplaneIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.span>
                  </span>
                  {loading && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="flex items-center gap-2">
                        <motion.span
                          className="inline-block"
                          animate={{ 
                            rotate: 360,
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          <PaperAirplaneIcon className="w-4 h-4 transform -rotate-45" />
                        </motion.span>
                        Sending
                      </span>
                    </motion.div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </motion.button>
              </div>
            </form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center gap-6 mt-8"
            >
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                  <div className="relative w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full border border-gray-700 transition-colors duration-300 group-hover:border-purple-500">
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
};
