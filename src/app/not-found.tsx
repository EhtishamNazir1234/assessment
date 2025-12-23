import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg inline-block">
        Go Home
      </Link>
    </div>
  );
}