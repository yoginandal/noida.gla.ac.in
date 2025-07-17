import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";
    const perPage = searchParams.get("per_page") || "9";
    const exclude = searchParams.get("exclude");

    let url = `https://noida.gla.ac.in/wordpress/wp-json/wp/v2/posts?_embed&page=${page}&per_page=${perPage}`;
    if (exclude) {
      url += `&exclude=${exclude}`;
    }

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "NextJS-Blog-App",
      },
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout ? AbortSignal.timeout(5000) : undefined,
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const data = await response.json();
    const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0", 10);
    const totalPages = parseInt(
      response.headers.get("X-WP-TotalPages") || "0",
      10
    );

    return NextResponse.json({
      posts: data,
      totalPages: totalPages,
      totalPosts: totalPosts,
    });
  } catch (error) {
    console.error("API Error:", error);

    // Return mock data as fallback
    const exclude = new URL(request.url).searchParams.get("exclude");
    const mockPosts = [
      {
        id: 1,
        date: new Date().toISOString(),
        slug: "welcome-to-gla-university",
        title: { rendered: "Welcome to GLA University" },
        excerpt: {
          rendered:
            "Discover excellence in education at GLA University, where innovation meets tradition.",
        },
        content: {
          rendered:
            "<p>Welcome to GLA University, a leading institution committed to academic excellence and innovation.</p>",
        },
        _embedded: {
          "wp:featuredmedia": [
            {
              source_url: "/about/about-us.jpg",
            },
          ],
        },
      },
      {
        id: 2,
        date: new Date(Date.now() - 86400000).toISOString(),
        slug: "academic-excellence",
        title: { rendered: "Academic Excellence at GLA" },
        excerpt: {
          rendered:
            "Learn about our commitment to academic excellence and student success.",
        },
        content: {
          rendered:
            "<p>Academic excellence is at the heart of everything we do at GLA University.</p>",
        },
        _embedded: {
          "wp:featuredmedia": [
            {
              source_url: "/programs/HeroBBA.png",
            },
          ],
        },
      },
      {
        id: 3,
        date: new Date(Date.now() - 172800000).toISOString(),
        slug: "campus-life",
        title: { rendered: "Vibrant Campus Life" },
        excerpt: {
          rendered:
            "Experience the vibrant campus life and diverse community at GLA University.",
        },
        content: {
          rendered:
            "<p>Our campus offers a rich and diverse environment for students to grow and learn.</p>",
        },
        _embedded: {
          "wp:featuredmedia": [
            {
              source_url: "/programs/HeroBtechCse.png",
            },
          ],
        },
      },
      {
        id: 4,
        date: new Date(Date.now() - 259200000).toISOString(),
        slug: "placement-success-stories",
        title: { rendered: "Placement Success Stories 2024" },
        excerpt: {
          rendered:
            "Discover how our students are achieving remarkable career milestones with top companies.",
        },
        content: {
          rendered:
            "<p>Our students continue to achieve outstanding placement results with leading companies in technology, finance, and consulting.</p>",
        },
        _embedded: {
          "wp:featuredmedia": [
            {
              source_url: "/programs/HeroBCA.png",
            },
          ],
        },
      },
      {
        id: 5,
        date: new Date(Date.now() - 345600000).toISOString(),
        slug: "innovation-and-research",
        title: { rendered: "Innovation & Research at GLA" },
        excerpt: {
          rendered:
            "Explore the cutting-edge research and innovation initiatives at GLA University.",
        },
        content: {
          rendered:
            "<p>GLA University is at the forefront of research and innovation, fostering a culture of discovery and technological advancement.</p>",
        },
        _embedded: {
          "wp:featuredmedia": [
            {
              source_url: "/about/about-us.jpg",
            },
          ],
        },
      },
      {
        id: 6,
        date: new Date(Date.now() - 432000000).toISOString(),
        slug: "student-achievements",
        title: { rendered: "Student Achievements & Awards" },
        excerpt: {
          rendered:
            "Celebrating the outstanding achievements of our students across various disciplines.",
        },
        content: {
          rendered:
            "<p>Our students consistently excel in academics, sports, cultural activities, and competitions at national and international levels.</p>",
        },
        _embedded: {
          "wp:featuredmedia": [
            {
              source_url: "/programs/HeroBBA.png",
            },
          ],
        },
      },
      {
        id: 7,
        date: new Date(Date.now() - 518400000).toISOString(),
        slug: "industry-partnerships",
        title: { rendered: "Industry Partnerships & Collaborations" },
        excerpt: {
          rendered:
            "Learn about our strategic partnerships with leading industry players and organizations.",
        },
        content: {
          rendered:
            "<p>GLA University maintains strong partnerships with industry leaders to provide students with real-world experience and career opportunities.</p>",
        },
        _embedded: {
          "wp:featuredmedia": [
            {
              source_url: "/programs/HeroBtechCse.png",
            },
          ],
        },
      },
      {
        id: 8,
        date: new Date(Date.now() - 604800000).toISOString(),
        slug: "upcoming-events",
        title: { rendered: "Upcoming Events & Workshops" },
        excerpt: {
          rendered:
            "Stay updated with the latest events, workshops, and seminars at GLA University.",
        },
        content: {
          rendered:
            "<p>Join us for exciting events, workshops, and seminars designed to enhance your learning experience and professional development.</p>",
        },
        _embedded: {
          "wp:featuredmedia": [
            {
              source_url: "/programs/HeroBCA.png",
            },
          ],
        },
      },
      {
        id: 9,
        date: new Date(Date.now() - 691200000).toISOString(),
        slug: "alumni-success-network",
        title: { rendered: "Alumni Success Network" },
        excerpt: {
          rendered:
            "Connect with our successful alumni network and discover career opportunities.",
        },
        content: {
          rendered:
            "<p>Our alumni network spans across the globe, working in top companies and making significant contributions to their respective fields.</p>",
        },
        _embedded: {
          "wp:featuredmedia": [
            {
              source_url: "/about/about-us.jpg",
            },
          ],
        },
      },
    ];

    // Filter out excluded post if specified
    const filteredPosts = exclude
      ? mockPosts.filter((post) => post.id.toString() !== exclude)
      : mockPosts;

    // Handle pagination for mock data
    const pageNum = parseInt(page);
    const perPageNum = parseInt(perPage);
    const startIndex = (pageNum - 1) * perPageNum;
    const endIndex = startIndex + perPageNum;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredPosts.length / perPageNum);

    return NextResponse.json({
      posts: paginatedPosts,
      totalPages: totalPages,
      totalPosts: filteredPosts.length,
      fallback: true,
      error: "Using mock data due to API unavailability",
    });
  }
}
