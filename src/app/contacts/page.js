'use client'; // Required for interactivity (e.g., useState, useEffect)
import React from "react";
import { motion } from "framer-motion"; // For animations

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-gray-400 flex items-center justify-center p-8">
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Contact Me
        </h1>

        {/* Name Input */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message Textarea */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            rows={4}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Send Message
        </motion.button>
      </motion.div>
    </div>
  );
}