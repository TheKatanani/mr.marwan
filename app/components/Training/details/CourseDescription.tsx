import { LocalizedField } from "@/types";
import type { CourseDescription } from "@/types/course";
import { getLocale } from "next-intl/server";
import Link from "next/link";

export default async function CourseDescription({
  data,
}: {
  data: CourseDescription;
}) {
  const locale = (await getLocale()) as keyof LocalizedField;

  return (
    <section className=" bg-[#f9fafb]">
      <div className="container w-4xl mx-auto px-2 md:px-10 py-10 text-start space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {data.title[locale]}
        </h2>
        <p className="text-gray-700">{data.description[locale]}</p>
      </div>
      <div className="flex justify-center py-6">
        <Link
          href="/book.pdf"
          download
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-200"
        >
          Download Course PDF
        </Link>
      </div>
    </section>
  );
}
