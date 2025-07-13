import Container from "../Container";
import Title from "../Titile";
import {
  EASAIcon,
  GCAAIcon,
  IATAIcon,
  ICAOIcon,
} from "@/app/icons";
import InternationalCard from "../internationalCard";
import { getLocale, getTranslations } from "next-intl/server";
import { getStandards } from "@/app/lib/standards";
import { LocalizedField } from "@/types";

const icons = [ICAOIcon, EASAIcon, IATAIcon, GCAAIcon];

const InternationalTraining = async () => {
  const t = await getTranslations("internationalTraining");
  const locale = await getLocale() as keyof LocalizedField;
  const standards = await getStandards();

  return (
    <section
      id="about"
      className="w-full bg-gray-50 text-gray-900 py-16 flex items-center"
    >
      <Container className="w-full">
        <div className="w-full md:w-2/3 mx-auto text-center px-4 mb-12">
          <Title subTitle={t("subTitle")}>{t("title")}</Title>
        </div>
        <div className="w-full grid gap-8 md:grid-cols-4 text-center">  
          {standards.slice(0, icons.length).map((standard, idx) => {
            const Icon = icons[idx];
            return (
              <InternationalCard
                key={idx}
                id={standard.id!}
                icon={<Icon />}
                title={standard.name[locale]}
                description={standard.short_description[locale]}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default InternationalTraining;
