import HeroService from "@/app/components/HeroService";
import ServiceCard from "@/app/components/ServiceCard";
import { LocalizedField } from "@/types";
import { getLocale, getTranslations } from "next-intl/server";
export interface ServiceCardType {
  title: LocalizedField;
  excerpt: LocalizedField;
  imageUrl: string;
  link: string;
}
// Mocked or fetched from Firebase
const heroContent = {
  title: {
    en: "Explore Our Expert Services",
    ar: "اكتشف خدماتنا الاحترافية",
  },
  description: {
    en: "We offer specialized solutions tailored to your business needs.",
    ar: "نقدم حلولًا متخصصة مصممة وفقًا لاحتياجات عملك.",
  },
};

export const services: ServiceCardType[] = [
  {
    title: {
      en: "Social Media Marketing",
      ar: "التسويق عبر وسائل التواصل",
    },
    excerpt: {
      en: "Boost your restaurant's presence across social platforms with tailored strategies.",
      ar: "عزّز حضور مطعمك على وسائل التواصل بخطط تسويقية مخصصة.",
    },
    imageUrl: "/about.jpg",
    link: "/services/social-media-marketing",
  },
  {
    title: {
      en: "Food Photography",
      ar: "تصوير الطعام",
    },
    excerpt: {
      en: "Professional, mouth-watering photography that brings your dishes to life.",
      ar: "تصوير احترافي لأطباقك بطريقة تفتح الشهية وتلفت الأنظار.",
    },
    imageUrl: "/about.jpg",
    link: "/services/food-photography",
  },
  {
    title: {
      en: "Branding & Identity",
      ar: "الهوية البصرية والعلامة التجارية",
    },
    excerpt: {
      en: "Craft a unique brand that reflects your restaurant’s story and values.",
      ar: "أنشئ علامة تجارية مميزة تعكس قصة وقيم مطعمك.",
    },
    imageUrl: "/about.jpg",
    link: "/services/branding",
  },
  {
    title: {
      en: "Social Media Marketing",
      ar: "التسويق عبر وسائل التواصل",
    },
    excerpt: {
      en: "Boost your restaurant's presence across social platforms with tailored strategies.",
      ar: "عزّز حضور مطعمك على وسائل التواصل بخطط تسويقية مخصصة.",
    },
    imageUrl: "/about.jpg",
    link: "/services/social-media-marketing",
  },
  {
    title: {
      en: "Food Photography",
      ar: "تصوير الطعام",
    },
    excerpt: {
      en: "Professional, mouth-watering photography that brings your dishes to life.",
      ar: "تصوير احترافي لأطباقك بطريقة تفتح الشهية وتلفت الأنظار.",
    },
    imageUrl: "/about.jpg",
    link: "/services/food-photography",
  },
  {
    title: {
      en: "Branding & Identity",
      ar: "الهوية البصرية والعلامة التجارية",
    },
    excerpt: {
      en: "Craft a unique brand that reflects your restaurant’s story and values.",
      ar: "أنشئ علامة تجارية مميزة تعكس قصة وقيم مطعمك.",
    },
    imageUrl: "/about.jpg",
    link: "/services/branding",
  },
];

export default async function ServicesPage() {
  const locale = (await getLocale()) as keyof LocalizedField;

  return (
    <main className="flex flex-col gap-20">
      <HeroService data={heroContent} />

      <section className="container px-4 md:px-10 lg:px-20 py-10 grid gap-8 md:grid-cols-3 justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title[locale]}
            excerpt={service.excerpt[locale]}
            imageUrl={service.imageUrl}
            link={service.link}
          />
        ))}
      </section>
    </main>
  );
}
