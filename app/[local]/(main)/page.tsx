import { Suspense } from "react";
import HeroSkeleton from "@/app/components/ui/HeroSkeleton";
import Hero from "@/app/components/Home/Hero";
import FreeCoursesSkeleton from "@/app/components/ui/FreeCoursesSkeleton";
import WhyAcademySkeleton from "@/app/components/ui/WhyAcademySkeleton";
import FAQSkeleton from "@/app/components/ui/FAQSkeleton";
import FAQ from "@/app/components/FAQ";
import MainCoursesSection from "@/app/components/Home/MainCoursesSection";
import WhyAcademy from "@/app/components/Home/WhyAcademy";
import HomeBanner from "@/app/components/Home/HomeBanner";
import BannerSkeleton from "@/app/components/ui/bannerSkeleton";
import Partners from "@/app/components/Partners";
import { getPartners } from "@/app/lib/partnersOperations";
import ClientReviews from "@/app/components/clientReviews";
import TrustedByAuthorities from "@/app/components/Home/TrustedByAuthorities";
import InternationalTraining from "@/app/components/Home/InternationalTraining";
import OurFacilities from "@/app/components/Home/OurFacilities";
import Popup from "@/app/components/Popup";
import { getLocale } from "next-intl/server";
import { getReviews } from "@/app/lib/reviewsOperations";
import { LocalizedField } from "@/types";
import { getFAQs } from "@/app/lib/faq";
import { FAQType } from "@/types/FAQ";
import About from "@/app/components/Home/about";
import Milestones from "@/app/components/Home/Milestones";
import JoinCommunity from "@/app/components/Home/JoinCommunity";

export default async function Home() {
  const locale = await getLocale();
  const reviews = await getReviews(locale as keyof LocalizedField);
  const partners = await getPartners();
  const faqs: FAQType[] = await getFAQs(); 

  return (
    <main>
      <Popup />
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <About  />
      <Suspense fallback={<WhyAcademySkeleton />}>
        <WhyAcademy />
      </Suspense>
      <Suspense fallback={<FreeCoursesSkeleton />}>
        <MainCoursesSection />
      </Suspense>
      <Milestones />
      <InternationalTraining />
      <JoinCommunity />
      <OurFacilities />
      <Suspense fallback={<BannerSkeleton />}>
        <HomeBanner />
      </Suspense>
      <ClientReviews reviews={reviews} />
      <TrustedByAuthorities />
      <Suspense fallback={<FAQSkeleton />}>
        <FAQ faqs={faqs} />
      </Suspense>
      <Partners data={partners} />
    </main>
  );
}
