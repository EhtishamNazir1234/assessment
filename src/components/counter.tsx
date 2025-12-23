"use client";
import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [auto, setAuto] = useState(false);
  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(timer);
  }, [auto]);
  return (
    <div className="border p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Counter with useEffect</h3>
      <p className="text-4xl font-bold mb-4">{count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          -
        </button>
        <button
          onClick={() => setAuto(!auto)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          {auto ? "Stop Auto" : "Start Auto"}
        </button>
      </div>
    </div>
  );
}
