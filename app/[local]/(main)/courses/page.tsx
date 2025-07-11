import Hero from "@/app/components/courses/hero";
import Courses from "@/app/components/courses";
import CTABar from "@/app/components/CTABar";
import TrustedByAuthorities from "@/app/components/Home/TrustedByAuthorities";

export default function Page() {
  return (
    <main>
      <Hero />
      <Courses />
      <TrustedByAuthorities />
      <CTABar />
    </main>
  );
}
