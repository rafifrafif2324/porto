"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimateTitle from "../about/AnimateTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useWindowSize } from "@/hooks/useWindowSize"; // Pastikan path sesuai

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
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <section className="py-16 px-4 md:px-10 max-w-7xl mx-auto mb-16">
      <AnimateTitle
        title="Certificates"
        className="text-left text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-tight mb-8"
        wordSpace="mr-[10px]"
        charSpace="mr-[0.01em]"
      />

      {isMobile ? (
        // Mobile View: Swiper
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={16}
            slidesPerView={1.1}
            centeredSlides={true}
            grabCursor={true}
            className="w-full"
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <div className="border rounded-xl p-4 shadow-md bg-zinc-900 hover:bg-zinc-800 text-white w-full max-w-xs mx-auto">
                  <div className="mb-3 w-full h-32 relative">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-base font-semibold mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-300">{cert.provider}</p>
                  <p className="text-sm text-gray-400">{cert.year}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        // Desktop View: Marquee Animation
        <div className="overflow-x-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
          >
            {[...certificates, ...certificates].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="min-w-[240px] lg:min-w-[260px] border rounded-2xl p-4 shadow-md bg-zinc-900 hover:bg-zinc-800 text-white flex-shrink-0"
              >
                <div className="mb-3 w-full h-32 relative">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-base font-semibold mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-300">{cert.provider}</p>
                <p className="text-sm text-gray-400">{cert.year}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
