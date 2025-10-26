import { getLocale } from "next-intl/server";
import LearnItem from "./LearnItem";
import { LearnType } from "@/types/course";
import { LocalizedField } from "@/types";

export default async function LearnSection({ data }: { data: LearnType[] }) {
  const locale = (await getLocale()) as keyof LocalizedField;
  return (
    <section className="bg-[#f9fafb] py-16 px-4 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">
        What You&apos;ll Learn
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((item, idx) => (
          <LearnItem
            key={idx}
            description={item.description[locale]}
            title={item.title[locale]}
          />
        ))}
      </div>
    </section>
  );
}
