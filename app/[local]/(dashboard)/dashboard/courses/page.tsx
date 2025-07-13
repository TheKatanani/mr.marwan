'use client';

import { useEffect, useState } from 'react';
import { Course } from '@/types/course'; 
import Link from 'next/link';
import { deleteCourse, getAllCourses } from '@/app/lib/cource';
import Image from 'next/image';

export default function CoursesDashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCourses().then((data) => {
      setCourses(data);
      setLoading(false);
    });
  }, []);
  
  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this course?')) {
      await deleteCourse(id);
      setCourses((prev) => prev.filter((course) => course.id !== id));
    }
  };
  
  if (loading) return <p>Loading courses...</p>;
  console.log(courses)

  return (
    <div className="p-6 text-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Courses</h1>
        <Link
          href="/dashboard/courses/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Course
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="border p-4 rounded shadow-sm">
            <Image src={course.card.image} width={200} height={200} alt="course image" className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-lg font-semibold mb-1">{course.card.title.en}</h2>
            <p className="text-sm text-gray-600 mb-2">{course.card.short_description.en}</p>
            <p className="text-sm font-medium text-blue-600 mb-4">{course.card.duration.en}</p>
            <p className="text-sm font-medium text-blue-600 mb-4">is main:{course.isMain}</p>
            <div className="flex justify-between">
              <Link
                href={`/dashboard/courses/edit/${course.id}`}
                className="text-sm text-blue-600 hover:underline"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(course.id!)}
                className="text-sm text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
