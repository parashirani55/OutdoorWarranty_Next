"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* PAGE TITLE */}
      <h1 className="text-[40px] text-[#064517] mb-10">
        Contact
      </h1>

      {/* SUBTITLE */}
      <h3 className="text-[28px] text-center text-[#064517] mb-14">
        We'd Love To Hear From You
      </h3>

      {/* TWO COLUMN LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE — FORM */}
        <div>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns, you can send us a message here and we’ll get back to you asap!
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            method="post"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              value={formData.name}
              className="border border-gray-300 rounded-md p-3 placeholder-gray-500"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              value={formData.subject}
              className="border border-gray-300 rounded-md p-3 placeholder-gray-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              value={formData.email}
              className="border border-gray-300 rounded-md p-3 placeholder-gray-500"
              required
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              onChange={handleChange}
              value={formData.message}
              className="border border-gray-300 rounded-md p-3 placeholder-gray-500"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-[#59d24f] text-white  px-8 py-2 rounded-md w-fit"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT SIDE — CONTACT DETAILS */}
        <div>
          <h3 className="text-2xl  text-[#045c1c] mb-4">
            Get in touch
          </h3>

          <div className="space-y-5">

            {/* PHONE */}
            <p className="flex items-center gap-2 text-gray-900">
              <i className="bi bi-telephone-fill text-[#045c1c]"></i>{" "}
              <Link
                href="tel:5745056246"
                className="hover:text-[#045c1c] font-medium"
              >
                574-505-6246
              </Link>
            </p>

            {/* EMAIL */}
            <p className="flex items-center gap-2 text-gray-900">
              <i className="bi bi-envelope-fill text-[#045c1c]"></i>{" "}
              <Link
                href="mailto:info@example.com"
                className="hover:text-[#045c1c] font-medium"
              >
                Email Us
              </Link>
            </p>

            {/* ADDRESS */}
            <p className="flex items-start gap-2 text-gray-900">
              <i className="bi bi-geo-alt-fill text-[#045c1c]"></i>{" "}
              <span>
                223 South Main St. Suite 21
                Elkhart, IN 46514
              </span>
            </p>

            {/* MAP */}
            <iframe
              src="https://www.google.com/maps?q=223+South+Main+St.+Suite+21+Elkhart,+IN+46514&output=embed"
              width="100%"
              height="170"
              className="rounded-lg border border-gray-300"
              loading="lazy"
            ></iframe>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 text-2xl mt-4">
              <Link href="#" className="text-[16px] text-white bg-[#1877f2] w-[40px] h-[40px] rounded-lg flex justify-center items-center"><i className="bi bi-facebook"></i></Link>
              <Link href="#" className="text-[16px] text-white bg-sky-500 w-[40px] h-[40px] rounded-lg flex justify-center items-center"><i className="bi bi-twitter"></i></Link>
              <Link href="#" className="text-[16px] text-white bg-[#0077b5] w-[40px] h-[40px] rounded-lg flex justify-center items-center"><i className="bi bi-linkedin"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
