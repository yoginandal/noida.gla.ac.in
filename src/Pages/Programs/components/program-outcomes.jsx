"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { ArrowRight } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";
import { GradientBackground } from "@/components/ui/gradient-background";

export function ProgramOutcomes({ title, subtitle, description, outcomes }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <GradientBackground>
      <section className="py-24 text-black">
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="mx-auto text-center mb-16"
          >
            <Badge className="mb-4 bg-cusAccent text-white">{subtitle}</Badge>
            <Heading
              level={2}
              className="text-center text-black"
              subtextClassName="text-gray-600 text-[17px] mb-8 text-center leading-relaxed"
            >
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
              className="h-1 w-20 bg-cusAccent mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-5">
            {outcomes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2, // Increased delay between each card
                  ease: "easeOut",
                }}
              >
                <Card
                  className="border-none p-2 pr-5 bg-white backdrop-blur-sm shadow-md group rounded-lg sm:rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 gap-2"
                  onClick={() => handleClick(index)}
                >
                  <CardHeader className="flex sm:flex-row gap-2 sm:gap-3 px-0">
                    <motion.div className="min-w-12 sm:min-w-16 h-12 sm:h-16 rounded-lg sm:rounded-xl bg-cusAccent/30 flex items-center justify-center group-hover:bg-cusAccent/15 transition-colors duration-300">
                      {item.icon ? (
                        item.icon
                      ) : (
                        <ArrowRight className="h-6 w-6 text-cusAccent" />
                      )}
                    </motion.div>
                    <CardTitle className="font-medium text-base text-black sm:text-lg">
                      <span className="hidden sm:inline">
                        {item.title || item}
                      </span>
                      <span className="sm:hidden">
                        {expandedIndex === index
                          ? item.title || item
                          : `${(item.title || item)
                              .split(" ")
                              .slice(0, 2)
                              .join(" ")}${
                              (item.title || item).split(" ").length > 2
                                ? "..."
                                : ""
                            }`}
                      </span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </GradientBackground>
  );
}
