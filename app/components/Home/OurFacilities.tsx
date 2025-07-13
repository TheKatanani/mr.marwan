import Container from "../Container";
import Title from "../Titile";
import OurFacilitiesCard from "../OurFacilitiesCard";
import { fetchFacilities } from "@/app/lib/facilities";
import { getLocale, getTranslations } from "next-intl/server";
import { LocalizedField } from "@/types";

export default async function OurFacilities() {
  const t = await getTranslations("ourFacilities");
  const locale =await getLocale();
  const facilities = await fetchFacilities();

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <Title>{t("heading")}</Title>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map(f => (
            <OurFacilitiesCard
              key={f.id}
              title={f.title[locale as keyof LocalizedField]}
              description={f.description[locale as keyof LocalizedField]}
              image={f.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
