import { BtechCS } from "@/Pages/Programs/BtechCS";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata = {
  title:
    "BTech in Computer Science - Top Engineering College in Noida - GLA University",
  description:
    "BTech in Computer Science at GLA University Greater Noida, a top engineering college in Noida with comprehensive fee details. Industry-ready curriculum, expert faculty, and excellent placements. Call +91-5662-250900 for admission info.",
  keywords: [
    "BTech in Computer Science Greater Noida",
    "BTech college in Greater Noida",
    "BTech college in Greater Noida with fees",
    "BTech program",
    "Bachelor of Technology",
    "BTech admission 2025",
    "computer science engineering",
    "engineering course",
    "BTech in Greater Noida",
    "best engineering college",
    "BTech placement",
    "computer science degree",
  ],
  alternates: {
    canonical: "https://noida.gla.ac.in/programs/btech",
  },
  openGraph: {
    title:
      "BTech in Computer Science - Top Engineering College in Noida - GLA University",
    description:
      "BTech in Computer Science at GLA University Greater Noida, a top engineering college in Noida with comprehensive fee details. Industry-ready curriculum and expert faculty.",
    url: "https://noida.gla.ac.in/programs/btech",
    siteName: "GLA University Greater Noida",
    images: [
      {
        url: "/programs/HeroBtechCse.png",
        width: 1200,
        height: 630,
        alt: "BTech in Computer Science at GLA University",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BTech in Computer Science - Top Engineering College in Noida - GLA University",
    description:
      "BTech in Computer Science at GLA University Greater Noida, a top engineering college in Noida with comprehensive fee details.",
    images: ["/programs/HeroBtechCse.png"],
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
  return (
    <>
      <BreadcrumbSchema />
      <BtechCS />
    </>
  );
}
