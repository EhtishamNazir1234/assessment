"use client";

import { useRef, useState } from "react";

export default function Counter() {
  const [todos, setTodos] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (inputRef.current?.value.trim()) {
      setTodos([...todos, inputRef.current.value]);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };
  return (
    <div className="border p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Todo List Using useRef</h3>
      <div className="flex gap-2 mb-4">
        <input
          ref={inputRef}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Add a task..."
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-gray-50 rounded"
          >
            <span>{todo}</span>
            <button
              onClick={() => setTodos(todos.filter((_, id) => index !== id))}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
