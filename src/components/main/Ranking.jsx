"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import trophy from "@/assets/video/videoplayback.webm";
import dainik from "@/assets/logo/danikJagran.webp";
import times from "@/assets/logo/timesbschool.webp";

const rankingData = [
  {
    id: 1,
    rank: "#1",
    title: "Ranked #1 in UP",
    description: "amongst Best Private Universities in 2020 by Dainik Jagaran",
    logoSrc: dainik,
  },
  {
    id: 2,
    rank: "#2",
    title: "Ranked #2 in UP & #7 in India",
    description: "amongst all private B-Schools Ranking 2021 by TimesBschool",
    logoSrc: times,
  },
  {
    id: 3,
    rank: "#3",
    title: "Ranked #1 in UP",
    description: "amongst Best Private Universities in 2020 by Dainik Jagaran",
    logoSrc: dainik,
  },
  {
    id: 4,
    rank: "#4",
    title: "Ranked #2 in UP & #7 in India",
    description: "amongst all private B-Schools Ranking 2021 by TimesBschool",
    logoSrc: times,
  },
];

export default function RankingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(rankingData.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const getCurrentPageItems = () => {
    const startIndex = currentIndex * itemsPerPage;
    return rankingData.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section className="py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="pr-4">
            <div className="space-y-8 md:space-y-16">
              {getCurrentPageItems().map((item, index) => (
                <div key={item.id} className="transition-all duration-500">
                  <div className="flex mb-4">
                    <div className="text-[80px] md:text-[120px] font-bold text-[#1e2a4a] leading-none mr-4 md:mr-8">
                      <div className="flex items-start">
                        <span className="text-[50px] md:text-[80px] mt-4 md:mt-6">
                          #
                        </span>
                        <span>{item.rank.replace("#", "")}</span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="space-y-1 md:space-y-2">
                        <h3 className="text-lg md:text-2xl font-bold text-[#1e2a4a]">
                          {item.title}
                        </h3>
                        <p className="text-base md:text-xl text-[#1e2a4a]">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-4">
                        <div className="h-[30px] md:h-[40px] relative">
                          <img
                            src={item.logoSrc || "/placeholder.svg"}
                            alt={`Logo for ranking ${item.rank}`}
                            className="object-contain h-full w-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {index === 0 && (
                    <div className="w-full h-0.5 bg-white my-4 md:my-6"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex space-x-2 mt-6 md:mt-8">
              <button
                onClick={prevSlide}
                className="bg-[#1e2a4a] text-white p-2 md:p-3 hover:bg-[#2a3a5a] transition-colors"
                aria-label="Previous ranking"
              >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-[#1e2a4a] text-white p-2 md:p-3 hover:bg-[#2a3a5a] transition-colors"
                aria-label="Next ranking"
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-full h-full flex justify-center items-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full md:w-[160%] lg:w-[180%]  object-contain"
              >
                <source src={trophy} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
