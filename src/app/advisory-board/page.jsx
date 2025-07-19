import AdvisoryBoard from "@/Pages/About/AdvisoryBoard";

export const metadata = {
  title: "Advisory Board - GLA University Greater Noida",
  description:
    "Meet the esteemed members of the GLA University Greater Noida Advisory Board. Industry experts, academic leaders, and professionals guide our institution towards excellence in education and innovation.",
  keywords: [
    "GLA University advisory board",
    "advisory board members",
    "university leadership",
    "academic advisors",
    "industry experts GLA",
    "university governance",
    "advisory committee",
    "educational leadership",
    "GLA University board",
    "academic guidance",
    "university advisors",
    "expert committee",
  ],
  alternates: {
    canonical: "/advisory-board",
  },
  openGraph: {
    title: "Advisory Board - GLA University Greater Noida",
    description:
      "Meet the esteemed members of the GLA University Greater Noida Advisory Board. Industry experts, academic leaders, and professionals guide our institution towards excellence.",
    url: "https://noida.gla.ac.in/advisory-board",
    siteName: "GLA University Greater Noida",
    images: [
      {
        url: "/about/ganeshi-lal-agrawal.jpg",
        width: 1200,
        height: 630,
        alt: "GLA University Advisory Board",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advisory Board - GLA University Greater Noida",
    description:
      "Meet the esteemed members of the GLA University Greater Noida Advisory Board. Industry experts and academic leaders guide our institution.",
    images: ["/about/ganeshi-lal-agrawal.jpg"],
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
  return <AdvisoryBoard />;
}
