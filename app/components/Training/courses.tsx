"use client";

import { useEffect, useState } from "react";
import Container from "../Container";
import Title from "../Titile";
import CourseCard from "../CourseCard";
import { getTranslations } from "next-intl/server";
import { getAllCourses } from "@/app/lib/cource";
import { Course } from "@/types/course";

interface Props {
  standerdId: string;
}

export default function CoursesTraining({ standerdId }: Props) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      const allCourses = await getAllCourses();
      const filtered = allCourses.filter(c => c.standardId === standerdId);
      setCourses(filtered);
    };
    fetchCourses();
  }, [standerdId]);

  const displayedCourses = showAll ? courses : courses.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50 min-h-screen text-gray-800">
      <Container>
        <div className="w-full md:w-2/3 mx-auto text-center mb-12">
          <Title subTitle="Explore Courses">Courses Aligned with This Standard</Title>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedCourses.map(c => (
            <CourseCard key={c.id} id={c.id!} card={c.card} />
          ))}
        </div>

        {courses.length > 3 && (
          <div className="text-center mt-8">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              onClick={() => setShowAll(prev => !prev)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
