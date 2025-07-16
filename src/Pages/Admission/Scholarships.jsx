import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Scholarships() {
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
          <h3 className="text-2xl font-bold relative z-10">
            B.Tech Scholarship Eligibility
          </h3>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-100 shadow-md"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-cusYellow p-2 rounded-full">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  PCM Percentage Scholarships
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                For students applying based on their PCM percentage (Physics,
                Chemistry, and Mathematics) at the 10+2 level:
              </p>
              <ul className="text-gray-600 mb-4 list-disc list-inside">
                <li>95-100%: ₹75,000 per year</li>
                <li>90-94.99%: ₹50,000 per year</li>
                <li>80-89.99%: ₹25,000 per year</li>
              </ul>
              <p className="text-sm font-medium text-gray-600">
                Note: The scholarship awarded in the first year will continue
                for the following years, provided the student maintains a
                minimum CPI of 8.00.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-100 shadow-md"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-cusYellow p-2 rounded-full">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  JEE-Mains Percentile Scholarships
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                For students applying based on their JEE-Mains percentile score:
              </p>
              <ul className="text-gray-600 mb-4 list-disc list-inside">
                <li>95-100%: 90% tuition fee waiver</li>
                <li>90-94.99%: 75% tuition fee waiver</li>
                <li>85-89.99%: 25% tuition fee waiver</li>
              </ul>
              <p className="text-sm font-medium text-gray-600">
                Note: The scholarship amount and tuition fee waiver granted in
                the first year will apply to all subsequent years, contingent on
                the student maintaining a minimum CPI of 8.00.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
