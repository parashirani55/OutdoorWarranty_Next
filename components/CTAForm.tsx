export default function CTAForm() {
  return (
    <section id="quote" className="py-20 bg-blue-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Get a Free Quote</h2>
        <form className="grid gap-4">
          <input type="text" placeholder="Full Name" className="p-3 rounded text-gray-900" required />
          <input type="email" placeholder="Email Address" className="p-3 rounded text-gray-900" required />
          <input type="text" placeholder="RV Make / Model" className="p-3 rounded text-gray-900" required />
          <button type="submit" className="bg-white text-blue-700 font-semibold py-3 rounded-lg hover:bg-gray-100">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
