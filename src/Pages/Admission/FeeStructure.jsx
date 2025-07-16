"use client";

import { ArrowRight, Download, HelpCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FeeStructure({ course }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 mb-12"
        variants={itemVariants}
      >
        <div className="bg-gradient-to-r from-cusBlue to-cusBlue/80 text-white p-8 relative overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <h3 className="text-2xl font-bold relative z-10">{course.name}</h3>
          <p className="text-white/80 text-sm mt-2 relative z-10">
            Fee Structure
          </p>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {course.fees.map((fee, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-100 shadow-md"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-3 flex items-center text-gray-900 justify-center sm:justify-start">
                  <Calendar className="h-5 w-5 mr-2 text-cusYellow" />
                  {fee.year}
                </h4>
                <p className="text-2xl font-bold text-cusBlue">{fee.amount}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-100 shadow-md"
            variants={itemVariants}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center text-gray-900">
              <HelpCircle className="h-5 w-5 mr-2 text-cusYellow" />
              Payment Information
            </h4>

            <ul className="space-y-3">
              <motion.li
                className="flex items-start gap-3"
                variants={itemVariants}
              >
                <ArrowRight className="h-5 w-5 text-cusYellow flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Fees can be paid in installments as per university guidelines.
                </span>
              </motion.li>
              <motion.li
                className="flex items-start gap-3"
                variants={itemVariants}
              >
                <ArrowRight className="h-5 w-5 text-cusYellow flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Payment methods include online transfer, credit/debit cards,
                  and demand drafts.
                </span>
              </motion.li>
              <motion.li
                className="flex items-start gap-3"
                variants={itemVariants}
              >
                <ArrowRight className="h-5 w-5 text-cusYellow flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Late payment fees may apply if payments are not made by the
                  due dates.
                </span>
              </motion.li>
              <motion.li
                className="flex items-start gap-3"
                variants={itemVariants}
              >
                <ArrowRight className="h-5 w-5 text-cusYellow flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Additional fees may apply for specialized facilities,
                  international trips, or optional certifications.
                </span>
              </motion.li>
            </ul>

            <motion.div
              className="mt-6 pt-6 border-t border-gray-200"
              variants={itemVariants}
            >
              <Button className="bg-cusGreen text-white hover:from-cusGreen/90 hover:to-cusGreen/90 shadow-md">
                <Download className="mr-2 h-4 w-4" />
                Download Complete Fee Policy
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
        variants={itemVariants}
      >
        <div className="bg-gradient-to-r from-cusBlue to-cusBlue/80 text-white p-6 relative overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h3 className="text-xl font-bold relative z-10">Refund Policy</h3>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-4">
              {[
                "Full refund (minus processing fee) if withdrawal is requested before the start of the academic session.",
                "75% refund if withdrawal is within the first two weeks of the academic session.",
                "50% refund if withdrawal is within the first month of the academic session.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <ArrowRight className="h-5 w-5 text-cusYellow flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </motion.li>
              ))}
            </ul>
            <ul className="space-y-4">
              {[
                "No refund after the first month of the academic session.",
                "Registration fee is non-refundable under any circumstances.",
                "Medical emergencies and special circumstances are evaluated on a case-by-case basis.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <ArrowRight className="h-5 w-5 text-cusYellow flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
