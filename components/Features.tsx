export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Why Choose Outdoor Warranty?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Comprehensive Coverage</h3>
            <p className="text-gray-600">We cover mechanical breakdowns, repairs, and more so you can travel worry-free.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Nationwide Service</h3>
            <p className="text-gray-600">Get assistance anywhere in the country — our network has you covered.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Fast Claims Process</h3>
            <p className="text-gray-600">Our team ensures quick turnaround times so you’re back on the road fast.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
