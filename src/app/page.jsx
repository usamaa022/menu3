'use client';
import { CarouselPlugin } from "@/components/my_carousel";
import Navbar from "@/components/Navbar"; 
import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";
import { Parallax } from "react-parallax";
import { motion, useInView } from "framer-motion"; 
import { useRef } from "react"; 
import Footer from "@/components/Footer";

export default function Home() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const isInView1 = useInView(textRef1, { once: true });
  const isInView2 = useInView(textRef2, { once: true });

  return (
    <div className="bg-black text-gray-400">
      
      {/* 🚀 Improved Responsive Carousel */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <CarouselPlugin className="w-full max-w-full mx-auto" />
      </div>

      {/* ⚡ Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center text-3xl sm:text-4xl md:text-6xl font-bold my-8 text-white"
      >
        Death Note
      </motion.h1>

      {/* 📌 Parallax Section 1 */}
      <Parallax speed={-5} bgImage="/images/3.jpg" strength={150} className="h-[250px] sm:h-[350px] md:h-[450px]">
        <div className="flex items-center justify-center h-full px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center"
          >
            Explore the Mystery
          </motion.h2>
        </div>
      </Parallax>

      {/* 📌 Section 1: Text + Image (Mobile Optimized) */}
      <motion.div
        ref={textRef1}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-4 py-8 md:py-16 flex flex-col-reverse sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8"
      >
        <p className="w-full sm:w-1/2 text-base sm:text-lg text-center sm:text-left leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-full sm:w-1/2 flex justify-center"
        >
          <Image
            src="/images/4.jpg"
            alt="Sample"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* 📌 Parallax Section 2 */}
      <Parallax speed={-5} bgImage="/images/1.jpg" strength={150} className="h-[250px] sm:h-[350px] md:h-[450px]">
        <div className="flex items-center justify-center h-full px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center"
          >
            Discover the Secrets
          </motion.h2>
        </div>
      </Parallax>

      {/* 📌 Section 2: Image + Text (Mobile Optimized) */}
      <motion.div
        ref={textRef2}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 100 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-4 py-8 md:py-16 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-full sm:w-1/2 flex justify-center"
        >
          <Image
            src="/images/2.jpg"
            alt="Sample"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <p className="w-full sm:w-1/2 text-base sm:text-lg text-center sm:text-left leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>

      {/* 🌟 Footer */}
      <Footer />
    </div>
  );
}
