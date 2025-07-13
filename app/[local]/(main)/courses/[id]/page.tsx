import FAQ from "@/app/components/FAQ";
import CourseDescription from "@/app/components/Training/details/CourseDescription";
import CourseVideoPlayer from "@/app/components/Training/details/CourseVideoPlayer";
import Goals from "@/app/components/Training/details/Goals";
import Hero from "@/app/components/Training/details/Hero";
import InfoCardsSection from "@/app/components/Training/details/InfoCardsSection";
import LearnSection from "@/app/components/Training/details/LearnSection";
import TargetUsers from "@/app/components/Training/details/targetUsers";
import { getCourseById } from "@/app/lib/cource";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await getCourseById(id);
  return (
    <main>
      {course?.hero && <Hero data={course?.hero} />}
      {course?.features && <InfoCardsSection data={course?.features} />}
      {course?.course_description && (
        <CourseDescription data={course?.course_description} />
      )}
      {course?.video_section && (
        <CourseVideoPlayer data={course?.video_section} />
      )}
      {course?.what_you_will_learn && (
        <LearnSection data={course.what_you_will_learn} />
      )}
      {course?.goals && <Goals data={course.goals} />}
      {course?.target_users && <TargetUsers data={course.target_users} />}
      {course?.faqs && <FAQ faqs={course.faqs} />}
    </main>
  );
}

export default page;
