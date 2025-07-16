"use client";
import CountUp from "react-countup";
import { TrendingUp, Users, Award, Briefcase } from "lucide-react";
import Section from "@/layouts/section";

export default function PlacementStats() {
  const stats = [
    {
      title: "Highest Package",
      value: 55,
      unit: "LPA",
      description: "Top offer this year",
      icon: Award,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      gradientFrom: "from-emerald-50",
      borderColor: "border-emerald-100",
      textColor: "text-emerald-600",
    },
    {
      title: "Job Offers (2025 Batch)",
      value: 2500,
      unit: "Offers",
      description: "More than 2,500 job offers",
      icon: Briefcase,
      iconBg: "bg-sky-100",
      iconColor: "text-sky-600",
      gradientFrom: "from-sky-50",
      borderColor: "border-sky-100",
      textColor: "text-sky-600",
    },
    {
      title: "Placement Rate",
      value: 86,
      unit: "%",
      description: "Over the last 5 years",
      icon: Users,
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      gradientFrom: "from-rose-50",
      borderColor: "border-rose-100",
      textColor: "text-rose-600",
    },
    {
      title: "Average Salary (Engineering)",
      value: 7.5,
      unit: "LPA",
      description: "Average for Engineering graduates",
      icon: TrendingUp,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      gradientFrom: "from-amber-50",
      borderColor: "border-amber-100",
      textColor: "text-amber-600",
      decimals: 1,
    },
  ];

  return (
    <Section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Placement <span className="text-primary">Statistics</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-center text-gray-600 max-w-2xl">
            Our students consistently achieve outstanding placement results,
            reflecting our commitment to excellence in education and career
            preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.gradientFrom} to-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:translate-y-[-5px] border ${stat.borderColor}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-600 font-medium">{stat.title}</div>
                <div className={`${stat.iconBg} p-2 rounded-full`}>
                  <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                </div>
              </div>
              <div className="flex items-end">
                <div className={`text-4xl font-bold ${stat.textColor}`}>
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.decimals || 0}
                    prefix={stat.title === "Highest Package" ? "₹" : ""}
                  />
                </div>
                <div className={`text-xl font-semibold ${stat.textColor} ml-1`}>
                  {stat.unit}
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
