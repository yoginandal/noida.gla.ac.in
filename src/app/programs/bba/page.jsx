import { BBA } from "@/Pages/Programs/BBA";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata = {
  title: "BBA Program - Top BBA Colleges in Noida with Fees - GLA University",
  description:
    "Join one of the top BBA colleges in Noida - GLA University Greater Noida. Cutting-edge BBA programs, career support, real-world exposure, and excellent placements await you. Apply for BBA admission 2025.",
  keywords: [
    "BBA colleges in Noida",
    "top BBA colleges in Noida",
    "BBA colleges in Greater Noida",
    "BBA program",
    "Bachelor of Business Administration",
    "BBA admission 2025",
    "business administration course",
    "undergraduate business course",
    "BBA in Greater Noida",
    "best BBA college",
    "BBA placement",
    "business management course",
  ],
  alternates: {
    canonical: "/programs/bba",
  },
  openGraph: {
    title: "BBA Program - Top BBA Colleges in Noida with Fees - GLA University",
    description:
      "Join one of the top BBA colleges in Noida - GLA University Greater Noida. Cutting-edge BBA programs, career support, and real-world exposure await you.",
    url: "https://noida.gla.ac.in/programs/bba",
    siteName: "GLA University Greater Noida",
    images: [
      {
        url: "/programs/HeroBBA.png",
        width: 1200,
        height: 630,
        alt: "BBA Program at GLA University",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BBA Program - Top BBA Colleges in Noida with Fees - GLA University",
    description:
      "Join one of the top BBA colleges in Noida - GLA University Greater Noida. Cutting-edge BBA programs and career support await you.",
    images: ["/programs/HeroBBA.png"],
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
      <BBA />
    </>
  );
}
