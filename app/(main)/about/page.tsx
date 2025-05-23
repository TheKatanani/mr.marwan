/** @format */

import { fetchAboutPage } from "@/app/lib/about";
import CoreValuesSection from "../../components/CoreValuesSection";
import SectionTwo from "./SectionTwo";
import Hero from "./Hero";
import Loading from "../../loading";
export default async function AboutPage() {
  const aboutData = await fetchAboutPage();

  if (!aboutData) {
    return <Loading />;
  }

  return (
    <div>
      <Hero data={aboutData} />
      <SectionTwo data={aboutData} />
      <CoreValuesSection data={aboutData} />
    </div>
  );
}
