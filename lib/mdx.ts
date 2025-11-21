import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

// Path to /content/blog folder
const blogDirectory = path.join(process.cwd(), "content/blog");

// Get all slugs (file names)
export function getBlogSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) return [];
  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

// Read raw blog file
export function getBlogBySlug(slug: string) {
  const fullPath = path.join(blogDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Blog file not found: ${slug}.md`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    metadata: {
      title: data.title || "Untitled",
      date: data.date || null,
      excerpt: data.excerpt || "",
      coverImage: data.coverImage || null,
      slug,
      ...data,
    },
    content,
  };
}

// Compile to MDX-ready format for rendering
export async function getBlogContent(slug: string) {
  const { metadata, content } = getBlogBySlug(slug);

  const mdxContent = await compileMDX({
    source: content,
  });

  return { metadata, mdxContent };
}

// Return all blogs (sorted by date desc)
export function getAllBlogs() {
  const slugs = getBlogSlugs();

  const posts = slugs.map((slug) => {
    const { metadata } = getBlogBySlug(slug);
    return metadata;
  });

  return posts.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}