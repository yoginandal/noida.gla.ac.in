"use client";
import React, { useState, useEffect } from "react";
import Heading from "@/components/main/Heading";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";

const LegacySection = () => {
  const [counters, setCounters] = useState({
    placement: 0,
    alumni: 0,
    faculty: 0,
    students: 0,
  });

  const targetValues = {
    placement: 86,
    alumni: 39000,
    faculty: 700,
    students: 23000,
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCounters(targetValues);
        clearInterval(timer);
      } else {
        const progress = currentStep / steps;
        setCounters({
          placement: Math.floor(targetValues.placement * progress),
          alumni: Math.floor(targetValues.alumni * progress),
          faculty: Math.floor(targetValues.faculty * progress),
          students: Math.floor(targetValues.students * progress),
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-transparent">
      <div className="w-full px-4 py-6 md:px-6 md:py-16">
        {/* Heading */}
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1a4e78] mb-4">
            A Legacy of Educational Excellence
            <span className="block w-24 h-1 bg-cusYellow mx-auto mt-4"></span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Experience excellence at GLA University, where cutting-edge
            technology meets traditional values. Our state-of-the-art
            facilities, industry-aligned curriculum, and focus on practical
            learning sets us apart in higher education.
          </p>
        </div>

        {/* Mobile Stats */}
        <motion.div
          className="grid grid-cols-2 gap-8 md:hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
              <img
                src={"/icons/icon1.webp"}
                alt="Career icon"
                className="w-10 h-10"
              />
            </div>
            <p className="text-xl font-bold text-[#00b8d4]">
              {counters.placement}%
            </p>
            <p className="text-[10px] text-gray-600 text-center mt-2">
              Career Placement
              <br />
              in Past 5 Years
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
              <img
                src={"/icons/icon2.webp"}
                alt="Alumni icon"
                className="w-10 h-10"
              />
            </div>
            <p className="text-xl font-bold text-[#00b8d4]">
              {counters.alumni.toLocaleString()}+
            </p>
            <p className="text-[10px] text-gray-600 text-center mt-2">
              Alumni Spread Across
              <br />
              the Globe
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
              <img
                src={"/icons/icon3.webp"}
                alt="Faculty icon"
                className="w-10 h-10"
              />
            </div>
            <p className="text-xl font-bold text-[#00b8d4]">
              {counters.faculty}+
            </p>
            <p className="text-[10px] text-gray-600 text-center mt-2">
              Faculty Members from
              <br />
              Global Institutions
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
              <img
                src={"/icons/icon4.webp"}
                alt="Students icon"
                className="w-10 h-10"
              />
            </div>
            <p className="text-xl font-bold text-[#00b8d4]">
              {counters.students.toLocaleString()}+
            </p>
            <p className="text-[10px] text-gray-600 text-center mt-2">
              Students Enrolled in
              <br />
              Different Courses
            </p>
          </div>
        </motion.div>

        {/* Mobile Image */}
        <motion.div
          className="md:hidden w-full flex justify-center items-center min-h-[250px] mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <img
            src={"/general/sketch_Two.png"}
            alt="Architectural sketch of educational building"
            className="w-full h-full min-h-[250px] object-contain scale-[1.2]"
          />
        </motion.div>

        {/* Desktop Layout */}
        <motion.div
          className="hidden sm:pt-12 md:grid grid-cols-[1fr_2fr_1fr] gap-12 items-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Stats */}
          <div className="space-y-12 pr-8 relative z-10">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={"/icons/icon1.webp"}
                  alt="Career icon"
                  className="w-12 h-12"
                />
              </div>
              <p className="text-4xl font-bold text-[#00b8d4]">
                {counters.placement}%
              </p>
              <p className="text-sm text-gray-600 text-center mt-2">
                Career Placement
                <br />
                in Past 5 Years
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={"/icons/icon2.webp"}
                  alt="Alumni icon"
                  className="w-12 h-12"
                />
              </div>
              <p className="text-4xl font-bold text-[#00b8d4]">
                {counters.alumni.toLocaleString()}+
              </p>
              <p className="text-sm text-gray-600 text-center mt-2">
                Alumni Spread Across
                <br />
                the Globe
              </p>
            </div>
          </div>

          {/* Building Image */}
          <div className="w-full flex justify-center items-center min-h-[600px] relative z-0">
            <img
              src={"/general/sketch_Two.png"}
              alt="Architectural sketch of educational building"
              className="w-full h-full min-h-[600px] object-contain scale-[1.5]"
            />
          </div>

          {/* Right Stats */}
          <div className="space-y-12 pl-8 relative z-10">
            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={"/icons/icon3.webp"}
                  alt="Faculty icon"
                  className="w-12 h-12"
                />
              </div>
              <p className="text-4xl font-bold text-[#00b8d4]">
                {counters.faculty}+
              </p>
              <p className="text-sm text-gray-600 text-center mt-2">
                Faculty Members from
                <br />
                Global Institutions
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={"/icons/icon4.webp"}
                  alt="Students icon"
                  className="w-12 h-12"
                />
              </div>
              <p className="text-4xl font-bold text-[#00b8d4]">
                {counters.students.toLocaleString()}+
              </p>
              <p className="text-sm text-gray-600 text-center mt-2">
                Students Enrolled in
                <br />
                Different Courses
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegacySection;
