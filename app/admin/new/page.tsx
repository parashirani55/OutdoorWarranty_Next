"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichEditor from "../new/RichEditor";

export default function NewPost() {
const router = useRouter();

const [title, setTitle] = useState("");
const [slug, setSlug] = useState("");
const [shortDesc, setShortDesc] = useState("");
const [content, setContent] = useState("");
const [image, setImage] = useState<string | null>(null);

// Image upload as base64
const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
const file = e.target.files?.[0];
if (!file) return;

const reader = new FileReader();
reader.onloadend = () => setImage(reader.result as string);
reader.readAsDataURL(file);

};

// Submit blog
async function submit() {
await fetch("/api/blog/new", {
method: "POST",
body: JSON.stringify({
title,
slug,
shortDesc,
image,
content,
date: new Date(),
}),
});


router.push("/blog");

}

return ( <div className="max-w-3xl mx-auto p-6 space-y-6"> <h1 className="text-3xl font-bold">Add New Blog</h1>


  {/* Title */}
  <div>
    <label className="block font-semibold mb-1">Title</label>
    <input
      className="border p-2 w-full rounded"
      placeholder="Blog Title"
      onChange={(e) => setTitle(e.target.value)}
    />
  </div>

  {/* Slug */}
  <div>
    <label className="block font-semibold mb-1">Slug</label>
    <input
      className="border p-2 w-full rounded"
      placeholder="unique-blog-url"
      onChange={(e) => setSlug(e.target.value)}
    />
  </div>

  {/* Short Description */}
  <div>
    <label className="block font-semibold mb-1">Short Description</label>
    <textarea
      className="border p-2 w-full rounded h-24 resize-none"
      placeholder="1-2 line summary about the blog"
      onChange={(e) => setShortDesc(e.target.value)}
    />
  </div>

  {/* Image Upload */}
  <div>
    <label className="block font-semibold mb-1">Featured Image</label>
    <input type="file" accept="image/*" onChange={handleImageUpload} />

    {image && (
      <img
        src={image}
        alt="Preview"
        className="mt-3 w-48 rounded border"
      />
    )}
  </div>

  {/* Rich Text Editor */}
  <div>
    <label className="block font-semibold mb-1">Blog Content</label>
    <RichEditor value={content} onChange={setContent} />
  </div>

  {/* Submit */}
  <button
    onClick={submit}
    className="bg-black text-white py-2 px-6 rounded"
  >
    Publish Blog
  </button>
</div>


);
}
