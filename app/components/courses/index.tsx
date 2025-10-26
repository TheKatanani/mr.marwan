"use client";

import { useEffect, useState } from "react";
import Container from "../Container";
import Title from "../Titile";
import CourseCard from "../CourseCard";
import { useTranslations } from "next-intl";
import { getAllCourses } from "@/app/lib/cource";
import { Course } from "@/types/course";
export default function Courses() {
  const t = useTranslations("mainCourses");
  const [showAll, setShowAll] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [visibleCourses, setVisibleCourses] = useState<Course[]>([]);

  useEffect(() => {
    (async () => {
      const courses = await getAllCourses();
      setCourses(courses);
    })();
  }, []);
  useEffect(() => { 
    const updateVisibleCourses = () => {
      if (courses) {
        setVisibleCourses(showAll ? courses : courses.slice(0, 3));
      } else {
        setVisibleCourses([]);
      }
    };
    updateVisibleCourses();
  }, [courses, showAll]); 
  return (
    <section className="py-10 bg-white text-gray-800">
      <Container>
        <div className="w-full md:w-2/3 mx-auto text-center mb-12">
          <Title subTitle={t("subTitle")}>{t("title")}</Title>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCourses?.map((course) => (
            <CourseCard key={course.id} id={course.id!} card={course.card} />
          ))}
        </div>

        {visibleCourses.length > 3 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {showAll
                ? t("showLess") || "Show Less"
                : t("showMore") || "Show More"}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
