"use client";

import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";
import SaveBigRvWarrantyForm from "@/app/SaveBigRvWarrantyForm";

export default async function SinglePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await params here
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="p-10 text-center text-2xl">
        Post not found ❌
      </div>
    );
  }

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

      {/* Blog Content Section */}
      <section className="max-w-3xl mx-auto p-6 space-y-6 mt-10">
        
        <h1 className="text-[30px] lg:text-[45px] font-medium text-[#064517] lg:leading-14">{post.title}</h1>
        
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-lg mb-4"
        />
        
        <div className="prose max-w-none mb-10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* form */}
        <SaveBigRvWarrantyForm/>
      </section>

      {/* Footer */}
      <section className="bg-white">
        <Footer />
      </section>
    </>
  );
}