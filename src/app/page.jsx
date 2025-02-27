'use client';
import { CarouselPlugin } from "@/components/my_carousel";
import Navbar from "@/components/Navbar"; // Updated import path
import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";
import { Parallax } from "react-parallax";
import { motion, useInView } from "framer-motion"; // Import Framer Motion
import { useRef } from "react"; // For tracking elements in view
import Footer from "@/components/Footer";

export default function Home() {
  // Refs for tracking elements in view
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const isInView1 = useInView(textRef1, { once: true });
  const isInView2 = useInView(textRef2, { once: true });

  return (
    <div className="bg-black text-gray-400">
      {/* Navbar */}
   

      {/* Carousel */}
      <CarouselPlugin className="" />

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center text-4xl md:text-6xl font-bold my-8 text-white"
      >
        Death Note
      </motion.h1>

      {/* Parallax Section 1 */}
      <Parallax speed={-10} className="h-[300px] md:h-[400px]" bgImage="/images/3.jpg" strength={200}>
        <div className="flex items-center justify-center h-full">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-white text-center"
          >
            Explore the Mystery
          </motion.h2>
        </div>
      </Parallax>

      {/* Section 1: Text + Image */}
      <motion.div
        ref={textRef1}
        initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
        animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : -100 }} // Animate when in view
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8"
      >
        <p className="w-full md:w-1/2 text-lg text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
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
      </motion.div>

      {/* Parallax Section 2 */}
      <Parallax speed={-10} className="h-[300px] md:h-[400px]" bgImage="/images/1.jpg" strength={200}>
        <div className="flex items-center justify-center h-full">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-white text-center"
          >
            Discover the Secrets
          </motion.h2>
        </div>
      </Parallax>

      {/* Section 2: Image + Text */}
      <motion.div
        ref={textRef2}
        initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
        animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 100 }} // Animate when in view
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
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
        <p className="w-full md:w-1/2 text-lg text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>

      
    </div>
  );
}