"use client";
import { ArrowRight, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { GradientBackground } from "@/components/ui/gradient-background";

export function BrochureSection({
  title,
  subtitle,
  description,
  features,
  imageUrl,
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="py-24 px-4 relative overflow-hidden bg-gray-50"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card mx-auto px-4 relative max-w-7xl z-10"
      >
        <GradientBackground round="rounded-2xl">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
            className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100"
          >
            <div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Badge className="mb-4 bg-cusSecondary text-cusText">
                  {subtitle}
                </Badge>
              </motion.div>
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
                className="text-black mb-8"
              >
                {description}
              </motion.p>

              {/* <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ 
                    duration: 0.5,
                    delay: 1.4 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <ArrowRight className="h-3 w-3 text-cusPrimary" />
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-white">{feature.title}</h4>
                    <p className="text-sm text-white/80">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div> */}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 1.8 }}
                className="mt-10"
              >
                <motion.a
                  href={"/programs/General Brochure_Single 2025-26.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="gap-2 group w-fit bg-cusSecondary text-cusText hover:bg-cusSecondary/80 transition-all duration-300 hover:pl-6 hover:pr-10 flex items-center px-4 py-2 rounded-md"
                >
                  Download Now
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Download className="h-4 w-4 transition-transform duration-300" />
                  </motion.span>
                </motion.a>
              </motion.div>
            </div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                type: "spring",
                stiffness: 100,
              }}
              className="relative"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-100 rounded-full -z-10"
              />

              <motion.div
                initial={{ rotate: 0, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: 1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ rotate: 0 }}
                className="relative bg-white rounded-xl shadow-lg transform transition-transform duration-300"
              >
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt="Program Brochure"
                  className="w-full h-auto aspect-video object-cover rounded-lg shadow-md"
                />
                <a
                  href={"/programs/General Brochure_Single 2025-26.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute -bottom-4 -right-4 bg-cusSecondary text-cusText p-3 rounded-full shadow-lg"
                  >
                    <Download className="h-6 w-6" />
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </GradientBackground>
      </motion.div>
    </motion.section>
  );
}
