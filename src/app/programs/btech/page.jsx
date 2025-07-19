import { BtechCS } from "@/Pages/Programs/BtechCS";

export const metadata = {
  title: "BTech Computer Science Engineering - GLA University Greater Noida",
  description:
    "Join GLA University Greater Noida for BTech in Computer Science Engineering - Top ranked college for BTech in CSE in Greater Noida. Industry-ready curriculum, expert faculty, and excellent placements.",
  keywords: [
    "BTech CSE",
    "BTech in Computer Science",
    "top BTech college in Noida",
    "best BTech college in Noida",
    "BTech in Computer Science & Engineering",
    "Computer Science Engineering",
    "engineering college in Greater Noida",
    "BTech CSE admission 2025",
    "computer science course",
    "engineering degree",
    "software engineering course",
    "IT engineering college",
  ],
  alternates: {
    canonical: "/programs/btech",
  },
  openGraph: {
    title: "BTech Computer Science Engineering - GLA University Greater Noida",
    description:
      "Join GLA University Greater Noida for BTech in Computer Science Engineering - Top ranked college for BTech in CSE in Greater Noida.",
    url: "https://noida.gla.ac.in/programs/btech",
    siteName: "GLA University Greater Noida",
    images: [
      {
        url: "/programs/HeroBtechCse.png",
        width: 1200,
        height: 630,
        alt: "BTech Computer Science Engineering at GLA University",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BTech Computer Science Engineering - GLA University Greater Noida",
    description:
      "Join GLA University Greater Noida for BTech in Computer Science Engineering - Top ranked college for BTech in CSE.",
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
  return <BtechCS />;
}
