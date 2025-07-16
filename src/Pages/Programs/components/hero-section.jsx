"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Lock,
  Mail,
  Phone,
  User,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { submitAdmissionQuery } from "@/services/crm";
import { getAllStates, getCitiesForState } from "@/services/stateData";
import { toast } from "sonner";

export function HeroSection({
  backgroundImage,
  title,
  subtitle,
  features,
  stats,
  para,
  courseName,
  courseTitle,
  customHero,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stateid: "",
    cityid: "",
    coursesid: courseName || "", // Use courseName from props
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cities, setCities] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));

    if (name === "stateid") {
      // Reset city when state changes
      setFormData((prev) => ({ ...prev, cityid: "" }));
      // Get cities for selected state
      const stateCities = getCitiesForState(value);
      setCities(stateCities);
    }
  };

  // Handler to restrict name input to only letters and spaces
  const handleNameInput = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z ]/g, "");
    e.target.value = value;
    setFormData((prev) => ({ ...prev, name: value }));
    setErrors((prev) => ({ ...prev, name: validateField("name", value) }));
  };

  // Handler to restrict phone input to only digits, first digit >= 6, max 10 digits
  const handlePhoneInput = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 0) {
      // Only allow first digit >= 6
      if (value[0] < "6") {
        value = value.slice(1);
      }
    }
    if (value.length > 10) value = value.slice(0, 10);
    e.target.value = value;
    setFormData((prev) => ({ ...prev, phone: value }));
    setErrors((prev) => ({ ...prev, phone: validateField("phone", value) }));
  };

  const validateField = (name, value) => {
    const field = formFields.find((f) => f.name === name);
    if (!field) return "";
    if (field.required && !value) return `${field.label} is required`;
    if (value && field.validation && !field.validation(value)) {
      return field.errorMessage;
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    formFields.forEach((field) => {
      const error = validateField(field.name, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await submitAdmissionQuery(formData);
      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        stateid: "",
        cityid: "",
        coursesid: courseName || "",
      });
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      required: true,
      validation: (value) => value.trim().length >= 2,
      errorMessage: "Name must be at least 2 characters long",
      icon: User,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
      validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      errorMessage: "Please enter a valid email address",
      icon: Mail,
    },
    {
      name: "phone",
      label: "Phone",
      type: "tel",
      placeholder: "Enter your phone number",
      required: true,
      validation: (value) => /^[0-9]{10}$/.test(value),
      errorMessage: "Please enter a valid 10-digit phone number",
      icon: Phone,
    },
    {
      name: "stateid",
      label: "State",
      type: "select",
      placeholder: "Select your state",
      required: true,
      validation: (value) => value !== "",
      errorMessage: "Please select a state",
      options: getAllStates(),
      icon: MapPin,
    },
    {
      name: "cityid",
      label: "City",
      type: "select",
      placeholder: "Select your city",
      required: true,
      validation: (value) => value !== "",
      errorMessage: "Please select a city",
      options: cities,
      icon: MapPin,
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[700px] overflow-hidden flex items-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-0 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-4 py-24 pt-[118px] sm:pt-28">
        <div className="grid md:grid-cols-2 gap-4 md:gap-0 items-center">
          {/* Content Column */}
          <div className="space-y-4 sm:space-y-8">
            <div className="space-y-2 sm:space-y-6 max-w-xl">
              {customHero ? (
                customHero
              ) : (
                <>
                  <BoxReveal boxColor={"#fdd600"} duration={0.5}>
                    <Heading
                      level={1}
                      className="text-[28px] sm:text-4xl md:!text-5xl font-bold text-white leading-tight"
                    >
                      {title}{" "}
                      <span className="text-cusSecondary relative">
                        {subtitle}
                        <span className="absolute bottom-0 left-0 w-full sm:h-1 h-[2px] bg-white rounded-full"></span>
                      </span>
                    </Heading>
                  </BoxReveal>
                  <BoxReveal boxColor={"#fdd600"} duration={0.5}>
                    <p className="text-base sm:text-xl text-white leading-relaxed">
                      {para}
                    </p>
                  </BoxReveal>
                </>
              )}
            </div>

            <div className="grid grid-cols-2 sm:flex items-center gap-2 sm:gap-6 text-white text-sm">
              {features.map((feature, index) => (
                <BoxReveal key={index} boxColor={"#fdd600"} duration={0.5}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cusSecondary"></div>
                    <span>{feature}</span>
                  </div>
                </BoxReveal>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 h-full max-w-xl">
              {stats.map((stat, index) => (
                <BoxReveal
                  key={index}
                  boxColor={"#fdd600"}
                  width={"100%"}
                  duration={0.5}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-0 py-4 sm:p-4 text-center">
                    <div className="text-lg sm:text-3xl font-bold text-cusSecondary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white">{stat.label}</div>
                  </div>
                </BoxReveal>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="relative mx-auto max-w-[400px] md:ml-auto md:mr-0">
            {/* Form Card with Animation */}
            <div
              className="relative animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>

              {/* Decorative rings */}
              <div className="absolute -inset-4 border border-white/10 rounded-2xl animate-pulse-ring"></div>
              <div
                className="absolute -inset-8 border border-white/5 rounded-3xl animate-pulse-ring"
                style={{ animationDelay: "0.5s" }}
              ></div>

              {/* Form container */}
              <div className="relative bg-white/10 backdrop-blur-md border scale-90 border-white/20 rounded-2xl p-8 shadow-2xl overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 animate-shimmer pointer-events-none"></div>

                {/* Form header */}
                <div className="mb-8 text-center relative">
                  <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary/50 rounded-tl-lg"></div>
                  <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-primary/50 rounded-tr-lg"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-primary/50 rounded-bl-lg"></div>
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-primary/50 rounded-br-lg"></div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    Apply Now
                  </h3>
                  <p className="text-white/80">
                    Start your journey in {courseTitle} today
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {formFields.map((field) => (
                    <div key={field.name} className="space-y-0">
                      <div className="flex items-center justify-between">
                        {formData[field.name] && !errors[field.name] && (
                          <span className="text-xs flex items-center text-green-500">
                            <Check className="h-3 w-3 mr-1" /> Valid
                          </span>
                        )}
                      </div>
                      <div className="relative transition-all duration-300">
                        {field.type === "select" ? (
                          <select
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 pl-10 bg-white/10 border rounded-lg ${
                              field.name === "stateid" ||
                              field.name === "cityid"
                                ? "text-white placeholder:text-white/50"
                                : "text-black placeholder:text-white/50"
                            } focus:outline-none focus:ring-2 transition-all duration-300 ${
                              errors[field.name]
                                ? "border-red-500"
                                : "border-white/20 focus:border-primary/50 focus:ring-primary/30"
                            }`}
                            required={field.required}
                          >
                            <option
                              value=""
                              className={`${
                                field.name === "stateid" ||
                                field.name === "cityid"
                                  ? "text-white/50"
                                  : "text-gray-500"
                              } bg-white`}
                            >
                              {field.placeholder}
                            </option>
                            {field.options.map((option) => (
                              <option
                                key={option}
                                value={option}
                                className="text-black bg-white hover:bg-gray-100"
                              >
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className={`w-full px-4 py-3 pl-10 bg-white/10 border rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                              errors[field.name]
                                ? "border-red-500"
                                : "border-white/20 focus:border-primary/50 focus:ring-primary/30"
                            }`}
                            required={field.required}
                            {...(field.name === "name"
                              ? {
                                  onInput: handleNameInput,
                                  inputMode: "text",
                                  autoComplete: "off",
                                }
                              : {})}
                            {...(field.name === "phone"
                              ? {
                                  onInput: handlePhoneInput,
                                  inputMode: "numeric",
                                  pattern: "[6-9][0-9]{9}",
                                  maxLength: 10,
                                  autoComplete: "off",
                                }
                              : {})}
                          />
                        )}
                        <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                        {errors[field.name] && (
                          <span className="text-xs text-red-500 mt-1 block">
                            {errors[field.name]}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Submit button */}
                  <div className="pt-2 mt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative overflow-hidden group bg-cusAccent hover:bg-cusAccent/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/20"
                    >
                      <span className="relative z-10 flex items-center justify-center text-lg">
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                        <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </span>
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    </button>
                  </div>

                  {/* Form footer */}
                  <div className="text-center mt-2 text-white/80 text-xs flex items-center justify-center gap-1">
                    <Lock className="h-3 w-3" />
                    <span>
                      By submitting, you agree to our{" "}
                      <a
                        href="#"
                        className="text-cusSecondary hover:underline transition-colors duration-300"
                      >
                        Terms
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-cusSecondary hover:underline transition-colors duration-300"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </div>
                </form>
              </div>
            </div>

            {/* Floating elements */}
            <div
              className="absolute bottom-5 left-0 sm:-left-6 animate-float"
              style={{ animationDuration: "5s", animationDelay: "1s" }}
            >
              <Badge className="flex bg-white text-cusText items-center gap-1">
                Starts June 2025
              </Badge>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 sm:bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-1 bg-white rounded-full animate-scrollDown"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
