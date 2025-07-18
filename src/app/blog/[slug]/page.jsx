import BlogClientPage from "./blog-client";

async function getPost(slug) {
  try {
    // Try WordPress API directly first
    const response = await fetch(
      `https://noida.gla.ac.in/wordpress/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      {
        cache: "no-store",
        headers: {
          Accept: "application/json",
          "User-Agent": "NextJS-Blog-App",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      if (data.length > 0) {
        return data[0];
      }
    }

    // If API fails, return fallback post
    return createFallbackPost(slug);
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return createFallbackPost(slug);
  }
}

function createFallbackPost(slug) {
  return {
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
        <p>We offer a wide range of undergraduate and postgraduate programs including:</p>
        <ul>
          <li><strong>B.Tech</strong> - Computer Science Engineering</li>
          <li><strong>B.Tech</strong> - AI & Machine Learning</li>
          <li><strong>BCA</strong> - Bachelor of Computer Applications</li>
          <li><strong>BBA</strong> - Bachelor of Business Administration</li>
          <li><strong>MBA</strong> - Master of Business Administration</li>
        </ul>
        
        <h3>Why Choose GLA University?</h3>
        <p>At GLA University, we are committed to:</p>
        <blockquote>
          "Providing a transformative educational experience that prepares students for leadership roles in their chosen fields."
        </blockquote>
        
        <p>Our state-of-the-art facilities, experienced faculty, and industry partnerships ensure that our students receive the best possible education and career opportunities.</p>
        
        <h3>Campus Life</h3>
        <p>Experience a vibrant campus life with numerous clubs, sports facilities, and cultural activities. Our campus provides an environment where students can grow both academically and personally.</p>
        
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
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | GLA University",
      description: "The requested blog post could not be found.",
    };
  }

  const metaDescription = post.excerpt.rendered
    .replace(/<[^>]+>/g, "")
    .slice(0, 160);
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title: `${post.title.rendered} | GLA University`,
    description: metaDescription,
    openGraph: {
      title: post.title.rendered,
      description: metaDescription,
      type: "article",
      url: `https://noida.gla.ac.in/blog/${params.slug}`,
      images: featuredImage ? [featuredImage] : ["/about/about-us.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered,
      description: metaDescription,
      images: featuredImage ? [featuredImage] : ["/about/about-us.jpg"],
    },
  };
}

const BlogDetailsPage = async ({ params }) => {
  const post = await getPost(params.slug);

  return <BlogClientPage initialPost={post} slug={params.slug} />;
};

export default BlogDetailsPage;
