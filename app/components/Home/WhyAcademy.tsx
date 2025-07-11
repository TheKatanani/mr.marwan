import Container from "../Container";
import Title from "../Titile";
import FeatureCard from "../FeatureCard";
import { CertifiedIcon, ExpertIcon, ModernIcon } from "@/app/icons";
import { getTranslations } from "next-intl/server";

const WhyAcademy = async () => {
  const t = await getTranslations("whyAcademy");

  const features = [
    {
      icon: <CertifiedIcon />,
      title: t("features.0.title"),
      description: t("features.0.description"),
    },
    {
      icon: <ExpertIcon />,
      title: t("features.1.title"),
      description: t("features.1.description"),
    },
    {
      icon: <ModernIcon />,
      title: t("features.2.title"),
      description: t("features.2.description"),
    },
  ];

  return (
    <section
      id="about"
      className="w-full bg-white text-gray-900 py-16 flex items-center"
    >
      <Container className="w-full">
        <div className="w-full md:w-2/3 mx-auto text-center px-4 mb-12">
          <Title subTitle={t("subTitle")}>{t("title")}</Title>
        </div>
        <div className="w-full grid gap-8 md:grid-cols-3 text-center">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyAcademy;
