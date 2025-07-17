import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { slug } = params;

    const response = await fetch(
      `https://noida.gla.ac.in/wordpress/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      {
        headers: {
          Accept: "application/json",
          "User-Agent": "NextJS-Blog-App",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.length === 0) {
      throw new Error("Post not found");
    }

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error("API Error:", error);

    // Return mock post data as fallback
    const mockPost = {
      id: 1,
      date: new Date().toISOString(),
      slug: slug,
      title: { rendered: "Welcome to GLA University" },
      excerpt: {
        rendered:
          "Discover excellence in education at GLA University, where innovation meets tradition.",
      },
      content: {
        rendered: `
          <h2>Welcome to GLA University</h2>
          <p>GLA University is a leading institution committed to academic excellence and innovation. Our campus provides a vibrant learning environment where students can thrive and achieve their goals.</p>
          
          <h3>Our Mission</h3>
          <p>To provide world-class education that prepares students for successful careers and meaningful lives. We focus on:</p>
          <ul>
            <li>Academic Excellence</li>
            <li>Innovation and Research</li>
            <li>Character Development</li>
            <li>Global Perspective</li>
          </ul>
          
          <h3>Programs Offered</h3>
          <p>We offer a wide range of undergraduate and postgraduate programs including B.Tech, BCA, BBA, MBA, and specialized courses in AI & ML.</p>
          
          <p>Join us in our journey of educational excellence and innovation. For more information about our programs and admissions, please contact us.</p>
        `,
      },
      _embedded: {
        "wp:featuredmedia": [
          {
            source_url: "/about/about-us.jpg",
          },
        ],
      },
      fallback: true,
    };

    return NextResponse.json(mockPost);
  }
}
