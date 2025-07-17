"use client";
import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";
import ClientOnly from "@/components/main/client-only";

const fetchPosts = async (page) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(`/api/posts?page=${page}&per_page=9`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      // Check for specific error status codes
      if (response.status === 404) {
        throw new Error("Blog posts not found");
      } else if (response.status >= 500) {
        throw new Error("Server error - please try again later");
      } else {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
    }

    const data = await response.json();

    // Check if we're using fallback data
    if (data.fallback) {
      console.warn("Using fallback blog data:", data.error);
    }

    return {
      posts: data.posts,
      totalPages: data.totalPages || 1,
      fallback: data.fallback || false,
    };
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    // If the API fails, return mock data or handle gracefully
    if (error.name === "AbortError") {
      throw new Error("Request timed out - please check your connection");
    }
    throw error;
  }
};

const Blog = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Prefetch next page
  useEffect(() => {
    if (data?.totalPages && page < data.totalPages) {
      queryClient.prefetchQuery({
        queryKey: ["posts", page + 1],
        queryFn: () => fetchPosts(page + 1),
      });
    }
  }, [page, data, queryClient]);

  if (error) {
    return (
      <section className="py-12 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Unable to Load Blog Posts
            </h2>
            <p className="text-red-500 mb-6">
              {error.message || "Error fetching posts."}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-cusGreen text-white px-6 py-2 rounded-lg hover:bg-cusGreen/80 transition-colors"
            >
              Try Again
            </button>
            <p className="text-gray-500 mt-4 text-sm">
              If the problem persists, please check your internet connection or
              try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Heading
            level={2}
            align="center"
            subtext="Stay updated with our latest insights and articles"
            className="text-cusBlue"
          >
            <TextAnimate
              as="span"
              by="word"
              delay={0.2}
              duration={0.5}
              animation="slideUp"
              className="inline-flex flex-wrap"
            >
              Our latest blog
            </TextAnimate>
          </Heading>
          {data?.fallback && (
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
              <p className="text-yellow-800">
                📝 Showing sample blog posts - External blog service is temporarily unavailable
              </p>
            </div>
          )}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? [...Array(9)].map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse border border-gray-300 rounded-2xl"
                >
                  <div className="bg-gray-200 h-48 rounded-t-2xl" />
                  <div className="p-4 lg:p-6">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-3" />
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-5" />
                    <div className="h-4 bg-gray-200 rounded w-full mb-3" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              ))
            : data?.posts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  date={post.date}
                  title={post.title.rendered}
                  description={
                    post.excerpt.rendered
                      .replace(/<[^>]+>/g, "")
                      .slice(0, 150) + "..."
                  }
                  imageUrl={
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "https://pagedone.io/asset/uploads/1696244317.png"
                  }
                  slug={post.slug}
                />
              ))}
        </div>

        {/* Pagination Controls */}
        {!isLoading && data?.totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1 || isFetching}
              className={`px-4 py-2 rounded ${
                page === 1 || isFetching
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-pink-800 text-white hover:bg-pink-900"
              }`}
            >
              Previous
            </button>

            <div className="flex items-center gap-2 overflow-x-auto">
              {Array.from({ length: data.totalPages }, (_, index) => index + 1)
                .slice(
                  Math.max(0, page - 3),
                  Math.min(data.totalPages, page + 2)
                )
                .map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    disabled={isFetching}
                    className={`w-10 h-10 rounded ${
                      page === pageNumber
                        ? "bg-pink-800 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    } ${isFetching ? "cursor-not-allowed opacity-50" : ""}`}
                  >
                    {pageNumber}
                  </button>
                ))}
            </div>

            <button
              onClick={() =>
                setPage((prev) => Math.min(prev + 1, data.totalPages))
              }
              disabled={page === data.totalPages || isFetching}
              className={`px-4 py-2 rounded ${
                page === data.totalPages || isFetching
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-pink-800 text-white hover:bg-pink-900"
              }`}
            >
              Next
            </button>
          </div>
        )}

        {/* Loading overlay for subsequent fetches */}
        {isFetching && !isLoading && (
          <div className="fixed inset-0 bg-opacity-30 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">Loading...</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;

const BlogCard = ({ id, date, title, description, imageUrl, slug }) => {
  return (
    <div
      id={id}
      className="group w-full overflow-hidden border border-gray-300 rounded-2xl"
    >
      <div className="flex items-center">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="rounded-t-2xl w-full object-cover h-44 sm:h-48 aspect-video"
        />
      </div>
      <div className="p-4 lg:p-6 h-full transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
        <ClientOnly className="text-indigo-600 font-medium mb-3 block">
          {new Date(date).toLocaleDateString()}
        </ClientOnly>
        <Link href={`/blog/${slug}`}>
          <h4
            className="text-xl text-gray-900 hover:text-primary-color transition-all duration-300 hover:underline font-medium leading-8 mb-5"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Link>
        <p className="text-gray-500 mb-5 line-clamp-3">{description}</p>
        <Link
          href={`/blog/${slug}`}
          className="cursor-pointer text-lg text-indigo-600 font-semibold"
        >
          Read more..
        </Link>
      </div>
    </div>
  );
};
