"use client";
import { useState, useEffect } from "react";
import { Heart, Bookmark, Share, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BlogClientPage = ({ initialPost, slug }) => {
  const [post, setPost] = useState(initialPost);
  const [loading, setLoading] = useState(!initialPost);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      // If no initial post, try to fetch it
      if (!post) {
        try {
          const response = await fetch(
            `https://noida.gla.ac.in/wordpress/wp-json/wp/v2/posts?slug=${slug}&_embed`
          );
          if (response.ok) {
            const data = await response.json();
            if (data.length > 0) {
              setPost(data[0]);
            } else {
              // Use fallback post
              setPost(createFallbackPost(slug));
            }
          } else {
            setPost(createFallbackPost(slug));
          }
        } catch (error) {
          console.error("Error fetching post:", error);
          setPost(createFallbackPost(slug));
        }
        setLoading(false);
      }

      // Load recent posts
      try {
        const recentResponse = await fetch(
          `https://noida.gla.ac.in/wordpress/wp-json/wp/v2/posts?_embed&per_page=2${
            post?.id ? `&exclude=${post.id}` : ""
          }`
        );
        if (recentResponse.ok) {
          const recentData = await recentResponse.json();
          setRecentPosts(recentData);
        } else {
          setRecentPosts(createFallbackRecentPosts());
        }
      } catch (error) {
        console.error("Error fetching recent posts:", error);
        setRecentPosts(createFallbackRecentPosts());
      }
    };

    loadData();
  }, [slug, post?.id]);

  const createFallbackPost = (slug) => ({
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
  });

  const createFallbackRecentPosts = () => [
    {
      id: 2,
      date: new Date(Date.now() - 86400000).toISOString(),
      slug: "academic-excellence",
      title: { rendered: "Academic Excellence at GLA" },
      content: {
        rendered: "Academic excellence is at the heart of everything we do.",
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
      content: {
        rendered: "Our campus offers a rich and diverse environment.",
      },
      _embedded: {
        "wp:featuredmedia": [
          {
            source_url: "/programs/HeroBtechCse.png",
          },
        ],
      },
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Skeleton />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Post not found
          </h1>
          <Link href="/blog" className="text-indigo-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-12 sm:py-28">
        {post?.fallback && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
            <p className="text-yellow-800">
              📝 Showing sample blog post - External blog service is temporarily
              unavailable
            </p>
          </div>
        )}

        <article className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
            <Image
              className="w-full h-auto object-cover"
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={post.title.rendered}
              width={800}
              height={400}
              priority
              onError={(e) => {
                e.target.src = "/about/about-us.jpg";
              }}
            />
          )}

          <div className="p-8">
            {/* Article Meta */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Posted on {new Date(post.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-gray-500">
                <Clock className="h-5 w-5 mr-1" />
                <span className="text-sm">
                  {Math.ceil(post.content.rendered.split(" ").length / 100)} min
                  read
                </span>
              </div>
            </div>

            {/* Article Title */}
            <h1
              className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none article-content">
              <style jsx>{`
                .article-content {
                  color: #374151;
                  line-height: 1.8;
                }
                .article-content p {
                  margin-bottom: 1.5rem;
                  font-size: 1rem;
                }
                .article-content h2 {
                  font-size: 1.875rem;
                  font-weight: 700;
                  color: #111827;
                  margin-top: 2.5rem;
                  margin-bottom: 1.25rem;
                }
                .article-content h3 {
                  font-size: 1.5rem;
                  font-weight: 600;
                  color: #1f2937;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                }
                .article-content ul,
                .article-content ol {
                  margin-left: 1.5rem;
                  margin-bottom: 1.5rem;
                  list-style-type: disc;
                }
                .article-content ol {
                  margin-left: 1.5rem;
                  margin-bottom: 1.5rem;
                  list-style-type: decimal;
                }
                .article-content li {
                  margin-bottom: 0.5rem;
                }
                .article-content blockquote {
                  border-left: 4px solid #6366f1;
                  padding-left: 1rem;
                  margin: 2rem 0;
                  font-style: italic;
                  color: #4b5563;
                }
                .article-content img {
                  border-radius: 0.5rem;
                  margin: 2rem 0;
                }
                .article-content a {
                  color: #4f46e5;
                  text-decoration: underline;
                }
                .article-content pre {
                  background: #f3f4f6;
                  padding: 1rem;
                  border-radius: 0.5rem;
                  overflow-x: auto;
                  margin: 1.5rem 0;
                }
              `}</style>
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>

            {/* Article Actions */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <Heart className="h-6 w-6" />
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <Bookmark className="h-6 w-6" />
                  <span>Save</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <Share className="h-6 w-6" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Recent Articles */}
        {recentPosts.length > 0 && (
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Recent Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map((recentPost) => (
                <Link
                  key={recentPost.id}
                  href={`/blog/${recentPost.slug}`}
                  className="group cursor-pointer"
                >
                  <Image
                    className="w-full h-[10rem] sm:h-[13rem] aspect-video object-cover rounded-lg mb-4"
                    src={
                      recentPost._embedded?.["wp:featuredmedia"]?.[0]
                        ?.source_url ||
                      "https://pagedone.io/asset/uploads/1696244317.png"
                    }
                    alt={recentPost.title.rendered}
                    width={400}
                    height={200}
                    onError={(e) => {
                      e.target.src = "/programs/HeroBBA.png";
                    }}
                  />
                  <h3
                    className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 mb-2"
                    dangerouslySetInnerHTML={{
                      __html: recentPost.title.rendered,
                    }}
                  />
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>
                      {Math.ceil(
                        recentPost.content.rendered.split(" ").length / 200
                      )}{" "}
                      min read
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default BlogClientPage;

const Skeleton = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 sm:py-28">
      <article className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        {/* Skeleton for featured image */}
        <div className="w-full h-[400px] bg-gray-200 animate-pulse" />

        <div className="p-8">
          {/* Skeleton for meta info */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-32 h-5 bg-gray-200 rounded animate-pulse" />
            <div className="w-24 h-5 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Skeleton for title */}
          <div className="space-y-3 mb-6">
            <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
          </div>

          {/* Skeleton for content */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/6" />
          </div>
        </div>
      </article>

      {/* Skeleton for recent articles */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="w-48 h-8 bg-gray-200 rounded animate-pulse mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <div key={item}>
              <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse mb-4" />
              <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-24" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
