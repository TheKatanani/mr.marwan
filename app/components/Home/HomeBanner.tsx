import { getTranslations } from "next-intl/server";

export default async function HomeBanner() {
  const t = await getTranslations("HomeBanner");

  const stats = [
    { value: "98%", label: t("studentSatisfaction") },
    { value: "15", label: t("certifiedInstructors") },
    { value: "12", label: t("aircraftFleet") },
    { value: "2000+", label: t("trainedStudents") },
  ];

  return (
    <section className="relative bg-gradient-to-l from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] text-white">
      <div className="bg-[#2563EB] py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-yellow-300">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-white mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
