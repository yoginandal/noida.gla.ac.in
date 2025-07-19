# SEO Maintenance Guide for GLA University Website

## Overview

This guide explains how to maintain and edit SEO metadata for the GLA University website. All SEO configurations are centralized for easy management.

## Files Structure

### 1. Main SEO Configuration File

**Location:** `src/lib/seo-config.js`

- Contains all SEO metadata for every page
- Easy to edit and maintain
- Centralized configuration

### 2. Page-Specific SEO Files

Each page has its own SEO metadata in the respective page files:

- `src/app/page.jsx` (Home page)
- `src/app/about/page.jsx`
- `src/app/admissions/page.jsx`
- `src/app/placements/page.jsx`
- `src/app/contact-us/page.jsx`
- `src/app/awards-accreditations/page.jsx`
- `src/app/advisory-board/page.jsx`
- `src/app/blog/page.jsx`
- `src/app/programs/btech/page.jsx`
- `src/app/programs/mba/page.jsx`
- `src/app/programs/bba/page.jsx`
- `src/app/programs/bca/page.jsx`
- `src/app/programs/aiml/page.jsx`
- `src/app/thankyou/page.jsx`

### 3. SEO Files

- `public/sitemap.xml` - XML sitemap for search engines
- `public/robots.txt` - Instructions for search engine crawlers
- `src/app/layout.jsx` - Global SEO settings

## How to Edit SEO

### Option 1: Edit the Central Configuration (Recommended)

1. Open `src/lib/seo-config.js`
2. Find the page you want to edit (e.g., `home`, `about`, `admissions`)
3. Update the metadata:
   ```javascript
   home: {
     title: "Your New Title",
     description: "Your new description",
     keywords: ["keyword1", "keyword2", "keyword3"],
     image: "/path/to/image.jpg"
   }
   ```

### Option 2: Edit Individual Page Files

1. Open the specific page file (e.g., `src/app/about/page.jsx`)
2. Find the `export const metadata` section
3. Update the metadata directly

## SEO Elements Explained

### Title Tags

- **Purpose:** Main headline shown in search results
- **Best Practice:** 50-60 characters, include primary keyword
- **Example:** "BTech Computer Science Engineering - GLA University Greater Noida"

### Meta Descriptions

- **Purpose:** Summary shown in search results
- **Best Practice:** 150-160 characters, compelling and informative
- **Example:** "Join GLA University Greater Noida for BTech in Computer Science Engineering..."

### Keywords

- **Purpose:** Help search engines understand page content
- **Best Practice:** 10-15 relevant keywords, include long-tail keywords
- **Example:** ["BTech CSE", "top BTech college in Noida", "Computer Science Engineering"]

### Open Graph Tags

- **Purpose:** Control how content appears when shared on social media
- **Includes:** Title, description, image, URL
- **Example:** Facebook, Twitter, LinkedIn sharing

### Twitter Cards

- **Purpose:** Optimize Twitter sharing
- **Includes:** Title, description, image
- **Types:** summary, summary_large_image

## Page-Specific SEO Guidelines

### Home Page (`/`)

- **Priority:** Highest (1.0)
- **Keywords:** University name, location, main programs
- **Focus:** Overall university value proposition

### Program Pages (`/programs/*`)

- **Priority:** High (0.9)
- **Keywords:** Specific program name, location, admission year
- **Focus:** Program-specific benefits and features

### Admissions Page (`/admissions`)

- **Priority:** High (0.9)
- **Keywords:** Admission process, eligibility, application
- **Focus:** Admission process and requirements

### Placements Page (`/placements`)

- **Priority:** High (0.8)
- **Keywords:** Placement statistics, recruiters, packages
- **Focus:** Career outcomes and success stories

### About Pages (`/about`, `/awards-accreditations`, `/advisory-board`)

- **Priority:** Medium (0.7-0.8)
- **Keywords:** University history, achievements, leadership
- **Focus:** Credibility and reputation

### Contact Page (`/contact-us`)

- **Priority:** Medium (0.7)
- **Keywords:** Contact information, location, phone
- **Focus:** Easy access to contact information

### Blog Page (`/blog`)

- **Priority:** Medium (0.6)
- **Keywords:** News, insights, articles
- **Focus:** Content marketing and engagement

## SEO Best Practices

### 1. Title Tags

- Keep under 60 characters
- Include primary keyword near the beginning
- Make it compelling and click-worthy
- Avoid keyword stuffing

### 2. Meta Descriptions

- Keep under 160 characters
- Include primary and secondary keywords
- Make it compelling and informative
- Include a call-to-action when appropriate

### 3. Keywords

- Use 10-15 relevant keywords
- Include long-tail keywords
- Focus on user intent
- Avoid keyword stuffing

### 4. Images

- Use descriptive file names
- Include alt text
- Optimize for web (compress)
- Use appropriate dimensions

### 5. URLs

- Keep them short and descriptive
- Include relevant keywords
- Use hyphens instead of underscores
- Avoid special characters

## Technical SEO

### Sitemap (`public/sitemap.xml`)

- Lists all important pages
- Includes last modified dates
- Sets crawl priorities
- Updates automatically

### Robots.txt (`public/robots.txt`)

- Controls search engine access
- Points to sitemap
- Blocks private areas
- Sets crawl delays

### Structured Data

- Added to layout.jsx
- Includes organization information
- Helps search engines understand content
- Improves rich snippets

## Monitoring and Maintenance

### Regular Updates

1. **Monthly:** Review and update keywords
2. **Quarterly:** Update meta descriptions
3. **Annually:** Review and refresh all SEO content

### Key Metrics to Monitor

- Search engine rankings
- Organic traffic
- Click-through rates
- Bounce rates
- Page load speeds

### Tools to Use

- Google Search Console
- Google Analytics
- SEMrush
- Ahrefs
- Screaming Frog

## Common SEO Updates

### Adding New Programs

1. Create new page in `src/app/programs/`
2. Add SEO metadata to the page
3. Update `src/lib/seo-config.js`
4. Update `public/sitemap.xml`
5. Update navigation if needed

### Updating Contact Information

1. Update `src/lib/seo-config.js` siteConfig
2. Update contact page metadata
3. Update structured data in layout.jsx
4. Update sitemap if needed

### Adding New Content

1. Create new page
2. Add SEO metadata
3. Update sitemap
4. Update navigation
5. Test on staging

## Troubleshooting

### Common Issues

1. **Duplicate titles:** Ensure each page has unique titles
2. **Missing descriptions:** Add meta descriptions to all pages
3. **Broken images:** Check image paths and alt text
4. **Slow loading:** Optimize images and code

### SEO Validation

1. Use Google's Rich Results Test
2. Check mobile-friendliness
3. Validate structured data
4. Test page speed

## Contact Information

For technical SEO issues or questions, refer to the development team or SEO specialist.

---

**Last Updated:** January 2025
**Version:** 1.0
