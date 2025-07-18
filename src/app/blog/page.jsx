"use client";
import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";

const fetchPosts = async (page) => {
  try {
    // First try the WordPress API directly
    const response = await fetch(
      `https://noida.gla.ac.in/wordpress/wp-json/wp/v2/posts?_embed&page=${page}&per_page=9`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0", 10);
    const postsPerPage = parseInt(
      response.headers.get("X-WP-Per-Page") || "9",
      10
    );
    const calculatedPages = Math.max(1, Math.ceil(totalPosts / postsPerPage));

    return { posts: data, totalPages: calculatedPages };
  } catch (error) {
    console.error("WordPress API failed, using fallback data:", error);

    // Fallback mock data
    const mockPosts = [
      {
        id: 1,
        date: "2024-01-15T10:00:00",
        slug: "welcome-to-gla-university",
        title: { rendered: "Welcome to GLA University" },
        excerpt: {
          rendered:
            "Discover excellence in education at GLA University, where innovation meets tradition. Join us for a transformative learning experience.",
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
        date: "2024-01-14T09:30:00",
        slug: "academic-excellence",
        title: { rendered: "Academic Excellence at GLA" },
        excerpt: {
          rendered:
            "Learn about our commitment to academic excellence and student success. Our faculty and programs are designed to nurture talent.",
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
        date: "2024-01-13T14:20:00",
        slug: "campus-life",
        title: { rendered: "Vibrant Campus Life" },
        excerpt: {
          rendered:
            "Experience the vibrant campus life and diverse community at GLA University. From clubs to sports, there's something for everyone.",
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
        date: "2024-01-12T11:15:00",
        slug: "placement-success-stories",
        title: { rendered: "Placement Success Stories 2024" },
        excerpt: {
          rendered:
            "Discover how our students are achieving remarkable career milestones with top companies across various industries.",
        },
        content: {
          rendered:
            "<p>Our students continue to achieve outstanding placement results with leading companies.</p>",
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
        date: "2024-01-11T16:45:00",
        slug: "innovation-and-research",
        title: { rendered: "Innovation & Research at GLA" },
        excerpt: {
          rendered:
            "Explore the cutting-edge research and innovation initiatives at GLA University. We're pioneering the future of education.",
        },
        content: {
          rendered:
            "<p>GLA University is at the forefront of research and innovation.</p>",
        },
        _embedded: {
          "wp:featuredmedia": [
            {
              source_url: "/programs/HeroAIML.png",
            },
          ],
        },
      },
      {
        id: 6,
        date: "2024-01-10T08:30:00",
        slug: "student-achievements",
        title: { rendered: "Student Achievements & Awards" },
        excerpt: {
          rendered:
            "Celebrating the outstanding achievements of our students across various disciplines and competitions worldwide.",
        },
        content: {
          rendered:
            "<p>Our students consistently excel in academics, sports, and cultural activities.</p>",
        },
        _embedded: {
          "wp:featuredmedia": [
            {
              source_url: "/programs/HeroMBA.png",
            },
          ],
        },
      },
      {
        id: 7,
        date: "2024-01-09T12:00:00",
        slug: "industry-partnerships",
        title: { rendered: "Industry Partnerships & Collaborations" },
        excerpt: {
          rendered:
            "Learn about our strategic partnerships with leading industry players and organizations worldwide.",
        },
        content: {
          rendered:
            "<p>GLA University maintains strong partnerships with industry leaders.</p>",
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
        id: 8,
        date: "2024-01-08T15:30:00",
        slug: "upcoming-events",
        title: { rendered: "Upcoming Events & Workshops" },
        excerpt: {
          rendered:
            "Stay updated with the latest events, workshops, and seminars at GLA University designed for student growth.",
        },
        content: {
          rendered:
            "<p>Join us for exciting events and workshops designed to enhance your learning.</p>",
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
        id: 9,
        date: "2024-01-07T10:45:00",
        slug: "alumni-success-network",
        title: { rendered: "Alumni Success Network" },
        excerpt: {
          rendered:
            "Connect with our successful alumni network and discover career opportunities across the globe.",
        },
        content: {
          rendered:
            "<p>Our alumni network spans across the globe, working in top companies.</p>",
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

    // Handle pagination for mock data
    const pageNum = parseInt(page);
    const perPage = 9;
    const startIndex = (pageNum - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedPosts = mockPosts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(mockPosts.length / perPage);

    return {
      posts: paginatedPosts,
      totalPages: totalPages,
      fallback: true,
    };
  }
};

const Blog = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1, // Only retry once before falling back
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

  if (error && !data) {
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
                📝 Showing sample blog posts - External blog service is
                temporarily unavailable
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
                  date={new Date(post.date).toLocaleDateString()}
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
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
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
          onError={(e) => {
            e.target.src = "https://pagedone.io/asset/uploads/1696244317.png";
          }}
        />
      </div>
      <div className="p-4 lg:p-6 h-full transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
        <span className="text-indigo-600 font-medium mb-3 block">{date}</span>
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
