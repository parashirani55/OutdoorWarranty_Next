"use client";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl shadow-sm">
            <p className="italic mb-4">“Outdoor Warranty saved me thousands on repairs. Highly recommend!”</p>
            <h4 className="font-semibold text-blue-700">– Sarah J.</h4>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <p className="italic mb-4">“Customer support is fantastic. They handled my claim in no time.”</p>
            <h4 className="font-semibold text-blue-700">– Mark R.</h4>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <p className="italic mb-4">“I feel secure knowing my RV is covered wherever I go.”</p>
            <h4 className="font-semibold text-blue-700">– Emily T.</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
