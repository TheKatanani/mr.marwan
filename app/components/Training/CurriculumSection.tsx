import { Book, Plane } from "lucide-react";
import CurriculumCard from "../CurriculumCard";
import Title from "../Titile";
import { StructureSection } from "@/types/standard";

interface CurriculumSectionProps {
  data: {
    theory: StructureSection;
    practice: StructureSection;
  };
}

export default function CurriculumSection({ data }: CurriculumSectionProps) {
  return (
    <section className="py-10 bg-white text-center text-gray-800">
      <div className="container mx-auto px-4">
        <Title subTitle="Comprehensive training modules based on international standards">
          ICAO Curriculum Structure
        </Title>

        <div className="container px-4 md:px-20 py-10 flex flex-col md:flex-row justify-center gap-6">
          <CurriculumCard
            icon={<Book />}
            iconBgColor="bg-blue-100"
            title={data.theory.title}
            items={data.theory.items}
          />
          <CurriculumCard
            icon={<Plane/>}
            iconBgColor="bg-yellow-100"
            title={data.practice.title}
            items={data.practice.items}
          />
        </div>
      </div>
    </section>
  );
}
