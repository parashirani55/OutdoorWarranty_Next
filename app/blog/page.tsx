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
  const currentPage = Number(params.page) || 1;

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  const paginatedPosts = posts.slice(start, end);
  const totalPages = Math.ceil(posts.length / perPage);

  return (
    <>
      <div className="w-full relative">
        <div
          className="w-full z-50 flex flex-col md:flex-col-reverse bg-center bg-cover before:absolute before:inset-0 before:bg-black/30 before:z-0"
          style={{ backgroundImage: "url('/assets/rv-with-awning-pulled-up.png')" }}
        > <Header />
          <TopBar />
        </div>
      </div>

      <section className="bg-white p-8 max-w-[1400px] mx-auto min-h-[70vh]">
        <h1 className="text-3xl font-semibold mb-6">Blog</h1>

        <div className="grid md:grid-cols-3 gap-5">
          {paginatedPosts.map((post, index) => (
            <BlogCard key={post.slug + index} post={post} />
          ))}
        </div>

        <div className="flex gap-5 mt-8">
          {currentPage > 1 && (
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className="px-4 py-2 border rounded"
            >
              ← Previous
            </Link>
          )}

          {currentPage < totalPages && (
            <Link
              href={`/blog?page=${currentPage + 1}`}
              className="px-4 py-2 border rounded"
            >
              Next →
            </Link>
          )}
        </div>
      </section>

      <section className="bg-white">
        <Footer />
      </section>
    </>
  );
}