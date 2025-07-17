"use client";

import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { FeesSection } from "./fees-section";
import GridBackground from "@/components/ui/GridBackground";

export function EligibilitySection({ plans, requirements }) {
  return (
    <GridBackground>
      <section className="py-24 px-4 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-3xl"
            />
            <div className="relative background-gradient-yellow-light shadow-xl rounded-2xl overflow-hidden border border-slate-100">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-0 left-0 w-full h-2 bg-primary"
              />
              <div className="p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Heading level={3} className="text-black mb-8">
                    <TextAnimate
                      as="span"
                      by="word"
                      delay={0.2}
                      duration={0.5}
                      animation="slideUp"
                    >
                      Eligibility Requirements
                    </TextAnimate>
                  </Heading>
                </motion.div>
                <ul className="space-y-3 text-black">
                  {requirements.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + index * 0.1,
                        ease: "easeOut",
                      }}
                      className="flex items-start group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="mr-4 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white group-hover:bg-white/80 transition-colors duration-300"
                      >
                        <ArrowRight className="h-3.5 w-3.5 text-cusAccent" />
                      </motion.div>
                      <span className="text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="mt-10"
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
                    className="group w-fit gap-2 transition-all bg-cusSecondary text-cusText hover:bg-cusSecondary/80 duration-300 hover:pl-6 hover:pr-7 px-6 py-2 rounded-md flex items-center cursor-pointer"
                  >
                    Apply Now
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="space-y-8"
          >
            <FeesSection
              title="Program Fees"
              subtitle="Investment"
              plans={plans}
            />
            {/* <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Heading level={2} className="text-left text-cusText">
              <TextAnimate
                as="span"
                by="word"
                delay={0.2}
                duration={0.5}
                animation="slideUp"
              >
                {title}
              </TextAnimate>
            </Heading>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="h-1 w-20 bg-cusYellow rounded-full"
            />
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-[17px] text-cusTextLight"
          >
            {description}
          </motion.p> */}
          </motion.div>
        </div>
      </section>
    </GridBackground>
  );
}
