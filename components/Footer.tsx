"use client";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer className="bg-[#022d0e] text-white">
      {/* ===== Top Section ===== */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Column 1 - About */}
        <div>
          <h5 className="text-[20px] mb-4 tracking-wide">ABOUT US</h5>
          <p className="text-[14px] leading-relaxed text-[#cccccc] lg:pe-[4.5rem]">
            Outdoorwarranty.com is a top provider of warranties for RVs — also known as RV extended
            service contracts — and they’ve developed their product line after witnessing firsthand
            the markup that dealerships were getting for providing warranties that weren’t as
            comprehensive as what we provide.
          </p>
        </div>

        {/* Column 2 - Links */}
        <div>
          <h5 className="text-[20px] mb-4 tracking-wide">LINKS</h5>
          <ul className="space-y-2 text-[15px] text-gray-200">
            <li>
              <a
                href="https://outdoorwarranty.com/blog/"
                className="hover:text-[#28cc1b] transition"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://outdoorwarranty.com/frequently-asked-questions/"
                className="hover:text-[#28cc1b] transition"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="https://outdoorwarranty.com/privacy-policy/"
                className="hover:text-[#28cc1b] transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://outdoorwarranty.com/refund-policy/"
                className="hover:text-[#28cc1b] transition"
              >
                Refund Policy
              </a>
            </li>
            <li>
              <a
                href="https://outdoorwarranty.com/terms/"
                className="hover:text-[#28cc1b] transition"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h5 className="text-[20px] mb-4 tracking-wide">CONTACT</h5>
          <ul className="space-y-3 text-[14px] text-gray-200">
            <li>
              <a
                href="tel:574-505-6246"
                className="flex items-center gap-2 hover:text-[#28cc1b] transition"
              >
                <i className="bi bi-telephone-fill text-white"></i>
                <span>574-505-6246</span>
              </a>
            </li>
            <li>
              <a
                href="https://outdoorwarranty.com/contact/"
                className="flex items-center gap-2 hover:text-[#28cc1b] transition"
              >
                <i className="bi bi-envelope-fill text-white"></i>
                <span>Email Us</span>
              </a>
            </li>
            <li>
              <a
                href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjE0MzkiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
                className="flex items-start gap-2 hover:text-[#28cc1b] transition"
              >
                <i className="bi bi-geo-alt-fill text-white"></i>
                <span>223 South Main St. Suite 21 Elkhart, IN 46514</span>
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div
            className="flex items-center gap-3 mt-6 flex-wrap sm:flex-nowrap"
            role="list"
          >
            {/* Facebook */}
            <span role="listitem">
              <a
                href="https://www.facebook.com/OutdoorWarranty"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-8 h-8 rounded-sm bg-[#3b5998] hover:opacity-80 transition"
              >
                <i className="bi bi-facebook text-white text-[16px]"></i>
              </a>
            </span>

            {/* Twitter */}
            <span role="listitem">
              <a
                href="https://twitter.com/OutdoorWarranty"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex items-center justify-center w-8 h-8 rounded-sm bg-[#1DA1F2] hover:opacity-80 transition"
              >
                <i className="bi bi-twitter text-white text-[16px]"></i>
              </a>
            </span>

            {/* LinkedIn */}
            <span role="listitem">
              <a
                href="https://www.linkedin.com/company/outdoorwarranty-com/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-8 h-8 rounded-sm bg-[#0077B5] hover:opacity-80 transition"
              >
                <i className="bi bi-linkedin text-white text-[16px]"></i>
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="bg-white text-[#09360c]">
        <div className="max-w-[1400px] mx-auto px-6 py-6 text-center sm:text-left">
          <p className="italic text-[13px] leading-relaxed">
            Disclosure: Outdoor Warranty is a wholesale broker of RV service contracts. Website
            content is for informational purposes only. In case of any discrepancy, the written
            contract governs.{" "}
            <a
              href="https://outdoorwarranty.com/terms/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-[#28cc1b] hover:underline font-medium"
            >
              Read full Terms & Disclosures ›
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}