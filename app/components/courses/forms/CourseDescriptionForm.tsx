"use client";

import { Course } from "@/types/course";

interface Props {
  form: Course;
  handleChange: (path: string, value: any) => void;
}

export default function CourseDescriptionForm({ form, handleChange }: Props) {
  return (
    <div className="space-y-4">
      <input
        className="w-full border px-4 py-2 rounded"
        placeholder="Description Title (EN)"
        value={form.course_description.title?.en}
        onChange={(e) =>
          handleChange("course_description.title.en", e.target.value)
        }
      />

      <input
        className="w-full border px-4 py-2 rounded"
        placeholder="Description Title (AR)"
        value={form.course_description.title?.ar}
        onChange={(e) =>
          handleChange("course_description.title.ar", e.target.value)
        }
      />

      <textarea
        className="w-full border px-4 py-2 rounded"
        placeholder="Description (EN)"
        value={form.course_description.description?.en}
        onChange={(e) =>
          handleChange("course_description.description.en", e.target.value)
        }
      />

      <textarea
        className="w-full border px-4 py-2 rounded"
        placeholder="Description (AR)"
        value={form.course_description.description?.ar}
        onChange={(e) =>
          handleChange("course_description.description.ar", e.target.value)
        }
      />

      <input
        className="w-full border px-4 py-2 rounded"
        placeholder="PDF URL"
        value={form.course_description.pdf_url}
        onChange={(e) =>
          handleChange("course_description.pdf_url", e.target.value)
        }
      />
    </div>
  );
}
