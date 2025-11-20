import Link from "next/link";
import { BlogPost } from "@/data/posts";

type Props = {
  post: BlogPost;
};

export default function BlogCard({ post }: Props) {
  return (
    <>
    <div className="border p-5 rounded-lg shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="text-blue-600 hover:underline font-medium cursor-pointer"
      >
        Read More →
      </Link>
    </div>
    </>
  );
}
