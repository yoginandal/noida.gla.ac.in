import Contact from "@/Pages/Contact/Contact";

export const metadata = {
  title: "Contact GLA University Greater Noida - Get in Touch Today!",
  description:
    "Have questions? Contact GLA University Greater Noida for admissions, courses, or campus info. Call +91-5662-250900, email, or visit our Noida campus today. Get expert guidance for BTech, MBA, BCA, BBA programs.",
  keywords: [
    "GLA University contact",
    "contact GLA",
    "GLA address",
    "GLA phone",
    "GLA email",
    "university contact form",
    "GLA University phone number",
    "GLA University address",
    "GLA University email",
    "contact GLA University Greater Noida",
    "admission enquiry GLA",
    "college contact information",
  ],
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact GLA University Greater Noida - Get in Touch Today!",
    description:
      "Have questions? Contact GLA University Greater Noida for admissions, courses, or campus info. Call +91-5662-250900 or visit our Noida campus today.",
    url: "https://noida.gla.ac.in/contact-us",
    siteName: "GLA University Greater Noida",
    images: [
      {
        url: "/general/contact.webp",
        width: 1200,
        height: 630,
        alt: "Contact GLA University Greater Noida",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact GLA University Greater Noida - Get in Touch Today!",
    description:
      "Have questions? Contact GLA University Greater Noida for admissions, courses, or campus info. Call +91-5662-250900 today.",
    images: ["/general/contact.webp"],
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
  return <Contact />;
}
