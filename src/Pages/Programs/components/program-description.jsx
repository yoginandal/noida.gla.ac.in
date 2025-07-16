"use client";

import React, { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export function ProgramDescription({ title, description, features, imageUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoId = "HeMNPaGtRr4";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="py-24 background-gradient-yellow-light px-4 overflow-hidden">
      {/* Background elements */}
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
      {/* <div className="max-w-7xl overflow-hidden mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
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
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1 w-20 bg-cusYellow mx-auto rounded-full"
          />
        </motion.div>
      </div> */}

      <div className="grid bg-white p-5 sm:p-10 rounded-2xl max-w-7xl mx-auto md:grid-cols-2 gap-16">
        <motion.div
          className="order-2 md:order-1"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Heading level={2} className="text-black">
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
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-1 w-20 bg-cusYellow rounded-full"
            />
          </motion.div>
          <div className="space-y-4">
            <div className={`space-y-4 ${!isExpanded ? "line-clamp-7" : ""}`}>
              {description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-[17px] text-cusText"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                variant="outline"
                className="text-cusAccent hover:text-cusAccent/80 hover:bg-cusAccent/10"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    Read More
                  </>
                )}
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <div className="relative z-10 bg-cusAccent rounded-xl hover:shadow-cusAccent/50 shadow-2xl p-[px] ring-cusAccent ring-4 ring-offset-4 overflow-hidden">
            <Dialog open={isPlaying} onOpenChange={setIsPlaying}>
              <DialogTrigger asChild>
                <div className="relative w-full cursor-pointer group">
                  <img
                    src={thumbnailUrl}
                    alt="Video thumbnail"
                    className="w-full h-auto rounded-xl hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-cusAccent/90 p-1 rounded-full group-hover:bg-cusAccent transition-colors duration-300"
                    >
                      <PlayCircle className="w-10 h-10 text-white group-hover:scale-110 transition-all duration-300 animate-pulse" />
                    </motion.div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] p-0">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="Program Overview"
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Decorative elements */}
          {/* <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 rounded-full -z-10"></div> */}
        </motion.div>
      </div>

      <motion.div
        className="grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-white rounded-2xl shadow-xl p-4 border border-slate-100 hover:scale-105 transition-all duration-300 hover:-translate-y-2 hover:cursor-pointer gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="min-w-12 h-12 rounded-full bg-cusAccent/25 flex items-center justify-center group-hover:bg-cusAccent transition-colors duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {item.icon}
            </motion.div>
            <div>
              <h4 className="font-medium text-base text-cusText sm:text-lg">
                {item.title}
              </h4>
              <p className="text-sm text-cusText">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
