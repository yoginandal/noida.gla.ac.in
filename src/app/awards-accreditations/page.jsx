import Awards from "@/Pages/About/Awards";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata = {
  title: {
    absolute: "GLA Greater Noida – Awards & Accreditations | Ranked Institute",
  },
  description:
    "Discover the prestigious awards, accreditations, and rankings earned by GLA Greater Noida, recognized among the top engineering and management colleges in India.",
  keywords: [
    "GLA University awards",
    "GLA University accreditations",
    "NAAC A+ grade",
    "NBA accreditation",
    "NIRF ranking",
    "university recognition",
    "GLA University ranking",
    "accreditation status",
    "university awards",
    "quality education recognition",
    "GLA University achievements",
    "educational excellence awards",
    "Ranked Institute",
    "top engineering college",
    "top management college",
    "Dainik Jagran ranking",
  ],
  alternates: {
    canonical: "/awards-accreditations",
  },
  openGraph: {
    title: "GLA Greater Noida – Awards & Accreditations | Ranked Institute",
    description:
      "Discover the prestigious awards, accreditations, and rankings earned by GLA Greater Noida, recognized among the top engineering and management colleges in India.",
    url: "https://noida.gla.ac.in/awards-accreditations",
    siteName: "GLA University Greater Noida",
    images: [
      {
        url: "/about/awards/awards-banner.webp",
        width: 1200,
        height: 630,
        alt: "GLA University Awards and Accreditations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GLA Greater Noida – Awards & Accreditations | Ranked Institute",
    description:
      "Discover the prestigious awards, accreditations, and rankings earned by GLA Greater Noida, recognized among the top engineering and management colleges in India.",
    images: ["/about/awards/awards-banner.webp"],
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
      <Awards />
    </>
  );
}
