"use client";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * SiteFooter Component
 *
 * Footer for the GLA University website based on the provided design.
 * Includes logo, social media links, useful links sections, and newsletter subscription.
 */
const SiteFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerSections = [
    {
      label: "Useful Links",
      items: [
        { name: "About Us", path: "/about" },
        { name: "Awards & Accreditations", path: "/awards-accreditations" },
        { name: "Student Life", path: "/students-life" },
        // { name: "Media", path: "/students-life/news-announcements" },
        // { name: "Blog", path: "/blog" },
        // { name: "Careers", path: "/careers" },
        // {
        //   name: "AICTE Feedback",
        //   path: "https://www.aicte-india.org/feedback/",
        // },
      ],
    },
    {
      label: "Programs Offered",
      items: [
        { name: "B.Tech", path: "/programs/btech" },
        { name: "B.Tech in AI & ML", path: "/programs/aiml" },
        { name: "BCA", path: "/programs/bca" },
        { name: "BBA", path: "/programs/bba" },
        { name: "MBA", path: "/programs/mba" },

        // { name: "M.Tech", path: "/programs/mtech" },
        // { name: "Ph.D", path: "/programs/phd" },
      ],
    },
    // {
    //   label: "Committees",
    //   items: [
    //     { name: "Grievance Redressal Mechanism", path: "/grievance" },
    //     { name: "Internal Complaints Committee", path: "/complaints" },
    //     { name: "Anti-Ragging Committee", path: "/anti-ragging" },
    //     { name: "Research Committee", path: "/research-committee" },
    //   ],
    // },
    {
      label: "Quick Links",
      items: [
        { name: "Advisory Board", path: "/advisory-board" },
        { name: "Contact Us", path: "/contact-us" },
      ],
    },
  ];

  return (
    <footer
      className="relative pt-16 pb-10 px-4 md:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-yellow-200 via-yellow-100 to-yellow-200"
      //   style={{
      //     background: "linear-gradient(to right, #e9f2fa, #f5f9fd, #e9f2fa)",
      //   }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* logo and Social Section */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <Link
                href="/"
                className="flex items-center gap-3 group"
                onClick={scrollToTop}
              >
                <Image
                  src={"/logo/gla_logo.png"}
                  alt="GLA University logo"
                  className="h-24 cursor-pointer w-auto transition-transform group-hover:scale-105"
                  width={180}
                  height={96}
                />
                <div className="flex flex-col"></div>
              </Link>
              <div className="flex gap-3">
                {[
                  {
                    icon: Facebook,
                    label: "Facebook",
                    href: "https://www.facebook.com/glauniversity/",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    href: "https://www.instagram.com/glauninoida/",
                  },
                  {
                    icon: Twitter,
                    label: "Twitter",
                    href: "https://twitter.com/gla_university",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/school/gla-university/",
                  },
                  {
                    icon: Youtube,
                    label: "YouTube",
                    href: "www.youtube.com/@glauniversity2879",
                  },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="w-9 h-9 cursor-pointer rounded-full flex items-center justify-center transition-all hover:scale-110 text-white"
                        style={{ backgroundColor: "var(--color-cusBlue)" }}
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5" />
                      </button>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <MapPin className="w-10 h-10 text-cusGreen" />
              <span>
                15A, Knowledge Park II, Greater Noida - 201310 (U.P) INDIA
              </span>
            </div>
            <div className="space-y-3">
              <p
                className="text-sm font-medium mb-3"
                style={{ color: "var(--color-cusBlue)" }}
              >
                24/7 Student Helpline Number
              </p>
              <div className="flex gap-2">
                <Link href="tel:+91-7037256969">
                  <button
                    className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full text-white transition-colors hover:opacity-90"
                    style={{ backgroundColor: "var(--color-cusGreen)" }}
                  >
                    <Phone className="h-4 w-4" />
                    +91-7037256969
                  </button>
                </Link>
                {/* <Link
                  to="https://wa.me/917037256969"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-full transition-transform hover:scale-105"
                    style={{ backgroundColor: "#25D366" }}
                    aria-label="Contact on WhatsApp"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-white fill-current"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </button>
                </Link> */}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.label} className="space-y-6">
                <h3
                  className="text-lg font-semibold tracking-wide"
                  style={{ color: "var(--color-cusBlue)" }}
                >
                  {section.label}
                </h3>
                <ul className="space-y-3 text-base">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      {item.path.startsWith("https:") ? (
                        <Link
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 transition-colors duration-200"
                          style={{ color: "var(--color-cusBlue)" }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.color =
                              "var(--color-cusGreenLight)")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.color =
                              "var(--color-cusBlue)")
                          }
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <Link
                          href={item.path}
                          onClick={scrollToTop}
                          className="group inline-flex items-center gap-1 transition-colors duration-200"
                          style={{ color: "var(--color-cusBlue)" }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.color =
                              "var(--color-cusGreenLight)")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.color =
                              "var(--color-cusBlue)")
                          }
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div
          className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-xl border shadow-sm"
          style={{ borderColor: "var(--color-cusBlue)", opacity: 0.1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--color-cusBlue)" }}
              >
                Stay Updated with GLA University
              </h3>
              <p style={{ color: "var(--color-cusBlue)", opacity: 0.8 }}>
                Stay updated with our latest news, events, and academic
                announcements
              </p>
            </div>
            <div className="lg:col-span-4">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 border rounded-md focus:outline-none"
                  style={{ borderColor: "var(--color-cusBlue)" }}
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md text-white font-medium hover:opacity-90"
                  style={{ backgroundColor: "var(--color-cusGreen)" }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div> */}

        <div
          className="h-px w-full my-12"
          style={{ backgroundColor: "var(--color-cusBlue)" }}
        ></div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-base">
          <p style={{ color: "var(--color-cusBlue)" }}>
            Copyright © GLA University {new Date().getFullYear()}
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="transition-colors"
              style={{ color: "var(--color-cusBlue)" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--color-cusGreenLight)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--color-cusBlue)")
              }
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="transition-colors"
              style={{ color: "var(--color-cusBlue)" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--color-cusGreenLight)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--color-cusBlue)")
              }
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
