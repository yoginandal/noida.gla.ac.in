"use client";
import { useEffect, useState } from "react";
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
import Section from "@/layouts/section";
import { Heading } from "@/components/ui/heading";
import { HeroSection } from "@/components/Programs/components/hero-section";
import { ProgramDescription } from "@/components/Programs/components/program-description";
import { ProgramOutcomes } from "@/components/Programs/components/program-outcomes";
import { EligibilitySection } from "@/components/Programs/components/eligibility-section";
import { CurriculumSection } from "@/components/Programs/components/curriculum-section";
import { FeesSection } from "@/components/Programs/components/fees-section";
import { LabsSection } from "@/components/Programs/components/labs-section";
import { BrochureSection } from "@/components/Programs/components/brochure-section";
import { EventsSection } from "@/components/Programs/components/events-section";
import { CTASection } from "@/components/Programs/components/cta-section";
import AdmissionStepper from "./Stepper";
import { IndustryPartners } from "@/components/Programs/components/industry-partners";
import { AnimationStyles } from "@/components/Programs/components/animation-styles";

const herobg = "/programs/HeroBtechCse.png";
const amazonWebp = "/programs/recruiters/amazon.webp";
const dellWebp = "/programs/recruiters/dell.webp";
const hpWebp = "/programs/recruiters/hp.webp";
const microsoftImg = "/programs/recruiters/microsoft.png";
const vmwareWebp = "/programs/recruiters/vmware.webp";
const ibmWebp = "/programs/recruiters/IBM.webp";
const hclWebp = "/programs/recruiters/HCL.webp";
const infosysWebp = "/programs/recruiters/Infosys.webp";
const capgeminiWebp = "/programs/recruiters/capgemini.webp";
const brochureImg = "/programs/brochure5.webp";

