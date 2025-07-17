"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Briefcase,
  TrendingUp,
  Star,
  User,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Section from "@/layouts/section";

// Default placeholder image using CSS gradient
const StudentPlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
    <User className="h-24 w-24 text-gray-600" />
  </div>
);

// Student Card Component
const StudentCard = ({ student, rank, isMobile }) => {
  // Guard against undefined student
  if (!student) {
    return null;
  }

  return (
    <Card className="border-0 bg-transparent overflow-hidden py-0 h-full shadow-[8px_8px_10px_rgba(0,0,0,0.5)]">
      <div className="relative h-[500px] w-full rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left panel - Student Image */}
        <div
          className={`w-full ${
            isMobile ? "" : "md:w-96 "
          } bg-gray-900 relative overflow-hidden`}
        >
          <div className="w-full h-full relative">
            <Image
              src={student.image}
              alt={student.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Overlay stats at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
            <h3 className="text-3xl font-bold text-amber-300 mb-2">
              {student.package}
              <span className="text-lg font-normal ml-1 text-amber-300/70">
                LPA
              </span>
            </h3>
            <div className="flex items-center text-gray-300 mb-2">
              <Briefcase className="h-4 w-4 mr-2 text-amber-300/70" />
              <span className="text-sm uppercase tracking-wider">
                {student.company}
              </span>
            </div>
            <div className="flex items-center text-gray-300">
              <Star className="h-4 w-4 mr-2 text-amber-300/70" />
              <span className="text-sm uppercase tracking-wider">
                Rank {rank}
              </span>
            </div>
          </div>
        </div>

        {/* Right panel - main content */}
        <div
          className={`w-full ${
            isMobile ? "" : "md:w-2/3"
          } bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/95 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center relative overflow-hidden`}
        >
          <div className="relative z-10">
            <div className="mb-8">
              <div className="text-xs uppercase tracking-widest text-amber-300/70 mb-1">
                Excellence Award
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                {student.name}
              </h2>
              <div className="w-16 h-1" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-300/10 flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-amber-300" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Achievement</div>
                  <div className="text-white font-medium">
                    Top Performer {new Date().getFullYear()}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-300/10 flex items-center justify-center mr-4">
                  <Briefcase className="h-6 w-6 text-amber-300" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Company</div>
                  <div className="text-white font-medium">
                    {student.company}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-300/10 flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-amber-300" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Package</div>
                  <div className="text-white font-medium">
                    {student.package} LPA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default function PremiumAchievementShowcase({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Use provided data or fallback to empty array
  const achievers = data || [];

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    const maxIndex = isMobile ? achievers.length - 1 : achievers.length - 2;

    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the beginning
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Go to the last possible position
      setCurrentIndex(isMobile ? achievers.length - 1 : achievers.length - 2);
    }
  };

  return (
    <Section className="py-16 background-gradient-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Our <span className="text-gray-700">Top Performers</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 rounded-full mb-6"></div>
          <p className="text-center text-2xl text-gray-600 max-w-2xl">
            Meet our exceptional students who have secured outstanding
            placements and are making their mark in the industry.
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center mb-12">
            <div className="text-2xl font-medium text-gray-600">
              Class of {new Date().getFullYear()}
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-amber-500/50 text-amber-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-amber-500/50 text-amber-300"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative h-[500px] w-full">
            <AnimatePresence mode="wait">
              <div
                key={currentIndex}
                className="absolute inset-0 flex justify-center"
              >
                <div className="w-full max-w-7xl">
                  {/* Desktop: Two cards side by side */}
                  <div className="hidden md:grid md:grid-cols-2 gap-6">
                    {currentIndex < achievers.length && (
                      <StudentCard
                        student={achievers[currentIndex]}
                        rank={currentIndex + 1}
                        isMobile={false}
                      />
                    )}
                    {currentIndex + 1 < achievers.length && (
                      <StudentCard
                        student={achievers[currentIndex + 1]}
                        rank={currentIndex + 2}
                        isMobile={false}
                      />
                    )}
                  </div>

                  {/* Mobile: Single card */}
                  <div className="block md:hidden">
                    <StudentCard
                      student={achievers[currentIndex]}
                      rank={currentIndex + 1}
                      isMobile={true}
                    />
                  </div>
                </div>
              </div>
            </AnimatePresence>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {achievers.map((_, idx) => {
                // For desktop, we need to show fewer dots (one for each pair)
                if (!isMobile && idx % 2 !== 0) return null;

                const isActive = isMobile
                  ? idx === currentIndex
                  : idx === currentIndex || idx === currentIndex + 1;

                return (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive ? "bg-amber-300" : "bg-gray-700"
                    }`}
                    onClick={() =>
                      setCurrentIndex(isMobile ? idx : idx - (idx % 2))
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
