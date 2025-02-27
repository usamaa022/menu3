'use client'; // Required for interactivity (e.g., useState, useEffect)
import React from "react"; // Import React
import { motion, useInView } from "framer-motion"; // Import Framer Motion
import Image from "next/image";

export default function About() {
  // Use useInView to trigger animations when elements come into view
  const textRef = React.useRef(null);
  const imageRef = React.useRef(null);
  const isTextInView = useInView(textRef, { once: true, margin: "-100px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Text Overlay */}
      <div className="relative h-screen">
        <Image
          src="/images/4.jpg" // Replace with your image path
          alt="About Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl font-bold text-white text-center"
          >
            Death Note
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-4xl font-bold text-yellow-600 mb-8"
        >
          Understanding Death
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="text-lg text-gray-600 mb-6"
        >
          Death is a natural part of life, yet it remains one of the most profound and mysterious experiences. It is the cessation of all biological functions that sustain a living organism. Throughout history, different cultures have developed unique perspectives and rituals surrounding death, reflecting their beliefs about the afterlife and the meaning of existence.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="text-lg text-gray-600 mb-6"
        >
          In many traditions, death is seen not as an end, but as a transition to another state of being. This perspective can provide comfort and a sense of continuity, helping individuals cope with the loss of loved ones and their own mortality.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          className="text-lg text-gray-600 mb-6"
        >
          Exploring the concept of death can lead to a deeper appreciation of life. It encourages us to live more fully, cherish our relationships, and pursue our passions with greater urgency and purpose.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-yellow-300 to-yellow-700 rounded-lg group hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 ease-in-out"
        >
          <span className="relative z-10">Menu</span>
        </motion.button>
      </div>

      {/* Text and Image Section */}
      <div ref={textRef} className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="w-full md:w-1/2 text-lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <Image
              src="/images/4.jpg"
              alt="Sample"
              width={600}
              height={400}
              className="rounded-md shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Text and Image Section (Reversed) */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <Image
              src="/images/2.jpg"
              alt="Sample"
              width={600}
              height={400}
              className="rounded-md shadow-lg"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 text-lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
        </div>
      </div>
    </div>
  );
}