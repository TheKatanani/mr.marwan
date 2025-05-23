import { Suspense } from "react";
import HeroSkeleton from "../components/ui/HeroSkeleton";
import Hero from "../components/Home/Hero";
import FreeCoursesSkeleton from "../components/ui/FreeCoursesSkeleton";
import WhyAcademySkeleton from "../components/ui/WhyAcademySkeleton";
import MarketingEbookSkeleton from "../components/ui/MarketingEbookSkeleton";
import MarketingEbookSection from "../components/Home/MarketingEbookSection";
import FAQSkeleton from "../components/ui/FAQSkeleton";
import FAQ from "../components/FAQ";
import FreeCoursesSection from "../components/Home/FreeCoursesSection";
import WhyAcademy from "../components/Home/WhyAcademy";
import HomeBanner from "../components/Home/HomeBanner";
import BannerSkeleton from "../components/ui/bannerSkeleton";
import Partners from "../components/Partners";
import { getPartners } from "../lib/partnersOperations";

export default async function Home() {
  const partners = await getPartners();
  return (
    <main>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<WhyAcademySkeleton />}>
        <WhyAcademy />
      </Suspense>

      <Suspense fallback={<FreeCoursesSkeleton />}>
        <FreeCoursesSection />
      </Suspense>
      <Suspense fallback={<BannerSkeleton />}>
        <HomeBanner />
      </Suspense>
      <Suspense fallback={<MarketingEbookSkeleton />}>
        <MarketingEbookSection />
      </Suspense>

      <Suspense fallback={<FAQSkeleton />}>
        <FAQ />
      </Suspense>
      <Partners data={partners} />
    </main>
  );
}
