import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/posts";

type Props = {
  post: BlogPost;
};

export default function BlogCard({ post }: Props) {
  return (
    <article className="bg-white overflow-auto">
      {/* Image */}
      <Link href={`/blog/${post.slug}`}>
        <div className="w-full h-52 relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover rounded-t-md"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="py-5">
        <h3 className="text-lg font-semibold leading-snug mb-2 text-[22px]">
          <Link href={`/blog/${post.slug}`} className="text-[#28cc1b] hover:text-[#045c1c]">
            {post.title}
          </Link>
        </h3>

        <p className="text-[#777777] mb-4">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="text-[#28cc1b] hover:text-[#045c1c] font-medium underline"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}