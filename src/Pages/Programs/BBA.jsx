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
import AdmissionStepper from "./Stepper";
import { IndustryPartners } from "./components/industry-partners";
import { AnimationStyles } from "./components/animation-styles";

const herobg = "/programs/HeroBBA.png";
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

export function BBA() {
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
      price: "₹1,40,000/-",
      highlight: true,
      buttonText: "Enroll Now",
    },
    {
      title: "2nd Year Fees",
      price: "₹1,45,000/-",
      highlight: false,
      buttonText: "Enroll Now",
    },
    {
      title: "3rd Year Fees",
      price: "₹1,50,000/-",
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
        title="BBA in"
        subtitle="Management Science"
        para="Transform your career with our comprehensive BBA in Management Science program designed for the modern industry. Learn from experts and build real-world projects."
        features={[
          "6-Semester Program",
          "Expert Faculty",
          "Industry-Ready Skills",
          "Latest Technology",
        ]}
        stats={[
          { value: "55 LPA", label: "Highest CTC" },
          { value: "4.8/5", label: "Student Rating" },
          { value: "500+", label: "Top Recruiters" },
        ]}
        courseName="4701"
        courseTitle="BBA - MS "
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
          "In today's world, businesses are the backbone of every economy, catering to the needs of people across the globe. The BBA in Management Science, offered by GLA one of the top BBA colleges in Noida, opens the door to a wide range of career opportunities in industries like finance, marketing, human resources, and operations.",
          "This three-year program is designed to equip students with a strong foundation in key management areas such as finance, marketing, accounting, and organizational behavior. The course not only focuses on core business principles but also helps students enhance their communication, leadership, and problem-solving skills—traits essential for success in the business world.",
          "Additionally, this program is a great stepping stone for those aspiring to pursue an MBA. It equips students with the knowledge and preparation needed to succeed in competitive MBA entrance exams like CAT, XAT, MAT, and others.",
        ]}
        imageUrl="https://gla-noida.vercel.app/assets/sports-UcTaf5m6.webp"
        features={[
          {
            icon: (
              <Beaker className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Hands-On Workshops",
            description: "Industry Tools Training",
          },
          {
            icon: (
              <BookOpen className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Live Projects",
            description: "Real-world Case Studies",
          },
          {
            icon: (
              <Users className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Industry Visits",
            description: "Leading Company Tours",
          },
          {
            icon: (
              <GraduationCap className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Small Batch Size",
            description: "Personalized Attention",
          },
          {
            icon: (
              <BookOpen className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Career Focus",
            description: "Professional Skills",
          },
          {
            icon: (
              <Users className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Networking",
            description: "Industry Connections",
          },
          {
            icon: (
              <Beaker className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Innovation Hub",
            description: "Research & Creativity",
          },
          {
            icon: (
              <GraduationCap className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Holistic Growth",
            description: "All-round Development",
          },
        ]}
      />

      {/* Eligibility */}
      <EligibilitySection
        requirements={[
          "10+2 examination from a recognized board",
          "Minimum 50% marks in 10+2 examination",
          "Good communication and interpersonal skills",
          "Proficiency in English (written and verbal)",
        ]}
        plans={plans}
      />

      {/* Program Outcomes */}
      <ProgramOutcomes
        title="Program Outcomes"
        subtitle="What You'll Achieve"
        description="Our BBA program is designed to cultivate the next generation of business leaders. We provide a comprehensive curriculum that balances theoretical knowledge with practical application, ensuring you are prepared to excel in a competitive global market."
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
        title="Why Choose BBA in Management Science?"
        programDescription="A BBA in Management Science is your gateway to the corporate world. This program provides a strong foundation in business principles and practices, preparing you for a variety of roles in the industry. You will learn about marketing, finance, human resources, and operations, gaining a holistic view of how businesses function. The curriculum is designed to develop your leadership, communication, and analytical skills, making you a valuable asset to any organization. Whether you aspire to be a manager, an entrepreneur, or a business consultant, a BBA from GLA University will set you on the path to success."
      />

      {/* Fees */}
      {/* <FeesSection
        title="Program Fees"
        subtitle="Investment"
        plans={plans}
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

export default BBA;
