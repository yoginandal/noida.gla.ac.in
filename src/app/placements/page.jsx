import Placements from "@/Pages/Placements/Placements";

export const metadata = {
  title:
    "GLA University Greater Noida Placements | Top Recruiters & High Packages",
  description:
    "Explore placement success at GLA University Greater Noida. Top companies like TCS, Infosys, Amazon, Microsoft recruit our students with high packages. Strong industry connections ensure bright futures for BTech and MBA students.",
  keywords: [
    "GLA University placements",
    "campus placements",
    "top recruiters GLA",
    "job opportunities GLA",
    "career services",
    "student placement record",
    "placement statistics GLA",
    "highest package GLA",
    "average package GLA",
    "placement companies GLA",
    "career opportunities",
    "job placement college",
    "placement cell GLA",
  ],
  alternates: {
    canonical: "/placements",
  },
  openGraph: {
    title:
      "GLA University Greater Noida Placements | Top Recruiters & High Packages",
    description:
      "Explore placement success at GLA University Greater Noida. Top companies like TCS, Infosys, Amazon, Microsoft recruit our students with high packages.",
    url: "https://noida.gla.ac.in/placements",
    siteName: "GLA University Greater Noida",
    images: [
      {
        url: "/placement/placementBanner.webp",
        width: 1200,
        height: 630,
        alt: "GLA University Placements - Top Recruiters",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "GLA University Greater Noida Placements | Top Recruiters & High Packages",
    description:
      "Explore placement success at GLA University Greater Noida. Top companies recruit our students with high packages.",
    images: ["/placement/placementBanner.webp"],
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
  return <Placements />;
}
