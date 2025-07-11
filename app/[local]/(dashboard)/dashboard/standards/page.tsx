"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteStandard, getStandards } from "@/app/lib/standards";

export default function StandardsPage() {
  const [standards, setStandards] = useState<any[]>([]);

  useEffect(() => {
    const fetchStandards = async () => {
      const data = await getStandards();
      setStandards(data);
    };
    fetchStandards();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this standard?"
    );
    if (!confirmDelete) return;

    try {
      await deleteStandard(id);
      setStandards((prev) => prev.filter((s) => s.id !== id));
    } catch (error) {
      console.error("Error deleting standard:", error);
      alert("Failed to delete.");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Standards</h1>
      <Link
        href="/dashboard/standards/new"
        className="mb-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        + New Standard
      </Link>
      <ul className="space-y-4">
        {standards.map((standard) => (
          <li
            key={standard.id}
            className="border p-4 rounded shadow hover:shadow-lg flex justify-between items-center text-gray-800"
          >
            <div>
              <h2 className="text-xl font-semibold">{standard.name.en}</h2>
              <p className="text-gray-600">{standard.short_description.en}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Link
                href={`/dashboard/standards/edit/${standard.id}`}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(standard.id!)}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
