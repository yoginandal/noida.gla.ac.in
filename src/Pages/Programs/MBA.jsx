import { Calendar, GraduationCap, Users, Beaker, BookOpen } from "lucide-react";
import Image from "next/image";
import { HeroSection } from "@/components/Programs/components/hero-section";
import { ProgramDescription } from "@/components/Programs/components/program-description";
import { IndustryPartners } from "@/components/Programs/components/industry-partners";
import { ProgramOutcomes } from "@/components/Programs/components/program-outcomes";
import { EligibilitySection } from "@/components/Programs/components/eligibility-section";
import { CurriculumSection } from "@/components/Programs/components/curriculum-section";
import { BrochureSection } from "@/components/Programs/components/brochure-section";
import { CTASection } from "@/components/Programs/components/cta-section";
import AdmissionStepper from "./Stepper";
import { AnimationStyles } from "@/components/Programs/components/animation-styles";
import MBAPrograms from "@/components/Programs/components/MBAPrograms";
import CoreSpecializations from "@/components/Programs/components/core-specializations";
import LearningResources from "@/components/Programs/components/LearningResources";

export function MBA() {
  const icons = [
    {
      src: "/programs/recruiters/Google.webp",
      alt: "Google",
    },
    {
      src: "/programs/recruiters/microsoft.png",
      alt: "Microsoft",
    },
    {
      src: "/programs/recruiters/Deloitte.webp",
      alt: "Deloitte",
    },
    {
      src: "/programs/recruiters/Axis_Bank.webp",
      alt: "Axis Bank",
    },
    {
      src: "/programs/recruiters/bankOfAmerica.webp",
      alt: "Bank of America",
    },
    {
      src: "/programs/recruiters/hdfc.webp",
      alt: "HDFC Bank",
    },
    {
      src: "/programs/recruiters/nse.webp",
      alt: "NSE",
    },
    {
      src: "/programs/recruiters/ey.webp",
      alt: "EY",
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
      price: "₹2,45,000/-",
      highlight: false,
      buttonText: "Enroll Now",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <AnimationStyles />
      {/* Hero Banner */}
      <HeroSection
        backgroundImage={"/programs/HeroMBA.png"}
        title="AI-Enabled MBA with"
        subtitle="Dual Specialization"
        para="The AI-Enabled MBA. Double the Expertise. Transform Your Future."
        features={[
          "4-Semester Program",
          "Expert Faculty",
          "Industry-Ready Skills",
          "AI-Powered Learning",
        ]}
        stats={[
          { value: "55 LPA", label: "Highest CTC" },
          { value: "4.8/5", label: "Student Rating" },
          { value: "500+", label: "Top Recruiters" },
        ]}
        courseName="8410"
        courseTitle="MBA"
      />

      {/* Program Description */}
      <ProgramDescription
        title="About the Program"
        description={[
          "Step into the future of business leadership with GLA University’s AI-Enabled MBA (Dual Specialization). This cutting-edge program empowers you to master today’s dynamic global market by combining two specializations, giving you a versatile skill set and a competitive advantage.",
          "Gain more than knowledge — tackle real-world challenges through practical learning, live projects, and internships that sharpen your strategic thinking and decision-making. Graduate ready to lead, innovate, and succeed in the modern business world.",
        ]}
        imageUrl="/sports/sports.webp"
        features={[
          {
            icon: (
              <Beaker className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "AI-Powered Learning",
            description: "Hands-on Experience",
          },
          {
            icon: (
              <GraduationCap className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Small Batch Sizes",
            description: "Personalized Learning",
          },
          {
            icon: (
              <Users className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Best-In-Class Placements",
            description: "Up to 55 LPA",
          },
          {
            icon: (
              <BookOpen className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Expert Faculty",
            description: "Top B-School Professors",
          },
          {
            icon: (
              <Beaker className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Industry Visits",
            description: "Corporate Exposure",
          },
          {
            icon: (
              <BookOpen className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Top Recruiters",
            description: "Premium Placements",
          },
          {
            icon: (
              <Users className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "New-Gen IEDC",
            description: "Start-up Incubation",
          },
          {
            icon: (
              <GraduationCap className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "JOVAC Sessions",
            description: "Career Enhancement",
          },
        ]}
      />

      {/* MBA Programs Section */}
      <CoreSpecializations />
      <MBAPrograms />
      <LearningResources />

      {/* Program Outcome */}
      <ProgramOutcomes
        title="What You Will Learn"
        outcomes={[
          "Develop advanced leadership and strategic management skills.",
          "Gain expertise in dual specializations for a competitive edge.",
          "Master financial modeling and investment strategies.",
          "Understand the impact of AI on modern business.",
        ]}
        imageUrl="/general/mba.webp"
      />

      {/* Eligibility */}
      <EligibilitySection
        requirements={[
          "Bachelor's degree (minimum 3 years) in any discipline from a recognized institution",
          "Minimum 50% marks in Bachelor's degree",
          "Strong analytical and problem-solving abilities",
          "Excellent communication and interpersonal skills",
          "Leadership potential and a drive for success",
          "Work experience is preferred but not mandatory",
          "A passion for innovation and strategic thinking",
        ]}
        plans={plans}
      />
      {/* Admission Process */}
      <AdmissionStepper />
      {/* Curriculum */}
      <CurriculumSection
        title="Why MBA at GLA University?"
        programDescription="An MBA from GLA University prepares you for the challenges of the modern business world. Our curriculum is designed to foster strategic thinking, leadership skills, and an entrepreneurial mindset. With a focus on experiential learning and industry exposure, we ensure our graduates are ready to take on leadership roles and drive business success."
      />

      {/* Brochure */}
      <BrochureSection
        title="Download Program Brochure"
        description="Get detailed information about our MBA program, curriculum, faculty, and more in our comprehensive brochure."
        imageUrl={"/programs/brochure4.webp"}
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
        title="Ready to Advance Your Career?"
        description="Join our MBA program and unlock new opportunities in the world of business."
      />
    </div>
  );
}

export default MBA;
