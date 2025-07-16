import React, { useState, useEffect, useRef } from "react";
import achiever1 from "@/assets/achiever/achieverOne.webp";
import achiever2 from "@/assets/achiever/achieverTwo.webp";
import achiever3 from "@/assets/achiever/achieverThree.webp";
import achiever4 from "@/assets/achiever/achieverFour.webp";

import club1 from "@/assets/club/clubOne.webp";
import club2 from "@/assets/club/clubTwo.webp";
import club3 from "@/assets/club/clubThree.webp";
import club4 from "@/assets/club/clubFour.webp";

import placement1 from "@/assets/placement/placementOne.webp";
import placement2 from "@/assets/placement/placementTwo.webp";
import placement3 from "@/assets/placement/placementThree.webp";
import placement4 from "@/assets/placement/placementFour.webp";

const CampusShowcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeClubImage, setActiveClubImage] = useState(0);
  const [activeAchieverImage, setActiveAchieverImage] = useState(0);
  const [activePlacementImage, setActivePlacementImage] = useState(0);
  const [counters, setCounters] = useState({
    placements: 0,
    recruiters: 0,
    highestCTC: 0,
    averageCTC: 0,
  });
  const [isCountingComplete, setIsCountingComplete] = useState(false);
  const countingRef = useRef(null);
  const placementSlideRef = useRef(null);

  // Club data with main images and thumbnails
  const clubData = [
    {
      mainImage: club1,
      thumbnail: club1,
    },
    {
      mainImage: club2,
      thumbnail: club2,
    },
    {
      mainImage: club3,
      thumbnail: club3,
    },
    {
      mainImage: club4,
      thumbnail: club4,
    },
  ];

  // Achiever images
  const achieverImages = [achiever1, achiever2, achiever3, achiever4];

  // Placement images data
  const placementImages = [
    {
      image: placement1,
      title: "Falguni Khnadelwal",
      description: "CMR Green Technologies Limited",
    },
    {
      image: placement2,
      title: "Himanshu Kaushik",
      description: "Samsung Display India",
    },
    {
      image: placement3,
      title: " Shreya Gupta",
      description: "Josh Technology Group",
    },
    {
      image: placement4,
      title: " Shyama Agarwal",
      description: "Jp Morgan Chase India Pvt. Ltd.",
    },
  ];

  // Slide data
  const slides = [
    {
      id: 0,
      title: "Innovation",
      subtitle: "Think Beyond Innovation in a Research-Driven Environment",
      description:
        "At GLA University, we foster a culture of innovation and research excellence. Our state-of-the-art facilities and expert faculty guide students in groundbreaking research projects, encouraging them to push boundaries and develop solutions for real-world challenges.",
    },
    {
      id: 1,
      title: "Achievers",
      subtitle:
        "At GLA University, we are proud of our students for achieving top positions in public, private and corporate sector. Our alumni network spans across prestigious organizations, with graduates making significant contributions in diverse fields and leading successful careers worldwide.",
      description:
        "Our alumni have secured prestigious positions across various industries, demonstrating the quality of education and preparation they receive at our institution.",
    },
    {
      id: 2,
      title: "Top Placement Holders 2024",
      subtitle: "Placements",
      description: "",
      stats: [
        {
          value: 3000,
          suffix: "+",
          label: "Placement Offers for Previous Batch",
        },
        {
          value: 500,
          suffix: "+",
          label: "Global Recruiters from Diverse Domains",
        },
        { value: 55, suffix: "LPA", label: "Highest CTC by Morrison Corp." },
        { value: 6.3, suffix: "LPA", label: "Overall Average CTC" },
      ],
    },
  ];

  // Navigation functions
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    resetCounters();
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    resetCounters();
  };

  const selectClubImage = (index) => {
    setActiveClubImage(index);
  };

  const selectAchieverImage = (index) => {
    setActiveAchieverImage(index);
  };

  // Counter animation
  const resetCounters = () => {
    setIsCountingComplete(false);
    setCounters({
      placements: 0,
      recruiters: 0,
      highestCTC: 0,
      averageCTC: 0,
    });
  };

  // Auto slide placement images
  useEffect(() => {
    if (activeSlide === 2) {
      placementSlideRef.current = setInterval(() => {
        setActivePlacementImage((prev) =>
          prev === placementImages.length - 1 ? 0 : prev + 1
        );
      }, 3000);

      return () => {
        if (placementSlideRef.current) {
          clearInterval(placementSlideRef.current);
        }
      };
    }
  }, [activeSlide]);

  useEffect(() => {
    if (activeSlide === 2 && !isCountingComplete) {
      // Clear any existing interval
      if (countingRef.current) {
        clearInterval(countingRef.current);
      }

      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps (for smooth animation)
      const interval = duration / steps;

      const targetValues = {
        placements: 3000,
        recruiters: 500,
        highestCTC: 55,
        averageCTC: 6.3,
      };

      let currentStep = 0;

      countingRef.current = setInterval(() => {
        currentStep++;

        if (currentStep >= steps) {
          setCounters(targetValues);
          setIsCountingComplete(true);
          clearInterval(countingRef.current);
        } else {
          const progress = currentStep / steps;
          setCounters({
            placements: Math.floor(targetValues.placements * progress),
            recruiters: Math.floor(targetValues.recruiters * progress),
            highestCTC: parseFloat(
              (targetValues.highestCTC * progress).toFixed(1)
            ),
            averageCTC: parseFloat(
              (targetValues.averageCTC * progress).toFixed(1)
            ),
          });
        }
      }, interval);

      return () => {
        if (countingRef.current) {
          clearInterval(countingRef.current);
        }
      };
    }
  }, [activeSlide, isCountingComplete]);

  // Render the current slide based on its type
  const renderSlideContent = () => {
    const slide = slides[activeSlide];

    if (activeSlide === 0) {
      // Club Immersion slide
      return (
        <div className="flex flex-col md:flex-row bg-gray-200/50 rounded-lg shadow-md overflow-hidden h-auto md:h-[500px]">
          <div className="w-full h-[300px] md:h-full md:w-1/2 relative">
            <img
              src={clubData[activeClubImage].mainImage || "/placeholder.svg"}
              alt="Innovation"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6">
              <div className="flex items-center rounded-lg p-4 bg-black/50 backdrop-blur-sm">
                <div className="w-1 h-16 bg-cusBlue mr-4"></div>
                <div>
                  <h3 className="text-white text-2xl font-medium">
                    Innovation
                  </h3>
                  <p className="text-white/80 text-sm">Student Engagement</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-16 bg-gray-200"></div>
                <span className="px-4 text-cusBlue text-sm font-medium">
                  {slide.subtitle}
                </span>
                <div className="h-px w-16 bg-gray-200"></div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                {slide.title}
              </h2>
              <p className="text-gray-600 text-center">{slide.description}</p>
            </div>

            <div className="mt-8">
              <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-4 text-center">
                Our Innovations
              </h4>
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={() =>
                    selectClubImage(
                      (activeClubImage - 1 + clubData.length) % clubData.length
                    )
                  }
                  className="hidden md:flex w-8 h-8 rounded-full bg-white/80 shadow-md items-center justify-center border border-gray-100 hover:bg-white transition-all"
                  aria-label="Previous club"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div className="flex space-x-4">
                  {clubData.map((club, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer rounded-full overflow-hidden border ${
                        index === activeClubImage
                          ? "border-cusBlue"
                          : "border-gray-200"
                      }`}
                      onClick={() => selectClubImage(index)}
                    >
                      <img
                        src={club.thumbnail || "/placeholder.svg"}
                        alt={`Club logo ${index + 1}`}
                        className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() =>
                    selectClubImage((activeClubImage + 1) % clubData.length)
                  }
                  className="hidden md:flex w-8 h-8 rounded-full bg-white/80 shadow-md items-center justify-center border border-gray-100 hover:bg-white transition-all"
                  aria-label="Next club"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeSlide === 1) {
      // Achievers slide
      return (
        <div className="flex flex-col md:flex-row bg-gray-200/50 rounded-lg shadow-md overflow-hidden h-auto md:h-[500px]">
          <div className="w-full h-[300px] md:h-full md:w-1/2 relative overflow-hidden">
            <img
              src={achieverImages[activeAchieverImage] || "/placeholder.svg"}
              alt="Achiever"
              className="w-full h-full object-cover object-[center_20%]"
            />
            <div className="absolute bottom-0 left-0 p-6">
              <div className="flex items-center rounded-lg p-4 bg-black/50 backdrop-blur-sm">
                <div className="w-1 h-16 bg-cusBlue mr-4"></div>
                <div>
                  <h3 className="text-white text-2xl font-medium">
                    Professional Excellence
                  </h3>
                  <p className="text-white/80 text-sm">
                    Leadership in Corporate Sector
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-16 bg-gray-200"></div>
                <span className="px-4 text-cusBlue text-sm font-medium">
                  Success Stories
                </span>
                <div className="h-px w-16 bg-gray-200"></div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                {slide.title}
              </h2>
              <p className="text-gray-600 text-center">{slide.subtitle}</p>
            </div>

            <div className="mt-8">
              <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-4 text-center">
                Our Distinguished Alumni
              </h4>
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={() =>
                    selectAchieverImage(
                      (activeAchieverImage - 1 + achieverImages.length) %
                        achieverImages.length
                    )
                  }
                  className="hidden md:flex w-8 h-8 rounded-full bg-white/80 shadow-md items-center justify-center border border-gray-100 hover:bg-white transition-all"
                  aria-label="Previous achiever"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div className="flex space-x-4">
                  {achieverImages.map((image, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer rounded-lg overflow-hidden border ${
                        index === activeAchieverImage
                          ? "border-cusBlue"
                          : "border-gray-200"
                      }`}
                      onClick={() => selectAchieverImage(index)}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Achiever ${index + 1}`}
                        className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() =>
                    selectAchieverImage(
                      (activeAchieverImage + 1) % achieverImages.length
                    )
                  }
                  className="hidden md:flex w-8 h-8 rounded-full bg-white/80 shadow-md items-center justify-center border border-gray-100 hover:bg-white transition-all"
                  aria-label="Next achiever"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // Placements slide
      return (
        <div className="flex flex-col md:flex-row bg-gray-200/50 rounded-lg shadow-md overflow-hidden h-auto md:h-[500px]">
          <div className="w-full h-[300px] md:h-full md:w-1/2 relative">
            <div className="relative h-full">
              {placementImages.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activePlacementImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={`Placement ${index + 1}`}
                    className="w-full h-full object-cover object-fit object-[center_10%]"
                  />
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex items-center bg-black/50 rounded-lg p-4 backdrop-blur-sm">
                      <div className="w-1 h-16 bg-cusBlue mr-4"></div>
                      <div>
                        <h3 className="text-white text-2xl font-medium">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-16 bg-gray-200"></div>
                <span className="px-4 text-cusBlue text-sm font-medium">
                  {slide.subtitle}
                </span>
                <div className="h-px w-16 bg-gray-200"></div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                {slide.title}
              </h2>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cusBlue flex justify-center items-end">
                    {counters.placements}
                    <span className="text-xl">+</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Placement Offers for Previous Batch
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-cusBlue flex justify-center items-end">
                    {counters.recruiters}
                    <span className="text-xl">+</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Global Recruiters from Diverse Domains
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-cusBlue flex justify-center items-end">
                    {counters.highestCTC}
                    <span className="text-xl">LPA</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Highest CTC by Morrison Corp.
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-cusBlue flex justify-center items-end">
                    {counters.averageCTC}
                    <span className="text-xl">LPA</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Overall Average CTC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header - Static without animation */}
      <div className="mb-12 text-center">
        <h2 className="text-5xl font-bold text-cusBlue mb-4">
          Campus Success to Corporate Excellence
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the vibrant campus life, clubs, and connections that shape our
          community and prepare students for future success.
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        {renderSlideContent()}

        {/* Main Navigation Arrows */}
        <div className="flex absolute top-1/2 left-0 right-0 justify-between px-4 transform -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center border border-gray-100 hover:bg-white transition-all"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center border border-gray-100 hover:bg-white transition-all"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampusShowcase;
