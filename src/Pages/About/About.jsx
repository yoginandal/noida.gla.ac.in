"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Eye,
  Target,
  Award,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { TextAnimate } from "@/components/magicui/text-animate";
import Banner from "@/components/main/Banner";
import { Card } from "@/components/ui/card";
import GridBackground from "@/components/ui/GridBackground";

export default function About() {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About GLA University" },
  ];
  return (
    <div className="min-h-screen">
      <Banner
        title="About GLA University"
        image="/about/about-us.jpg"
        imageAlt="About GLA"
        breadcrumbItems={breadcrumbItems}
      />
      {/* Hero Section */}
      {/* <div
        className="relative bg-center bg-cover h-[50vh] sm:h-[70vh]"
        style={{
          backgroundImage: `url("https://www.gla.ac.in/images/about-us.jpg")`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-4xl font-bold text-white bg-black/50 p-2 px-5 sm:p-5 sm:px-10">
            <TextAnimate
              as="span"
              by="word"
              delay={0.6}
              duration={0.5}
              animation="slideDown"
              className="inline-flex flex-wrap"
            >
              About GLA University
            </TextAnimate>
          </h1>
        </div>
      </div> */}

      {/* Main Content */}
      {/* <div className="max-w-7xl bh mx-auto py-6 sm:py-20 px-4 sm:px-6 lg:px-8"> */}
      <Legacy />
      <IMMFeatureSection />
      {/* </div> */}
    </div>
  );
}

const Legacy = () => {
  return (
    <section className="light pt-12 px-6 max-w-7xl mx-auto bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white py-10 sm:py-20">
      <div className="container ">
        <div className="grid lg:grid-cols-3 gap-x-6">
          <div>
            <h2 className="lg:text-end text-3xl md:text-5xl text-primary-color leading-tight md:leading-normal tracking-wide sm:font-light lg:pl-6 mb-0">
              The GLA University: The dream of Late Shri Ganeshi Lal Agrawal
            </h2>
          </div>
          <div className="lg:px-4 my-6 lg:my-0">
            <div className="min-h-[350px] md:h-full bg-center bg-cover rounded-md relative">
              <Image
                src="/about/ganeshi-lal-agrawal.jpg"
                alt="Late Shri Ganeshi Lal Agrawal"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
          </div>
          <div className="sm:pr-6">
            <p className="text-base tracking-widest opacity-80 mb-0 text-justify ">
              It was the year 1991, when Shri Narayan Das Agrawal decided to
              fulfill the dream of his father, Late Shri Ganeshi Lal Agrawal, of
              establishing an institute for quality education for the people and
              the region & beyond. Our honorable Chancellor, Shri Narayan Das
              Agrawal established Sri Jagannath Prasad Ganeshi Lal Bajaj
              Charitable Trust Samiti in an attempt to make the holy city
              Mathura a recognized destination for knowledge seekers from
              different spheres of life and parts of the country. This paved the
              way for the establishment of a significant milestone at the
              karmabhoomi of the versatile and wise Lord Krishna.
            </p>
            {/* <p className="text-base tracking-widest opacity-80 mt-6 mb-0 text-justify">
              From training practicing managers to corporate leaders, educating
              management career aspirants, readying marketing professionals to
              put India on the global marketing map, IMM Business School has
              come a long way.
            </p>
            <p className="text-base tracking-widest opacity-80 mt-6 mb-0 text-justify">
              We take pride in helping students pursue their educational
              endeavors overseas while maintaining our commitment to excellence
              in management education and creating future business leaders.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: Eye,
    title: "Vision",
    desc: "At GLA Greater Noida, we want to create a space where students gain practical skills and real-world experience. Our goal is to prepare them for successful careers by connecting learning with industry needs, so they are ready to thrive in today's fast-changing world.",
  },
  {
    icon: Target,
    title: "Mission",
    desc: `We focus on giving students hands-on training and personal guidance, helping them grow both professionally and personally. By working closely with industry experts and offering practical learning opportunities, we aim to ensure our graduates are ready to succeed and make an impact in their careers.
    `,
  },
];

const FeatureItem = ({ feature, isHovered, onHover }) => {
  return (
    <Card
      className={`
          flex flex-row background-gradient-yellow-light dark:bg-slate-800  p-6 xl:p-12 mb-4 lg:mb-6
          transform transition-all duration-300 ease-out relative
          hover:shadow-2xl hover:-translate-y-1
          ${isHovered ? "border-primary" : "border-border"}
        `}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div
        className={`
          transition-all hidden sm:block duration-300
          text-primary rounded-full mr-3 
          transform ${isHovered ? "scale-110" : "scale-100"} 
        `}
      >
        <feature.icon
          size={42}
          className={`transition-all text-cusAccent duration-300 ${
            isHovered ? "stroke-[1.5]" : "stroke-[1.3]"
          }`}
        />
      </div>
      <div>
        <h4
          className={`
            text-2xl text-primary-color font-medium mb-4
            transition-colors duration-300
            ${isHovered ? "text-primary" : "text-foreground"}
          `}
        >
          {feature.title}
        </h4>
        {Array.isArray(feature.desc) ? (
          <ul className="list-disc pl-5 space-y-2">
            {feature.desc.map((item, index) => (
              <li key={index} className="text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black/70 leading-relaxed text-[17px]">
            {feature.desc}
          </p>
        )}
        {/* <div
            className={`
            mt-4 sm:flex hidden items-center text-primary
            transition-all duration-300 ease-out
            opacity-0 transform translate-x-[-10px]
            ${isHovered ? "opacity-100 translate-x-0" : ""}
          `}
          >
            <span className="mr-2">Learn more</span>
            <ArrowRight size={16} />
          </div> */}
      </div>
    </Card>
  );
};

const IMMFeatureSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <GridBackground>
      <section className="py-14 md:py-20 mx-auto text-foreground relative overflow-visible">
        <div className="absolute inset-0 opacity-5"></div>
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="flex max-w-3xl justify-center text-center mb-12 mx-auto ">
            <div className="space-y-6">
              <h2
                className="text-4xl leading-none font-bold md:text-5xl text-cusBlue
                animate-in fade-in slide-in-from-bottom-3 duration-700"
              >
                Vision & Mission
              </h2>
              <p
                className="text-lg text-black
                animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
              >
                Discover our commitment to excellence in management education
                and our goals for shaping future leaders.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-12 max-w-7xl mx-auto min-h-[90vh]">
            <div
              className="col-span-2 lg:col-span-1 lg:sticky lg:top-24"
              style={{ height: "fit-content" }}
            >
              <div className="relative h-full z-10">
                <div className="absolute -top-11 -left-11 right-12 bottom-12 h-[400px] sm:h-[600px] bg-gray-900 dark:bg-slate-700 -z-10 rounded-[200px] lg:rounded-full rounded-tl-none lg:rounded-tl-none" />
                <div className="relative bg-center bg-no-repeat bg-cover rounded-2xl min-h-[350px] w-full float-right shadow-xl h-[400px] sm:h-[600px]">
                  <Image
                    src="/about/GLA Building.webp"
                    alt="GLA Building"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1 ">
              <div className="lg:ml-6 xl:ml-12 ">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="animate-in fade-in slide-in-from-right duration-700"
                    style={{ animationDelay: `${(i + 1) * 200 + 300}ms` }}
                  >
                    <FeatureItem
                      feature={feature}
                      isHovered={hoveredIndex === i}
                      onHover={(hovered) => setHoveredIndex(hovered ? i : null)}
                      className="bg-gradient-yellow-light"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </GridBackground>
  );
};
