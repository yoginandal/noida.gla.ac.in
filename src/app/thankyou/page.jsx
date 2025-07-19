"use client";

import Head from "next/head";
import Image from "next/image";

// SEO Metadata for Thank You Page
const ThankYouSEO = () => (
  <Head>
    <title>Thank You - GLA University Greater Noida</title>
    <meta
      name="description"
      content="Thank you for your registration with GLA University Greater Noida. We will get in touch with you soon regarding your admission enquiry for BTech, MBA, BCA, or BBA programs."
    />
    <meta
      name="keywords"
      content="thank you GLA University, registration successful, admission enquiry, GLA University contact, application submitted"
    />
    <link rel="canonical" href="https://noida.gla.ac.in/thankyou" />

    {/* Open Graph */}
    <meta
      property="og:title"
      content="Thank You - GLA University Greater Noida"
    />
    <meta
      property="og:description"
      content="Thank you for your registration with GLA University Greater Noida. We will get in touch with you soon regarding your admission enquiry."
    />
    <meta property="og:url" content="https://noida.gla.ac.in/thankyou" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/logo/logo.png" />
    <meta property="og:site_name" content="GLA University Greater Noida" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Thank You - GLA University Greater Noida"
    />
    <meta
      name="twitter:description"
      content="Thank you for your registration with GLA University Greater Noida."
    />
    <meta name="twitter:image" content="/logo/logo.png" />

    {/* Robots */}
    <meta name="robots" content="noindex, nofollow" />
  </Head>
);

export default function ThankYouPage() {
  return (
    <>
      <ThankYouSEO />
      <Head>
        <title>Thank You - GLA University</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, "script", "dataLayer", "GTM-P7HVVR6R");
            `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E5DQKP7BMR"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "G-E5DQKP7BMR");
            `,
          }}
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-700 overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P7HVVR6R"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute top-0 right-0 w-96 h-96 text-white/5"
            viewBox="0 0 200 200"
          >
            <path
              fill="currentColor"
              d="M45,-76.9C54.9,-69.3,57.2,-49.7,64.1,-32.8C71,-15.9,82.5,-1.7,82.9,12.7C83.3,27,72.5,41.5,60.2,52.4C47.9,63.3,34,70.6,18.4,74.8C2.8,78.9,-14.5,79.9,-31.9,76.1C-49.3,72.2,-66.8,63.5,-76.5,49.3C-86.2,35,-88,15.3,-85.6,-3.5C-83.1,-22.3,-76.3,-40.2,-63.3,-48.8C-50.3,-57.4,-31.1,-56.8,-15.3,-62.5C0.5,-68.2,13,-84.2,29.8,-85.9C46.7,-87.6,67.9,-75,45,-76.9Z"
              transform="translate(100 100)"
            />
          </svg>
          <div
            className="absolute left-10 top-40 w-20 h-20 bg-white/10 rounded-full animate-float"
            style={{ animation: "float 6s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute right-20 bottom-40 w-16 h-16 bg-white/5 rounded-full animate-float"
            style={{
              animation: "float 6s ease-in-out infinite",
              animationDelay: "-2s",
            }}
          ></div>
        </div>
        <div className="relative min-h-screen flex flex-col items-start justify-center p-5">
          <div className="flex items-center justify-start">
            <Image
              className="w-[250px] mb-8 top-0 left-0"
              src="/logo/logo.png"
              alt="GLA University Logo"
              width={250}
              height={100}
            />
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <div className="relative">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 200"
                style={{ animation: "spin-slow 20s linear infinite" }}
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#ffffff", stopOpacity: "0.2" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#ffffff", stopOpacity: "0.05" }}
                    />
                  </linearGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div
                className="relative z-10 transform transition-all duration-700"
                style={{ animation: "bounce-subtle 1s ease-in-out" }}
              >
                <svg
                  className="w-32 h-32 mx-auto"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="white"
                    strokeWidth="5"
                    className="opacity-20"
                  />
                  <path
                    className="check"
                    d="M30 50l15 15 25-25"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      strokeDasharray: 100,
                      strokeDashoffset: 100,
                      animation: "draw 0.5s forwards 0.5s",
                    }}
                  />
                </svg>
              </div>
            </div>
            <div
              className="space-y-6"
              style={{
                animation: "fadeUp 0.8s ease-out forwards",
                animationDelay: "0.2s",
              }}
            >
              <h1 className="text-6xl font-bold text-white mb-6">Thank You!</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Your registration was successful.
                <br />
                We will get in touch with you soon.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <a
                  href="https://noida.gla.ac.in"
                  target="_blank"
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white transform hover:scale-105 transition-transform"
                >
                  <svg
                    className="w-12 h-12 mx-auto mb-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold mb-2">
                    Check Our Website
                  </h3>
                  <p className="text-sm text-white/80">
                    Visit our website for more information
                    <br />
                    about courses and upcoming events.
                  </p>
                </a>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white transform hover:scale-105 transition-transform">
                  <svg
                    className="w-12 h-12 mx-auto mb-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      strokeWidth="2"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
                  <p className="text-sm text-white/80">
                    Our team will review your application
                    <br />
                    and contact you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white/60 self-center mt-16 text-sm">
            <p>© GLA University 2025 Education. All rights reserved.</p>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce-subtle {
          0%,
          20%,
          53%,
          80%,
          100% {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translate3d(0, -30px, 0);
          }
          70% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translate3d(0, -15px, 0);
          }
          90% {
            transform: translate3d(0, -4px, 0);
          }
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
