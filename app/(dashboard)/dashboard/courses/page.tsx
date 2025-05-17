"use client";

import { useEffect, useState } from "react"; 
import { useCloudinaryUploader } from "@/app/hooks/useCloudinaryUploader";
import { Course } from "@/types/course";
import { addCourse, deleteCourse, fetchCourses, updateCourse } from "@/app/lib/cource";
import ImageCard from "@/app/components/ImageCard";

export default function CourseDashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [form, setForm] = useState<Course>({
    title: "",
    description: "",
    trainer: "",
    type: "free",
    cost: 0,
    btnText: "",
    btnLink: "",
    image: "",
  });
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { uploadMedia, uploading } = useCloudinaryUploader();

  useEffect(() => {
    const loadCourses = async () => {
      const data = await fetchCourses();
      setCourses(data);
    };
    loadCourses();
  }, []);

  const handleChange = <K extends keyof Course>(field: K, value: Course[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editId) {
        await updateCourse(editId, form);
      } else {
        await addCourse(form);
      }
      const data = await fetchCourses();
      setCourses(data);
      setForm({
        title: "",
        description: "",
        trainer: "",
        type: "free",
        cost: 0,
        btnText: "",
        btnLink: "",
        image: "",
      });
      setEditId(null);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (course: Course) => {
    setForm(course);
    setEditId(course.id!);
  };

  const handleDelete = async (id: string) => {
    await deleteCourse(id);
    const data = await fetchCourses();
    setCourses(data);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {editId ? "Edit Course" : "Add New Course"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Course Title"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className="w-full input"
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className="w-full input"
          rows={4}
        />
        <input
          type="text"
          placeholder="Trainer"
          value={form.trainer}
          onChange={(e) => handleChange("trainer", e.target.value)}
          className="w-full input"
        />
        <select
          value={form.type}
          onChange={(e) => handleChange("type", e.target.value as "free" | "paid")}
          className="w-full input"
        >
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>
        <input
          type="number"
          placeholder="Cost"
          value={form.cost}
          onChange={(e) => handleChange("cost", Number(e.target.value))}
          className="w-full input"
        />
        <input
          type="text"
          placeholder="Button Text"
          value={form.btnText}
          onChange={(e) => handleChange("btnText", e.target.value)}
          className="w-full input"
        />
        <input
          type="text"
          placeholder="Button Link"
          value={form.btnLink}
          onChange={(e) => handleChange("btnLink", e.target.value)}
          className="w-full input"
        />

        <ImageCard
          imageUrl={form.image}
          onUpload={async (event) => {
            const file = event.target.files?.[0];
            if (file) {
              const url = await uploadMedia(file);
              if (url) handleChange("image", url);
            }
          }}
          uploadId="courseImage"
          uploading={uploading}
          onDelete={() => handleChange("image", "")}
        />

        <button type="submit" disabled={loading || uploading} className="btn-primary w-full">
          {loading ? "Saving..." : editId ? "Update Course" : "Add Course"}
        </button>
      </form>

      {/* Course list */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Courses</h2>
        {courses.map((course) => (
          <div
            key={course.id}
            className="border p-4 rounded-lg mb-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.trainer}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(course)} className="btn-outline">Edit</button>
              <button onClick={() => handleDelete(course.id!)} className="btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}