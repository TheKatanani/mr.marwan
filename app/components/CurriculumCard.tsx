import { LocalizedField } from "@/types";
import { CheckCircle } from "lucide-react";
import { getLocale } from "next-intl/server";
import { ReactNode } from "react";

export type CurriculumItem = {
  title: LocalizedField;
  description: LocalizedField;
};

type Props = {
  icon: ReactNode;
  title: LocalizedField;
  items: CurriculumItem[];
  iconBgColor: string;
};

export default async function CurriculumCard({
  icon,
  title,
  items,
  iconBgColor,
}: Props) {
  const locale = (await getLocale()) as keyof LocalizedField;

  return (
    <div className="bg-[#F9FAFB] rounded-xl shadow-sm p-6 w-full md:w-[48%] text-start">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-full ${iconBgColor}`}>{icon}</div>
        <h3 className="text-lg font-semibold">{title[locale]}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="text-green-500 mt-1" size={18} />
            <div>
              <p className="font-medium">{item.title[locale]}</p>
              <p className="text-sm text-gray-500">
                {item.description[locale]}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
