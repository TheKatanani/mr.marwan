import AboutTraining from "@/app/components/Training/about";
import CoursesTraining from "@/app/components/Training/courses";
import HeroTraining from "@/app/components/Training/hero";
import CurriculumSection from "@/app/components/Training/CurriculumSection";
import CTABar from "@/app/components/CTABar";
import { getStandardById } from "@/app/lib/standards";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const standard = await getStandardById(id);

  return (
    <main>
      {standard?.hero && <HeroTraining data={standard.hero} />}
      {standard?.about && <AboutTraining data={standard.about} />}
      {standard?.id && <CoursesTraining standerdId={standard.id} />}
      {standard?.structure && <CurriculumSection data={standard.structure} />}
      {/* <InstructorsSection /> don't remove this */}
      <CTABar />
    </main>
  );
}

export default Page;
