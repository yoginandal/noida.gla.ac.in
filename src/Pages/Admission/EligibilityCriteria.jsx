"use client";

import { CheckCircle, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function EligibilityCriteria({ course }) {
  if (!course) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-cusBlue mb-4">
          No Course Selected
        </h2>
        <p className="text-cusTextLight">
          Please select a course to view eligibility criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-r from-cusBlue to-cusBlue/80 text-white p-8 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <h3 className="text-2xl font-bold relative z-10">{course.name}</h3>
          <p className="text-white/80 text-sm mt-2 relative z-10">
            Eligibility Requirements
          </p>
        </div>
        <div className="p-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-100 mb-8 text-center md:text-left">
            <p className="text-gray-600 leading-relaxed">
              {course.eligibility}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-lg font-semibold flex flex-col md:flex-row items-center text-gray-900 text-center md:text-left">
                <span className="bg-gradient-to-br from-cusYellow to-yellow-400 p-2 rounded-full mb-3 md:mb-0 md:mr-3 text-white">
                  <BookOpen className="h-5 w-5" />
                </span>
                Program Overview
              </h4>
              <p className="text-gray-600 text-center md:text-left">
                {course.overview}
              </p>

              <h4 className="text-lg font-semibold flex flex-col md:flex-row items-center mt-8 text-gray-900 text-center md:text-left">
                <span className="bg-gradient-to-br from-cusYellow to-yellow-400 p-2 rounded-full mb-3 md:mb-0 md:mr-3 text-white">
                  <GraduationCap className="h-5 w-5" />
                </span>
                Key Benefits
              </h4>
              <ul className="space-y-3">
                {course.benefits.slice(0, 5).map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left"
                  >
                    <CheckCircle className="h-5 w-5 text-cusYellow flex-shrink-0 mb-2 md:mb-0 md:mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold flex flex-col md:flex-row items-center text-gray-900 text-center md:text-left">
                <span className="bg-gradient-to-br from-cusYellow to-yellow-400 p-2 rounded-full mb-3 md:mb-0 md:mr-3 text-white">
                  <Briefcase className="h-5 w-5" />
                </span>
                Career Opportunities
              </h4>

              <div className="mt-4 space-y-6">
                <div>
                  <h5 className="font-medium text-gray-800 mb-3 text-center md:text-left">
                    Potential Positions
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {course.positions.slice(0, 6).map((position, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg text-sm text-gray-700 shadow-sm border border-gray-100 text-center md:text-left"
                      >
                        {position}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-800 mb-3 text-center md:text-left">
                    Private Sector
                  </h5>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {course.careerPaths.private
                      .slice(0, 5)
                      .map((company, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-br from-cusYellow/10 to-yellow-400/10 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm text-center"
                        >
                          {company}
                        </span>
                      ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-800 mb-3 text-center md:text-left">
                    Public Sector
                  </h5>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {course.careerPaths.public.slice(0, 5).map((org, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-br from-cusYellow/10 to-yellow-400/10 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm text-center"
                      >
                        {org}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
