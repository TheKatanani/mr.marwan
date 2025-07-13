import { instructors } from "@/mock/data";
import InstructorCard from "../InstructorCard";

 

export default function InstructorsSection() {
  return (
    <section className="py-20 bg-gray-50 text-center text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">ICAO Certified Instructors</h2>
        <p className="text-gray-600 mb-10">
          Learn from internationally qualified aviation professionals
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {instructors.map((instructor, idx) => (
            <InstructorCard key={idx} {...instructor} />
          ))}
        </div>
      </div>
    </section>
  );
}
