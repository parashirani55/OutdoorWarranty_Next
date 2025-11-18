"use client";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ross Edmunds",
      img: "/section_img/ross_edmonds-fb.jpg",
      platform: "facebook",
      review:
        "As someone who loves to hit the road in my RV, having a reliable warranty is essential for peace of mind. That's why I'm so happy to have found Outdoor Warranty. Anita was incredibly helpful in walking me through all my options, and their cost-effective warranty is exactly what I needed to feel safe on my next big trip.",
    }, 
    
    {
      name: "Dalia Johnson",
      img: "/section_img/dalia.png",
      platform: "google",
      review:
        "The team at Outdoor Warranty was able to help me navigate the complicated world of extended warranty coverage for my Newmar Bay Star Sport. Their service was prompt, helpful, and knowledgeable.",
    },
    {
      name: "Marta Morgan",
      img: "/section_img/marta.png",
      platform: "google",
      review:
        "I had a problem with my RV's slide-out, and Outdoor Warranty took care of everything. The repair was done quickly and efficiently, and I didn't have to worry about a thing.",
    },
    {
      name: "Keith Osborne",
      img: "/section_img/keith.png",
      platform: "google",
      review:
        "Overall, I would definitely recommend Outdoor Warranty to anyone looking for an extended warranty for their RV. The peace of mind it provides is worth every penny.",
    },
    {
      name: "Camily Vicente Antonio",
      img: "/section_img/C.png",
      platform: "google",
      review:
        "I highly recommend Outdoor Warranty for anyone in need of extended warranty coverage for their RV. Their team was friendly, professional, and able to find me a plan that met all of my needs.",
    },
    
    {
      name: "Jennifer L",
      img: "/section_img/jenniferL.jpg",
      platform: "facebook",
      review:
        "When it comes to dealing with insurance claims, I always expect the worst. But the claims process with OutdoorWarranty.com was surprisingly easy. I was able to handle everything without any headaches, and now I feel confident recommending their services to all my friends.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto text-center">
        {/* === Section Heading === */}
        <h4 className="text-[#0daa38] text-[18px] sm:text-[20px] font-semibold tracking-wide mb-2 text-center">
          EVEN MORE TESTIMONIALS
        </h4>
        <h2 className="text-[#064517] text-[26px] sm:text-[32px] md:text-[38px] lg:text-[40px] font-semibold leading-snug mb-4 text-center">
          Join Hundreds of Satisfied Worry-Free{" "}
          <span className="block">Adventurers Today!</span>
        </h2>

        {/* === Star Rating === */}
        <div className="flex justify-center gap-1 text-[#f8b400] text-[22px] mb-4">
          {[...Array(5)].map((_, i) => (
            <i key={i} className="bi bi-star-fill"></i>
          ))}
        </div>

        {/* === Description === */}
        <p className="text-[15px] sm:text-[16px] text-[#09360c] max-w-[800px] mx-auto mb-10">
          Outdoor Warranty is committed to providing you with exceptional value and service. We’re
          confident that you’ll be satisfied with our RV extended service contracts, just like our
          beloved customers below!
        </p>

        {/* === Review Platform Logos === */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-14">
          <img
            src="/section_img/facebook-reviews-1.png"
            alt="Facebook Reviews"
            className="w-[120px] sm:w-[100px] md:w-[89px]"
          />
          <img
            src="/section_img/google-300x105.png"
            alt="Google Reviews"
            className="w-[150px] sm:w-[170px] md:w-[146px]"
          />
        </div>

        {/* === Testimonials (Masonry Layout) === */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-10 mb-10">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="break-inside-avoid border border-gray-300 rounded-[7px] bg-white shadow-sm p-4 text-left hover:shadow-md transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-[36px] h-[36px] rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[16px] text-[#064517]">{item.name}</h4>
                  <div className="flex gap-1 text-[#f8b400] text-[14px]">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                </div>
                <div className="ml-auto">
                  {item.platform === "google" ? (
                    <div className="bg-[#DB4437] text-white w-[25px] h-[25px] flex items-center justify-center rounded-full">
                      <i className="bi bi-google text-[16px]"></i>
                    </div>
                  ) : (
                    <div className="bg-[#1877F2] text-white w-[25px] h-[25px] flex items-center justify-center rounded-full">
                      <i className="bi bi-facebook text-[16px]"></i>
                    </div>
                  )}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-[14px] sm:text-[15px] text-[#09360c] leading-relaxed">
                {item.review}
              </p>
            </div>
          ))}
        </div>

        {/* === CTA Section === */}
        <p className="text-[16px] sm:text-[18px] text-[#064517] mb-6 italic">
          Get the coverage you need, the service you deserve – only from OutdoorWarranty.com
        </p>

        <a
          href="tel:269-431-6864"
          className="inline-flex items-center gap-2 mt-10 hover:border-2 border-[#7CE173] bg-[#24b619] hover:bg-[#28cc1b] text-white px-8 py-5 rounded-full font-medium text-[15px] sm:text-[16px] lg:text-[22px] shadow-[0_5px_20px_rgba(40,204,27,0.4)] transition-all duration-300"
        >
          <i className="bi bi-telephone-fill text-[22px]"></i>
          Call 269-431-6864 Now!
        </a>

        <p className="mt-6 text-[#09360c] italic text-[15px] sm:text-[16px]">
          Your Satisfaction is Guaranteed. 🤗
        </p>
      </div>
    </section>
  );
}