"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/heading";
import banner from "@/assets/news/AI_Tech.webp";
import bannerTwo from "@/assets/news/innovation.webp";
import bannerThree from "@/assets/news/handshake.webp";
import sports from "@/assets/news/building.webp";
import general from "@/assets/news/research.webp";
import generalTwo from "@/assets/news/alumi.webp";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";

// Custom Badge component
const Badge = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center text-black px-2.5 py-0.5 text-xs font-medium transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const LatestNews = () => {
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const newsContainerRef = useRef(null);
  const eventsContainerRef = useRef(null);

  // Add these new states for touch handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const onTouchEnd = (isNews = true) => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      isNews ? handleNewsNavigation("next") : handleEventNavigation("next");
    }
    if (isRightSwipe) {
      isNews ? handleNewsNavigation("prev") : handleEventNavigation("prev");
    }
  };

  const newsItems = [
    {
      id: 1,
      image: banner,
      categories: [
        { name: "RESEARCH", variant: "research" },
        { name: "SCIENCE", variant: "science" },
      ],
      title: "GLA University Researchers Make Breakthrough in AI Technology",
      author: "Dr. Sharma",
      date: "Mar 15, 2024",
    },
    {
      id: 2,
      image: bannerTwo,
      categories: [{ name: "STUDENT LIFE", variant: "studentLife" }],
      title: "GLA Students Win National Innovation Challenge",
      author: "Prof. Kumar",
      date: "Mar 10, 2024",
    },
    {
      id: 3,
      image: bannerThree,
      categories: [
        { name: "CAREER", variant: "career" },
        { name: "CAMPUS", variant: "campus" },
      ],
      title: "Top Companies Recruit GLA Graduates in Record Numbers",
      author: "Placement Cell",
      date: "Mar 5, 2024",
    },
    {
      id: 4,
      image: sports,
      categories: [
        { name: "FACILITIES", variant: "facilities" },
        { name: "CAMPUS", variant: "campus" },
      ],
      title: "New Engineering Block Inaugurated at GLA University",
      author: "Campus News",
      date: "Feb 28, 2024",
    },
    {
      id: 5,
      image: generalTwo,
      categories: [
        { name: "EVENTS", variant: "events" },
        { name: "ALUMNI", variant: "alumni" },
      ],
      title: "GLA Alumni Meet 2024: Connecting Past and Present",
      author: "Alumni Association",
      date: "Feb 20, 2024",
    },
    {
      id: 6,
      image: general,
      categories: [
        { name: "RESEARCH", variant: "research" },
        { name: "SCIENCE", variant: "science" },
      ],
      title:
        "GLA University Receives Major Research Grant for Sustainable Energy",
      author: "Research Department",
      date: "Feb 15, 2024",
    },
  ];

  const events = [
    {
      id: 1,
      day: "25",
      month: "MAR",
      title: "GLA Tech Fest 2024: Innovation Summit",
      timeRange: "9:30 AM - 5:30 PM",
      location: "Main Auditorium, GLA University",
    },
    {
      id: 2,
      day: "28",
      month: "MAR",
      title: "Annual Cultural Festival - Yuva Tarang",
      timeRange: "10:00 AM - 8:00 PM",
      location: "University Ground",
    },
    {
      id: 3,
      day: "02",
      month: "APR",
      title: "Industry Expert Talk: Future of AI and Machine Learning",
      timeRange: "2:30 PM - 4:30 PM",
      location: "CS Block Seminar Hall",
    },
    {
      id: 4,
      day: "05",
      month: "APR",
      title: "National Conference on Emerging Technologies",
      timeRange: "9:00 AM - 6:00 PM",
      location: "Convention Center",
    },
    {
      id: 5,
      day: "10",
      month: "APR",
      title: "Campus Placement Drive - IT Companies",
      timeRange: "All Day",
      location: "Placement Cell",
    },
    {
      id: 6,
      day: "15",
      month: "APR",
      title: "Sports Meet 2024: Inter-Department Championship",
      timeRange: "8:00 AM - 6:00 PM",
      location: "Sports Complex",
    },
  ];

  // Update the getVisibleItemCount function to apply to both sliders
  const getVisibleItemCount = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 1 : 3;
    }
    return 3;
  };

  const [visibleItems, setVisibleItems] = useState(getVisibleItemCount());

  // Update visible items count on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItemCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Display items based on screen size
  const visibleNewsItems = newsItems.slice(
    activeNewsIndex,
    activeNewsIndex + visibleItems
  );
  // If we don't have enough items, add from the beginning
  if (visibleNewsItems.length < visibleItems) {
    visibleNewsItems.push(
      ...newsItems.slice(0, visibleItems - visibleNewsItems.length)
    );
  }

  // Display events based on screen size
  const visibleEvents = events.slice(
    activeEventIndex,
    activeEventIndex + visibleItems
  );
  // If we don't have enough items, add from the beginning
  if (visibleEvents.length < visibleItems) {
    visibleEvents.push(...events.slice(0, visibleItems - visibleEvents.length));
  }

  const handleNewsNavigation = useCallback(
    (direction) => {
      if (direction === "prev") {
        setActiveNewsIndex((prev) => {
          const newIndex = prev - 1;
          if (newIndex < 0) {
            return newsItems.length - 1;
          }
          return newIndex;
        });
      } else {
        setActiveNewsIndex((prev) => {
          const newIndex = prev + 1;
          if (newIndex >= newsItems.length) {
            return 0;
          }
          return newIndex;
        });
      }
    },
    [newsItems.length]
  );

  // Make sure the handleEventNavigation uses visibleItems
  const handleEventNavigation = useCallback(
    (direction) => {
      setActiveEventIndex((prev) => {
        if (direction === "prev") {
          return prev === 0 ? events.length - visibleItems : prev - 1;
        } else {
          return prev === events.length - visibleItems ? 0 : prev + 1;
        }
      });
    },
    [events.length, visibleItems]
  );

  // Auto-slide functionality
  useEffect(() => {
    const newsInterval = setInterval(() => {
      handleNewsNavigation("next");
    }, 3000);

    const eventsInterval = setInterval(() => {
      handleEventNavigation("next");
    }, 3000);

    return () => {
      clearInterval(newsInterval);
      clearInterval(eventsInterval);
    };
  }, [handleNewsNavigation, handleEventNavigation]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 overflow-hidden">
      {/* News Section - Left side */}
      <div className="lg:col-span-2 overflow-hidden">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-6"
        >
          <Heading
            level={2}
            as="span"
            by="word"
            delay={0.2}
            duration={0.5}
            animation="slideUp"
            className="inline-flex flex-wrap"
          >
            Campus Happenings
          </Heading>
          <button
            className="group flex items-center text-sm font-medium text-gray-600 hover:text-cusBlue transition-colors"
            onClick={() => handleNewsNavigation("next")}
          >
            View all
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="relative overflow-hidden">
          <div
            ref={newsContainerRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                activeNewsIndex * (100 / visibleItems)
              }%)`,
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={() => onTouchEnd(true)}
          >
            {[...newsItems, ...newsItems.slice(0, visibleItems)].map(
              (item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="group relative flex flex-col h-full overflow-hidden rounded-xl bg-white transition-all duration-300 shadow-sm">
                    <div className="relative h-48 overflow-hidden rounded-t-xl">
                      <img
                        src={
                          item.image || "/placeholder.svg?height=200&width=300"
                        }
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="flex-1 p-5 border border-t-0 border-gray-100 rounded-b-xl transition-all duration-300 group-hover:border-purple-100">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.categories.map((category, idx) => (
                          <Badge key={idx} variant={category.variant}>
                            {category.name}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-lg font-bold mb-4 text-gray-900 line-clamp-2 group-hover:text-cusBlue transition-colors">
                        {item.title}
                      </h3>

                      <div className="mt-auto pt-4 text-gray-500 text-sm border-t border-gray-100 flex items-center justify-between">
                        <span className="font-medium">{item.author}</span>
                        <span>{item.date}</span>
                      </div>

                      <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <button className="bg-cusGreen hover:bg-cusGreenDark text-white p-2 rounded-full shadow-lg">
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {newsItems.map((_, idx) => (
            <button
              key={idx}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                idx >= activeNewsIndex && idx < activeNewsIndex + 1
                  ? "bg-cusYellow"
                  : "bg-gray-200 hover:bg-gray-300"
              )}
              onClick={() => setActiveNewsIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Events Section - Right side */}
      <div className="overflow-hidden relative h-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-6"
        >
          <Heading level={2}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Events
            </motion.div>
          </Heading>
          <button
            className="group flex items-center text-sm font-medium text-gray-600 hover:text-cusBlue transition-colors"
            onClick={() => handleEventNavigation("next")}
          >
            View all
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="relative overflow-hidden h-[380px]">
          <div
            ref={eventsContainerRef}
            className="absolute inset-0 flex flex-col transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateY(-${
                activeEventIndex * (100 / visibleItems)
              }%)`,
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={() => onTouchEnd(false)}
          >
            {[...events, ...events.slice(0, visibleItems)].map(
              (event, index) => (
                <motion.div
                  key={`${event.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 h-[160px] mb-4 last:mb-0"
                >
                  <div
                    className="group flex items-start p-4 h-full rounded-xl bg-white border border-gray-100 
                           transition-all duration-300 hover:shadow-lg hover:border-cusBlue/20 
                           cursor-pointer transform hover:-translate-y-1"
                  >
                    <div
                      className="flex-shrink-0 mr-5 p-3 bg-gradient-to-br from-cusBlue/10 to-cusBlue/5 
                             rounded-lg transition-colors group-hover:from-cusBlue/20 group-hover:to-cusBlue/10"
                    >
                      <div className="text-3xl font-bold text-cusBlue">
                        {event.day}
                      </div>
                      <div className="text-gray-500 uppercase text-xs font-medium tracking-wider">
                        {event.month}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-lg font-bold mb-2 text-gray-900 group-hover:text-cusBlue 
                               transition-colors line-clamp-2"
                      >
                        {event.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="truncate">{event.timeRange}</div>
                        <div className="mx-2">•</div>
                        <div className="truncate">{event.location}</div>
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex-shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ArrowRight className="h-5 w-5 text-cusBlue" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {events.map((_, idx) => (
            <button
              key={idx}
              className={cn(
                "h-2 w-2 rounded-full transition-colors duration-300",
                idx === activeEventIndex
                  ? "bg-cusBlue w-4"
                  : "bg-gray-200 hover:bg-gray-300"
              )}
              onClick={() => setActiveEventIndex(idx)}
              aria-label={`Go to events slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
