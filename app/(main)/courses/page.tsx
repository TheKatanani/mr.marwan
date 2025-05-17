import React from "react";
import Title from "../../components/Titile";
import { Metadata } from "next";
import CourseCard from "../../components/CourseCard";
import { fetchCourses } from "../../lib/cource";
export const metadata: Metadata = {
  title: "الدورات التدريبية",
  description: "تسويقكم نحو النجاح الرقمي",
  keywords: [
    "التسويق الإلكتروني",
    "خدمات التسويق",
    "تسويق رقمي",
    "استراتيجيات تسويقية",
  ],
};
const Courses = async () => {
  const courses = await fetchCourses();
  return (
    <main
      id="courses"
      className="bg-gradient-to-b pt-10 from-white to-blue-50 text-gray-800 "
    >
      <section className=" min-h-[90vh] bg-gradient-to-r from-white via-[#e3f9ff] to-white text-gray-800 py-16">
        <Title className="my-20 mx-auto w-fit">الدورات التدريبية</Title>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {courses.map((course, i) => (
              <CourseCard {...course} key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;
