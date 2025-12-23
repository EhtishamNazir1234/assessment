import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">Welcome to LMS App</h1>
      <p className="text-xl text-gray-600 mb-8">Demo Assessment</p>
      <div className="flex flex-col gap-4 justify-center">
        <Link
          href="/react-features"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Explore React Features
        </Link>
        <Link
          href="/courses"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Browse Courses
        </Link>
      </div>
    </div>
  );
}
