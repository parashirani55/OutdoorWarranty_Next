"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

export default function RichEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (html: string) => void;
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    immediatelyRender: false, // ⭐ Required for Next.js
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // When "value" changes, update editor content
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  if (!editor) return null;

  return (
    <div className="border rounded p-4 min-h-[200px]">
      <EditorContent editor={editor} />
    </div>
  );
}