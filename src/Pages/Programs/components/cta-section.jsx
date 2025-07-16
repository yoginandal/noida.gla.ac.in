"use client";
import React from "react";
import { ArrowRight, Calendar, Users, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Phone } from "lucide-react";

export function CTASection({ title, subtitle, description }) {
  // const ctaInfo = [
  //   {
  //     icon: <Calendar className="h-8 w-8 text-green-600" />,
  //     title: "Next Batch",
  //     description: "Starting June 15, 2025",
  //   },
  //   {
  //     icon: <Users className="h-8 w-8 text-green-600" />,
  //     title: "Class Size",
  //     description: "Limited to 30 students",
  //   },
  //   {
  //     icon: <GraduationCap className="h-8 w-8 text-green-600" />,
  //     title: "Application Deadline",
  //     description: "May 15, 2025",
  //   },
  // ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="py-24 text-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-cusGreen/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-cusGreen/5 rounded-full blur-3xl"
        />
      </motion.div> */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(black 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <div className="mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Badge className="mb-6 bg-cusSecondary text-cusText hover:bg-cusSecondary/80">
              {subtitle}
            </Badge>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-6"
          >
            <Heading level={2} className="text-center text-black">
              <TextAnimate
                as="span"
                by="word"
                delay={0.2}
                duration={0.5}
                animation="slideUp"
                className="inline-flex flex-wrap"
              >
                {title}
              </TextAnimate>
            </Heading>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-1 w-20 bg-cusYellow mx-auto rounded-full"
            />
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-xl opacity-90 mb-12 text-black max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap max-w-3xl mx-auto justify-center gap-6"
          >
            <motion.a
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#hero");
                if (element) {
                  element.scrollIntoView({
                    behavior: "auto",
                    block: "start",
                  });
                }
              }}
              href="#hero"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gap-2 group bg-cusSecondary text-cusText hover:bg-cusSecondary/80 transition-all duration-300 hover:pl-6 hover:pr-10 flex items-center px-6 py-2 rounded-md"
            >
              Apply Now
              <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.span>
            </motion.a>
            <motion.a
              href="tel:+919027068068"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-black border-cusSecondary bg-cusSecondary/20 hover:bg-cusSecondary/80 gap-2 group flex items-center px-6 py-2 rounded-md border"
            >
              <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Phone className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.span>
              Call Now
            </motion.a>
          </motion.div>

          {/* <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-16 pt-16 border-t border-black max-w-3xl mx-auto grid md:grid-cols-3 gap-8"
          >
            {ctaInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4"
                >
                  {info.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="opacity-80">{info.description}</p>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </motion.div>
    </motion.section>
  );
}
