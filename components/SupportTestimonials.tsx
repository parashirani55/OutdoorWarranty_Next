"use client";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function SupportTestimonials() {
  const testimonials = [
    {
      name: "Emma Sandusky",
      img: "/section_img/emma-sandusky.jpg",
      review: `"I never thought I'd say this about a warranty company, but my experience with OutdoorWarranty.com was actually enjoyable! They were so friendly and helpful throughout the entire process, and I was able to get my RV back on the road in no time. If you're in need of a warranty, I highly recommend giving these guys a try."`,
      title: '"...was actually enjoyable..."',
    },
    {
      name: "Ryan Sanders",
      img: "/section_img/ryan_sanders.jpg",
      review: `"I don't usually leave reviews, but I was so impressed with OutdoorWarranty.com that I just had to share my experience. The claims process was incredibly easy, and the fact that I was able to talk to a real person instead of a machine was a huge plus. Overall, I'm really glad I went with this company for my RV warranty needs."`,
      title:
        '"...the fact that I was able to talk to a real person instead of a machine was a huge plus..."',
    },
    {
      name: "Luan Justino Vicente De Lima",
      img: "/section_img/luandelima.png",
      review: `"I was hesitant to purchase an extended warranty for my RV, but Outdoor Warranty made the process easy and stress-free. Anita was top-notch and really knows her stuff."`,
      title: '"...made the process easy and stress-free..."',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9fff9] text-center relative">
      {/* ====== Heading Section ====== */}
      <div className="max-w-[900px] mx-auto mb-16">
        <h4 className="text-[#0daa38] text-[18px] sm:text-[20px] font-semibold mb-2 uppercase">
          Need help? We’ve Got Your Back — And Your RV!
        </h4>
        <h2 className="text-[#064517] text-[24px] sm:text-[32px] md:text-[38px] font-semibold leading-snug mb-3">
          Affordable Extended RV{" "}
          <span className="block">Warranties Backed By</span> Exceptional Customer Support
        </h2>
        <p className="text-[#09360c] text-[15px] sm:text-[16px] leading-relaxed max-w-[700px] mx-auto">
          Smart RV owners choose us not only because of our prices but also because of our top-notch
          support.
        </p>

        {/* Star rating */}
        <div className="flex justify-center gap-1 text-[#f8b400] text-[22px] mt-3">
          {[...Array(5)].map((_, i) => (
            <i key={i} className="bi bi-star-fill"></i>
          ))}
        </div>
      </div>

      {/* ====== Testimonials Section ====== */}
      <div className="flex flex-wrap justify-center items-start gap-8 max-w-[1400px] mx-auto">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-[14px] shadow-lg p-6 text-left w-full sm:w-[47%] lg:w-[31%] flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-[2px]"
          >
            <div>
              <p className="text-[#252d25] text-[15px] font-semibold mb-2 leading-snug text-center">
                {item.title}
              </p>
              <p className="text-[#09360c] text-[14px] leading-relaxed text-center">
                {item.review}
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <img
                src={item.img}
                alt={item.name}
                className={`rounded-full object-cover ${
                  i === 2 ? "w-[27px] h-[27px]" : "w-[60px] h-[60px]"
                }`}
              />
              <div>
                <h4 className="text-[15px] sm:text-[16px] text-[#064517] font-medium">
                  {item.name}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ====== Down Arrow ====== */}
      <div className="flex justify-center mt-16">
        
          <i className="bi bi-arrow-down text-[30px] !font-bold text-[#69727D]"></i>
        
      </div>
    </section>
  );
}