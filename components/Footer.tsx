export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center">
      <p>© {new Date().getFullYear()} Outdoor Warranty. All rights reserved.</p>
      <p className="mt-2">Made with ❤️ in Next.js</p>
    </footer>
  );
}