export function BtechCS() {
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
      src: amazonWebp,
      alt: "Amazon",
    },
    {
      src: dellWebp,
      alt: "Dell",
    },
    {
      src: hpWebp,
      alt: "HP",
    },
    {
      src: microsoftImg,
      alt: "Microsoft",
    },
    {
      src: vmwareWebp,
      alt: "VMware",
    },
    {
      src: ibmWebp,
      alt: "IBM",
    },
    {
      src: hclWebp,
      alt: "HCL",
    },
    {
      src: infosysWebp,
      alt: "Infosys",
    },
    {
      src: capgeminiWebp,
      alt: "Capgemini",
    },
  ];

  const plans = [
    {
      title: "1st Year Fees",
      price: "₹2,00,000/-",
      highlight: true,
      buttonText: "Enroll Now",
    },
    {
      title: "2nd Year Fees",
      price: "₹2,08,000/-",
      highlight: false,
      buttonText: "Enroll Now",
    },
    {
      title: "3rd Year Fees",
      price: "₹2,16,000/-",
      highlight: false,
      buttonText: "Enroll Now",
    },
    {
      title: "4th Year Fees",
      price: "₹2,24,000/-",
      highlight: false,
      buttonText: "Enroll Now",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <AnimationStyles />
      {/* Hero Banner */}
      <HeroSection
        backgroundImage={herobg}
        title="B.Tech in"
        subtitle="Computer Science Engineering"
        para="Transform your career with our comprehensive b.tech in computer science engineering program designed for the modern industry. Learn from experts and build real-world projects."
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
        courseName="1500"
        courseTitle="B.Tech CSE"
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
          "The B.Tech in Computer Science & Engineering (CSE) is a comprehensive 8-semester program that prepares you for an exciting career in the world of computing. If you have a passion for technology, this program will help you understand the core concepts of computer science and engineering. You'll learn how to design, develop, and test software and algorithms, as well as explore the latest advancements in the field.",
          "Recognized as a top choice for students pursuing a BTech in Computer Science Engineering, GLA University ensures you gain hands-on experience with real-world applications and modern tools. After completing the course, you'll be a skilled professional in computing systems and their operation. The knowledge you gain will help not only in computer science but also in other areas of engineering, like IT, electronics, and software engineering. Get ready to dive into the fast-changing world of technology with a BTech in CSE from GLA University.",
        ]}
        imageUrl="https://gla-noida.vercel.app/assets/sports-UcTaf5m6.webp"
        features={[
          {
            icon: (
              <BookOpen className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Industry-Linked Curriculum",
            description: "Latest Industry Trends",
          },
          {
            icon: (
              <GraduationCap className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Global Exposure",
            description: "Study Abroad Options",
          },
          {
            icon: (
              <Users className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Expert Faculty",
            description: "IITs & NITs Professors",
          },
          {
            icon: (
              <Beaker className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Innovation Focus",
            description: "Entrepreneurship Skills",
          },
          {
            icon: (
              <GraduationCap className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "IIT Experience",
            description: "Semester-Long Study",
          },
          {
            icon: (
              <BookOpen className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Project-Based",
            description: "Practical Skills",
          },
          {
            icon: (
              <Users className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Placement-Ready",
            description: "AI Mock Interviews",
          },
          {
            icon: (
              <Beaker className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Codeathons",
            description: "Real-world Experience",
          },
        ]}
      />

      {/* Eligibility */}
      <EligibilitySection
        requirements={[
          "10+2 examination with Physics and Mathematics as mandatory subjects",
          "Chemistry or Computer Science as third subject",
          "Minimum 50% marks in Physics, Mathematics and Chemistry/Computer Science combined",
          "Minimum 50% marks overall in 10+2 examination",
          "Strong analytical and problem-solving skills",
          "Basic computer proficiency",
          "Proficiency in English (written and verbal)",
        ]}
        plans={plans}
      />

      {/* Program Outcomes */}
      <ProgramOutcomes
        title="Program Outcomes"
        subtitle="What You'll Achieve"
        description="At GLA University, Greater Noida campus, we go beyond just teaching theory. Our hands-on approach and project-based learning ensure that you're equipped with the skills the industry is looking for. By the time you graduate, you'll be ready to make an impact in the tech world."
        outcomes={[
          {
            title: "Advanced Technical Expertise",
            description:
              "Master programming languages and development methods for success.",
            icon: <BookOpen className="h-8 w-8 sm:h-9 sm:w-9 text-cusAccent" />,
          },
          {
            title: "Research & Innovation Skills",
            description:
              "Develop innovative solutions through advanced research approaches.",
            icon: <Beaker className="h-8 w-8 sm:h-9 sm:w-9 text-cusAccent" />,
          },
          {
            title: "Industry Ready Professional",
            description:
              "Transform into skilled professional for tech companies.",
            icon: (
              <GraduationCap className="h-8 w-8 sm:h-9 sm:w-9 text-cusAccent" />
            ),
          },
          {
            title: "Global Tech Leader",
            description:
              "Lead international teams and drive innovation projects.",
            icon: <Users className="h-6 w-6 sm:h-9 sm:w-9 text-cusAccent" />,
          },
          {
            title: "Strategic Problem Solver",
            description:
              "Create efficient solutions for technical business challenges.",
            icon: <Beaker className="h-8 w-8 sm:h-9 sm:w-9 text-cusAccent" />,
          },
          {
            title: "Tech Entrepreneur Ready",
            description: "Launch and scale innovative tech ventures globally.",
            icon: <BookOpen className="h-8 w-8 sm:h-9 sm:w-9 text-cusAccent" />,
          },
          {
            title: "Ethical Tech Champion",
            description: "Drive innovation ensuring data privacy and security.",
            icon: <Users className="h-8 w-8 sm:h-9 sm:w-9 text-cusAccent" />,
          },
          {
            title: "Continuous Tech Innovator",
            description:
              "Stay ahead with emerging tech and industry practices.",
            icon: (
              <GraduationCap className="h-8 w-8 sm:h-9 sm:w-9 text-cusAccent" />
            ),
          },
        ]}
      />

      {/* Admission Process */}
      <AdmissionStepper />

      {/* Curriculum */}
      <CurriculumSection
        title="Why Choose Computer Science Engineering?"
        programDescription="Computer Science is one of the most popular and rapidly growing fields in engineering. Students often choose this path because of its vast potential and career opportunities. As new technologies emerge, the scope of CSE continues to expand. From the Internet of Things (IoT) to gesture-controlled home automation, innovations are changing how we live. With the arrival of 6G, faster processing will become a priority, leading to the development of more powerful processors. Artificial Intelligence (AI), Virtual Reality (VR), and Robotics are also set to revolutionize our daily lives, with developments like Butler bots helping us in everyday tasks. These advancements ensure that a career in Computer Science is not only exciting but future-proof, with endless growth opportunities."
      />

      {/* Fees */}
      {/* <FeesSection
        title="Program Fees"
        subtitle="Investment"
        plans={[
          {
            title: "1st Year Fees",
            price: "₹2,00,000/-",
            highlight: true,
            buttonText: "Enroll Now",
          },
          {
            title: "2nd Year Fees",
            price: "₹2,08,000/-",
            highlight: false,
            buttonText: "Enroll Now",
          },
          {
            title: "3rd Year Fees",
            price: "₹2,16,000/-",
            highlight: false,
            buttonText: "Enroll Now",
          },
          {
            title: "4th Year Fees",
            price: "₹2,24,000/-",
            highlight: false,
            buttonText: "Enroll Now",
          },
        ]}
      /> */}

      {/* Brochure */}
      <BrochureSection
        title="Download Program Brochure"
        subtitle="Program Details"
        description="Get detailed information about our program, curriculum, faculty, and more in our comprehensive brochure."
        imageUrl={brochureImg}
        features={[
          {
            title: "Complete Curriculum",
            description: "Detailed overview of all modules and courses",
          },
          {
            title: "Faculty Profiles",
            description: "Learn about our expert instructors and mentors",
          },
          {
            title: "Success Stories",
            description: "Read about our alumni and their achievements",
          },
        ]}
      />

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Career?"
        subtitle="Limited Seats Available"
        description="Join our Advanced Data Science Program and unlock new opportunities in the world of data."
        ctaInfo={[
          {
            icon: <Calendar className="h-8 w-8 text-cusSecondary" />,
            title: "Next Batch",
            description: "Starting June 15, 2025",
          },
          {
            icon: <Users className="h-8 w-8 text-cusSecondary" />,
            title: "Class Size",
            description: "Limited to 30 students",
          },
          {
            icon: <GraduationCap className="h-8 w-8 text-cusSecondary" />,
            title: "Application Deadline",
            description: "May 15, 2025",
          },
        ]}
      />
    </div>
  );
}

export default BtechCS;
