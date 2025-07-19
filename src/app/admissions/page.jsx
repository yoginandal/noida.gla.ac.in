import AdmissionPage from "@/Pages/Admission/AdmissionPage";

export const metadata = {
  title:
    "GLA University Greater Noida Admissions 2025 | Apply for BTech, MBA, BCA, BBA",
  description:
    "Apply now for 2025 admissions at GLA University Greater Noida. Enroll in BTech, BCA, BBA, MBA programs with top placements, expert faculty, and industry-ready curriculum. Call +91-5662-250900 for admission queries.",
  keywords: [
    "GLA University admissions",
    "apply to GLA",
    "university admission 2025",
    "GLA eligibility",
    "GLA fee structure",
    "GLA scholarships",
    "BTech admission 2025",
    "MBA admission 2025",
    "BCA admission 2025",
    "BBA admission 2025",
    "admission process GLA",
    "GLA University application",
    "college admission in Noida",
    "engineering admission 2025",
  ],
  alternates: {
    canonical: "/admissions",
  },
  openGraph: {
    title:
      "GLA University Greater Noida Admissions 2025 | Apply for BTech, MBA, BCA, BBA",
    description:
      "Apply now for 2025 admissions at GLA University Greater Noida. Enroll in BTech, BCA, BBA, MBA programs with top placements, expert faculty, and industry-ready curriculum.",
    url: "https://noida.gla.ac.in/admissions",
    siteName: "GLA University Greater Noida",
    images: [
      {
        url: "/admission/admissionBanner.webp",
        width: 1200,
        height: 630,
        alt: "GLA University Admissions 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "GLA University Greater Noida Admissions 2025 | Apply for BTech, MBA, BCA, BBA",
    description:
      "Apply now for 2025 admissions at GLA University Greater Noida. Enroll in BTech, BCA, BBA, MBA programs with top placements and expert faculty.",
    images: ["/admission/admissionBanner.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Page() {
  return <AdmissionPage />;
}
