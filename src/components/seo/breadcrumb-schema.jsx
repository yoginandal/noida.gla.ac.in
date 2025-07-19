// Breadcrumb Schema Component
// This component generates structured data for breadcrumbs

export const BreadcrumbSchema = ({ items = [] }) => {
  const defaultItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://noida.gla.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Admission",
      item: "https://noida.gla.ac.in/admissions",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Btech",
      item: "https://noida.gla.ac.in/programs/btech",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "BCA",
      item: "https://noida.gla.ac.in/programs/bca",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "BBA",
      item: "https://noida.gla.ac.in/programs/bba",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "MBA",
      item: "https://noida.gla.ac.in/programs/mba",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Blog",
      item: "https://noida.gla.ac.in/blog",
    },
  ];

  const breadcrumbData = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: items.length > 0 ? items : defaultItems,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData),
      }}
    />
  );
};

// Helper function to generate breadcrumbs for specific pages
export const generateBreadcrumbs = (pageName, pageUrl) => {
  const baseItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://noida.gla.ac.in/",
    },
  ];

  // Add page-specific breadcrumb
  if (pageName && pageUrl) {
    baseItems.push({
      "@type": "ListItem",
      position: 2,
      name: pageName,
      item: pageUrl,
    });
  }

  return baseItems;
};

// Predefined breadcrumb configurations for common pages
export const breadcrumbConfigs = {
  admissions: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://noida.gla.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Admissions",
      item: "https://noida.gla.ac.in/admissions",
    },
  ],
  btech: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://noida.gla.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Programs",
      item: "https://noida.gla.ac.in/programs",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "BTech",
      item: "https://noida.gla.ac.in/programs/btech",
    },
  ],
  mba: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://noida.gla.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Programs",
      item: "https://noida.gla.ac.in/programs",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "MBA",
      item: "https://noida.gla.ac.in/programs/mba",
    },
  ],
  bba: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://noida.gla.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Programs",
      item: "https://noida.gla.ac.in/programs",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "BBA",
      item: "https://noida.gla.ac.in/programs/bba",
    },
  ],
  bca: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://noida.gla.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Programs",
      item: "https://noida.gla.ac.in/programs",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "BCA",
      item: "https://noida.gla.ac.in/programs/bca",
    },
  ],
  aiml: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://noida.gla.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Programs",
      item: "https://noida.gla.ac.in/programs",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AIML",
      item: "https://noida.gla.ac.in/programs/aiml",
    },
  ],
  about: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://noida.gla.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://noida.gla.ac.in/about",
    },
  ],
  awards: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://noida.gla.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://noida.gla.ac.in/about",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Awards & Accreditations",
      item: "https://noida.gla.ac.in/awards-accreditations",
    },
  ],
  placements: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://noida.gla.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Placements",
      item: "https://noida.gla.ac.in/placements",
    },
  ],
  contact: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://noida.gla.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://noida.gla.ac.in/contact-us",
    },
  ],
  blog: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://noida.gla.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://noida.gla.ac.in/blog",
    },
  ],
};
