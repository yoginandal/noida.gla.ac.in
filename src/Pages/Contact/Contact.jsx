"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { TextAnimate } from "@/components/magicui/text-animate";
import Banner from "@/components/main/Banner";
import { motion } from "framer-motion";
import GridBackground from "@/components/ui/GridBackground";
// import Heading from "@/components/Heading";
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Here you would typically send the form data to your server
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating server delay
    setIsSubmitting(false);
    alert("Thank you for your message. We'll get back to you soon!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Your Name
        </Label>
        <Input id="name" type="text" placeholder="Your Name" required />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Your Email
        </Label>
        <Input id="email" type="email" placeholder="Your Email" required />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </Label>
        <Input id="phone" type="text" placeholder="Phone Number" required />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Your Message
        </Label>
        <Textarea
          id="message"
          placeholder="Your Message"
          required
          className="h-[7rem]"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-cusGreen hover:bg-cusGreen/80"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3 text-gray-600">
        <MapPin className="w-5 h-5 text-cusGreen" />
        <span>15A, Knowledge Park II, Greater Noida - 201310 (U.P) INDIA</span>
      </div>
      <div className="flex flex-col space-y-2 text-gray-600">
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-cusGreen" />
          <span>+91-5662-250900</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-cusGreen" />
          <span>+91-5662-250909</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-cusGreen" />
          <span>+91-5662-241489</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-cusGreen" />
          <span>+91-9927064017</span>
        </div>
      </div>
      <div className="flex items-center space-x-3 text-gray-600">
        <Mail className="w-5 h-5 text-cusGreen" />
        <span>glauniversity@gla.ac.in</span>
      </div>
    </div>
  );
}

function AdmissionHead() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3 text-gray-600">
        <Phone className="w-5 h-5 text-cusGreen" />
        <span>Admission Helpline: +91-9027068068</span>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="mt-6">
      <h3 className="mb-3 text-lg font-semibold text-gray-800">Follow Us</h3>
      <div className="flex space-x-4">
        <a
          href="https://www.facebook.com/glauniversity/"
          className="text-gray-400 hover:text-cusGreen"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/gla_university"
          className="text-gray-400 hover:text-cusGreen"
        >
          <Twitter className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/glauninoida/"
          className="text-gray-400 hover:text-cusGreen"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/school/gla-university/"
          className="text-gray-400 hover:text-cusGreen"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.904410352566!2d77.49304831718206!3d28.462031014375878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1f1dd579315%3A0x741bc5e037e1c18b!2sGLA%20University!5e0!3m2!1sen!2sin!4v1745236946979!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <GridBackground>
      <div className="min-h-screen">
        <motion.div
          className="relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <Banner
            className="z-10"
            title="Contact Us"
            image={"/general/contact.webp"}
            imageAlt="Contact Us"
          />

          {/* Main Content */}
          <div className="max-w-7xl mx-auto py-6 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 sm:gap-8">
              {/* Contact Form */}
              <div className="p-6 background-gradient-yellow-light rounded-lg shadow-lg">
                <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                  Send us a message
                </h2>
                <ContactForm />

                <div className="mt-6">
                  <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                    Find Us
                  </h2>
                  <Map />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-5 sm:space-y-8">
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                    Contact Information
                  </h2>
                  <ContactInfo />
                  <SocialLinks />
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                    Admission Helpline
                  </h2>
                  <AdmissionHead />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </GridBackground>
  );
}
