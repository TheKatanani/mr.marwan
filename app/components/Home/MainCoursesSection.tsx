import Container from "../Container";
import Title from "../Titile";
import CourseCard from "../CourseCard";
import { getTranslations } from "next-intl/server";
import { getAllCourses } from "@/app/lib/cource";

export default async function MainCoursesSection() {
  const t = await getTranslations("mainCourses");
  const courses = await getAllCourses();
  // to stop loop throw all the courses, we will show only 3 main courses ans stop searching
  const visibleCourses = [];
  for (const c of courses) {
    if (c.isMain) visibleCourses.push(c);
    if (visibleCourses.length === 3) break;
  }
  // const visibleCourses = courses.filter((c) => c.isMain).slice(0, 3);
  return (
    <section className="py-16 bg-gray-50 min-h-screen text-gray-800">
      <Container>
        <div className="w-full md:w-2/3 mx-auto text-center mb-12">
          <Title subTitle={t("subTitle")}>{t("title")}</Title>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCourses.map((c) => (
            <CourseCard key={c.id} id={c.id!} card={c.card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
