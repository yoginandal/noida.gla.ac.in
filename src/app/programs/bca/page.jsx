import { BCA } from "@/Pages/Programs/BCA";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata = {
  title:
    "BCA in Data Science - Top BCA College in Greater Noida - GLA University",
  description:
    "BCA in Data Science at GLA University Greater Noida, a top BCA college in Greater Noida with comprehensive fee details. Industry-ready curriculum, expert faculty, and excellent placements. Call +91-5662-250900 for admission info.",
  keywords: [
    "BCA in Data Science Greater Noida",
    "BCA college in Greater Noida",
    "BCA college in Greater Noida with fees",
    "BCA program",
    "Bachelor of Computer Applications",
    "BCA admission 2025",
    "computer applications course",
    "data science course",
    "BCA in Greater Noida",
    "best BCA college",
    "BCA placement",
    "computer applications degree",
  ],
  alternates: {
    canonical: "/programs/bca",
  },
  openGraph: {
    title:
      "BCA in Data Science - Top BCA College in Greater Noida - GLA University",
    description:
      "BCA in Data Science at GLA University Greater Noida, a top BCA college in Greater Noida with comprehensive fee details. Industry-ready curriculum and expert faculty.",
    url: "https://noida.gla.ac.in/programs/bca",
    siteName: "GLA University Greater Noida",
    images: [
      {
        url: "/programs/HeroBCA.png",
        width: 1200,
        height: 630,
        alt: "BCA in Data Science at GLA University",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BCA in Data Science - Top BCA College in Greater Noida - GLA University",
    description:
      "BCA in Data Science at GLA University Greater Noida, a top BCA college in Greater Noida with comprehensive fee details.",
    images: ["/programs/HeroBCA.png"],
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
      <BCA />
    </>
  );
}
