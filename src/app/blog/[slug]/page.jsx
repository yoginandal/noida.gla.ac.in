import BlogClientPage from "./blog-client";

async function getPost(slug) {
  try {
    const response = await fetch(
      `${
        process.env.NEXTAUTH_URL || "http://localhost:3002"
      }/api/posts/${slug}`,
      { cache: "no-store" }
    );
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const metaDescription = post.excerpt.rendered
    .replace(/<[^>]+>/g, "")
    .slice(0, 160);
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title: `${post.title.rendered} | IMM India`,
    description: metaDescription,
    openGraph: {
      title: post.title.rendered,
      description: metaDescription,
      type: "article",
      url: `https://www.immindia.edu.in/blog/${params.slug}`,
      images: featuredImage ? [featuredImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered,
      description: metaDescription,
      images: featuredImage ? [featuredImage] : [],
    },
  };
}

const BlogDetailsPage = async ({ params }) => {
  const post = await getPost(params.slug);

  return <BlogClientPage initialPost={post} slug={params.slug} />;
};

export default BlogDetailsPage;
