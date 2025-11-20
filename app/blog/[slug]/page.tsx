import { posts } from "@/data/posts";
import Link from "next/link";

export default async function BlogSingle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ⬅️ NEW FIX

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="p-8">Post not found</div>;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <p className="text-gray-700 leading-relaxed">{post.content}</p>

      <Link
        href="/blog"
        className="inline-block mt-6 text-blue-600 hover:underline"
      >
        ← Back to Blog
      </Link>
    </div>
  );
}