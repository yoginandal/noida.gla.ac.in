import { motion } from "framer-motion";
import { admissionSteps } from "./data";

export default function AdmissionProcedure() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const renderDescription = (step) => {
    if (step.registrationUrl) {
      const parts = step.description.split("Visit");
      return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
          <span>Visit</span>
          <a
            href={step.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cusBlue hover:underline break-all sm:break-normal"
          >
            https://glauniversity.in:8085/Main/Admission
          </a>
          <span>
            {parts[1].replace(
              "https://glauniversity.in:8085/Main/Admission and",
              ""
            )}
          </span>
        </div>
      );
    }
    return step.description;
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="space-y-16">
        {admissionSteps.map((step, index) => (
          <motion.div
            key={index}
            className="flex gap-8 relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex-shrink-0 z-10">
              <motion.div
                className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl shadow-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {index + 1}
              </motion.div>
              {index < admissionSteps.length - 1 && (
                <motion.div
                  className="absolute left-7 top-14 bottom-0 w-px h-[calc(100%-3.5rem)] bg-gray-200"
                  initial={{ height: 0 }}
                  animate={{ height: "calc(100% - 3.5rem)" }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                />
              )}
            </div>
            <motion.div
              className="pt-3 space-y-3 flex-1 hover:bg-white p-6 rounded-lg hover:shadow-md"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <div className="text-gray-600 leading-relaxed">
                {renderDescription(step)}
              </div>
              {step.note && (
                <motion.div
                  className="text-sm bg-gray-50 p-4 rounded-lg border border-gray-100 text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <strong className="font-medium">Note:</strong> {step.note}
                </motion.div>
              )}
              {step.deadline && (
                <motion.div
                  className="inline-block bg-cusBlue text-white text-sm px-4 py-1 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {step.deadline}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
