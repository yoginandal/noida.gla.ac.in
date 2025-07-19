import { AIML } from "@/components/Programs/AIML";

export const metadata = {
  title:
    "BTech in Artificial Intelligence & Machine Learning - GLA University Greater Noida",
  description:
    "Pursue BTech in Artificial Intelligence and Machine Learning at GLA University Greater Noida - a leading institute for future-ready AI professionals. Industry-focused curriculum, expert faculty, and excellent placements.",
  keywords: [
    "BTech in Artificial Intelligence",
    "BTech in Machine Learning",
    "Artificial Intelligence course in BTech Greater Noida",
    "BTech in Artificial Intelligence and Machine Learning",
    "AI ML engineering",
    "artificial intelligence engineering",
    "machine learning course",
    "AI engineering college",
    "BTech AI ML admission 2025",
    "artificial intelligence degree",
    "machine learning engineering",
    "AI ML program",
  ],
  alternates: {
    canonical: "/programs/aiml",
  },
  openGraph: {
    title:
      "BTech in Artificial Intelligence & Machine Learning - GLA University Greater Noida",
    description:
      "Pursue BTech in Artificial Intelligence and Machine Learning at GLA University Greater Noida - a leading institute for future-ready AI professionals.",
    url: "https://noida.gla.ac.in/programs/aiml",
    siteName: "GLA University Greater Noida",
    images: [
      {
        url: "/programs/HeroAIML.png",
        width: 1200,
        height: 630,
        alt: "BTech in Artificial Intelligence & Machine Learning at GLA University",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BTech in Artificial Intelligence & Machine Learning - GLA University Greater Noida",
    description:
      "Pursue BTech in Artificial Intelligence and Machine Learning at GLA University Greater Noida - a leading institute for future-ready AI professionals.",
    images: ["/programs/HeroAIML.png"],
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
  return <AIML />;
}
