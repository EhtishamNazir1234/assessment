import { courses, getCourseById } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export default async function CourseDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = await getCourseById(id);
  if (!course) notFound();
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="mb-4">
          <span className="text-gray-600">Instructor:</span>
          <span className="font-semibold ml-2">{course.instructor}</span>
        </div>
        <div className="mb-4">
          <span className="text-gray-600">Duration:</span>
          <span className="font-semibold ml-2">{course.duration}</span>
        </div>
        <div className="mb-6">
          <span className="text-gray-600">Students Enrolled:</span>
          <span className="font-semibold ml-2">
            {course.enrolled.toLocaleString()}
          </span>
        </div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Enroll Now
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        This page uses SSG (Static Site Generation)
      </p>
    </div>
  );
}
