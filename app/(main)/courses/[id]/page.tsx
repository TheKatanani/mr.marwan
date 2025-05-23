/** @format */

import Title from "@/app/components/Titile";
import { fetchCourse } from "@/app/lib/cource";
import Image from "next/image";
import Link from "next/link";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const courses = await fetchCourse(id);
  return (
    <section
      className="bg-white py-12  px-6 lg:px-8  text-gray-800 min-h-screen grid place-content-center"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text and List Section */}
        <div>
          <Title className="text-lg sm:text-xl pb-8 sm:pb-10">
            {courses?.title}
          </Title>

          <p>{courses?.description}</p>
          <div className="flex items-center gap-2   mt-8 sm:mt-10 ">
            {courses?.btnLink ? (
              <Link href={courses?.btnLink} target="_blank">
                <button className="btn-primary   sm:text-base">
                  {courses?.btnText || "اشترك الآن"}
                </button>
              </Link>
            ) : (
              <button className="btn-primary mt-8 sm:mt-10 text-sm sm:text-base">
                {courses?.btnText || "اشترك الآن"}
              </button>
            )}
            {courses?.cost && courses.cost > 0 ? (
              <span className="text-4xl">{courses?.cost}$</span>
            ):''}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
          {/* Green background layer */}
          <div className="absolute bg-blue-200 rounded-[2rem] -top-5 -left-5 right-2.5 bottom-2.5 z-0 rounded-tr-none rounded-bl-none" />

          {/* Image wrapper with matching clipping */}
          <div className="overflow-hidden rounded-[1.8rem] rounded-tr-none rounded-bl-none relative z-10">
            <Image
              src={courses?.image || "/about.jpg"}
              alt={courses?.title || "صورة الدورة "}
              width={400}
              height={400}
              className="w-full h-[400] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
