'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getCourseById, updateCourse } from '@/app/lib/cource';
import { Course } from '@/types/course';
import CourseForm from '@/app/components/courses/forms/CourseForm'; 
import { defaultCourse } from '../../defoultState';

export default function EditCoursePage() {
  const params = useParams();
  const id = params?.id as string;

  const [form, setForm] = useState<Course>(defaultCourse);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;
    const fetchCourse = async () => {
      const data = await getCourseById(id);
      if (data) {
        setForm(data);
      } else {
        alert('Course not found');
        router.push('/dashboard/courses');
      }
    };
    fetchCourse();
  }, [id, router]);

  const handleSubmit = async (updatedForm: Course) => {
    try {
      setSaving(true);
      await updateCourse(id, updatedForm);
      router.push('/dashboard/courses');
    } catch (err) {
      console.error(err);
      alert('Error updating course');
    } finally {
      setSaving(false);
    }
  };

  if (!form) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Course</h1>
      <CourseForm
        form={form}
        setForm={setForm}
        onSubmit={handleSubmit}
        saving={saving}
        submitLabel="Update Course"
      />
    </div>
  );
}
