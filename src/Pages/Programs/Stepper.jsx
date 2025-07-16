"use client";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Pause,
  Play,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "@/components/ui/heading";
import { TextAnimate } from "@/components/magicui/text-animate";
import GridBackground from "@/components/ui/GridBackground";
export default function AdmissionStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const stepperRef = useRef(null);

  const steps = [
    {
      number: 1,
      title: "Register Online",
      description: (
        <>
          Register at{" "}
          <a
            href="https://glauniversity.in:8085/Main/Admission"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
            onClick={(e) => e.stopPropagation()}
          >
            https://glauniversity.in:8085/Main/Admission
          </a>
        </>
      ),
      icon: "🖥️",
    },
    {
      number: 2,
      title: "Registration Fee",
      description: "After filling out your details, pay the registration fee",
      icon: "💳",
    },
    {
      number: 3,
      title: "GLAET Test",
      description:
        "It's a 2-hour online test with multiple-choice questions (MCQs)",
      icon: "📝",
    },
    {
      number: 4,
      title: "GLAET Result",
      description: "Wait for the GLAET result to check your status (pass/fail)",
      icon: "📊",
    },
    {
      number: 5,
      title: "Pay Token Amount",
      description:
        "After qualifying the GLAET, pay the token amount to secure your seat",
      icon: "🔒",
    },
    {
      number: 6,
      title: "Upload Documents",
      description:
        "Uploading the documents is the last step of the admission process",
      icon: "📁",
    },
  ];

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Consider visible when 50% of the element is in viewport
      }
    );

    if (stepperRef.current) {
      observer.observe(stepperRef.current);
    }

    return () => {
      if (stepperRef.current) {
        observer.unobserve(stepperRef.current);
      }
    };
  }, []);

  // Modify auto-progression effect
  useEffect(() => {
    let interval;
    // Auto-play when component is in viewport and not being interacted with
    if (isInViewport && !isHovering) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentStep((prevStep) => {
          const nextStep = prevStep === steps.length ? 1 : prevStep + 1;

          // Scroll to the next step smoothly on mobile
          if (window.innerWidth < 768) {
            const nextElement = document.getElementById(`step-${nextStep}`);
            if (nextElement) {
              nextElement.scrollIntoView({
                behavior: "auto",
                block: "nearest",
                inline: "nearest",
              });
            }
          }

          return nextStep;
        });
      }, 3000); // Change step every 3 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isHovering, steps.length, isInViewport]);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    } else {
      setDirection(1);
      setCurrentStep(1); // Loop back to first step
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepNumber) => {
    setDirection(stepNumber > currentStep ? 1 : -1);
    setCurrentStep(stepNumber);
  };

  // Modify this useEffect to prevent unwanted scrolling
  useEffect(() => {
    if (window.innerWidth < 768) {
      const element = document.getElementById(`step-${currentStep}`);
      if (element) {
        // Only scroll within the stepper container
        const stepperContainer = stepperRef.current;
        if (stepperContainer) {
          const containerRect = stepperContainer.getBoundingClientRect();
          const elementRect = element.getBoundingClientRect();

          // Only scroll if the element is outside the visible area of the container
          if (
            elementRect.top < containerRect.top ||
            elementRect.bottom > containerRect.bottom
          ) {
            element.scrollIntoView({
              behavior: "auto",
              block: "nearest",
              inline: "nearest",
            });
          }
        }
      }
    }
  }, [currentStep]);

  return (
    <GridBackground>
      <div
        ref={stepperRef}
        className="w-full max-w-7xl mx-auto px-4 py-20 overflow-y-auto scroll-mt-20"
      >
        <Heading level={2} className="text-center text-cusText">
          {/* <TextAnimate
          as="span"
          by="word"
          delay={0.2}
          duration={0.5}
          animation="slideUp"
        > */}
          Admission Process
          {/* </TextAnimate> */}
        </Heading>
        <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full mb-10 sm:mb-16"></div>

        {/* Mobile Stepper (Vertical) */}
        <div
          className="md:hidden space-y-0 overflow-hidden"
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
        >
          <div className="relative pl-10">
            {/* Continuous Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 z-0"></div>

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                id={`step-${step.number}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: step.number * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  "relative py-3",
                  index !== steps.length - 1 ? "pb-6" : ""
                )}
                onTouchStart={() => setIsHovering(true)}
                onTouchEnd={() => {
                  // Add a small delay before removing hover state
                  setTimeout(() => setIsHovering(false), 1000);
                }}
              >
                {/* Step Circle */}
                <div className="absolute left-0 top-5 z-10 -translate-x-[13px]">
                  {step.number < currentStep ? (
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center shadow-md shadow-green-500/20 border-2 border-white"
                    >
                      <CheckCircle className="h-5 w-5 text-white" />
                    </motion.div>
                  ) : step.number === currentStep ? (
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{
                        scale: 1,
                        boxShadow: [
                          "0px 0px 0px rgba(0,0,0,0.1)",
                          "0px 0px 15px rgba(0,0,0,0.2)",
                          "0px 0px 0px rgba(0,0,0,0.1)",
                        ],
                      }}
                      transition={{
                        duration: 0.5,
                        boxShadow: {
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          duration: 2,
                        },
                      }}
                      className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium shadow-lg border-2 border-white"
                    >
                      {step.number}
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="h-8 w-8 rounded-full border-2 border-white bg-white flex items-center justify-center text-sm font-medium text-gray-400 shadow-sm"
                    >
                      {step.number}
                    </motion.div>
                  )}
                </div>

                {/* Content Card */}
                <Card
                  className={cn(
                    "cursor-pointer transition-all duration-300 overflow-hidden",
                    step.number === currentStep
                      ? "border-gray-300 shadow-md"
                      : step.number < currentStep
                      ? "border-gray-200 bg-gray-50/50"
                      : "border-gray-200"
                  )}
                  onClick={() => handleStepClick(step.number)}
                  onMouseEnter={() => setIsHovering(step.number)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <motion.span
                          className="text-xl"
                          initial={{ rotateY: 180, opacity: 0 }}
                          animate={{ rotateY: 0, opacity: 1 }}
                          transition={{ delay: 0.2 + step.number * 0.1 }}
                        >
                          {step.icon}
                        </motion.span>
                        <h3
                          className={cn(
                            "font-medium transition-all duration-300",
                            step.number === currentStep
                              ? "text-black font-semibold"
                              : ""
                          )}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <motion.p
                        className="text-sm text-muted-foreground mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + step.number * 0.1 }}
                      >
                        {step.description}
                      </motion.p>

                      {step.number === currentStep && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="mt-2"
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-black p-0 h-auto font-normal text-xs flex items-center gap-1 hover:bg-transparent hover:text-black hover:gap-2 transition-all duration-300"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNext();
                            }}
                            disabled={currentStep === steps.length}
                          >
                            Continue to next step{" "}
                            <ArrowRight className="h-3 w-3" />
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Stepper (Horizontal) */}
        <div className="hidden md:block relative">
          <div className="mb-20 relative">
            {/* Main connecting line - thin and centered through circles */}
            <div className="absolute top-1/3 left-14 w-[calc(100%-100px)]  h-0.5 bg-gray-300 -translate-y-1/3 z-0"></div>

            {/* Progress line - shows completed steps */}
            <div
              className="absolute top-1/3 left-14 max-w-[calc(100%-100px)] w-full h-0.5 bg-green-500 -translate-y-1/3 z-0 transition-all duration-500"
              style={{
                width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
              }}
            ></div>

            {/* Steps */}
            <div className="relative z-10 flex mt-20 justify-between">
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: step.number * 0.1 }}
                  className="flex flex-col items-center"
                  onMouseEnter={() => setIsHovering(step.number)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  {/* Step Circle with Hover Effect */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleStepClick(step.number)}
                    className="cursor-pointer relative mb-2"
                  >
                    {/* Icon above circle */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + step.number * 0.1 }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm border border-gray-100"
                    >
                      <span className="text-sm">{step.icon}</span>
                    </motion.div>

                    {/* Circle */}
                    {step.number < currentStep ? (
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-sm"
                      >
                        <CheckCircle className="h-6 w-6 text-white" />
                      </motion.div>
                    ) : step.number === currentStep ? (
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg font-medium shadow-sm"
                      >
                        {step.number}
                      </motion.div>
                    ) : (
                      <motion.div className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-lg font-medium text-gray-400">
                        {step.number}
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Step Title */}
                  <motion.div
                    className="text-center max-w-[150px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + step.number * 0.1 }}
                  >
                    <h3
                      className={cn(
                        "font-medium text-sm",
                        step.number === currentStep
                          ? "text-black font-semibold"
                          : "text-gray-600"
                      )}
                    >
                      {step.title}
                    </h3>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Step Description Card */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: direction * 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction * -100, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative"
              >
                <Card
                  className="border-gray-200 overflow-hidden shadow-md !p-0"
                  onMouseEnter={() => setIsHovering("description-card")}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl font-medium shadow-sm"
                        initial={{ rotate: -10, scale: 0.9 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        {currentStep}
                      </motion.div>
                      <div>
                        <motion.span
                          className="text-2xl mr-3 inline-block"
                          initial={{ rotateY: 180, opacity: 0 }}
                          animate={{ rotateY: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {steps[currentStep - 1].icon}
                        </motion.span>
                        <motion.h3
                          className="text-xl font-bold inline-block text-gray-800"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {steps[currentStep - 1].title}
                        </motion.h3>
                      </div>
                    </div>

                    <motion.div
                      className="relative p-6 rounded-xl bg-gray-50 border border-gray-100"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.p
                        className="text-gray-600 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {steps[currentStep - 1].description}
                      </motion.p>
                    </motion.div>

                    {/* Step Indicator */}
                    <div className="flex items-center justify-center mt-8 gap-2">
                      {steps.map((step, index) => (
                        <motion.div
                          key={index}
                          className={cn(
                            "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                            currentStep === index + 1
                              ? "w-6 bg-black"
                              : "w-1.5 bg-gray-200"
                          )}
                          whileHover={{ scale: 1.2 }}
                          onClick={() => handleStepClick(index + 1)}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </GridBackground>
  );
}
