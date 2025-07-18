import BlogClientPage from "./blog-client";

// This function now runs on the SERVER for both the page and metadata
async function getPost(slug) {
  try {
    const response = await fetch(
      `https://noida.gla.ac.in/wordpress/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      // We add revalidation to cache posts for performance
      { next: { revalidate: 3600 } } // Re-fetch every hour
    );
    if (!response.ok) {
      // If the post is not found, WordPress API returns a 404, which is handled here
      return null;
    }
    const data = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    // This catches network errors, etc.
    console.error("Failed to fetch post on server:", error);
    return null;
  }
}

// The metadata function is now async and uses the same data fetcher
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);

  // If the post isn't found, provide a default title and description
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you are looking for could not be found.",
    };
  }

  // Strip HTML from the excerpt for a clean meta description
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
      images: featuredImage ? [{ url: featuredImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered,
      description: metaDescription,
      images: featuredImage ? [featuredImage] : [],
    },
  };
}

// The page component itself is now an async component
const BlogDetailsPage = async ({ params }) => {
  // Data is fetched on the server before the page is sent to the browser
  const post = await getPost(params.slug);

  // The fetched data is passed as a prop to the client component for rendering
  return <BlogClientPage initialPost={post} slug={params.slug} />;
};

export default BlogDetailsPage;
