import Home from "@/Pages/Home/Home";

export const metadata = {
  title: "Best Private University, Ranked #1 in UP",
  description:
    "BTech College in Noida – GLA University, Ranked #1 in UP by Dainik Jagran, offers top management and tech courses.",
  keywords: [
    "GLA University",
    "GLA Greater Noida",
    "BTech college in Noida",
    "MBA college in Noida",
    "BCA college in Noida",
    "BBA college in Noida",
    "top engineering college",
    "best university in Noida",
    "computer science engineering",
    "artificial intelligence course",
    "data science course",
    "placement college",
    "admissions 2025",
    "Best Private University",
    "Ranked #1 in UP",
    "Dainik Jagran ranking",
    "engineering college in Greater Noida",
    "management college in Noida",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Private University, Ranked #1 in UP",
    description:
      "BTech College in Noida – GLA University, Ranked #1 in UP by Dainik Jagran, offers top management and tech courses.",
    url: "https://noida.gla.ac.in",
    siteName: "GLA University Greater Noida",
    images: [
      {
        url: "/banner/banner_Image.webp",
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
    title: "Best Private University, Ranked #1 in UP",
    description:
      "BTech College in Noida – GLA University, Ranked #1 in UP by Dainik Jagran, offers top management and tech courses.",
    images: ["/banner/banner_Image.webp"],
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
  return <Home />;
}
