"use client";

import { profileSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type ProfileData = z.infer<typeof profileSchema>;

export default function () {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = async (data: ProfileData) => {
    setLoading(true);
    setSuccess(false);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Data submitted", data);
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div className="border p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">
        Profile Form with Zod Validation
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("name")}
            placeholder="Name"
            className="w-full px-3 py-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full px-3 py-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <textarea
            {...register("bio")}
            placeholder="Bio (min 10 chars)"
            className="w-full px-3 py-2 border rounded"
            rows={3}
          />
          {errors.bio && (
            <p className="text-red-600 text-sm mt-1">{errors.bio.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {success && (
          <p className="text-green-600 text-center">
            Profile updated successfully!
          </p>
        )}
      </form>
    </div>
  );
}
