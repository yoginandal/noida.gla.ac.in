"use client";

import { courses } from "./data";
import { motion } from "framer-motion";

export default function CourseSelector({ selectedCourse, setSelectedCourse }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-12 text-center text-black">
        Explore Our Programs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {courses.map((course) => (
          <motion.button
            key={course.id}
            onClick={() => setSelectedCourse(course)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`px-3 text-center py-2 rounded-md  transition-all duration-300 ${
              selectedCourse.id === course.id
                ? "bg-cusGreen"
                : "bg-gray-200 hover:bg-indigo-50 shadow-md hover:shadow-indigo-100"
            }`}
          >
            <h3
              className={`font-medium text-sm ${
                selectedCourse.id === course.id ? "text-white" : "text-black"
              }`}
            >
              {course.name}
            </h3>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
