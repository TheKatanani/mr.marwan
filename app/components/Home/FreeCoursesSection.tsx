/** @format */

import React from "react";
import Link from "next/link";
import Container from "../Container";
import { fetchCourses } from "@/app/lib/cource";
import CourseCard from "../CourseCard";

const FreeCoursesSection = async () => {
  const courses = await fetchCourses();
  const displayedCourses = courses
    .filter((course) => course.type === "free")
    .slice(0, 3);

  return (
    <Container>
      <section className="py-16 text-gray-800 custom-bg min-h-screen" dir="rtl">
        <div className="flex justify-between items-center mb-10 px-2">
          <h2 className="text-3xl font-bold text-gray-800">
            الدورات التدريبية المجانية
          </h2>
          <Link
            href="/courses"
            className="text-pink-400 hover:underline text-lg"
          >
            &laquo;&laquo; عرض الكل.
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedCourses.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default FreeCoursesSection;
