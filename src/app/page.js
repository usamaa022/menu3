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


      <CarouselPlugin className="" />

      <h1 className="text-center text-4xl font-bold my-8">Death Note</h1>

      {/* Parallax Section 1 */}
      <Parallax speed={-10} className="h-[300px]" bgImage="/images/3.jpg" strength={200}>
        {/* Empty Parallax Section */}
      </Parallax>

      <main>
        {/* Section 1: Text + Image */}
        <motion.div
          ref={textRef1}
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : -100 }} // Animate when in view
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-start space-x-6 m-10"
        >
          <p className="w-1/2 text-lg my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img src="/images/4.jpg" alt="Sample" className="h-full object-cover w-[450px] rounded-md" />
        </motion.div>

        {/* Parallax Section 2 */}
        <Parallax speed={-10} className="h-[300px]" bgImage="/images/1.jpg" strength={200}>
          {/* Empty Parallax Section */}
        </Parallax>

        {/* Section 2: Image + Text */}
        <motion.div
          ref={textRef2}
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
          animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 100 }} // Animate when in view
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-start space-x-6 m-10"
        >
          <img src="/images/2.jpg" alt="Sample" className="h-full object-cover w-[450px] rounded-md" />
          <p className="w-1/2 text-lg my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>
       
      </main>
    </div>
  );
}