import { MBA } from "@/Pages/Programs/MBA";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata = {
  title:
    "MBA Program - Top MBA Colleges in Noida with Fee Structure - GLA University",
  description:
    "Explore top MBA colleges in Noida with fee structure. GLA University Greater Noida offers quality MBA education, expert faculty, great placements, and industry-ready curriculum. Apply for MBA admission 2025.",
  keywords: [
    "MBA colleges in Noida",
    "top MBA colleges in Noida",
    "MBA colleges in Noida with fee structure",
    "MBA program",
    "Master of Business Administration",
    "MBA admission 2025",
    "management course",
    "business administration",
    "MBA in Greater Noida",
    "best MBA college",
    "MBA placement",
    "management education",
  ],
  alternates: {
    canonical: "/programs/mba",
  },
  openGraph: {
    title:
      "MBA Program - Top MBA Colleges in Noida with Fee Structure - GLA University",
    description:
      "Explore top MBA colleges in Noida with fee structure. GLA University Greater Noida offers quality MBA education, expert faculty, and great placements.",
    url: "https://noida.gla.ac.in/programs/mba",
    siteName: "GLA University Greater Noida",
    images: [
      {
        url: "/programs/HeroMBA.png",
        width: 1200,
        height: 630,
        alt: "MBA Program at GLA University",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MBA Program - Top MBA Colleges in Noida with Fee Structure - GLA University",
    description:
      "Explore top MBA colleges in Noida with fee structure. GLA University Greater Noida offers quality MBA education and great placements.",
    images: ["/programs/HeroMBA.png"],
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
      <MBA />
    </>
  );
}
