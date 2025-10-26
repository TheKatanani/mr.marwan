"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Course } from "@/types/course";
import { addCourse } from "@/app/lib/cource";
import CourseForm from "@/app/components/courses/forms/CourseForm";
import { defaultCourse } from "../defoultState";

export default function CreateCoursePage() {
  const [form, setForm] = useState<Course>(defaultCourse);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      setSaving(true);
      if (form) {
        await addCourse(form);
      }
      router.push("/dashboard/courses");
    } catch {
      alert("Error saving course");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Create Course</h1>
      <CourseForm
        form={form}
        setForm={setForm}
        onSubmit={handleSubmit}
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        saving={saving}
      />
    </div>
  );
}
