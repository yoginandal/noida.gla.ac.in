"use client";
import { motion } from "framer-motion";

const FiveYearPlanSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.8 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#2d6a31",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="w-full py-16 bg-transparent border-t border-gray-100 overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center justify-center text-center mb-12"
          variants={itemVariants}
        >
          <motion.h2
            className="text-[#1e3a5f] text-4xl md:text-5xl font-bold mb-2"
            variants={itemVariants}
          >
            Our 5-Year Vision
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-yellow-400 mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="max-w-3xl text-gray-600 text-lg"
            variants={itemVariants}
          >
            Setting new benchmarks in education with industry-focused learning
            and exceptional career outcomes
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#2d6a31] to-[#1e4d23] rounded-lg p-8 shadow-lg"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex flex-col items-center">
              <motion.h3
                className="text-white text-xl font-medium mb-4"
                variants={itemVariants}
              >
                Targeted Average Salary
              </motion.h3>
              <div className="flex items-center">
                <motion.span
                  className="text-yellow-400 text-6xl font-bold"
                  variants={numberVariants}
                >
                  ₹30
                </motion.span>
                <motion.div className="ml-2 text-left" variants={itemVariants}>
                  <span className="text-yellow-400 text-3xl font-bold">
                    LPA
                  </span>
                  <p className="text-white text-sm mt-1">by 2029</p>
                </motion.div>
              </div>
              <motion.p
                className="mt-6 text-white text-sm"
                variants={itemVariants}
              >
                Our comprehensive industry partnerships and cutting-edge
                curriculum are designed to prepare students for high-value roles
                in the global market
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white border-2 border-[#2d6a31] rounded-lg p-8 shadow-lg"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex flex-col items-center">
              <motion.h3
                className="text-[#2d6a31] text-xl font-medium mb-4"
                variants={itemVariants}
              >
                Expected Salary for First Graduating Batch
              </motion.h3>
              <div className="flex items-center">
                <motion.span
                  className="text-[#2d6a31] text-6xl font-bold"
                  variants={numberVariants}
                >
                  ₹15
                </motion.span>
                <motion.div className="ml-2 text-left" variants={itemVariants}>
                  <span className="text-[#2d6a31] text-3xl font-bold">LPA</span>
                  <p className="text-gray-600 text-sm mt-1">starting package</p>
                </motion.div>
              </div>
              <motion.p
                className="mt-6 text-gray-600 text-sm"
                variants={itemVariants}
              >
                Our first batch of graduates will enter the job market with
                practical skills and industry exposure, commanding competitive
                starting salaries
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FiveYearPlanSection;
