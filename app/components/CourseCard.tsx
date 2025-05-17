/** @format */

import { Course } from "@/types/course";
import Image from "next/image";
import Link from "next/link";
const CourseCard = (course: Course) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col w-full max-w-sm mx-auto">
      {/* Image */}
      <Link href={`/courses/${course.id}`} className="w-full">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={course.image || "/Rectangle.png"}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 text-start space-y-2">
        <h3 className="text-lg font-semibold text-black">{course.title}</h3>
        <p className="text-sm text-gray-500">{course.trainer}</p>

        {course.type === "free" ? (
          <p className="text-lg text-black font-bold">مجاني</p>
        ) : (
          <div className="flex justify-between items-center">
            <Link href={course.btnLink} target="_blank">
              <button className="btn-primary flex-1">
                {course.btnText || "اشترك الآن"}
              </button>
            </Link>
            <span className="text-4xl font-semibold text-gray-800">
              {course.cost}$
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
