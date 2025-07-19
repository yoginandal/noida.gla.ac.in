import About from "@/Pages/About/About";

export const metadata = {
  title: "About GLA University Greater Noida - Top BTech College in Noida",
  description:
    "Learn about GLA University Greater Noida, a top-ranked institution offering BTech in Computer Science, MBA, BCA, and BBA programs. Known for academic excellence, industry-ready curriculum, and excellent placements.",
  keywords: [
    "GLA University about",
    "GLA history",
    "GLA mission",
    "GLA vision",
    "university legacy",
    "GLA University Greater Noida",
    "about GLA University",
    "GLA University history",
    "GLA University mission",
    "GLA University vision",
    "top university in Noida",
    "best college in Greater Noida",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About GLA University Greater Noida - Top BTech College in Noida",
    description:
      "Learn about GLA University Greater Noida, a top-ranked institution offering BTech in Computer Science, MBA, BCA, and BBA programs. Known for academic excellence, industry-ready curriculum, and excellent placements.",
    url: "https://noida.gla.ac.in/about",
    siteName: "GLA University Greater Noida",
    images: [
      {
        url: "/about/GLA Building.webp",
        width: 1200,
        height: 630,
        alt: "GLA University Greater Noida Campus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About GLA University Greater Noida - Top BTech College in Noida",
    description:
      "Learn about GLA University Greater Noida, a top-ranked institution offering BTech in Computer Science, MBA, BCA, and BBA programs.",
    images: ["/about/GLA Building.webp"],
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
  return <About />;
}
