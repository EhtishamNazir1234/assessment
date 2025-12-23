import { getCourses } from "@/lib/data";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function Courses() {
  const courses = await getCourses();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
      <p className="text-gray-600 mb-8">
        This page uses ISR (revalidates every 60 seconds)
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <a
            key={course.id}
            href={`/courses/${course.id}`}
            className="border p-6 rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-1">By {course.instructor}</p>
            <p className="text-sm text-gray-500">
              {course.duration} • {course.enrolled} enrolled
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
