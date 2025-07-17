"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Download,
  Calendar,
  GraduationCap,
  Users,
  BookOpen,
  Beaker,
  CreditCard,
  ChevronRight,
  ArrowRight,
  Check,
  Mail,
  Phone,
  User,
  Lock,
  ArrowUpRight,
  Building2,
  UserPlus,
  UsersRound,
  Code2,
  Wrench,
  Lightbulb,
  UserCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "./components/hero-section";
import { ProgramDescription } from "./components/program-description";
import { ProgramOutcomes } from "./components/program-outcomes";
import { EligibilitySection } from "./components/eligibility-section";
import { CurriculumSection } from "./components/curriculum-section";
import { FeesSection } from "./components/fees-section";
import { LabsSection } from "./components/labs-section";
import { BrochureSection } from "./components/brochure-section";
import { EventsSection } from "./components/events-section";
import { CTASection } from "./components/cta-section";
import { IndustryPartners } from "./components/industry-partners";
import AdmissionStepper from "@/Pages/Programs/Stepper";
import { AnimationStyles } from "./components/animation-styles";
import GridBackground from "@/components/ui/GridBackground";

export function AIML() {
  // State management
  const [activeField, setActiveField] = useState(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formFocus, setFormFocus] = useState({
    name: false,
    email: false,
    phone: false,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form focus
  const handleFocus = (field) => {
    setFormFocus((prev) => ({
      ...prev,
      [field]: true,
    }));
    setActiveField(field);
  };

  // Handle form blur
  const handleBlur = (field) => {
    setFormFocus((prev) => ({
      ...prev,
      [field]: false,
    }));
    setActiveField(null);
  };

  const icons = [
    {
      src: "/programs/recruiters/accenture.webp",
      alt: "Accenture",
    },
    {
      src: "/programs/recruiters/amazon.webp",
      alt: "Amazon",
    },
    {
      src: "/programs/recruiters/facebook.webp",
      alt: "Facebook",
    },
    {
      src: "/programs/recruiters/IBM.webp",
      alt: "IBM",
    },
    {
      src: "/programs/recruiters/Intel.webp",
      alt: "Intel",
    },
    {
      src: "/programs/recruiters/microsoft.png",
      alt: "Microsoft",
    },
    {
      src: "/programs/recruiters/nvidia.webp",
      alt: "NVIDIA",
    },
    {
      src: "/programs/recruiters/samsung.webp",
      alt: "Samsung",
    },
  ];

  const plans = [
    {
      title: "1st Year Fees",
      price: "₹2,35,000/-",
      highlight: true,
      buttonText: "Enroll Now",
    },
    {
      title: "2nd Year Fees",
      price: "₹2,43,000/-",
      highlight: false,
      buttonText: "Enroll Now",
    },
    {
      title: "3rd Year Fees",
      price: "₹2,51,000/-",
      highlight: false,
      buttonText: "Enroll Now",
    },
    {
      title: "4th Year Fees",
      price: "₹2,59,000/-",
      highlight: false,
      buttonText: "Enroll Now",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <AnimationStyles />
      {/* Hero Banner */}
      <HeroSection
        backgroundImage={"/programs/HeroAIML.png"}
        customHero={
          <>
            <h1 className="text-3xl sm:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight leading-tight animate-fade-in-up">
              Code your own{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Future
              </span>
            </h1>
            <h2 className="text-lg sm:text-2xl font-semibold italic text-cusYellow drop-shadow-md animate-fade-in-up delay-100">
              With GLA Industry Integrated
            </h2>
            <h3 className="text-2xl sm:text-4xl font-bold text-yellow-400 drop-shadow-xl animate-fade-in-up delay-200">
              B.Tech in AI/ML & CSE
            </h3>
          </>
        }
        features={[
          "8-Semester Program",
          "Expert Faculty",
          "Industry-Ready Skills",
          "Latest Technology",
        ]}
        stats={[
          { value: "55 LPA", label: "Highest CTC" },
          { value: "4.8/5", label: "Student Rating" },
          { value: "500+", label: "Top Recruiters" },
        ]}
        courseName="1550"
        courseTitle="B.Tech AI/ML"
      />

      {/* Industry Partners */}
      <IndustryPartners
        title="Industry Partners"
        subtitle="Trusted by"
        icons={icons}
      />

      {/* Program Description */}
      <ProgramDescription
        title="About the Program"
        description={[
          "Have you ever wondered how your smartphone recognizes your face, or how your personal assistant, like Siri or Alexa, responds to your voice? That's the magic of Artificial Intelligence (AI) and Machine Learning (ML). From helping us navigate through traffic with GPS to predicting your next movie based on your preferences, AI and ML are all around us, changing the way we live and work. These technologies are rapidly advancing, and as they evolve, they're making an even bigger impact on industries worldwide",
          "A B. Tech in Computer Science & Engineering with a focus on Artificial Intelligence and Machine Learning (AI/ML) at GLA University, in partnership with Microsoft, offers you a chance to dive into the heart of this revolution. This program covers everything from the basics of programming languages like Python and R, and Tableau, to exploring the depths of machine learning algorithms, data analysis, and intelligent systems. With a curriculum backed by industry giants, you'll not only learn cutting-edge skills but also get hands-on experience with Microsoft tools, preparing you to be a leader in AI and ML technologies.",
        ]}
        imageUrl="/sports/sports.webp"
        features={[
          {
            icon: (
              <Users className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Practical Learning",
            description: "Industry Professionals",
          },
          {
            icon: (
              <Building2 className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Industry Collaboration",
            description: "Tie-ups with Top Firms",
          },
          {
            icon: (
              <UserPlus className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Expert Mentorship",
            description: "Guidance from Experts",
          },
          {
            icon: (
              <UsersRound className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Peer Learning",
            description: "Collaborative Projects",
          },
        ]}
      />
      {/* Program Outcomes */}
      <ProgramOutcomes
        title="What You Will Learn"
        outcomes={[
          "Master fundamental concepts of AI and Machine Learning.",
          "Develop intelligent systems and predictive models.",
          "Gain expertise in data science and analytics.",
          "Apply AI/ML to solve real-world problems.",
        ]}
        imageUrl="/general/btech.webp"
      />
      {/* curriculum section */}
      <CurriculumSection
        title="B.Tech AI/ML Curriculum"
        semesters={{
          "Semester 1 & 2": [
            "Fundamentals of AI",
            "Python for AI/ML",
            "Data Structures & Algorithms",
            "Linear Algebra & Calculus",
          ],
          "Semester 3 & 4": [
            "Machine Learning Models",
            "Deep Learning",
            "Natural Language Processing",
            "Computer Vision",
          ],
          "Semester 5 & 6": [
            "Reinforcement Learning",
            "Big Data Analytics",
            "AI Ethics & Governance",
            "Advanced AI Projects",
          ],
          "Semester 7 & 8": [
            "Specialization Electives",
            "Internship/Capstone Project",
            "AI in Industry",
            "Final Year Project",
          ],
        }}
      />
      {/* Fees Section */}
      <FeesSection
        title="Fee Structure"
        plans={plans}
        additionalInfo="*Additional fees may apply for specializations and optional certifications."
        brochureUrl="/path/to/aiml-brochure.pdf"
      />

      {/* Labs Section */}
      <LabsSection
        title="Our AI/ML Labs"
        labs={[
          {
            name: "Advanced AI Lab",
            description: "State-of-the-art lab for AI and deep learning.",
            imageUrl: "/news/AI_Tech.webp",
          },
          {
            name: "Data Science Hub",
            description:
              "Equipped with tools for big data analytics and visualization.",
            imageUrl: "/news/research.webp",
          },
          {
            name: "Robotics & Automation Lab",
            description: "A playground for building and testing smart robots.",
            imageUrl: "/news/innovation.webp",
          },
        ]}
      />
      {/* Brochure */}
      <BrochureSection
        title="Download AI/ML Brochure"
        description="Get detailed information about the B.Tech AI/ML program, including curriculum, fees, and admission requirements."
        brochureUrl="/path/to/aiml-brochure.pdf"
        imageUrl={"/programs/brochure1.webp"}
      />
      {/* Admission process */}
      <AdmissionStepper />
      {/* Events and Workshops */}
      <EventsSection
        title="Events & Workshops"
        events={[
          {
            date: "OCT 15, 2024",
            title: "AI & Machine Learning Summit",
            description:
              "A summit exploring the future of AI and machine learning.",
            imageUrl: "/news/AI_Tech.webp",
          },
          {
            date: "NOV 01, 2024",
            title: "Data Science Workshop",
            description: "A hands-on workshop on data analytics and modeling.",
            imageUrl: "/news/research.webp",
          },
          {
            date: "DEC 05, 2024",
            title: "Annual AI Hackathon",
            description: "Compete with the best and showcase your AI skills.",
            imageUrl: "/news/innovation.webp",
          },
        ]}
      />

      {/* Call to Action */}
      <CTASection
        title="Ready to Become an AI/ML Expert?"
        description="Our counselors are here to help you with the admission process."
      />
    </div>
  );
}
