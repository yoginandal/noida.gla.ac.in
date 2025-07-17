"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap, IndianRupee, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import AdmissionProcedure from "./AdmissionProcedure";
import EligibilityCriteria from "./EligibilityCriteria";
import FeeStructure from "./FeeStructure";
import Scholarships from "./Scholarships";
import Banner from "@/components/main/Banner";
import CourseSelector from "./CourseSelector";
import { courses } from "@/data/admissionData";

export default function AdmissionPage() {
  const [selectedCourse, setSelectedCourse] = useState(courses?.[0] || null);
  const [activeTab, setActiveTab] = useState("procedure");

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

  return (
    <>
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(black 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
      </div>
      <motion.div
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Section */}
        <Banner
          title="Admission Open for 2025 Batch"
          image={"/admission/admissionBanner.webp"}
          imageAlt="Admission Banner"
        />

        {/* Course Selector */}
        <motion.div
          className="max-w-7xl mx-auto px-4 pt-12 py-2 text-center md:text-left"
          variants={itemVariants}
        >
          <CourseSelector
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="max-w-5xl mx-auto px-4 pb-16 pt-2"
          variants={itemVariants}
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TabsList className="flex flex-col md:flex-row w-full space-y-2 md:space-y-0 bg-gray-200 mb-12 items-center justify-center shadow-md p-4 md:p-1">
                <TabsTrigger
                  value="procedure"
                  className="data-[state=active]:bg-cusYellow data-[state=active]:text-black rounded-sm py-2.5 px-5 transition-all w-full md:w-[25%] text-center flex items-center justify-center hover:bg-gray-100"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Admissions Procedure
                </TabsTrigger>
                <TabsTrigger
                  value="eligibility"
                  className="data-[state=active]:bg-cusYellow data-[state=active]:text-black rounded-sm py-2.5 px-5 transition-all w-full md:w-[25%] text-center flex items-center justify-center hover:bg-gray-100"
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Eligibility Criteria
                </TabsTrigger>
                <TabsTrigger
                  value="fees"
                  className="data-[state=active]:bg-cusYellow data-[state=active]:text-black rounded-sm py-2.5 px-5 transition-all w-full md:w-[25%] text-center flex items-center justify-center hover:bg-gray-100"
                >
                  <IndianRupee className="mr-2 h-4 w-4" />
                  Fee Structure
                </TabsTrigger>
                {(selectedCourse.name === "B.Tech (CSE)" ||
                  selectedCourse.name === "B.Tech CSE (AI & ML)") && (
                  <TabsTrigger
                    value="scholarships"
                    className="data-[state=active]:bg-cusYellow data-[state=active]:text-black rounded-sm py-2.5 px-5 transition-all w-full md:w-[25%] text-center flex items-center justify-center hover:bg-gray-100"
                  >
                    <Award className="mr-2 h-4 w-4" />
                    Scholarships
                  </TabsTrigger>
                )}
              </TabsList>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center md:text-left"
              >
                {/* Admissions Procedure Content */}
                <TabsContent value="procedure" className="mt-0">
                  <AdmissionProcedure />
                </TabsContent>

                {/* Eligibility Criteria Content */}
                <TabsContent value="eligibility" className="mt-0">
                  <EligibilityCriteria course={selectedCourse} />
                </TabsContent>

                {/* Fee Structure Content */}
                <TabsContent value="fees" className="mt-0">
                  <FeeStructure course={selectedCourse} />
                </TabsContent>

                {/* Scholarships Content */}
                <TabsContent value="scholarships" className="mt-0">
                  <Scholarships />
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </motion.div>
    </>
  );
}
