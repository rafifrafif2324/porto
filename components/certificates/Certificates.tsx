"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimateTitle from "../about/AnimateTitle";

const certificates = [
  {
    title: "Front-End Developer",
    provider: "Dicoding",
    year: "2023",
    image: "/images/certificate-1.jpg",
  },
  {
    title: "React Advanced",
    provider: "Coursera",
    year: "2022",
    image: "/images/certificate-2.jpg",
  },
  {
    title: "UI/UX Design Essentials",
    provider: "Udemy",
    year: "2023",
    image: "/images/certificate-3.jpg",
  },
  {
    title: "JavaScript Algorithms",
    provider: "freeCodeCamp",
    year: "2021",
    image: "/images/certificate-4.jpg",
  },
  {
    title: "Web Design Fundamentals",
    provider: "Codecademy",
    year: "2022",
    image: "/images/certificate-5.jpg",
  },
  {
    title: "Node.js Crash Course",
    provider: "YouTube",
    year: "2021",
    image: "/images/certificate-6.jpg",
  },
];

const Certificates = () => {
  return (
    <section className="py-16 px-4 md:px-10 max-w-7xl mx-auto mb-16">
      <AnimateTitle
        title="Certificates"
        className="text-left text-[36px] sm:text-[45px] md:text-[60px] lg:text-[80px] font-bold leading-tight mb-8"
        wordSpace="mr-[10px]"
        charSpace="mr-[0.01em]"
      />
      <div className="relative w-full overflow-x-auto md:overflow-hidden">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            className="flex gap-4 md:gap-6 w-max md:animate-none"
            animate={typeof window !== 'undefined' && window.innerWidth >= 768 ? { x: ["0%", "-50%"] } : {}}
            transition={typeof window !== 'undefined' && window.innerWidth >= 768 ? {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            } : {}}
          >
            {[...certificates, ...certificates].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="min-w-[220px] sm:min-w-[240px] md:min-w-[260px] lg:min-w-[280px] border rounded-2xl p-4 md:p-6 shadow-md bg-zinc-900 hover:bg-zinc-800 text-white hover:text-white relative hover:shadow-xl flex-shrink-0"
                style={{ willChange: "transform" }}
              >
                <div className="mb-3 w-full h-28 sm:h-32 md:h-36 relative">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{cert.provider}</p>
                <p className="text-sm md:text-base text-gray-400">{cert.year}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;