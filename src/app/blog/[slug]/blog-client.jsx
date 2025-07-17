"use client";
import { useState, useEffect } from "react";
import { Heart, Bookmark, Share, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ClientOnly from "@/components/main/client-only";

async function getRecentPosts(postId) {
  try {
    const response = await fetch(`/api/posts?per_page=2&exclude=${postId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch recent posts");
    }
    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
}

const BlogClientPage = ({ initialPost, slug }) => {
  const [post, setPost] = useState(initialPost);
  const [loading, setLoading] = useState(!initialPost);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const loadRecentPosts = async () => {
      if (post) {
        try {
          const recentData = await getRecentPosts(post.id);
          setRecentPosts(recentData);
        } catch (error) {
          console.error("Error fetching recent posts:", error);
        }
      }
    };
    loadRecentPosts();
  }, [post]);

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
        <p>Post not found</p>
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
            />
          )}

          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div>
                  <ClientOnly className="text-sm text-gray-500">
                    Posted on {new Date(post.date).toLocaleDateString()}
                  </ClientOnly>
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

            <h1
              className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

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
                  />
                  <h3
                    className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 mb-2"
                    dangerouslySetInnerHTML={{
                      __html: recentPost.title.rendered,
                    }}
                  />
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <ClientOnly>
                      {new Date(recentPost.date).toLocaleDateString()}
                    </ClientOnly>
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

const Skeleton = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 sm:py-28 animate-pulse">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div className="w-full h-96 bg-gray-200"></div>
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/6"></div>
        </div>
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        </div>
      </div>
    </div>
  </div>
);
