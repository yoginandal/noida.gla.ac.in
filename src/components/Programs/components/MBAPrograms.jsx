"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CreditCard,
  GraduationCap,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { TextAnimate } from "@/components/magicui/text-animate";

const programs = [
  {
    id: "logistics",
    title: "MBA in Logistics and Supply Chain",
    color: "blue",
    highlights: [
      "2-year postgraduate program with industry integration",
      "Real-world case studies from Flipkart, Maruti Suzuki, BigBasket",
      "Tech-enabled curriculum with AI and blockchain",
    ],
    careers: [
      "Logistics & Supply Chain Manager",
      "Inventory Control Manager",
      "Operations & Transportation Manager",
    ],
    fees: {
      firstYear: "₹2,70,000",
      secondYear: "₹2,80,000",
    },
    icon: "/supply-chain.png",
  },
  {
    id: "finance",
    title: "MBA in Financial Markets and Banking",
    color: "emerald",
    highlights: [
      "Industry-focused curriculum with real-world applications",
      "Hands-on learning with case studies and simulations",
      "Expert faculty with industry experience",
    ],
    careers: [
      "Financial Analyst & Manager",
      "Investment Banker",
      "Risk & Credit Analyst",
    ],
    fees: {
      firstYear: "₹2,75,000",
      secondYear: "₹2,85,000",
    },
    icon: "/finance-icon.png",
  },
];

export default function MBAPrograms() {
  const [hoveredProgram, setHoveredProgram] = useState(null);

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">

      {/* Content */}
      <div className="card mx-auto px-4 relative max-w-7xl z-10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-cusSecondary text-cusText">
            Choose Your Specialization
          </Badge>

          <Heading level={2} className="text-center text-cusText">
            MBA Programs
          </Heading>

          <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              onMouseEnter={() => setHoveredProgram(program.id)}
              onMouseLeave={() => setHoveredProgram(null)}
              initial={{ opacity: 0, y: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full py-0">
                <div
                  className={`relative bg-gradient-to-r ${
                    program.color === "blue"
                      ? "from-blue-50 to-blue-100"
                      : "from-emerald-50 to-emerald-100"
                  } p-6`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge
                        variant="outline"
                        className={`${
                          program.color === "blue"
                            ? "bg-blue-100 text-blue-700 border-blue-200"
                            : "bg-emerald-100 text-emerald-700 border-emerald-200"
                        } mb-3`}
                      >
                        2-Year Program
                      </Badge>
                      <h3
                        className={`text-2xl font-bold ${
                          program.color === "blue"
                            ? "text-blue-900"
                            : "text-emerald-900"
                        }`}
                      >
                        {program.title}
                      </h3>
                    </div>
                    <img
                      src={program.icon || "/placeholder.svg"}
                      alt={program.title}
                      className="w-16 h-16 opacity-80"
                    />
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <div
                        className={`flex items-center gap-2 ${
                          program.color === "blue"
                            ? "text-blue-600"
                            : "text-emerald-600"
                        } mb-3`}
                      >
                        <GraduationCap className="h-5 w-5" />
                        <h4 className="font-semibold">Program Highlights</h4>
                      </div>
                      <ul className="space-y-3">
                        {program.highlights.map((highlight, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: hoveredProgram === program.id ? 1 : 0.9,
                              x: 0,
                              transition: { delay: index * 0.1 },
                            }}
                          >
                            <div
                              className={`flex-shrink-0 p-1 rounded-full ${
                                program.color === "blue"
                                  ? "bg-blue-100"
                                  : "bg-emerald-100"
                              }`}
                            >
                              <Check
                                className={`h-4 w-4 ${
                                  program.color === "blue"
                                    ? "text-blue-600"
                                    : "text-emerald-600"
                                }`}
                              />
                            </div>
                            <span className="text-slate-700">{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div
                        className={`flex items-center gap-2 ${
                          program.color === "blue"
                            ? "text-blue-600"
                            : "text-emerald-600"
                        } mb-3`}
                      >
                        <Users className="h-5 w-5" />
                        <h4 className="font-semibold">Career Opportunities</h4>
                      </div>
                      <ul className="space-y-3">
                        {program.careers.map((career, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <ArrowRight
                              className={`h-4 w-4 mt-1 ${
                                program.color === "blue"
                                  ? "text-blue-500"
                                  : "text-emerald-500"
                              }`}
                            />
                            <span className="text-slate-700">{career}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div
                        className={`flex items-center gap-2 ${
                          program.color === "blue"
                            ? "text-blue-600"
                            : "text-emerald-600"
                        } mb-3`}
                      >
                        <CreditCard className="h-5 w-5" />
                        <h4 className="font-semibold">Fee Structure</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div
                          className={`p-4 rounded-lg ${
                            program.color === "blue"
                              ? "bg-blue-50"
                              : "bg-emerald-50"
                          }`}
                        >
                          <p className="text-sm text-slate-600 mb-1">
                            First Year
                          </p>
                          <p
                            className={`font-bold text-xl ${
                              program.color === "blue"
                                ? "text-blue-700"
                                : "text-emerald-700"
                            }`}
                          >
                            {program.fees.firstYear}
                          </p>
                        </div>
                        <div
                          className={`p-4 rounded-lg ${
                            program.color === "blue"
                              ? "bg-blue-50"
                              : "bg-emerald-50"
                          }`}
                        >
                          <p className="text-sm text-slate-600 mb-1">
                            Second Year
                          </p>
                          <p
                            className={`font-bold text-xl ${
                              program.color === "blue"
                                ? "text-blue-700"
                                : "text-emerald-700"
                            }`}
                          >
                            {program.fees.secondYear}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button
                      className={`w-full ${
                        program.color === "blue"
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-emerald-600 hover:bg-emerald-700 text-white"
                      }`}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
