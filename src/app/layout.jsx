import { Inter } from "next/font/google";
import { SiteHeader } from "@/header/site-header";
import SiteFooter from "@/footer/site-footer";
import "./globals.css";
import Providers from "@/components/main/query-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Best Private University, Ranked #1 in UP",
    template: "%s | GLA University Greater Noida",
  },
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
  ],
  authors: [{ name: "GLA University" }],
  creator: "GLA University",
  publisher: "GLA University",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://noida.gla.ac.in"),
  alternates: {
    canonical: "https://noida.gla.ac.in/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noida.gla.ac.in",
    siteName: "GLA University Greater Noida",
    title: "Best Private University, Ranked #1 in UP",
    description:
      "BTech College in Noida – GLA University, Ranked #1 in UP by Dainik Jagran, offers top management and tech courses.",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "GLA University Greater Noida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Private University, Ranked #1 in UP",
    description:
      "BTech College in Noida – GLA University, Ranked #1 in UP by Dainik Jagran, offers top management and tech courses.",
    images: ["/logo/logo.png"],
    creator: "@glauniversity",
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
  verification: {
    google: "KlAkUP22rErmeoo9R2nBRpHsxCZ8gC4kOBsq8uQPa_Q",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo/logo.png" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Analytics GA4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E5DQKP7BMR"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E5DQKP7BMR');
            `,
          }}
        />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "GLA University Greater Noida",
              url: "https://noida.gla.ac.in",
              logo: "https://noida.gla.ac.in/logo/logo.png",
              description:
                "BTech College in Noida – GLA University, Ranked #1 in UP by Dainik Jagran, offers top management and tech courses.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "17km Stone, NH-2, Mathura-Delhi Road",
                addressLocality: "Greater Noida",
                addressRegion: "Uttar Pradesh",
                postalCode: "201310",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-5662-250900",
                contactType: "customer service",
                areaServed: "IN",
              },
              sameAs: [
                "https://www.facebook.com/glauniversity",
                "https://twitter.com/glauniversity",
                "https://www.linkedin.com/company/gla-university",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <Toaster position="top-right" richColors />
        </Providers>
      </body>
    </html>
  );
}
