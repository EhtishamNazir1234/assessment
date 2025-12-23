"use client";
import { useApp } from "@/context/appContext";

export default function Dashboard() {
  const { user, setUser } = useApp();

  if (!user) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Dashboard (Protected)</h1>
        <p className="text-gray-600 mb-6">
          Please log in to access the dashboard
        </p>
        <button
          onClick={() => setUser("Demo User")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Login as Demo User
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user}!</h1>
        <button
          onClick={() => setUser(null)}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Logout
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Enrolled Courses</h3>
          <p className="text-3xl font-bold text-blue-600">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Completed</h3>
          <p className="text-3xl font-bold text-green-600">1</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">In Progress</h3>
          <p className="text-3xl font-bold text-orange-600">2</p>
        </div>
      </div>
    </div>
  );
}
