import Header from "@/components/Header";
import BlogCard from "./components/BlogCard";
import { posts } from "@/data/posts";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;

  const perPage = 6;
  const currentPage = Number(params?.page) || 1;

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  const paginatedPosts = posts.slice(start, end);
  const totalPages = Math.ceil(posts.length / perPage);

  return (
    <>
      {/* Hero Header Section */}
      <div className="w-full relative">
        <div
          className="w-full z-50 flex flex-col md:flex-col-reverse bg-center bg-cover before:absolute before:inset-0 before:bg-black/40 before:z-0"
          style={{
            backgroundImage: "url('/assets/rv-with-awning-pulled-up.png')",
          }}
        >
          <Header />
          <TopBar />
        </div>
      </div>

      {/* Blog Grid Section */}
      <section className="bg-white p-8 max-w-[1400px] mx-auto min-h-[70vh]">
        <h1 className="text-[30px] lg:text-[50px] font-semibold mb-2 text-center leading-10 lg:leading-15 text-[#064517]">
          RV Adventures: <span className="block">Tips, Tricks, and</span> Lifestyle Insights
        </h1>
        <p className="mb-6 text-center text-[17px] lg:text-[22px] text-gray-500">
          From RV maintenance to road trip planning: Your go-to
          <span className="block">resource for all things RV</span>
        </p>

        {/* Grid Layout */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Elementor Style Pagination */}
        <nav
          className="flex items-center justify-center mt-10 flex-wrap text-[18px] font-semibold"
          aria-label="Pagination"
        >
          {/* Previous Button */}
          {currentPage > 1 ? (
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className="page-numbers prev px-2 py-1 text-[#01270B]"
            >
              <i className="bi bi-chevron-double-left text-[16px]"></i> Previous
            </Link>
          ) : (
            <span className="page-numbers prev px-2 py-1 text-[#01270B]">
              <i className="bi bi-chevron-double-left text-[16px]"></i> Previous
            </span>
          )}

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            // Pages shown: first, last, and current range
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <Link
                  key={page}
                  href={`/blog?page=${page}`}
                  aria-current={page === currentPage ? "page" : undefined}
                  className={`page-numbers px-2 py-1 rounded ${
                    page === currentPage
                      ? "current text-[#61CE70]"
                      : "text-gray-700"
                  }`}
                >
                  <span className="elementor-screen-only">Page </span>
                  {page}
                </Link>
              );
            }

            // Ellipsis between jumps
            if (page === currentPage - 2 || page === currentPage + 2) {
              return (
                <span key={page} className="page-numbers dots px-2 py-1">
                  …
                </span>
              );
            }

            return null;
          })}

          {/* Next Button */}
          {currentPage < totalPages ? (
            <Link
              href={`/blog?page=${currentPage + 1}`}
              className="page-numbers next px-2 py-1 text-gray-700"
            >
              Next <i className="bi bi-chevron-double-right text-[16px]"></i>
            </Link>
          ) : (
            <span className="page-numbers next px-2 py-1 text-gray-400">
              Next <i className="bi bi-chevron-double-right text-[16px]"></i>
            </span>
          )}
        </nav>
      </section>

      {/* Footer */}
      <section className="bg-white">
        <Footer />
      </section>
    </>
  );
}