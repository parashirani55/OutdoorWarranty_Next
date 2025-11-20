import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const blogDirectory = path.join(process.cwd(), "content/blog");

export function getBlogSlugs() {
  return fs.readdirSync(blogDirectory).map((file) => file.replace(".md", ""));
}

export function getBlogBySlug(slug: string) {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return { metadata: data, content };
}

export async function getBlogContent(slug: string) {
  const { metadata, content } = getBlogBySlug(slug);

  const mdxContent = await compileMDX({
    source: content,
  });

  return { metadata, mdxContent };
}