'use client';

export default function Error({ err, reset }: { err: Error; reset: () => void }) {
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-6">{err.message}</p>
      <button onClick={reset} className="px-6 py-3 bg-blue-600 text-white rounded-lg">
        Try Again
      </button>
    </div>
  );
}