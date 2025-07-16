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

const herobg = "/programs/HeroBCA.png";
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

export function BCA() {
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
        title="BCA in"
        subtitle="Data Science"
        para="Transform your career with our comprehensive bca in data science program designed for the modern industry. Learn from experts and build real-world projects."
        features={[
          "6-Semester Program",
          "Expert Faculty",
          "Industry-Ready Skills",
          "Latest Technology",
        ]}
        stats={[
          { value: "55 LPA", label: "Highest CTC" },
          { value: "4.8/5", label: "Student Rating" },
          { value: "400+", label: "Top Recruiters" },
        ]}
        courseName="4211"
        courseTitle="BCA (DS)"
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
          "In today's tech-driven world, data is everything. The field of data science is growing rapidly, and its influence is expanding across industries. Among the top colleges in Greater Noida for BCA, GLA University offers a specialized BCA in Data Science—a three-year undergraduate program that combines the essentials of computer science with focused knowledge in data science.",
          "This course provides a strong foundation in programming, software development, and data analysis. It covers crucial areas such as Machine Learning, Big Data Analytics, Database Management Systems, and Statistics, giving students a comprehensive understanding of how data can drive decision-making in businesses and industries.",
          "By the end of the program, students are equipped with the skills and expertise needed to pursue exciting careers as Data Scientists, Machine Learning Engineers, Business Analysts, and more.",
        ]}
        imageUrl="https://gla-noida.vercel.app/assets/sports-UcTaf5m6.webp"
        features={[
          {
            icon: (
              <Beaker className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Industry-Focused Learning",
            description: "Latest Data Science Tools",
          },
          {
            icon: (
              <BookOpen className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Hands-on Experience",
            description: "Labs & Assignments",
          },
          {
            icon: (
              <Users className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Small Batch Sizes",
            description: "Personalized Attention",
          },
          {
            icon: (
              <GraduationCap className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Career-Driven Approach",
            description: "Professional Success",
          },
          {
            icon: (
              <Users className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Networking Opportunities",
            description: "Industry Connections",
          },
          {
            icon: (
              <BookOpen className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Supportive Environment",
            description: "Guidance & Mentorship",
          },
        ]}
      />

      {/* Eligibility */}
      <EligibilitySection
        requirements={[
          "10+2 examination with Mathematics as a mandatory subject",
          "Minimum 50% marks in 10+2 examination",
          "Basic computer proficiency",
          "Proficiency in English (written and verbal)",
        ]}
        plans={plans}
      />

      {/* Program Outcomes */}
      <ProgramOutcomes
        title="Program Outcomes"
        subtitle="What You'll Achieve"
        description="Our BCA in Data Science program is designed to provide you with the essential skills for a successful career in the tech industry. By the end of this program, you will be proficient in a range of data science tools and technologies, ready to tackle real-world challenges."
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
        title="Why Choose BCA in Data Science?"
        programDescription="A BCA in Data Science is an excellent choice for those who are passionate about technology and want to build a career in a high-growth industry. With the increasing demand for data professionals, this program provides a solid foundation for a successful future. You'll learn how to analyze data, build predictive models, and create data-driven solutions for businesses. The curriculum is designed to be hands-on and practical, ensuring you gain the skills that employers are looking for. Whether you want to become a data scientist, a machine learning engineer, or a business analyst, a BCA in Data Science from GLA University will prepare you for success."
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

export default BCA;
