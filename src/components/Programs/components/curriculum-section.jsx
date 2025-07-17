"use client";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Calendar } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { useState } from "react";

export function CurriculumSection({ title, programDescription }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoId = "HeMNPaGtRr4";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  return (
    // <GradientBackground>
    <section className="py-20 background-gradient-yellow-light relative">
      {/* <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-0 left-1/4 w-72 h-72 bg-slate-200 rounded-full blur-3xl"
        />
      </motion.div> */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="max-w-7xl grid md:grid-cols-2 gap-20 mx-auto items-center"
        >
          <motion.div
            className=""
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
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="h-min"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="mb-6"
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
                transition={{ duration: 0.5, delay: 0.6 }}
                className="h-1 w-20 bg-cusSecondary rounded-full"
              />
            </motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-black mb-6"
            >
              {programDescription}
            </motion.p>
            {/* <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-auto pt-4 border-t"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-cusSecondary text-cusText hover:bg-cusSecondary/80 gap-2 flex items-center justify-center py-2 rounded-md"
              >
                Apply Now
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </motion.span>
              </motion.button>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
    // </GradientBackground>
  );
}
