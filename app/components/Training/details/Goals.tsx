import { LocalizedField } from "@/types";
import { getLocale } from "next-intl/server";

export default async function Goals({ data }: { data: LocalizedField[] }) {
  const locale = (await getLocale()) as keyof LocalizedField;

  return (
    <section className="py-8 bg-white">
      <div className="container w-4xl mx-auto px-2 md:px-10 py-10 text-start space-y-6">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Course Goals
        </h2>
        <ul className="list-none p-0">
          {data.map((goal, idx) => (
            <li
              key={idx}
              className="flex items-start mb-3 text-gray-700 text-base"
            >
              <span className="mt-1 mr-3 flex-shrink-0 w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
              <span>{goal[locale]}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
