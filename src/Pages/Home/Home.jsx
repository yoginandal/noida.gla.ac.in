"use client";
import { BannerSlider } from "@/components/Home/banner-slider";
import LegacySection from "./legacy-section";
import GridBackground from "@/components/ui/GridBackground";
import RankingSection from "./Ranking";
import Section from "@/layouts/section";
import FiveYearPlanSection from "./fiveYearPlan";
import UndergraduateAdmissions from "./UndergraduateAdmissions";
import { GradientBackground } from "@/components/ui/gradient-background";
import SetUsApart from "./SetUsApart";
import StudentLife from "./StudentLife";
import LatestNews from "./LatestNews";
import CampusShowcase from "./CampusShowcase";
import { AdmissionQuery } from "@/components/main/AdmissionQuery";

const Home = () => {
  return (
    <>
      <BannerSlider />
      <GridBackground>
        <LegacySection />
      </GridBackground>
      <Section className="background-gradient-yellow-light">
        <RankingSection />
      </Section>
      <GridBackground>
        <FiveYearPlanSection />
      </GridBackground>
      <Section animate>
        <UndergraduateAdmissions />
      </Section>
      <GradientBackground className="gradientOne">
        <SetUsApart />
      </GradientBackground>
      <Section className="background-gradient-white">
        <StudentLife />
      </Section>
      <Section animate className="background-gradient-yellow-light">
        <LatestNews />
      </Section>
      <GridBackground>
        <CampusShowcase />
      </GridBackground>
      <AdmissionQuery />
    </>
  );
};

export default Home;
