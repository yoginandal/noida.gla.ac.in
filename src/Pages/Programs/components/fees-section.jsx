import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";

export function FeesSection({ title, subtitle, plans }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="container mx-auto sm:px-4"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-md mb-10"
      >
        {/* <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Badge className="mb-4 bg-cusSecondary text-cusText">{subtitle}</Badge>
        </motion.div> */}
        <Heading level={2} className="text-cusText">
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-1 w-20 bg-cusYellow rounded-full"
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="grid grid-cols-2 gap-5 max-w-5xl mx-auto"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: 0.2 + index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className={`${
              index === plans.length - 1 && plans.length % 2 !== 0
                ? "col-span-2 max-w-[280px] w-full mx-auto"
                : ""
            }`}
          >
            <Card
              className={`relative group hover:-translate-y-2 transition-all duration-300 ${
                plan.highlight
                  ? "border-cusAccent shadow-lg z-10 pt-0"
                  : "hover:border-cusAccent/50 hover:shadow-md"
              }`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.2 }}
              >
                <CardHeader
                  className={`${
                    plan.highlight
                      ? "bg-cusAccent/10 p-5 pb-2 text-cusText"
                      : ""
                  } rounded-t-lg transition-colors duration-300`}
                >
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.2 }}
                  >
                    <CardTitle className="text-lg text-center sm:text-left sm:text-xl">
                      {plan.title}
                    </CardTitle>
                    <div className="mt-4 flex justify-center sm:justify-start">
                      <span className="text-2xl text-center sm:text-left sm:text-3xl font-bold">
                        {plan.price}
                      </span>
                    </div>
                  </motion.div>
                </CardHeader>
              </motion.div>
              <CardFooter className="px-3 sm:px-6">
                <a
                  href="#hero"
                  className="w-full"
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
                >
                  <Button
                    className={`w-full group ${
                      plan.highlight
                        ? "bg-cusAccent hover:bg-cusAccent/80 text-white"
                        : "bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-primary/50"
                    }`}
                  >
                    {plan.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
